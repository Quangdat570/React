1. Optimistic Update là cái gì
- Khi bạn cập nhật trạng thái của mình một cách lạc quan trước khi thực hiện đột biến, có khả năng đột biến sẽ không thành công. Trong hầu hết các trường hợp thất bại này, bạn chỉ có thể kích hoạt quá trình tìm nạp lại các truy vấn lạc quan của mình để hoàn nguyên chúng về trạng thái máy chủ thực sự của chúng. Tuy nhiên, trong một số trường hợp, tìm nạp lại có thể không hoạt động chính xác và lỗi đột biến có thể đại diện cho một số loại sự cố máy chủ khiến bạn không thể tìm nạp lại. Trong trường hợp này, thay vào đó, bạn có thể chọn khôi phục bản cập nhật của mình.
- Để thực hiện việc này, tùy chọn trình xử lý onMutate của useMutation cho phép bạn trả về một giá trị mà sau này sẽ được chuyển cho cả trình xử lý onError và onSettled làm đối số cuối cùng. Trong hầu hết các trường hợp, cách hữu ích nhất là truyền một hàm khôi phục
## Updating a list of todos when adding a new todo
``` javaScript
const queryClient = useQueryClient()

useMutation({
  mutationFn: updateTodo,
  // When mutate is called:
  onMutate: async newTodo => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: ['todos'] })

    // Snapshot the previous value
    const previousTodos = queryClient.getQueryData(['todos'])

    // Optimistically update to the new value
    queryClient.setQueryData(['todos'], old => [...old, newTodo])

    // Return a context object with the snapshotted value
    return { previousTodos }
  },
  // If the mutation fails,
  // use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos)
  },
  // Always refetch after error or success:
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```

### Updating a single todo
``` javaScript
useMutation({
  mutationFn: updateTodo,
  // When mutate is called:
  onMutate: async newTodo => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: ['todos', newTodo.id] })

    // Snapshot the previous value
    const previousTodo = queryClient.getQueryData(['todos', newTodo.id])

    // Optimistically update to the new value
    queryClient.setQueryData(['todos', newTodo.id], newTodo)

    // Return a context with the previous and new todo
    return { previousTodo, newTodo }
  },
  // If the mutation fails, use the context we returned above
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(
      ['todos', context.newTodo.id],
      context.previousTodo
    )
  },
  // Always refetch after error or success:
  onSettled: newTodo => {
    queryClient.invalidateQueries({ queryKey: ['todos', newTodo.id] })
  },
})
```
- Bạn cũng có thể sử dụng hàm onSettled thay cho các trình xử lý onError và onSuccess riêng biệt nếu bạn muốn:
``` javaScript
useMutation({
  mutationFn: updateTodo,
  // ...
  onSettled: (newTodo, error, variables, context) => {
    if (error) {
      // do something
    }
  },
})
```

2. Pessimistic update
- Đồng thời bi quan là đối lập với đồng thời lạc quan. Nó giả định rằng xung đột giữa các giao dịch có thể xảy ra thường xuyên và chặn các bản ghi dữ liệu khi người dùng bắt đầu cập nhật. Vì vậy, những người dùng khác sẽ không thể cập nhật dữ liệu đó cho đến khi khóa được phát hành.
- Phương pháp tiếp cận đồng thời bi quan có ba chế độ khóa và người dùng sẽ có thể đọc bản ghi bị khóa dựa trên khóa được áp dụng
# Shared
- Cho phép người dùng khác đọc bản ghi dữ liệu, nhưng họ không thể cập nhật bản ghi đó.
# Exclusive
- Chỉ người dùng đã áp dụng khóa mới có thể đọc hoặc cập nhật bản ghi dữ liệu. Không có khóa nào khác có thể được áp dụng cho đến khi người dùng mở khóa
# Update
- Tương tự như cách tiếp cận độc quyền, chỉ người dùng đã áp dụng khóa mới có thể đọc hoặc cập nhật bản ghi dữ liệu. Tuy nhiên, người dùng có thể áp dụng khóa cập nhật khi người dùng khác đã có khóa dùng chung.
-  So với cách tiếp cận lạc quan, cách tiếp cận đồng thời bi quan không phải là một lựa chọn tốt cho các ứng dụng có yêu cầu mở rộng quy mô. Ngoài ra, nó giữ thời lượng khóa ở mức tối thiểu để tránh bất kỳ vấn đề hiệu suất nào
3. *Context*
- Context cung cấp phương pháp truyền data xuyên suốt component tree mà không cần phải truyền props một cách thủ công qua từng level.
- Thông thường với một ứng dụng React, data được truyền từ trên xuống (cha tới con) thông qua props, điều này có vẻ khá cồng kềnh đối với một số loại props (Ví dụ như locale preference, UI theme) chúng thường được sử dụng bởi rất nhiều component trong ứng dụng. Context cung cấp một cách làm cho phép chúng ta chia sẽ values giống như vậy giữa các components mà không cần truyền giá trị tới tất cả level trong component tree.
## Khi nào nên dùng Context
Context được thiết kế để chia sẽ data khi chúng được xem là “global data” của toàn bộ ứng dụng React, chẳng hạn như thông tin về user hiện tại đang đăng nhập, theme, hoặc ngôn ngữ mà người dùng đã chọn. Ví dụ, ở đoạn code bên dưới, chúng ta truyền một “theme” prop để style một Button component:
``` javaScript
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```
Sử dụng context, chúng ta có thể tránh được việc truyền props qua các elements trung gian:
``` javaScript
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
> API
> - React.createContext
> - ``` const MyContext = React.createContext(defaultValue); ```
> - Context.Provider
> - ``` <MyContext.Provider value={/* some value */}> ```
> - Class.contextType
> 
> - Context.Consumer
> - ``` <MyContext.Consumer>{value => /* render gì đó dựa vào context value */}</MyContext.Consumer> ```
> - Context.displayName

## Examples
- theme-context.js
``` javaScript
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
```
- themed-button.js
``` javaScript
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
```
- app.js
``` javaScript
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}

ReactDOM.render(<App />, document.root);
```

4. Tìm nạp dữ liệu với useEffect
-  Chạy một lần khi mount : tìm nạp data API
-  Chạy khi thay đổi state : thường thì khi validate input đầu vào.
- Chạy khi thay đổi state : filtering trực tiếp
- Chạy khi thay đổi state : trigger animation trên giá trị của array mới.
- Chạy khi props thay đổi : update lại list đã fetched API khi data update.
- Chạy khi props thay đổi : updateing data API để cập nhật BTC

5. Custom hook
- Khi bạn có logic thành phần cần được sử dụng bởi nhiều thành phần, chúng tôi có thể trích xuất logic đó vào một Hook tùy chỉnh
- Custom Hooks start with "use". Example: useFetch.
- Trong đoạn mã sau, chúng tôi đang tìm nạp dữ liệu trong thành phần Trang chủ của chúng tôi và hiển thị nó.

Chúng tôi sẽ sử dụng dịch vụ JSONPlaceholder để tìm nạp dữ liệu giả. Dịch vụ này rất tốt để thử nghiệm các ứng dụng khi không có dữ liệu hiện có.

Để tìm hiểu thêm, hãy xem phần API Tìm nạp JavaScript.

Sử dụng dịch vụ JSONPlaceholder để tìm nạp các mục "việc cần làm" giả và hiển thị các tiêu đề trên trang:
``` javaScript
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
```
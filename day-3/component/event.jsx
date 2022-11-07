// xử lý sự kiện:
// - cách gán sự kiện: truyền trực tiếp cho các thuộc tính sự kiện của JSX
//  các thuộc tính sự kiện thì sử dụng camelCase: onClick, onMouseOver, onDbClick...

const { useState } = require("react");

// const handleClick = () => {
//     oncClick={handleClick};
// };

//  để truyền thêm các tham số cho hàm handler thì sử dụng arrow function hoặc là bind
// const handleChange = (event,name) => {}
// oncClick={(e) => handleChange(e,"đạt")};
// onClick = {handleChange.bind(null,"đạt")};

//  State là 1 mô hình dữ liệu trong React, cho phép ghi nhớ các giá trị giữa mỗi lần render
//  điều quan trọng nhất với state là khi state thay đổi giá trị thì component sẽ render lại để khớp với trạng thái hiện tạii
// khác biệt props
// - State là trạng thái thuộc về 1 component/Props là giá trị truyền từ component cha xuống component
// 



// Hook -------------------
//  là các hàm đặc biệt cho phép function component sử dụng được các tính năng giống Class Component, vd: state, lifecycle,...
//  => biến function component thành Statefull Component
//  tất cả các Hook thì đều bắt đầu bằng use => useState, useEffect, useRef
//  có thể tự tạo các custom hook dựa trên các hook có sẵn

//  useState : khai báo 1 giá trị trạng thái (cho phép Function Component ghi nhớ 1 giá trị giữa mỗi lần render)
// cú pháp
const [state,setState] = useState(initiaValue);
// initialValue : có thể là 1 giá trị hoặc 1 hàm trả về giá trị , sử dụng hàm (lazy initial state) trong trường hợp mà giá trị trạng thái ban đầu cần phải tính toán phức tạp.
//  State có thể là bất kỳ giá trị nào, có thể là chuỗi, số, null, undifine, ...array,obj,...
//  sử dụng state thì truy cập trực tiếp qua biến state
// để cập nhật state thì sử dụng hàm setState, lưu ý:
// không gọi setState trực tiếp trong thân hàm mà thường gọi setState trong các trình xử lỹ sự kiện
// cú pháp:
const [count, setCount] = useState(0);
handleClick = () => {
    setCount(count +1);
}
handleClick = () => {
    // thường sử dụng khi có nhiều state liên quan chia tách ra nhiều trình xử lý, nhiều component khác nhau
    setCount(prev => { // giá trị trước đó
        return newCount;
    })
}



// gọi Hook
// khai báo các lệnh handle
// câu lệnh tính toán



//  useRef: tương tự như State, cho phép function ghi nhớ giá trị giữa mỗi lần render, tuy nhiên khác biệt lớn nhất là nó k kích hoạt render lại component khi thay đổi
//  thường sd để chứa tham chiếu đến các đối tượng đặc biệt 

class State extends React.Component {
    state = {
        value: 1,
    };

    increment = () =>{
        this.setState({value:this.state.value +1});
    }

    decrement =() => {
        this.setState({value: this.state.value -1});
    }

    render() {
        // return (
        //     <button onClick={this.decrement}>decrement</button>
        //     {this.state.value}
        //     <button onClick={this.increment}>increment</button>
        // )
    }
};
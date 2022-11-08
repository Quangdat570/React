# chia sẻ state giữa các component
- nâng giá trị trạng thái lên component cha gần nhất
- sử dụng context để quản lý trạng thái tập trung ( tránh việc phải truyền props xuống nhiều lớp)
- sử dụng các thư viện quản lý trạng thái ( Redux, Mobx, ...) để quản lý trạng thái global

## lifecycle
- vòng đời: lầ các giai đoạn phát triển của 1 sự vật, sự việc nào đó.
- trong các component trong React thì cũng có các giai đoạn chính
- Mounting
- Updating
- Unmount

Lifecycle methods : phương thức vòng đời. là phương thức được React định nghĩa và chạy khi component đạt đến giai đoạn cụ thể


Mounting:
- Render()
- componentDidMount();


Updating:
- componentDidUpdate();

Upmount:
- componentWillUnmount();

> Hạn chế của Lifecycle methods trong class component
> chỉ có 1 phương thức lifecycle => khi có nhiều thao tác khác nhau cần phải chạy trong cùng 1 lifecycle
> các lifecycle methods chạy ở các giai đoạn khác nhau => 1 thao tác phải tách ra 3 lifecycle methods

## useEffect
Hook để quản lý lifecycle trong function component
- sử dụng để đồng bộ trạng thái của React component với API bên thứ 3 ( hệ thống bên ngoài) => tác dụng phụ 
### Chay voi moi lan render
``` php
useEffect(effectCallback, [value1, value2,...])
# chay 1 lan duy nhat
useEffect(effectCallback, []);


khi component unmount

useEffect(() => {
    // code
    return () => {
        // ham chay trc khi render
    }
})
```
Loi thuong gap voi useEffect
1. khong truyen dung' cac dependencies => xac dinh ro cac bien ben ngoai dc sd trong useEffect(bao gom 1 so truong hop bien k nam trong useEffect)
2. k co ham return 

- lần đầu tiên render => gọi API lần 1
- có 1 state /props thay đổi => re-render => gọi API lần 2
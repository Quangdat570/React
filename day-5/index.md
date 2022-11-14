# Phát triển ứng dụng React trên môi trường Nodejs
#### Ứng dụng React chạy trên môi trường trình duyệt
1. Tải index.html
2. tải các thư viện React, ReactDOM, Babel, ( chạy trên trình duyệt)
3. Babel biên dịch mã JSX 
4. chạy mã JS đã được biên dịch
5. Hiển thị được ứng dụng

## Phát triển trên môi trường Node.js
1. các thư viện React, ReactDOM, Babel,... được cài đặt local
2. Biên dịch mã ở phía server
3. Gửi mã đã được biên dịch đến trình duyệt
4. chạy mã
5. hiển thị ứng dụng

## Node.js
là 1 ứng dụng C++ , tích hợp JavaScript và Chrome cung cấp môi trường thực thi mã javascript cho phép chạy mã javascript bên ngoài trình duyệt.

Có thể dùng chung các thư viện javascript

## NPM
Tất cả mọi thứ trong Node.js là các module, được đăng ký và phát hành trên NPM 

NPM Node Package Manager - công cụ quản lý package của Node. giúp quản lý việc tìm kiếm / cài đặt/ gỡ bỏ/ nâng cấp ... các package/ libraies javascript sử dụng trong project

Ngoài npm thì còn các công cụ quản lý khác như yarn, Pnpm,...

## Buildtool - Toolchain
Đây là 1 chuỗi các công cụ được tích hợp sẵn và cấu hình đầy đủ cho phép phát triển project

Buildtool phổ biến cho ứng dụng: Create React App ( chính thức ), Vite,... => Package của Node.js

## Tạo project React với vite
1. cd ra thư mục muốn lưu trữ
2. mở cmd: npm create vite@latest
3. các thông tin:
* Project name
* Framework: chọn React
* vairant: javascript

## Package.json
mỗi project thì đều có file package.json là tệp tin metadata kê khai các thông tin về project

* dependencis là các phụ mà project cần để có thể chạy được
* devDependencis là các package (chỉ) cần trong quá trình phát triển


Khi cài đặt thêm các package đều được liệt kê vào package.json

## các câu lệnh cơ bản
* npm install: cài đặt các dependencis
* npm i package-name: cài đặt thêm 1 package
* npm uninstall package-name: gỡ bỏ package
* ` npm run dev ` chạy các câu lệnh

## cú pháp import/ export | module
mỗi file được coi là 1 module riêng. sd cú pháp import/ export để liên kết các file( bao gồm tất cả các file jsx, css, image, json,...)

ngoại trừ các file hình ảnh trong thư mục /public (sd đường dẫn là link)
` <img src="abc.png" />` không cần /public trước đường dẫn

```javasript
export default name;
import name from "source";


export function Review() {};
import { Review } from 'source';


export const x = 1;
import {x} from 'source';

function A() {}
function B() {}
export { A, B} from 'source'

```

## Tổ chức thư mục
* /src/components : chứa tất cả component con
* /src/pages : chứa tất cả các trang lắp ghép từ các components
* /src/utils : chứa các hàm tiện ích mà tái sử dụng ở nhiều nơi
* /src/assets : chứa các tài nguyên tĩnh để import vào component

## CSS Module
coi mỗi file css là 1 module riêng cho 1 component, các quy tắc css trong 1 module là riêng biệt không gây ra xung đột với bất kỳ component nào

> cú pháp nhanh
> raf

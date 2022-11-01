function Hello() { 


    return <h1 className="text-center mt-5">Our Reviews</h1>
};
function ReviewCart() {
    
    return (<div className="review-cart w-75 m-auto ">
        <div className="review">
            <div className="author d-flex flex-column align-items-center">
                <div className="avatar ">
                    <img src="./img/anh dat dep trai.jpg" alt="" className="rounded-circle " />
                </div>
                <div className="info mt-2">
                    <div className="text-center fw-bold">Quang Đạt</div>
                    <a href="#" className="text-primary text-decoration-none">Web Developer</a>
                </div>
            </div>
            <div className="content text-center mt-3">
            Hello, my name is Dat. I am from Hanoi. I completed my Bachelor of Engineering degree in 2009 from University of Engineering and Technology. I got hired by a renowned IT company through the campus placement. I have been working with the company for almost a decade now. I have learned the ins and outs of IT operations in my journey from a fresher to a manager. My qualifications and work experience make me a suitable candidate for the profile. I am looking to join your organization to explore new dimensions and for the further development of my skills.
            </div>
        </div>
        <div className="control d-flex align-items-center justify-content-center gap-3">
            <div> <i class="bi bi-arrow-left text-primary"></i> </div>
            <div> <i class="bi bi-arrow-right text-primary"></i> </div>
        </div>
    </div>)
}

function App() {
   
    return (
        <div>
            <Hello />
            <ReviewCart/>
            
            
        </div>
    )
    
}

const root = ReactDOM.createRoot(document.querySelector("#app"));


root.render(App());




// compiler : trình biên dịch ( babel) cho phép biên dịch mã JSX thành javascript thuần để trình duyệt có thể hiểu và chạy được
// lưu ý:
// 1. JSX Element thì chỉ có 1 thẻ cha chứa các thẻ khác
//  2. Các thuộc tính sử dụng trên thẻ thì tuân thủ cú pháp JavaScript className, htmlFor, onClick,...
// 3.tất cả thẻ JSX thì phải có thẻ đóng
// 4. Để nhúng 1 giá trị javaScript vào trong JSX thì dử dụng { }.
// 5. Bên trong ngoặc {} có thể chứa bất kỳ BIỂU THỨC JavaScript nào.
// 6. Các giá trị Node hoặc true/false , hoặc null, undifine
// Virtual DOM 
// DOM - Đối tượng đại diện cho tài liệu html
// Virtual Dom - Đối tượng biểu diễn cấu trúc HTML ( trong bộ nhớ)
//  - Kết quả render trước đó
//  - kết quả lần render mới nhất


// Component - Base
// Đoạn mã xây dựng các thành phần giao diện có thể tái sử dụng => JSX => đây là khối xấy dựng cơ bản nhất của 1 ứng dụng React
// + class component
// + function component
//  Props là mô hình dữ liệu cơ bản nhất trong React, cho phép truyền dữ liệu từ component cha xuống cho component con. 
// props giống các tham số hàm cho phép tùy chỉnh hành vi của component JSX mà nó hiển thị.
// Props có thể nhận bất kỳ dữ liệu gì ( obj, boolean, func, component)
//  trừ chuỗi ra thì có thể truyền trực tiếp name = "dat".


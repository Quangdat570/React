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
            <a href="#" > <i className="bi bi-arrow-left text-primary"></i> </a>
            <div></div>
            <a href="# "> <i className="bi bi-arrow-right text-primary"></i> </a>
        </div>
    </div>)
}

function App() {
    
    const reviews = [
        {
            id: "f78ff93a2f6723ba714b938d",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
            name: "Jorge Farrell",
            job: "Investor Marketing Producer",
            content:
                "Dignissimos libero magnam unde sapiente quaerat vel accusantium reprehenderit. Quam excepturi omnis. Non inventore facilis ipsum iure omnis quis sunt.",
        },
        {
            id: "b39e485adf7eac8ef7ccdb7a",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/784.jpg",
            name: "Mrs. Rickey Ritchie",
            job: "Lead Functionality Consultant",
            content:
                "Amet blanditiis quis similique sint accusamus illum magni. Aperiam dolore earum. Odit natus quod cupiditate nam nihil architecto. Occaecati corrupti ipsam praesentium laborum ipsam deleniti sint cum. Optio ducimus cum corrupti dolores debitis.",
        },
        {
            id: "7c5bca0a82a0fb621acf9dc1",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
            name: "Hugh Smith",
            job: "Central Configuration Designer",
            content:
                "Repudiandae vitae laboriosam. Eius hic magni ex quam molestiae magnam minus. Hic beatae corporis optio distinctio eveniet provident temporibus aliquid. Pariatur alias dolores quam nobis quidem. Voluptatem reiciendis magni quos neque cum iure itaque quidem. Alias molestias id reiciendis dolorem eius.",
        },
        {
            id: "42ffffe92ecb90376f7b1541",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/802.jpg",
            name: "Arnold Lind PhD",
            job: "Dynamic Web Liaison",
            content:
                "Accusantium consectetur unde accusantium asperiores nisi repellat ea delectus. Numquam atque libero sunt. Excepturi error enim dolore quos accusantium unde.",
        },
        {
            id: "1d1570fa3d0dfeb8fbe90a7f",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/927.jpg",
            name: "Brandy Stroman",
            job: "Direct Marketing Producer",
            content:
                "Exercitationem quia ad error dicta provident expedita neque eum reprehenderit. Numquam illum minus neque. Sit quod officiis. Tenetur nobis tempore nostrum.",
        },
        {
            id: "fbe30443cc6aecdcf21dd0be",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/607.jpg",
            name: "Anna Rogahn MD",
            job: "Central Program Director",
            content:
                "Dolore saepe cum repudiandae mollitia quia aspernatur. Vitae vel illo amet quae quis placeat optio ullam perspiciatis. Aliquid exercitationem expedita maiores numquam. Laborum magni id doloremque quibusdam quod quis explicabo beatae.",
        },
        {
            id: "a353b9c1f8fecbd32b0e1fee",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/173.jpg",
            name: "Rufus Adams",
            job: "Future Functionality Analyst",
            content:
                "Error asperiores quia quaerat quos. Enim optio ducimus eius neque et doloribus exercitationem. Molestias ducimus hic eos accusamus commodi saepe. Rem soluta inventore eum dignissimos dolorem nulla quibusdam recusandae. Ullam quibusdam aperiam labore vero repellendus quia ab.",
        },
        {
            id: "a01b99a200f3e728faa3d8c0",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg",
            name: "Dr. Antonia Lynch",
            job: "Product Division Coordinator",
            content:
                "Voluptates aperiam iusto nihil quidem ad exercitationem quo reiciendis facilis. Error deserunt ullam animi hic commodi. Harum molestias rerum ratione voluptatem. Exercitationem quam repellendus eligendi saepe ex quaerat doloremque temporibus. Enim corrupti rem vitae in animi.",
        },
        {
            id: "bd3ed8ffa3f3be5ec7bc6a1c",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/227.jpg",
            name: "Wendy Reilly II",
            job: "Internal Metrics Producer",
            content:
                "Eaque impedit ipsa ratione. Nisi minus doloribus provident soluta. At doloremque distinctio. Facere totam beatae ad optio consectetur ex nostrum harum consequuntur.",
        },
        {
            id: "16e57c53df8280cdce6a7b64",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/379.jpg",
            name: "Crystal Kiehn",
            job: "Corporate Research Technician",
            content:
                "Tempore quos minima accusamus quibusdam veniam quod. Nemo tempore exercitationem fuga nobis. Provident fugit pariatur repellat minima iusto vel natus sunt.",
        },
    ];
    
 
 
 
    return (
        <div>
            <Hello />
            <ReviewCart />
            
            
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


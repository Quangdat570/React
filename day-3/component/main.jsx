

// const Form = () => {
//     const handleChange = (e) => {



        
//         console.log(e.target.value);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }
//     return (
//         <form action="" onSubmit={handleSubmit} onChange={handleChange}>
//             <input  type="text" name="username"></input>
//             <select name="gander" id="">
//                 <option value="M">Male</option>
//                 <option value="F">Female</option>
//             </select>
//             <button >submit</button>
//         </form>
//     )
// };
// const Count = () => {
// }
const App = () => {
    const [count, setCount] = React.useState(0);
    // const timer = React.useRef(0);
    
    const increment = () => {
        setCount( count + 1);
        
        
    };
    
    const decrement = () => {
        setCount((previousCount) => previousCount - 1);
    };

    // const start = () => {
    //     if (!timer.current)
    // }
    // const changeDemoRef = () => {
    //     changeDemoRef.current = Math.floor(Math.random()*100);
    //     console.log(demoRef)
    // }

    const style = { color:count>0 ? "blue" : count < 0 ? "red" : "#333"}
    // if (count > 0) {
    //     return (
    //     <div>
    //         <button onClick={decrement}>-</button>
    //         <button className="text-primary">{count}</button>
    //         <button onClick={increment}>+</button>
            
    //     </div>
    // );
    //     }
    // else if( count < 0) {
    //     return (
    //         <div>
    //             <button onClick={decrement}>-</button>
    //             <button className="text-danger">{count}</button>
    //             <button onClick={increment}>+</button>
                
    //         </div>
    //     );
    // }
    // else if ( count = 0) {
    return (
            <div>
                <button onClick={decrement}>-</button>
                <button style={style}>{count}</button>
                <button onClick={increment}>+</button>
                
            </div>
        );
    }

    
    



const root = ReactDOM.createRoot(document.querySelector("#app"));


root.render(<App/>);
{ count:1}
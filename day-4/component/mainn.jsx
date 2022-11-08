



// const Cointer = ({value, onCrement, onDecrement}) => {
    
//     return (
//         <div>
//             <button onClick={onDecrement}>-</button>
//             {value}
//             <button onClick={onCrement}>+</button>

//         </div>
//     )
// };

// const Square = ({value}) => {
//     const style = {
//         width: 100 + value * 10,
//         height: 100 + value * 10,
//     }
//     return <div className="square" style={style}></div>
// }

// const App = () => {
//     const [value, setValue] = React.useState(0);
    
//     return (
//         <div className="container">
//             <Cointer 
//             value={value}
//              onCrement={() => setValue(value + 1)}
//               onDecrement={() => setValue(value - 1)}/>
//             <Square value={value}/>
//         </div>
//     )
// }





// const App = () => {
//     React.useEffect(() => {
//         console.log("app mounted");
//     },[]);
//     console.log("render app");
//     return (<div className="container">

//     </div>
// )}




const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
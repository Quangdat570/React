// const TodoApp = ( onCreate, onChanges) => {
//     const [job, setJob] = React.useState("");
//     const [jobs, setJobs] = React.useState([]);
//     const handleSubmit = () => {
//         setJobs(prev => [...prev,job])
//         setJob("")
//     }
//     return (
//         <div className="container ms-auto me-auto text-center w-50">
//             <h1 className="header">Todo App</h1>
//             <input type="text" placeholder="What do you want to do?" onChange={e => setJob(e.target.value)} value={job}/>
//             <button className="btn" onClick={handleSubmit}>Create</button>
//             <div className="check d-flex text-center justify-content-end ">
//                 <div className="form-check">
//                     <input type="radio" name="check" id="check" />
//                     <label htmlFor="check " className="ps-2">All</label>
//                 </div>
//                 <div className="form-check ">
//                     <input type="radio" name="check" id="check" />
//                     <label htmlFor="check" className="ps-2">Active</label>
//                 </div>
//                 <div className="form-check">
//                     <input type="radio" name="check" id="check" />
//                     <label htmlFor="check" className="ps-2">Completed</label>
//                 </div>
//                 <ul>
//                     {jobs.map((job, index) => {
//                         <li key={index}>{job}</li>
//                     })}
//                 </ul>
//             </div>

//         </div>
//     )
// }

const Todo = ({ userId, id, title, completed, onDelete }) => {
    return (<div className="container w-50  d-flex justify-content-between list-group-item border-bottom border-end border-start" >
        
        <div className="content d-flex   p-2 gap-3 ">
            <input type="checkbox" name="" id="" />
            <div className="todo-item">{title}</div>
        </div>
        <div className="action">
            <button className="btn" onClick={onDelete}>
                X
            </button>
        </div>

    </div>
    );
};

const TodoType = PropTypes.exact({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
});

Todo.propTypes = TodoType;

const TodoList = ({ todos }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(TodoType),
};

const App = () => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    const [todos, setTodos] = React.useState([]);
    
    const [job, setJob] = React.useState("");
    const [jobs, setJobs] = React.useState(storageJobs ?? []);
    const handleSubmit = () => {
        setJobs(prev =>{
         const newJobs =  [...prev,job]


         const jsonJobs = JSON.stringify(newJobs)
         localStorage.setItem("jobs",jsonJobs)
         return newJobs
        } )
        setJob("")
        
    }
   

    React.useEffect(() => {
        const controller = new AbortController();

        // Server State
        fetch("https://jsonplaceholder.typicode.com/todos", {
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos(data);
            });

        return () => {
            controller.abort();
        };
    }, []);
    
    
    return (
        <div className="todo-app">
            <div className="container ms-auto me-auto text-center w-50 p-0">
            <h1 className="header">Todo App</h1>
            <input type="text" placeholder="What do you want to do?" value={job} onChange={e => setJob(e.target.value)} />
            <button className="btn" onClick={handleSubmit}>Create</button>
            <div className="check d-flex text-center justify-content-end ">
                <div className="form-check">
                    <input type="radio" name="check" id="check" />
                    <label htmlFor="check " className="ps-2">All</label>
                </div>
                <div className="form-check ">
                    <input type="radio" name="check" id="check" />
                    <label htmlFor="check" className="ps-2">Active</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="check" id="check" />
                    <label htmlFor="check" className="ps-2">Completed</label>
                </div>
                
           
                </div>
                <div>
                    <div className="">
                    
                        {jobs.map((job, index) => (
                            
                            <div key={index} className="d-flex  gap-3 justify-content-between border-bottom border-end border-start border-top">
                                <div className="content d-flex align-items-center gap-3 p-2">
                                    <input type="checkbox" name="" id="" />
                                    <div>{job}</div>
                                </div>
                                <div className="delete">
                                    <button className="btn" >
                                         X
                                    </button>
                                </div>
                            </div>
                        ))}
                            
                        
                    </div>
                </div>
            </div>
            <TodoList todos={todos} />
        </div>
        
    );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);

// 






// -------------------------------------------------------------------

// const App = () => {
//     const [job, setJob] = React.useState("");
//     const [jobs, setJobs] = React.useState([]);
//     const handleSubmit = () => {
//         setJobs(prev => [...prev,job])
//         setJob("")
        
//     }

//     return (
//         <div>
//             <input type="text" value={job} onChange={e => setJob(e.target.value)} />
//             <button onClick={handleSubmit}>Add</button>
//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>{job}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.querySelector("#app"));


// root.render(<App/>);
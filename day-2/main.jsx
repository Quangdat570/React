// Có một số props đặc biệt
// propTypes => xác định kiểu dữ liệu cho props/ gợi ý props truyền vào
//  có thể sử dụng Typescript để thay thế
// defaultPróp => cung cấp các giá trị mặc định cho props trong trường hợp 


// function Hello({name="Đạt", children}) {
//     return <h1> Hello {name} {children}

//         </h1>
// };

// Hello.propTypes ={
//     name: PropTypes.string.isRequired,
//     children: PropTypes.node,
// };

// Hello.defaultProps = {
//     name : "ĐẠT",
// }

// import Hello from "./Hello.jsx";
// function Avatar({src, alt}) {
//     return <img src={src} alt={alt} />
    
// }
// Avatar.propTypes = {
//     src: PropTypes.string,
//     alt:PropTypes.string.isRequired,
// };

// Avatar.defaultProps = {
//     src:"https://img.thuthuat123.com/uploads/2019/10/17/anh-nen-gai-xinh-viet-nam-dep-nhat_110152854.jpg",
//     alt:""
// }



function App() {
    const user = {
        name: " Quang Đạt",
        isAdmin: true,
    }
    const Pokemons = [
        {
          id: 1,
          name: "Charmander",
          type: "fire",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
          id: 2,
          name: "Squirtle",
          type: "water",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
          id: 3,
          name: "Butterfree",
          type: "flying",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
          id: 4,
          name: "Rattata",
          type: "normal",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
          id: 5,
          name: "Metapod",
          type: "bug",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
      ];

      
    return ( <div >
        {/* {names.map((name) => {
            <Hello name={name}/>
        })}; */}

        {/* <User user={user}/> */}
        <h1 className="heading">Pokedex</h1>
        <PokemonList Pokemons = {Pokemons}/>
        
        
    </div>
)}

const root = ReactDOM.createRoot(document.querySelector("#app"));


root.render(App());
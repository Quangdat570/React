

const Media = ({ media, onPrev, onNext, onPlay, onPause, audioEle, isPlaying, setisPlaying}) => {
    const PlayPause = () => {
        setisPlaying(!isPlaying);
    }
    return (
        <div className="player">
            <div className="container-fluid">
                <div className="row d-flex">
                    <div className="col-3 d-flex align-items-center ">
                        <img src={media.avatar} alt="" className=" rounded-circle" />
                        <div className="title text-white">{media.name}</div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                        <div className="controls d-flex justify-content-center align-items-center gap-4">
                            <button className="btn-prev " onClick={onPrev}><i className="bi bi-skip-start"></i></button>
                            <div className="btn-toggle-play">
                           
                            {isPlaying ? <i onClick={PlayPause} className="bi bi-pause-fill text-white"/> 
                            :  <i onClick={PlayPause} className="bi bi-play-fill text-white"/>}
                            
                            
                            </div>
                            <button className="btn-next" onClick={onNext}><i className="bi bi-skip-end"></i></button>
                            {/* <audio controls src={media.path} type="audio/mpeg"></audio> */}
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <div className="title text-white">{media.name}</div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}



const App = () => {

    
    const [index, setIndex] = React.useState(0);
    const [songs,setSongs] = React.useState(medias);
    const [isPlaying,setisPlaying] =  React.useState(false);
    
    const audioEle = React.useRef();

    React.useEffect(() => {
        if(isPlaying) {
            audioEle.current.play();
        }
        else {
            audioEle.current.pause();

        }
    },[isPlaying])
    const medias = [
        {
            id: 1,
            name:"Vô Lượng",
            path:"./component/music/vô lượng.mp3",
            avatar:"https://static1.dienanh.net/upload/202210/d4530d3d-faf3-46e8-8e7b-a2de12bc08e5.jpg",
            
        },
        {
            id:2,
            name:"Dưới những cơn mưa",
            path:"./component/music/Duoi-Nhung-Con-Mua-Mr-Siro.mp3",
            avatar:"http://4.bp.blogspot.com/-ViO9FsHLnv0/U1kh4fv4wMI/AAAAAAAAriY/nFeDAWRXDOA/s1600/0-change24h+(16).jpg",
            

        }
    ];
   

    const handleNext = () => {
        if (index == medias.length - 1) setIndex(0);
        else setIndex(index + 1);
    };

    const handlePrev = () => {
        if (index == 0) setIndex(medias.length - 1);
        else setIndex(index - 1);
    };
    

   

    const media = medias[index];
    return (
        <div>
            <audio src={media.path} media={media} ref={audioEle}></audio>
            <Media media={media} onPrev={handlePrev} onNext={handleNext}  songs={songs} setSongs={setSongs} isPlaying={isPlaying} setisPlaying={setisPlaying} audioEle={audioEle}/>
    
            

        </div>
    )
    
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
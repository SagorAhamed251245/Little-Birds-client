import {  Zoom} from "react-awesome-reveal";
const Carousel = ({photo, ids, slid_right, slid_left, bannerTitle}) => {
    return (
        <div id={ids} className="carousel-item relative w-full">
        <div className='w-full flex'>
            
            <img src={photo} className="w-1/2 object-left  object-cover " />
            
            <div className='bg-pink-500 w-1/2 h-full flex justify-center items-center text-white font-Dosis'>
                
                <p className=" text-3xl lg:text-6xl md:text-5xl  font-bold w-full md:w-9/12 text-center "><Zoom delay={1e3} >{bannerTitle}</Zoom></p>
                
                </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={slid_right} className="btn btn-circle">❮</a>
            <a href={slid_left} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default Carousel;
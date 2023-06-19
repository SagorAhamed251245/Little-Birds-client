import { Zoom } from "react-awesome-reveal";
const Carousel = ({ photo, ids, slid_right, slid_left, bannerTitle }) => {
  return (
    <div id={ids} className="carousel-item relative w-full">
      
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={slid_right} className="btn btn-circle">
          ❮
        </a>
        <a href={slid_left} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Carousel;

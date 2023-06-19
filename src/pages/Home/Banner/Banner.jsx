import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import banner4 from "../../../assets/banner4.jpg";
import { Navigation } from "swiper";
import { Zoom } from "react-awesome-reveal";

const banner = [
  {
    img: banner1,
    title: "Unleash Your Inner Artist at our Summer Art Adventure!",
  },
  {
    img: banner2,
    title: "Get Creative in the Sun at our Summer Art Camp!",
  },
  {
    img: banner3,
    title: "Discover the Artistic Wonders of Summer at our Creative Camp!",
  },
  {
    img: banner4,
    title: "Make Art, Make Friends, and Make Memories at our Summer Camp!",
  },
];

export const Banner = () => {
  return (
    <>
     <div className="carousel w-full h-[500px] overflow-hidden">
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {banner.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="flex relative w-full h-[500px] group">
          <div className="w-full flex">
            <img
              src={item.img}
              className="w-1/2 object-cover  object-left transition-transform transform group-hover:scale-110"
              alt={item.title}
            />

            <div className="bg-pink-500 w-1/2 h-full flex justify-center items-center text-white font-Dosis">
              <p className="text-3xl lg:text-6xl md:text-5xl font-bold w-full md:w-9/12 text-center">
                <Zoom delay={1000}>{item.title}</Zoom>
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </>
  );
};

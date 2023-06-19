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
    title: "Unleash Your Inner Artist at our Summer Art Adventure!"
  },
  {
    img: banner2,
    title: "Get Creative in the Sun at our Summer Art Camp!"
  },
  {
    img: banner3,
    title: "Discover the Artistic Wonders of Summer at our Creative Camp!"
  },
  {
    img: banner4,
    title: "Make Art, Make Friends, and Make Memories at our Summer Camp!"
  },
];

export const Banner = () => {
  return (
    <>
      <div className="carousel w-full h-[500px] ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {banner.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" flex relative w-full  h-[500px]">
                <div className="w-full flex">
                  <img
                    src={item.img}
                    className="w-1/2 object-left  object-cover "
                  />

                  <div className="bg-pink-500 w-1/2 h-full flex justify-center items-center text-white font-Dosis">
                    <p className=" text-3xl lg:text-6xl md:text-5xl  font-bold w-full md:w-9/12 text-center ">
                      <Zoom delay={1e3}>{item.title}</Zoom>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Carousel
                    photo={banner1}
                    ids={'slide1'}
                    slid_right={'#slide4'}
                    slid_left={'#slide2'}
                    bannerTitle={"Unleash Your Inner Artist at our Summer Art Adventure!"}
                ></Carousel>
                <Carousel
                    photo={banner2}
                    ids={'slide2'}
                    slid_right={'#slide1'}
                    slid_left={'#slide3'}
                    bannerTitle={"Get Creative in the Sun at our Summer Art Camp!"}
                ></Carousel>
                <Carousel
                    photo={banner3}
                    ids={'slide3'}
                    slid_right={'#slide2'}
                    slid_left={'#slide4'}
                    bannerTitle={'Discover the Artistic Wonders of Summer at our Creative Camp!'}
                ></Carousel>
                <Carousel
                    photo={banner4}
                    ids={'slide4'}
                    slid_right={'#slide3'}
                    slid_left={'#slide1'}
                    bannerTitle={'Make Art, Make Friends, and Make Memories at our Summer Camp!'}
                ></Carousel> */}
      </div>
    </>
  );
};

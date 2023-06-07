import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpg'
import Carousel from './Carousel'



export const Banner = () => {

    return (
        <>
            <div className="carousel w-full h-[500px]">

                <Carousel
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
                ></Carousel>

            </div>
        </>
    );
}

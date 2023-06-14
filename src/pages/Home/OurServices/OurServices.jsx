import logo2 from '../../../assets/palette.png'
import logo5 from '../../../assets/clock.png'
import logo1 from '../../../assets/puzzle-pieces.png'
import logo4 from '../../../assets/variety.png'
import logo3 from '../../../assets/playground.png'
import { Fade, Zoom } from 'react-awesome-reveal'
const OurServices = () => {
    return (
        <div className="bg-pink-500 w-full h-auto p-16 my-36 text-white ">
            <div className="pt-16">
                <h1 className="text-7xl font-bold text-center"><Zoom delay={1e3} >Our Services</Zoom></h1>
                <p className="text-xl text-center"><Zoom delay={1e3} >Why Families Prefer Our Services </Zoom></p>
            </div>
            <div className='w-[80%] mx-auto flex gap-16 justify-center mt-16 lg:justify-between flex-wrap'>
               <Fade>
               <div className='flex flex-col items-center'>
                    <div className='flex justify-center'>
                        <img src={logo1} className='w-12' alt="" />
                    </div>
                    <p className='uppercase text-2xl text-center'>ACTIVITY ROOMS</p>
                </div>
               </Fade>
               <Fade>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-center'>
                        <img src={logo2} className='w-12' alt="" />
                    </div>
                    <p className='uppercase text-2xl text-center'>Art And Draw</p>
                </div>
                </Fade>
                <Fade>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-center'>
                        <img src={logo3} className='w-12' alt="" />
                    </div>
                    <p className='uppercase text-2xl text-center'>Playground</p>
                </div>
                </Fade>
                <Fade>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-center'>
                        <img src={logo4} className='w-12' alt="" />
                    </div>
                    <p className='uppercase text-2xl text-center'>VARIOUS CLASSES</p>
                </div>
                </Fade>
                <Fade>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-center'>
                        <img src={logo5} className='w-12' alt="" />
                    </div>
                    <p className='uppercase text-2xl text-center'>FULL DAY SESSIONS</p>
                </div>
                </Fade>

            </div>

        </div>
    );
};

export default OurServices;
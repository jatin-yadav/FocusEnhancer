import CuteEggShapedLamp from '../../public/assets/Cute_Egg-Shaped_Lamp.png'
import { BoldButton } from '../components/BoldButton'
import NavBar from '../components/NavBar'
import { RightArrow } from '../icons/RightArrow'
import Lottie from 'react-lottie';
import animationData from '../lotties/Animation - 1737658507129.json'

const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section className="bg-[#331f76] h-screen">
            <div className='fixed'>
                <NavBar />
            </div>
            <div className="flex">
                <div className='w-1/2 flex justify-center items-center'>
                    <div className='px-5'>
                        <h1 className='text-5xl font-bold text-white'>Focus Enhancer:<br /> Unlock Your Brain's Potential</h1>
                        <h3 className='text-xl py-2 text-gray-300 capitalize'>Break barriers and elevate your mind <br />your companion in unlocking focus and limitless cognitive growth</h3>
                        <div className='py-4'>
                            <BoldButton text='Play For Free' variant='primary' endIcon={<RightArrow />} />
                        </div>
                        <div className="fixed bottom-0 left-[20%]">
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-screen'>
                    <img className='w-full h-full' src={CuteEggShapedLamp} alt="CuteEggShapedLamp" />
                </div>
            </div>
        </section>
    )
}

export default Home
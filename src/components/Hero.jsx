import HeroDesktop from '../images/image-intro-desktop.jpg';
import HeroMobile from '../images/image-intro-mobile.jpg';

const Hero = () => {
    return (
        <div className="bg-Dark_Violet">
            <div className='max-w-screen-lg mx-auto md:flex md:flex-row-reverse'>
                {/* DESKTOP IMAGE */}
                <div className=''>
                    <img src={HeroDesktop} alt="" className='hidden sm:block sm:w-full md:pr-6 lg:pr-0 md:relative md:top-28 md:basis-1/2'/>
                    <img src={HeroMobile} alt="" className='w-full sm:hidden' />
                </div>

                <div className='text-White px-6 py-28 text-center lg:px-0 lg:pb-0 md:text-start md:basis-1/2'>
                    <hr className='hidden md:block md:w-2/6 md:mb-10' />
                    <h2 className='mb-4 text-5xl lg:text-6xl'>
                        Humanizing <br /> your insurance.
                    </h2>
                    <p className='text-md leading-6 mb-4'>
                        Get your life insurance coverage easier and faster. We blend our expertise
                        and technology to help you find the plan that’s right for you. Ensure you
                        and your loved ones are protected.
                    </p>
                    <button className='uppercase text-White text-md font-semibold tracking-widest cursor-pointer border-White border-2 px-5 py-2 duration-300 focus:bg-White focus:text-Dark_Violet md:hover:bg-White md:hover:text-Dark_Violet'>
                    View plans
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
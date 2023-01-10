import logo from '../images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'how we work'
        },
        {
            id: 2,
            link: 'blog'
        },
        {
            id: 3,
            link: 'account'
        }
    ]


    return (
        <div>
            <div className='max-w-screen-lg mx-auto flex items-center justify-between px-6 py-7 lg:px-0'>
                {/* LOGO */}
                <img src={logo} alt="" />

                {/* HAMBURGEER AND CLOSE ICONS */}
                <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 md:hidden'>
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>

                {/* MOBILE NAV ITEMS */}
                {nav && (
                    <ul className='flex flex-col justify-start items-center gap-y-7 absolute top-20 left-0 w-full h-screen pt-12 bg-Dark_Violet md:hidden'>
                        {links.map(({ id, link }) => {
                            return (
                                <li key={id} className='uppercase text-White font-semibold text-lg tracking-widest cursor-pointer'>
                                    {link}
                                </li>
                            )
                        })}
                        <li className='uppercase text-White font-semibold text-lg tracking-widest cursor-pointer border-White border-2 px-5 py-2 w-4/5 text-center'>view plans</li>
                    </ul>
                )}

                {/* MEDIUM SCREENS AND DESKTOP NAV ITEMS */}
                <ul className='hidden md:flex items-center gap-x-5'>
                    {links.map(({ id, link }) => {
                        return (
                            <li key={id} className='uppercase text-Grayish_Blue font-medium cursor-pointer duration-300 hover:scale-105 hover:text-Dark_Violet md:text-xs'>
                                {link}
                            </li>
                        )
                    })}
                    <li className='uppercase text-Dark_violet border-Dark_Violet border-2 px-5 py-2 font-medium cursor-pointer duration-300 hover:scale-105 hover:text-White hover:bg-Dark_Violet md:text-xs'>view plans</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';

const Footer = () => {

    const socials = [
        {
            id: 1,
            img: [facebook]
        },
        {
            id: 2,
            img: [twitter]
        },
        {
            id: 3,
            img: [pinterest]
        },
        {
            id: 4,
            img: [instagram]
        },
    ]

    const companies = [
        { id: 1, company: 'how we work' },
        { id: 2, company: 'why insure?' },
        { id: 3, company: 'check price' },
        { id: 4, company: 'reviews' },
    ]

    const helps = [
        { id: 1, help: 'FAQ' },
        { id: 2, help: 'terms of use' },
        { id: 3, help: 'Privacy policy' },
        { id: 4, help: 'cookies' },
    ]

    const contacts = [
        { id: 1, contact: 'sales' },
        { id: 2, contact: 'support' },
        { id: 3, contact: 'live chat' },
    ]

    const others = [
        { id: 1, other: 'careers' },
        { id: 2, other: 'press' },
        { id: 3, other: 'licenses' },
    ]

    return (
        <div className="bg-Very_Light_Gray mt-36 py-28">
            <div className="max-w-screen-lg mx-auto px-8">

                {/* LOGO AND SOCIAL ICONS */}
                <div className='flex flex-col items-center gap-y-8 mb-8 md:flex-row md:justify-between'>
                    <img src={logo} alt="" />

                    <div className='flex items-center gap-x-5'>
                        {socials.map(({ id, img }) => (
                            <img key={id} src={img} alt="" className='cursor-pointer hover:bg-Very_Dark_Violet hover:invert' />
                        ))}
                    </div>
                </div>

                <hr className='text-Grayish_Blue' />

                <div className='flex flex-col md:flex-row md:justify-between'>
                    {/* COMPANIES */}
                    <div className='text-center mt-8 md:text-start md:mt-12'>
                        <h2 className='uppercase text-sm text-Dark_Grayish_Violet font-bold mb-5'>
                            Our company
                        </h2>
                        <ul>
                            {companies.map(({ id, company }) => (
                                <li className='leading-8'>
                                    <button className='uppercase text-sm text-Dark_Violet font-semibold tracking-wider hover:underline' key={id}>
                                        {company}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* HELPS */}
                    <div className='text-center mt-8 md:text-start md:mt-12'>
                        <h2 className='uppercase text-sm text-Dark_Grayish_Violet font-bold mb-5'>
                            help me
                        </h2>
                        <ul>
                            {helps.map(({ id, help }) => (
                                <li className='leading-8'>
                                    <button className='uppercase text-sm text-Dark_Violet font-semibold tracking-wider hover:underline' key={id}>
                                        {help}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACTS */}
                    <div className='text-center mt-8 md:text-start md:mt-12'>
                        <h2 className='uppercase text-sm text-Dark_Grayish_Violet font-bold mb-5'>
                            contact
                        </h2>
                        <ul>
                            {contacts.map(({ id, contact }) => (
                                <li className='leading-8'>
                                    <button className='uppercase text-sm text-Dark_Violet font-semibold  hover:underline' key={id}>
                                        {contact}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* OTHERS */}
                    <div className='text-center mt-8 md:text-start md:mt-12'>
                        <h2 className='uppercase text-sm text-Dark_Grayish_Violet font-bold mb-5'>
                            Others
                        </h2>
                        <ul>
                            {others.map(({ id, other }) => (
                                <li className='leading-8'>
                                    <button className='uppercase text-sm text-Dark_Violet font-semibold hover:underline' key={id}>
                                        {other}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
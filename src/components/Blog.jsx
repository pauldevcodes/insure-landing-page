import BlogImage1 from '../images/icon-snappy-process.svg';
import BlogImage2 from '../images/icon-affordable-prices.svg';
import BlogImage3 from '../images/icon-people-first.svg';

const Blog = () => {

    const blogs = [
        {
            id: 1,
            img: [BlogImage1],
            title: 'Snappy Process',
            para: `Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.`
        },
        {
            id: 2,
            img: [BlogImage2],
            title: 'Affordable Prices',
            para: `We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.`
        },
        {
            id: 3,
            img: [BlogImage3],
            title: 'People First',
            para: `Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.`
        },
    ]

    return (
        <div>
            <div className="max-w-screen-lg mx-auto pt-32 px-8 flex flex-col items-center md:items-start md:pt-64 lg:px-0">
                <hr className='w-3/6 text-Grayish_Blue mb-10 md:mb-12 md:w-1/6' />
                <h2 className='text-5xl text-Very_Dark_Violet font-semibold mb-20 lg:text-6xl'>We’re different</h2>

                {/* BLOGS */}
                <div>
                    {/* BLOG 1 */}
                    <div className='md:flex md:gap-x-4'>
                        {blogs.map(({ id, img, title, para }) => (
                            <div key={id} className='flex flex-col items-center text-center mb-8 md:items-start md:text-start'>
                                <img src={img} alt="" className='mb-10' />

                                <h4 className='text-2xl text-Very_Dark_Violet font-semibold mb-5'>
                                    {title}
                                </h4>
                                <p className='text-Grayish_Blue'>
                                    {para}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
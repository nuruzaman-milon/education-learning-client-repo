import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CategoriesCart from '../shared/CategoriesCart/CategoriesCart';

const Home = () => {

    const courses = useLoaderData();
    // console.log(courses);
    const selectedCourses = courses.filter(course => course.bestSeller === true)
    // console.log(selectedCourses);

    return (
        <div>
            <div className='w-[92%] mx-auto my-7 lg:my-12 lg:flex items-center'>
                <div className='lg:w-[59%]'>
                    <img src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png" alt="" />
                </div>
                <div className='lg:w-[41%] mt-14 lg:mt-0'>
                    <h1 className='text-4xl lg:text-8xl'>
                        <Typewriter
                            words={['Be Passionate Always', 'No Pain No Gain', 'You Learn You Grow']}
                            loop={10}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                </div>
            </div>

            <div className='w-[92%] mx-auto mt-14 lg:mt-24'>
                <div className='text-center mb-12'>
                    <p className='text-[#be738b] font-bold text-xl mb-2'>Featured Courses</p>
                    <h3 className='font-extrabold text-3xl'>
                        Grow Your Career Opportunity With Our Courses
                    </h3>
                </div>
                <div className='grid lg:grid-cols-4 gap-9 lg:gap-7'>
                    {
                        selectedCourses.map(course => <CategoriesCart
                            key={course._id}
                            course={course}
                        ></CategoriesCart>)
                    }
                </div>
                <div className='flex justify-center lg:justify-end my-4'>
                    <Link to='/courses'><button className='btn w-full lg:btn-sm bg-[#7cb1a2] border-none hover:bg-[#427c6c]'><p className='mr-1'>All Courses</p><FaArrowCircleRight></FaArrowCircleRight></button></Link>
                </div>
            </div>

            <div className='w-[92%] mx-auto my-12 lg:my-24'>
                <div className='text-center mb-12'>
                    <h3 className='text-[#be738b] font-bold text-xl mb-2'>Our Features</h3>
                    <h1 className='font-extrabold text-3xl'>Why You Should Choose Edemy</h1>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4'>
                    <div className="card card-compact bg-base-100 shadow-xl mr-2 hover:bg-rose-200 pt-2">
                        <img className='w-[20%] ml-4' src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1607429725146.png" alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Unlimited Support: </h2>
                            <p>We will touch with you all the time. If any help needed you can contact with us through email, phone and live session.</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mr-2 hover:bg-rose-200 pt-2">
                        <img className='w-[20%] ml-4' src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623043713790.png" alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Offline Recordings: </h2>
                            <p>We will provide offline video when needed. This video will help to understand the topics more better and clear.</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mr-2 hover:bg-rose-200 pt-2">
                        <img className='w-[20%] ml-4' src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623043584898.png" alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Live Session: </h2>
                            <p>When needed we provide you the opportunity of live classes through google meet or zoom session weekly basis.</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl hover:bg-rose-200 pt-2">
                        <img className='w-[20%] ml-4' src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623043653417.png" alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Advance Course: </h2>
                            <p>After successfully completed our main course we provide you the opportunity of some advanced course.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
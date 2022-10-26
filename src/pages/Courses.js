import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoriesCart from '../shared/AllCategoriesCart';

const Courses = () => {

    const coursesData = useLoaderData();
    return (
        <div className='flex w-[92%] mx-auto my-10'>
            <div className='bg-slate-400 w-[20%]'>
                <h1>sidebar here</h1>
            </div>
            <div className='w-[80%] grid grid-cols-3 gap-8 ml-8'>
                {
                        coursesData.map(course => <AllCategoriesCart
                            key={course._id}
                            course={course}
                        ></AllCategoriesCart>)
                    }
            </div>
        </div>
    );
};

export default Courses;
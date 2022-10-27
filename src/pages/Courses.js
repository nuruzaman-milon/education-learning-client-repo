import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import AllCoursesCart from '../shared/AllCoursesCart';

const Courses = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const coursesData = useLoaderData();

    const hangleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div className='lg:flex w-[92%] mx-auto my-10'>
            <div className='bg-rose-200 lg:w-[20%] rounded-xl p-4 lg:p-2 mb-8 lg:mb-0'>
                <button onClick={hangleGoogleLogin} className='flex items-center btn btn-secondary btn-outline btn-sm my-4 mx-auto w-full'><FaGoogle></FaGoogle> <p className='ml-2'>Google Signin</p></button>
                <button className='btn btn-secondary btn-sm my-2 mx-auto w-full'><Link to='/course/0282e0e58a5c404fbd15261f11c2ab6a'>Python</Link></button>
                <button className='btn btn-secondary btn-sm my-2 mx-auto w-full'><Link to='/course/0282e0e58a5c404fbd15261f11c2ab6b'>React</Link></button>
                <button className='btn btn-secondary btn-sm my-2 mx-auto w-full'><Link to='/course/f69a695f037cd9484cecaea37ca71011'>Redux</Link></button>
                <button className='btn btn-secondary btn-sm my-2 mx-auto w-full'><Link to='/course/f69a695f037cd9484cecaea37ca71012'>Tailwind</Link></button>
                <button className='btn btn-secondary btn-sm my-2 mx-auto w-full'><Link to='/course/11468ed61aee84de492a8b04158a22f9'>Api</Link></button>
                <button className='btn btn-secondary btn-sm my-2 mx-auto w-full'><Link to='/course/11468ed61aee84de492a8b04158a22f0'>MongoDB</Link></button>
            </div>
            <div className='lg:w-[80%] grid lg:grid-cols-3 gap-8 lg:ml-8'>
                {
                        coursesData.map(course => <AllCoursesCart
                            key={course._id}
                            course={course}
                        ></AllCoursesCart>)
                    }
            </div>
        </div>
    );
};

export default Courses;
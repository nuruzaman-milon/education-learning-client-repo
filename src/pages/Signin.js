import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='flex my-10'>
            <img className='w-[50%] p-8' src="https://edmy-react.hibootstrap.com/images/register-img.png" alt="" />
            <div className='w-[50%] pr-6'>
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Signin</h3>
                    <form action="">
                        <div className="mt-4">
                            <div className="mt-4">
                                <p className='text-center text-red-600'>err</p>
                                <label className="block" htmlFor="email">Email</label>
                                <input type="email" placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <label name='password' className="block">Password</label>
                                <input type="password" placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>

                            <div className="flex">
                                <button className="w-full px-6 py-2 my-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Log In</button>
                            </div>
                            <div >
                                <label htmlFor="my-modal-3" className="cursor-pointer text-blue-600">forgot password?</label>
                            </div>
                            <div className="mt-4 text-grey-dark">
                                Don't have an account?
                                <Link to='/register' className="text-blue-600 hover:underline" href="#">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            );
};

            export default Signin;
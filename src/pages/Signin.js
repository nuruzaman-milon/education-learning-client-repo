import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Signin = () => {

    const [error, setError] = useState('');
    const { providerLogin, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const hangleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }
    return (
        <div className='flex my-10 items-center'>
            <div>
                <img className='w-[100%] p-8' src="https://edmy-react.hibootstrap.com/images/register-img.png" alt="" />
            </div>
            <div className='w-[50%] pr-6'>
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Signin</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <div className="mt-4">
                                <p className='text-center text-red-600'>{error}</p>
                                <label className="block" htmlFor="email">Email</label>
                                <input required type="email" name='email' placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <label name='password' className="block">Password</label>
                                <input required type="password" name='password' placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>

                            <div className="flex">
                                <button className="w-full my-4 text-white btn btn-sm btn-primary p-1">Log In</button>
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
                    <button onClick={hangleGoogleLogin} className='flex items-center btn btn-outline btn-secondary btn-sm btn-wide my-2'><FaGoogle></FaGoogle> <p className='ml-2'>Google Signin</p></button>
                    <button className='flex items-center btn btn-outline btn-secondary btn-sm btn-wide my-2'><FaGithub></FaGithub> <p className='ml-2'>Github Signin</p></button>
                </div>
            </div>
        </div>
    );
};

export default Signin;
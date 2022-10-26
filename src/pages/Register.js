import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {

    const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    //google signin
    const hangleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(e => console.error(e));
    }

 //create manual user
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.url.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateProfile(name, photoURL);
        })
        .catch(e => console.error(e))
    }

   const handleUpdateProfile = (name, photoURL) => {
    const profile = {
        displayName : name,
        photoURL : photoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(e=>console.error(e))
   }


    return (
        <div>
            <div className='flex my-10 items-center'>
                <div>
                    <img className='w-[100%] p-8' src="https://edmy-react.hibootstrap.com/images/register-img.png" alt="" />
                </div>
                <div className='w-[50%] pr-6'>
                    <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg">
                        <h3 className="text-2xl font-bold text-center">Register</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <div className="mt-4">
                                    <p className='text-center text-red-600'>err</p>
                                    <label className="block" htmlFor="email">Full Name</label>
                                    <input type="text" name='name' placeholder="Name"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="mt-4">
                                    <label className="block" htmlFor="email">Email</label>
                                    <input type="email" name='email' placeholder="Email"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="mt-4">
                                    <label name='password' className="block">Password</label>
                                    <input type="password" name='password' placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="mt-4">
                                    <label name='url' className="block">Photo Url</label>
                                    <input type="text" name='url' placeholder="url"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>

                                <div className="flex">
                                    <button className="w-full px-6 py-2 my-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
                                </div>

                                <div className="mt-2 text-grey-dark">
                                    Don't have an account?
                                    <Link to='/signin' className="text-blue-600 hover:underline" href="#">
                                        signin
                                    </Link>
                                </div>
                            </div>
                        </form>
                        <button onClick={hangleGoogleLogin} className='flex items-center btn btn-outline btn-secondary btn-sm btn-wide my-2'><FaGoogle></FaGoogle> <p className='ml-2'>Google Signin</p></button>
                        <button className='flex items-center btn btn-outline btn-secondary btn-sm btn-wide my-2'><FaGithub></FaGithub> <p className='ml-2'>Github Signin</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
    const data = useLoaderData();
    const { price, title, img } = data;
    const { user } = useContext(AuthContext);
    const notify = () => toast.success('You Successfully Placed Order.');


    return (
        <div className='w-[92%] mx-auto'>
            
            <div className="card bg-rose-100 shadow-xl py-6 px-6">
            <h1 className='text-center text-3xl font-bold mb-4'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <img className='w-[40%] rounded-xl' src={img} alt="Movie" />
                    <div>
                        <h2 className="card-title mb-2">{title}</h2>
                        <p className='mb-2'><strong>Total Price:</strong> ৳{price}</p>
                        <p className='mb-2'><strong>Deliver To:</strong> {user?.displayName}</p>
                        <p className='mb-2'><strong>Email To:</strong> {user?.email}</p>
                        <button onClick={notify} className="btn btn-secondary">Place Order</button>
                    </div>
                </div>
                {/* <div className="card-body">
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Place Order</button>
                    </div>
                </div> */}
            </div>
            <Toaster />
        </div>
    );
};

export default Checkout;
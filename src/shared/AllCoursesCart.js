import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const AllCategoriesCart = ({course}) => {

    console.log(course);
    const {_id, title, ratings, price, img, bestSeller } = course;
    // console.log(bestSeller);
    return (
        <div>
            <div className="card p-4 shadow-xl bg-[#E8B8C7] h-[420px] relative">
                <figure><img className='bg-white rounded-xl h-52 w-[100%] p-4' src={img} alt="Shoes" /></figure>
                <div className="card-body pt-3 px-2">
                    <h2 className="card-title">
                        {title}
                    </h2>
                        {bestSeller && <div className="badge badge-secondary">Best Seller</div>}
                
                    <div className="card-actions">
                        <div className="badge badge-outline">৳{price}</div>
                        <div className="badge badge-outline">Ratings: {ratings}</div>
                    </div>
                    <div className='flex justify-end absolute right-2 bottom-2'>
                        
                        <Link to={`/course/${_id}`}>
                            <button className='btn btn-sm bg-[#7cb1a2] border-none hover:bg-[#427c6c]'><p className='mr-1'>Details</p> <FaArrowCircleRight></FaArrowCircleRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategoriesCart;
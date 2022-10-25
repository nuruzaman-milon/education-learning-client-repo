import React from 'react';

const CategoriesCart = ({course}) => {

    const {title, ratings, price, img, bestSeller } = course;
    // console.log(title);
    return (
        <div>
            <div className="card p-4 shadow-xl bg-[#E8B8C7] h-[500px]">
                <figure><img className='bg-white rounded-xl h-72 w-[100%] p-4' src={img} alt="Shoes" /></figure>
                <div className="card-body pt-3 px-2">
                    <h2 className="card-title">
                        {title}
                    </h2>
                        <div className="badge badge-secondary">Best Seller</div>
                
                    <div className="card-actions">
                        <div className="badge badge-outline">৳{price}</div>
                        <div className="badge badge-outline">Ratings: {ratings}</div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='btn btn-sm bg-[#7cb1a2] border-none hover:bg-[#427c6c]'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCart;
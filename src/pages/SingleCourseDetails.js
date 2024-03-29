import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const SingleCourseDetails = () => {
    const singleDetailsData = useLoaderData();
    console.log(singleDetailsData);
    const { _id, bestSeller, courseFor, details, img, instructor, price, ratings, requirements, title } = singleDetailsData;
    const splitCourseFor = courseFor.split(", ");
    const splitRequirements = requirements.split(", ")
    const ref = React.createRef();
    return (
        <div>
            <div className='bg-rose-200 mt-2'>
                <div className='lg:flex items-center w-[92%] mx-auto py-7 lg:py-12 justify-between'>
                    <p className='font-bold text-3xl'>{title}</p>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className='flex lg:items-center mt-5 lg:mt-0 btn btn-secondary' onClick={toPdf}><FaFilePdf></FaFilePdf><p className='ml-2'>Download pdf</p></button>}
                    </Pdf>
                    {/* <button className='flex items-center btn btn-secondary'><FaFilePdf></FaFilePdf><p className='ml-2'>Download pdf</p></button> */}
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl mt-6 lg:w-[92%] mx-auto">
                <img className='lg:w-[40%] h-[100%] p-5' src={img} alt="Album" />
                <div ref={ref} className="card-body">
                    <div className="card-actions justify-center lg:justify-end">
                        {bestSeller && <div className="badge badge-secondary py-1">Best Seller</div>} <br />
                        <div className="badge badge-secondary">Ratings: {ratings}</div>
                    </div>
                    <h2 className='text-lg'><strong>Instructor:</strong> {instructor}</h2>
                    <h2><strong>Course Fee:</strong> ৳{price}</h2>
                    <p><strong>Who this course is for:</strong> {splitCourseFor.map(data => <li>{data}</li>)}</p>
                    <p><strong>Requirements:</strong> {splitRequirements.map(data => <li>{data}</li>)}</p>
                    <p><strong>Details: <br /></strong> {details}</p>
                    <div className="card-actions justify-center lg:justify-end">
                        <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Get premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseDetails;
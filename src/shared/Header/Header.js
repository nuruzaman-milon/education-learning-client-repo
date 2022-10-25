import React from 'react';
import { Link } from 'react-router-dom';
import { FaStarAndCrescent, FaSun } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='dark:bg-black dark:text-white'>
      <div className="navbar w-[92%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
              <li><a>Item 4</a></li>
              <li><a>Item 5</a></li>
              <li><a>Item 6</a></li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold "><img className='w-9 dark:bg-white rounded-full' src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-tree-logo-design-simple-hexagon-shape-png-image_5705992.png" alt="" /><p className='ml-1'>Edemy</p></Link>
        </div>
        <div className="navbar-center">
          <ul className="hidden lg:flex menu menu-horizontal p-0">
            <li className='hover:underline decoration-red-600 underline-offset-2'><Link to=''>Home</Link></li>
            <li className='hover:underline decoration-red-600 underline-offset-2'><Link to=''>Courses</Link></li>
            <li className='hover:underline decoration-red-600 underline-offset-2'><Link to=''>FAQ</Link></li>
            <li className='hover:underline decoration-red-600 underline-offset-2'><Link to=''>Blog</Link></li>
            <li className='hover:underline decoration-red-600 underline-offset-2'><Link to=''>Signin</Link></li>
            <li className='hover:underline decoration-red-600 underline-offset-2'><Link to=''>Register</Link></li>
          </ul>

        </div>
        <div className="navbar-end">

          <button>
            <FaStarAndCrescent></FaStarAndCrescent>
          </button>

          <button>
            <FaSun></FaSun>
          </button>

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-2">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
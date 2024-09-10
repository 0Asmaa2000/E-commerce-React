
// import React, { useContext, useState } from 'react';
// // import logo from '../../assets/images/freshcart-logo.svg';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import Dropdown from './../Dropdown/Dropdown';
// // import logo1 from '../../assets/images/freshcart-logo.svg'
// import { UserContext } from '../../Context/UserContext';
// import { CartContext } from './../../Context/CartContext';

// export default function Navbar() {
//   const { UserLogin, setUserLogin } = useContext(UserContext);
//   let {setnumberItems,numberItems}=useContext(CartContext)

//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   function SignOut() {
//     localStorage.removeItem('userToken');
//     setUserLogin(null);
//     navigate('/login');
//   }

//   return (

// <nav className="border-gray-200 bg-slate-100 font-semibold text-gray-700 fixed top-0 right-0 left-0 z-50">
//   <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl p-4">
//     <div className="flex items-center w-full md:w-auto">
//       <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
//         <h1 className='text-xl text-gray-700 font-bold'>
//           <i className="fa-solid fa-cart-shopping text-blue-800 p-2"></i> Fresh Cart
//         </h1>
//       </Link>
//       <div className="md:hidden flex items-center ml-auto">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           aria-controls="navbar-default"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <i className="fas fa-bars"></i>
//         </button>
//       </div>
//     </div>

//     <div className={`md:flex flex-grow items-center ${isMenuOpen ? 'block' : 'hidden'} md:!block md:relative md:justify-center`}>
//       {UserLogin && (
//         <div className="flex flex-col md:flex-row justify-center gap-2 md:space-x-4">
//           <ul className="flex flex-col md:flex-row justify-center gap-2 md:space-x-4">
//             <li><NavLink to="" activeClassName="text-blue-600" className="text-sm">Home</NavLink></li>
//             <li><NavLink to="Cart" activeClassName="text-blue-600" className="text-sm relative">Cart <div className='absolute top-[-12px] right-[-12px] bg-blue-800 rounded-full hidden md:flex items-center justify-center p-2 text-white size-5 '>{numberItems+1}</div></NavLink></li>
//             <li><NavLink to="Products" activeClassName="text-blue-600" className="text-sm">Products</NavLink></li>
//             <li><Dropdown /></li>
//             <li><NavLink to="Brands" activeClassName="text-blue-600" className="text-sm">Brands</NavLink></li>
//             <li><NavLink to="wishlist" activeClassName="text-blue-600" className="text-sm">WishList</NavLink></li>
//           </ul>
//         </div>
//       )}
//     </div>

//     <div className="hidden md:flex items-center space-x-6 cursor-pointer rtl:space-x-reverse">
//       <div className="icons flex gap-4  text-gray-700">
//         <i className="fab fa-facebook hover:text-slate-500"></i>
//         <i className="fab fa-linkedin hover:text-slate-500"></i>
//         <i className="fab fa-youtube hover:text-slate-500"></i>
//         <i className="fab fa-tiktok hover:text-slate-500"></i>
//         <i className="fab fa-twitter hover:text-slate-500"></i>
//       </div>
//       {UserLogin ? (
//         <span onClick={SignOut} className="text-sm text-blue-800 font-semibold hover:underline cursor-pointer">SignOut</span>
//       ) : (
//         <div className="links flex gap-4">
//           <Link to="login" className="text-sm text-blue-600 hover:underline cursor-pointer">Login</Link>
//           <Link to="register" className="text-sm text-blue-600 hover:underline cursor-pointer">Register</Link>
//         </div>
//       )}
//     </div>
//   </div>

//   {/* {isMenuOpen && (
//     <div id="navbar-default" className="fixed top-0 right-0 left-0 bg-slate-200 p-4 z-50 md:hidden transition-transform duration-700 ease-in-out">
//       <div className="flex flex-col gap-4">
//         {UserLogin ? (
//           <>
//             <NavLink to="" activeClassName="text-blue-600" className="text-sm">Home</NavLink>
//             <NavLink to="Cart" activeClassName="text-blue-600" className="text-sm">Cart</NavLink>
//             <NavLink to="Products" activeClassName="text-blue-600" className="text-sm">Products</NavLink>
//             <Dropdown />
//             <NavLink to="Brands" activeClassName="text-blue-600" className="text-sm">Brands</NavLink>
//             <NavLink to="wishlist" activeClassName="text-blue-600" className="text-sm">WishList</NavLink>
//           </>
//         ) : (
//           <>
//             <Link to="login" className="text-sm text-blue-600 hover:underline cursor-pointer">Login</Link>
//             <Link to="register" className="text-sm text-blue-600 hover:underline cursor-pointer">Register</Link>
//           </>
//         )}
//         <i className="fa-solid fa-moon text-yellow-100 text-2xl"></i>
//       </div>
//     </div>
//   )} */}
// </nav>





//   );
// }
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Dropdown from './../Dropdown/Dropdown';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from './../../Context/CartContext';

export default function Navbar() {
  const { UserLogin, setUserLogin } = useContext(UserContext);
  let { setnumberItems, numberItems } = useContext(CartContext);

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function SignOut() {
    localStorage.removeItem('userToken');
    setUserLogin(null);
    navigate('/login');
  }

  return (
    <nav className="border-gray-200 bg-slate-100 font-semibold text-gray-700 fixed top-0 right-0 left-0 z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl p-4">
        <div className="flex items-center w-full md:w-auto">
          <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <h1 className='text-xl text-gray-700 font-bold'>
              <i className="fa-solid fa-cart-shopping text-blue-800 p-2"></i> Fresh Cart
            </h1>
          </Link>
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        <div className={`md:flex flex-grow items-center ${isMenuOpen ? 'block' : 'hidden'} md:!block md:relative md:justify-center`}>
          {UserLogin && (
            <div className="flex flex-col md:flex-row justify-center gap-2 md:space-x-4">
              <ul className="flex flex-col md:flex-row justify-center gap-2 md:space-x-4">
                <li><NavLink to="" activeClassName="text-blue-600" className="text-sm">Home</NavLink></li>
                <li><NavLink to="Cart" activeClassName="text-blue-600" className="text-sm relative">Cart
                  <div className='absolute top-[-12px] right-[-12px] bg-blue-800 rounded-full size-5 hidden md:flex items-center justify-center p-2 text-white '>
                    {numberItems + 1}
                  </div>
                </NavLink></li>
                <li><NavLink to="Products" activeClassName="text-blue-600" className="text-sm">Products</NavLink></li>
                <li><Dropdown /></li>
                <li><NavLink to="Brands" activeClassName="text-blue-600" className="text-sm">Brands</NavLink></li>
                <li><NavLink to="wishlist" activeClassName="text-blue-600" className="text-sm">WishList</NavLink></li>
              </ul>
            </div>
          )}
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-0 left-0 bg-slate-200 p-4 z-50`}>
          <div className="flex flex-col gap-4">
            {UserLogin ? (
              <>
                <NavLink to="" activeClassName="text-blue-600" className="text-sm">Home</NavLink>
                <NavLink to="Cart" activeClassName="text-blue-600" className="text-sm">Cart</NavLink>
                <NavLink to="Products" activeClassName="text-blue-600" className="text-sm">Products</NavLink>
                <Dropdown />
                <NavLink to="Brands" activeClassName="text-blue-600" className="text-sm">Brands</NavLink>
                <NavLink to="wishlist" activeClassName="text-blue-600" className="text-sm">WishList</NavLink>
                <span onClick={SignOut} className="text-sm text-blue-800 font-semibold hover:underline cursor-pointer">SignOut</span>
              </>
            ) : (
              <>
                <Link to="login" className="text-sm text-blue-600 hover:underline cursor-pointer">Login</Link>
                <Link to="register" className="text-sm text-blue-600 hover:underline cursor-pointer">Register</Link>
              </>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 cursor-pointer rtl:space-x-reverse">
          <div className="icons flex gap-4 text-gray-700">
            <i className="fab fa-facebook hover:text-slate-500"></i>
            <i className="fab fa-linkedin hover:text-slate-500"></i>
            <i className="fab fa-youtube hover:text-slate-500"></i>
            <i className="fab fa-tiktok hover:text-slate-500"></i>
            <i className="fab fa-twitter hover:text-slate-500"></i>
          </div>
          {UserLogin ? (
            <span onClick={SignOut} className="text-sm text-blue-800 font-semibold hover:underline cursor-pointer">SignOut</span>
          ) : (
            <div className="links flex gap-4">
              <Link to="login" className="text-sm text-blue-600 hover:underline cursor-pointer">Login</Link>
              <Link to="register" className="text-sm text-blue-600 hover:underline cursor-pointer">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

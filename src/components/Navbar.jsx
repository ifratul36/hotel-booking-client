// import { useContext } from 'react'
// import { AuthContext } from '../providers/AuthProvider'
// import { Link } from 'react-router-dom'
// import logo from '../assets/logo.jpg'
// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext)
//   return (
//     <div className='navbar  bg-base-100 shadow-sm container px-4 mx-auto'>
//       <div className='flex-1'>
//         <Link to='/' className='flex gap-2 items-center'>
//           <img className='w-auto h-12' src={logo} alt='' />
//           <span className=' text-lg font-bold'>HOTEX</span>
//         </Link>
//       </div>
//       <div className='flex-none'>
//         <ul className='menu menu-horizontal px-1'>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/mybooks'>My Booking</Link>
//           </li>

//           {!user && (
//             <li>
//               <Link to='/login'>Login</Link>
//             </li>
//           )}
//         </ul>

//         {user && (
//           <div className='dropdown dropdown-end z-50'>
//             <div
//               tabIndex={0}
//               role='button'
//               className='btn btn-ghost btn-circle avatar'
//             >
//               <div title={user?.displayName} className='w-10 rounded-full'>
//                 <img
//                   referrerPolicy='no-referrer'
//                   alt='User Profile Photo'
//                   src={user?.photoURL}
//                 />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
//             >
//               <li>
//                 <Link to='/myrooms' className='justify-between'>
//                  All Rooms
//                 </Link>
//               </li>
//               <li>
//                 <Link to='/maps'>Maps</Link>
//               </li>
//               <li>
//                 <Link to='/contact'>contact</Link>
//               </li>
//               <li className='mt-2'>
//                 <button
//                   onClick={logOut}
//                   className='bg-gray-200 block text-center'
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar





import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='navbar fixed top-0 left-0 w-full bg-base-100 shadow-sm px-4 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-12' src={logo} alt='Logo' />
          <span className='text-lg font-bold'>HOTEX</span>
        </Link>
        <div className='hidden md:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/mybooks'>My Booking</Link>
            </li>
              <li>
                <Link to='/maps'>Maps</Link>
              </li>
            {!user && (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>
        
        

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img referrerPolicy='no-referrer' alt='User Profile' src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            <div className='dropdown md:hidden'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/mybooks'>My Booking</Link>
            </li>
        </div>
              <li>
                <Link to='/myrooms' className='justify-between'>All Rooms</Link>
              </li>
              <li>
                <Link to='/maps'>Maps</Link>
              </li>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li className='mt-2'>
                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

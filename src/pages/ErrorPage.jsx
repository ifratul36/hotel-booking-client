import { Link, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirects to the home page
  };

  return (
    // <section className='bg-white '>
    //   <div className='container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12'>
    //     <div className='wf-ull lg:w-1/2'>
    //       <p className='text-sm font-medium text-gray-500'>404 error</p>
    //       <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
    //         Page not found
    //       </h1>
    //       <p className='mt-4 text-gray-500 dark:text-gray-400'>
    //         Sorry, the page you are looking for doesnt exist.Here are some
    //         helpful links:
    //       </p>

    //       <div className='flex items-center mt-6 gap-x-3'>
    //         <button className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 '>
    //           <svg
    //             xmlns='http://www.w3.org/2000/svg'
    //             fill='none'
    //             viewBox='0 0 24 24'
    //             strokeWidth='1.5'
    //             stroke='currentColor'
    //             className='w-5 h-5 rtl:rotate-180'
    //           >
    //             <path
    //               strokeLinecap='round'
    //               strokeLinejoin='round'
    //               d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
    //             />
  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    {/* Background GIF/Image */}
    <div className="relative">
      <img
        src="https://media.giphy.com/media/26gYKiUdk7NLiVnlG/giphy.gif"
        alt="404 Not Found"
        className="w-full max-w-lg rounded-lg shadow-xl"
      />
    </div>
    
    {/* Error Message */}
    <h1 className="text-6xl font-bold mt-6">404</h1>
    <p className="text-xl mt-2">Oops! The page you are looking for doesn't exist.</p>
    
    {/* Back to Home Button */}
    <button
      onClick={handleBackToHome}
      className="btn border-none mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-full md:w-auto"
    >
      Back to Home
    </button>
  </div>
  )
}

export default ErrorPage

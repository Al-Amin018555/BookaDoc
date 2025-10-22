import { Link } from 'react-router';
import errorPage from '../../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col py-10'>
            <img className='w-1/3 md:w-2/3 mx-auto mb-3 rounded-2xl' src={errorPage} alt="" />
            <div className='text-center space-y-3'>
                <h2 className='font-extrabold text-2xl md:text-4xl text-[#FF0000]'>404 - Page Not Found</h2>
                <p>Oops! The page you're looking for doesn't exist</p>
                <Link to='/'> <button className="rounded-lg cursor-pointer py-3 px-6 text-white font-bold bg-[#176AE5]">Go Back Home</button> </Link>

            </div>

        </div >
    );
};

export default ErrorPage;
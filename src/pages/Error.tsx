import { MdOutlineError } from "react-icons/md";
import { Link } from "react-router-dom";

type ErrorProps = {
  title: string;
  message: string;
}

const Error = ({ title, message}: ErrorProps) => {
  return (
    <div className='p-4'>
      <div className="flex flex-col justify-around lg:flex-row">
        <div>
          <h1><MdOutlineError className="inline-block mr-2" />{ title }</h1>
          <p className='text-md'>{ message }</p>
        </div>
        <div className="mt-8 md:mt-4 lg:mt-0">
          <Link
            to='/'
            className='inline-block px-4 py-2 mt-4 text-sm text-white bg-blue-500 rounded-md'
          >
            Return to Home
          </Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default Error
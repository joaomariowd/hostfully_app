import appLogo from '/logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="p-2 bg-primary text-white shadow-md shadow-neutral-300">
      <div className='w-24'>
        <Link to='/'>
          <img className='border border-white rounded-md p-1 bg-primary-dark' src={appLogo} alt="App Logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header;
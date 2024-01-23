import appLogo from '/logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="p-4 bg-gray-500 text-white">
      <div className='w-24'>
        <Link to='/'>
          <img src={appLogo} alt="App Logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header;
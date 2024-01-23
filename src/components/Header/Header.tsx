import appLogo from '/logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="p-4 bg-primary text-white shadow-md shadow-neutral-300">
      <div className='w-24'>
        <Link to='/'>
          <img src={appLogo} alt="App Logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header;
import appLogo from '/logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="p-2 bg-primary text-white shadow-md shadow-neutral-300 border-b border-0 border-primary-dark">
      <div className='w-20'>
        <Link to='/'>
          <img className='rounded-md p-2 border bg-primary-light border-gold' src={appLogo} alt="App Logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header;
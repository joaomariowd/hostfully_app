import { Link } from 'react-router-dom';
import appLogo from '/logo.svg';
import { Property } from '../../@types';
import properties from '../../../data/properties.json';
import { useState } from 'react';
import clsx from 'clsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-start p-2 text-white border-0 border-b shadow-md bg-primary shadow-neutral-300 border-primary-dark">
      <div className='w-20'>
        <Link to='/'>
          <img className='p-2 border rounded-md bg-primary-light border-gold' src={appLogo} alt="App Logo" />
        </Link>
      </div>
      <nav>
        <ul className="sm:flex">
          <li
            className="relative p-4 text-lg cursor-pointer sm:mr-4 hover:text-primary-dark hover:font-bold"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
          >
            Properties
            <ul className={clsx(
              "absolute left-0 z-50 mt-2 space-y-2 text-sm font-normal rounded-md text-primary-dark bg-paper",
                { 
                  'block': isOpen,
                  'hidden': !isOpen,
                }
              )}
            >
              {properties.map((property: Property) => (
                <li key={property.id} className='w-full rounded hover:bg-primary-light hover:text-neutral-600 active:text-gold'>
                  <Link
                    to={`/properties/${property.id}`}
                    onClick={() => setIsOpen(false)}
                    className='block w-full h-full p-3 min-w-36'
                  >
                    {property.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
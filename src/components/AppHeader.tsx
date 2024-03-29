import {useState, useEffect} from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router'
import './appHeader.css'

const AppHeader: React.FC = () => {
  const [screenName, setScreenName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const parts = path.split('/');
      const capitalizedScreenName = parts[1] ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1) : '';
      setScreenName(capitalizedScreenName);
    };

    window.addEventListener('popstate', handleLocationChange);

    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleBack = () => {
    navigate('/home')
  }

  return (
    <div className='appHeaderBody'>
      <CaretLeft size={32} onClick={handleBack} />
      <p className='location'>{screenName}</p>
    </div>
  )
}

export default AppHeader
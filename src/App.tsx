import './index.css'
import Profile from './components/Profile'
import Browse from './components/Browse'
import backgroundImage from './assets/images/screen.png'

function App() {

  return (
    <div className='h-screen flex flex-col justify-between' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Profile />
      <Browse />
    </div>
  )
}

export default App

import './index.css'
import Profile from './components/Profile'
import Browse from './components/Browse'
import backgroundImage from './assets/images/screen.png'

function App() {

  return (
    <div className='h-screen flex flex-col gap-6 justify-between' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Profile />
      <Browse />
    </div>
  )
}

export default App

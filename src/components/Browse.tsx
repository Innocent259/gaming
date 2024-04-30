import leftFlower from '../assets/images/other flower-l.png';
import rightFlower from '../assets/images/other flower-r.png'
import otherButton from '../assets/images/other button.png'

const Browse: React.FC = () => {
  return (
    <div className='z-50 flex justify-between bg-cyan-500 relative'>
      <div className='bg-no-repeat bg-left w-1/6' style={{ backgroundImage: `url(${leftFlower})` }}>
      </div>
      <div className='flex items-center justify-center h-36 bg-transparent'>
        <button className='absolute left-1/2 -top-6 transform -translate-x-1/2'>
          <img src={otherButton} alt="Button " />
        </button>
        <ul className='flex flex-col gap-2'>
          <li>
            <a href="" className='flex items-center gap-2'>
              <img src="https://images.pexels.com/photos/18959222/pexels-photo-18959222/free-photo-of-battleships-sailing-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Warships" className='w-10 h-10' />
              <h2>Warships</h2>
            </a>
          </li>
          <li>
            <a href="" className='flex gap-2 items-center'>
              <img src="https://images.pexels.com/photos/18959222/pexels-photo-18959222/free-photo-of-battleships-sailing-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Warships" className='w-10 h-10' />
              <h2>Warships</h2>
            </a>
          </li>
        </ul>
      </div>
      <div className='bg-no-repeat bg-right-bottom w-1/4' style={{ backgroundImage: `url(${rightFlower})` }}>
      </div>
    </div>
  );
}
export default Browse;

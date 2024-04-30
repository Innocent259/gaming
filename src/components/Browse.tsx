import leftFlower from '../assets/images/other flower-l.png';
import rightFlower from '../assets/images/other flower-r.png'
import otherButton from '../assets/images/other button.png'

const Browse: React.FC = () => {
  return (
    <div className='z-50 flex justify-between bg-cyan-500 relative'>
      <div className='bg-no-repeat bg-left w-1/6' style={{ backgroundImage: `url(${leftFlower})` }}>
      </div>
      <div className='flex items-center justify-center pb-2 bg-transparent'>
        <button className='absolute left-1/2 -top-6 transform -translate-x-1/2 cursor-pointer'>
          <img src={otherButton} alt="Button" />
        </button>
        <ul className='flex flex-col gap-2 pt-8'>
          <li className='px-4'>
            <a href="" className='flex items-center gap-2'>
              <img src="https://images.pexels.com/photos/18959222/pexels-photo-18959222/free-photo-of-battleships-sailing-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Warships" className='w-10 h-10 rounded-lg' />
              <div className='py-1'>
                <h2 className='text-xs font-extrabold text-shadow-1'>WARSHIPS</h2>
                <p className='uppercase text-[8px]'>In the ultimate PVP, sink the enemy navy to win the pot!</p>
              </div>
            </a>
          </li>
          <li className='px-4'>
            <a href="" className='flex items-center gap-2'>
              <img src="https://wallpapers.com/images/featured/cute-little-puppies-jggd1xqev9439k6k.jpg" alt="Warships" className='w-10 h-10 rounded-lg' />
              <div className='py-1'>
                <h2 className='text-xs font-extrabold text-shadow-1'>CROWD FAVORITE</h2>
                <p className='text-[8px]'>FROM CUTE PUPPIES TO SPORTING GOATs, PREDICT THE CROWD'S FAVORITE AND WIN!</p>
              </div>
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

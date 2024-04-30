import leftFlower from '../assets/images/other flower-l.png';
import rightFlower from '../assets/images/other flower-r.png'
import otherButton from '../assets/images/other button.png'

const Browse: React.FC = () => {
  return (
    <div className='z-50 flex justify-between bg-cyan-500 relative'>
      <div className='bg-no-repeat bg-left w-8' style={{ backgroundImage: `url(${leftFlower})` }}>
      </div>
      <div className='flex items-center justify-center w-10/12  h-36 bg-transparent'>
        <button className='absolute left-1/2 -top-6 transform -translate-x-1/2'>
          <img src={otherButton} alt="Button " />
        </button>
      </div>
      <div className='bg-no-repeat bg-right-bottom w-8' style={{ backgroundImage: `url(${rightFlower})` }}>
      </div>
    </div>
  );
}
export default Browse;

import rectangle from '../assets/images/Rectangle 5.png';
import title from '../assets/images/title.png';
import flower from '../assets/images/icons (5).png';
import { FaCoins } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { data } from '../assets/data';

const Top: React.FC = () => {
    return (
        <div>
            <div className='flex justify-between items-center bg-[#ddd] p-1'>
                <div className='flex gap-1 items-center text-2xl text-[#007bff]'>
                    <IoIosArrowBack />
                    <h2>Back</h2>
                </div>
                <div className='bg-[#28a745] rounded-full p-2 w-8 h-8 flex items-center justify-center'>
                    <p className='text-white font-semibold'>M</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='relative'>
                    <img src={rectangle} alt='Rectangle' />
                    <img src={title} alt='Profile' className='absolute top-1/3' />
                </div>
                <div className='bg-cyan-500 p-4 text-white flex justify-between'>
                    {data.map(item => (
                        <div key={item.id} className='flex gap-4 pt-9'>
                            <img src={item.profile[0].image} alt="Profile picture" className='w-[80px] h-[80px] border-4 rounded-full border-green-600' />
                            <div className='pt-0'>
                                <p className='text-shadow-1 font-bold text-sm'>{item.profile[0].username}</p>
                                <div>
                                    {item.profile[0].highlights.map((high, index) => (
                                        <div key={index} className='grid grid-cols-2 gap-1 text-center text-[8px]'>
                                            <span className='bg-gray-700 rounded-sm px-1'>
                                                <h1 className=''>Total Matches</h1>
                                                <p className='font-bold'>{high.totalMatches}</p>
                                            </span>
                                            <span className='bg-gray-700 rounded-sm px-1'>
                                                <h1>Competitive</h1>
                                                <p className='font-bold'>{high.competitive}</p>
                                            </span>
                                            <span className='bg-gray-700 rounded-sm px-1'>
                                                <h1>Total Wins</h1>
                                                <p className='font-bold'>{high.totalWins}</p>
                                            </span>
                                            <span className='bg-gray-700 rounded-sm px-1'>
                                                <h1>Achievements</h1>
                                                <p className='font-bold'>{high.achievements}</p>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='bg-yellow-500 w-1/4 rounded-lg flex flex-col gap-1'>
                        <div className='bg-black mt-2 flex items-center place-content-center'>
                            <span className='text-yellow-400 text-sm pr-2'>
                                <FaCoins />
                            </span>
                            <p>+250</p>
                        </div>
                        <h2 className='text-center text-xs px-1'>Invite your friends and earn <span className='text-sm font-bold text-green-700 uppercase'>$Koko</span></h2>
                        <div className='flex px-1'>
                            <img src={flower} alt="Flower Image" className='w-2' />
                            <button className='bg-blue-800 text-[5px] italic px-2 ml-2 border-black border-[1px] rounded-sm hover:bg-blue-500 cursor-pointer'>Invite friends</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top

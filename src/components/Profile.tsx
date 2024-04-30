import rectangle from '../assets/images/Rectangle 5.png';
import title from '../assets/images/title.png';
import ranking from '../assets/images/ranking.png';
import earning from '../assets/images/earning.png';
import share from '../assets/images/share.png';
import pearl from '../assets/images/pearl.png';
import flower from '../assets/images/icons (5).png';
import { CiCirclePlus } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { data } from '../assets/data';

const Profile: React.FC = () => {

    return (
        <div className='flex flex-col gap-2 z-10'>
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
            <div className='px-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 relative place-content-center text-white'>
                        <div className='w-1/2 bg-slate-500 bg-opacity-50 p-2'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <h1 className='uppercase text-xl font-extrabold underline'>Rankings</h1>
                                        <img src={ranking} alt="Ranking" className='w-4' />
                                        <button className='text-xl text-white font-extrabold cursor-pointer'>
                                            <CiCirclePlus />
                                        </button>
                                    </span>
                                </div>
                                {
                                    data.map(item => (
                                        <div key={item.id} className='flex flex-col gap-2 uppercase'>
                                            <div className='flex gap-2'>
                                                <img src={item.ranking[0].url} alt="Game 1" className='w-10 h-10' />
                                                <div className='flex flex-col'>
                                                    <h1 className='text-sm'>{item.ranking[0].title}</h1>
                                                    <p className='text-xs'>top {item.ranking[0].score}%</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-2'>
                                                <img src={item.ranking[1].url} alt="Rank 2" className='w-10 h-10' />
                                                <div>
                                                    <h1 className='text-sm'>{item.ranking[1].title}</h1>
                                                    <p className='text-xs'>top {item.ranking[1].score}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-2'>
                                                <img src={item.ranking[2].url} alt="Rank 3" className='w-10 h-10' />
                                                <div>
                                                    <h1 className='text-sm'>{item.ranking[2].title}</h1>
                                                    <p className='text-xs'>{item.ranking[2].score}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-1/2 bg-slate-500 bg-opacity-50 p-2 flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <span className='flex gap-2 items-center'>
                                    <h1 className='uppercase text-xl font-extrabold underline'>Earnings</h1>
                                    <img src={earning} alt="Earnings" className='w-4' />
                                </span>
                                <button className='text-xl font-extrabold cursor-pointer'>
                                    <CiCirclePlus />
                                </button>
                            </div>
                            <span className='m-auto'>
                                <h1 className='text-center align-middle text-xl text-yellow-500 font-bold'>$9,885</h1>
                            </span>
                        </div>
                        <button className='absolute w-28 flex align-middle -bottom-4 cursor-pointer'>
                            <img src={share} alt="Twitter button" />
                        </button>
                    </div>
                    <div className=' bg-slate-500 bg-opacity-50 p-2 mt-4'>
                        <div className='flex justify-between items-center'>
                            <span className='flex gap-2 items-center'>
                                <h1 className='uppercase text-xl text-white font-extrabold underline'>Pearls</h1>
                                <img src={pearl} alt="Pearl" className='w-6' />
                            </span>
                            <button className='text-xl text-white font-extrabold cursor-pointer'>
                                <CiCirclePlus />
                            </button>
                        </div>
                        <span className='pt-4 flex flex-col gap-2'>
                            <p className='text-center italic text-white font-semibold'>Collect pearls to participate in Kokomo's points system and enjoy multiple benefits</p>
                            <p className='text-yellow-500 uppercase text-xs font-bold'>Make sure to collect your daily pearls to qualify for the weekly $Koko lottery!</p>
                        </span>
                    </div>
                    <div className='bg-slate-500 bg-opacity-70 p-2'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-xl text-white font-extrabold underline'>YOUR KOKOMO NFTs</h1>
                                <button className='text-white text-xl font-extrabold cursor-pointer'>
                                    <CiCirclePlus />
                                </button>
                            </div>
                            <div className='flex justify-between w-8/12 mx-auto text-center'>
                                <div className='flex flex-col gap-1 items-center'>
                                    <span className='w-10 h-10 border-2 border-teal-900 rounded-full'>
                                        <img src="https://cdn.imxrarity.io/0x6a48058d26244b4f52ae22fad059e20606909e82.png" alt="Roller NFT" />
                                    </span>
                                    <h2 className='uppercase text-xs font-extrabold text-shadow'>High Roller</h2>
                                </div>
                                <div className='flex flex-col gap-1 items-center'>
                                    <span className='w-10 h-10 border-2 border-teal-900 rounded-full'>
                                        <img src="https://www.ggpoker.com/wp-content/uploads/2022/07/Logo_HighRollers-1024x1024-1-1024x1024.png" alt="Roller NFT" />
                                    </span>
                                    <h2 className='uppercase text-xs text-black font-bold text-shadow'>Top-rated</h2>
                                </div>
                                <div className='flex flex-col gap-1 items-center'>
                                    <span className='w-10 h-10 border-2 border-teal-900 rounded-full'>
                                        <img src="https://www.ggpoker.com/wp-content/uploads/2022/07/Logo_HighRollers-1024x1024-1-1024x1024.png" alt="Roller NFT" />
                                    </span>
                                    <h2 className='uppercase text-xs text-black font-bold text-shadow'>Sense</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

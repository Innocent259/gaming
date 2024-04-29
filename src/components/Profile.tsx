import rectangle from '../assets/images/Rectangle 5.png';
import title from '../assets/images/title.png';
import profile from '../assets/images/profile.png';
import ranking from '../assets/images/RANKINGS.png';
import earning from '../assets/images/EARNINGS.png';
import share from '../assets/images/share.png';
import pearl from '../assets/images/pearl.png';
import NFT from '../assets/images/NFT.png';
import UI from '../assets/images/UI & Logo (1).png';
import { CiCirclePlus } from "react-icons/ci";

const Profile: React.FC = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div>
                <div className='flex justify-between items-center bg-[#ddd]'>
                    <img src={UI} alt="UI design" />
                </div>
                <div className='flex flex-col'>
                    <div className='relative'>
                        <img src={rectangle} alt='Rectangle' />
                        <img src={title} alt='Profile' className='absolute top-1/3' />
                    </div>
                    <div>
                        <img src={profile} alt='profile' />
                    </div>
                </div>
            </div>

            <div className='px-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 relative place-content-center'>
                        <div className='w-1/2 bg-slate-500 opacity-70  relative p-2'>
                            <img src={ranking} alt="Ranking" className='' />
                            <button className='absolute top-2 right-2 text-xl text-white font-extrabold'>
                                <CiCirclePlus />
                            </button>
                        </div>
                        <div className='w-1/2 bg-slate-500 opacity-70 relative p-2'>
                            <img src={earning} alt="Earning" className='' />
                            <button className='absolute top-2 right-2 text-xl text-white font-extrabold'>
                                <CiCirclePlus />
                            </button>
                        </div>
                        <button className='absolute w-28 flex align-middle -bottom-4'>
                            <img src={share} alt="Twitter button" />
                        </button>
                    </div>
                    <div className=' bg-slate-500 opacity-70 p-2 mt-4'>
                        <div className='flex justify-between items-center'>
                            <span className='flex gap-2'>
                                <h1 className='uppercase text-xl text-white font-extrabold underline'>Pearls</h1>
                                <img src={pearl} alt="Pearl" className='w-6' />
                            </span>
                            <button className='text-xl text-white font-extrabold'>
                                <CiCirclePlus />
                            </button>
                        </div>
                        <span className='pt-4 flex flex-col gap-2'>
                            <p className='text-center italic text-white font-semibold'>Collect pearls to participate in Kokomo's points system and enjoy multiple benefits</p>
                            <p className='text-yellow-500 uppercase text-xs font-bold'>Make sure to collect your daily pearls to qualify for the weekly $Koko lottery!</p>
                        </span>
                    </div>
                    <div className='bg-slate-500 opacity-70 p-2'>
                        <img src={NFT} alt="NFT" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile

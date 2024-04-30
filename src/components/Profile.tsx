import Top from './ProfileTop';
import ProfileElements from './ProfileElements';

const Profile: React.FC = () => {

    return (
        <div className='flex flex-col gap-2'>
           <Top />
            <ProfileElements />
        </div>
    )
}

export default Profile

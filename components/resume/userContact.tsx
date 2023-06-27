import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
interface UserContactProps {

}
const UserContact: React.FC<UserContactProps> = () => {
    return (
        <div className="border-[#1A302F] bg-[#1A302F] rounded-lg p-6 ">
            <div className="flex items-center">
                <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                    <MailIcon style={{ fontSize: 18 }} />
                </div>
                <div className="pl-3 text-white text-base" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                    rajendrann2022@srishakthi.<br></br>ac.in</div>
            </div>
            <div className="flex items-center pt-3">
                <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                    <CallIcon style={{ fontSize: 18 }} />
                </div>
                <div className="pl-3 text-white text-base ">+91 6374138100</div>
            </div>
            <div className="flex pt-3 items-center">
                <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                    <LocationOnIcon style={{ fontSize: 18 }} />
                </div>
                <div className="pl-3 text-white text-base ">Sivagangai - 630561, TN, India</div>
            </div>
            <div className="flex items-center pt-3 overflow-auto max-w-[95%]">
                <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                    <LinkedInIcon style={{ fontSize: 18 }} />
                </div>
                <div className="pl-3 text-white text-sm ">https://www.linkedin.com/in /rajendran-n-7b8064281/</div>
            </div>
        </div>
    )
}
export default UserContact
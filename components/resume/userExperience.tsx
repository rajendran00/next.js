import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

interface UserExperienceProps {

}
const UserExperience: React.FC<UserExperienceProps> = () => {

    function ExperienceContent({ title, subtitle }: { title: string, subtitle: string }) {
        return <div className="my-2 pl-4">
            <li className=''>
                {title}
            </li>
            <div className="text-sm pl-5 text-[#6CBDBD]">
                {subtitle}
            </div>
        </div>
    }

    return (
        <div className="">
            <div className="flex items-center gap-[1px]">
                <div className=" border w-[3px] h-4 rounded border-[#77CF92] bg-[#77CF92]"></div>
                <div className=" border w-[3px] h-5 rounded border-[#77CF92] bg-[#77CF92]"></div>
                <div className='bg-black w-6 h-6 p-[2px] rounded flex justify-center items-center'>
                    <BusinessCenterOutlinedIcon style={{ fontSize: 18, color: "white" }} />
                </div>
                <div className="text-lg font-bold pl-3 flex pt-[2px]">EXPERIENCE </div>
            </div>
            <div className="text-md font-semibold pl-3 pt-1">
                Sporfy India Private Limited (March 2022 - Present )
            </div>
            <ExperienceContent title={"Sotware Development Engineer"} subtitle={"July 2022 - Present"} />
            <ExperienceContent title={"Frontend Developer "} subtitle={"March 2022 - Present"} />
            <ExperienceContent title={"Web Application Developer"} subtitle={"January 2023 - Present"} />
        </div>
    )
}
export default UserExperience
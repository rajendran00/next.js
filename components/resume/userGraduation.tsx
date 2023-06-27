import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
interface UserGraduationProps {

}
const UserGraduation: React.FC<UserGraduationProps> = () => {

    function EducationSection({ degree, place }: { degree: string, place: string }) {
        return <div className="pl-4">
            <li className='text-sm font-semibold pt-1'>
                {degree}
            </li>
            <div className="text-sm pl-4">
                {place}
            </div>
        </div>
    }

    return (
        <div className="">
            <div className="flex items-center gap-[1px]">
                <div className=" border w-[3px] h-4 rounded border-[#77CF92] bg-[#77CF92]"></div>
                <div className=" border w-[3px] h-5 rounded border-[#77CF92] bg-[#77CF92]"></div>
                <div className='bg-black w-6 h-6 p-[2px] rounded flex justify-center items-center'>
                    <SchoolOutlinedIcon style={{ fontSize: 18, color: "white" }} />
                </div>
                <div className="text-lg font-bold pl-3 flex pt-[2px]">ACADEMIC CREDENTIALS </div>
            </div>
            <EducationSection degree={"B.Tech IT (2018-2022) - 7.5 CGPA"} place={"Sri shakthi Institute Of Engineering And Technology, coimbatore."} />
            <EducationSection degree={"12th (2017-2018) - 84%"} place={"St Justin’s Matriculation Higher Secondary School, sivagangai."} />
            <EducationSection degree={"10th (2015-2016) -  96%"} place={"St Justin’s Matriculation Higher Secondary School, sivagangai."} />

        </div>
    )
}
export default UserGraduation
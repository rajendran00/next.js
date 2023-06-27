import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
interface UserProjectsProps {

}
const UserProjects: React.FC<UserProjectsProps> = () => {

    function Title({ params }: { params: string }) {
        return <div className="pl-4">
            <div className="text-base font-semibold pt-1">
                {params}
            </div>
        </div>
    }

    function Content({ title, content }: { title: string, content: string }) {
        return <div className="pl-4">
            <li className='text-sm '>
                {title ? <span className='text-base font-semibold'>{title} - </span> : <span className='text-base'>{title}</span>} {content}
            </li>
        </div>
    }


    return (
        <div className="w-full">
            <div className="flex items-center gap-[1px]">
                <div className=" border w-[3px] h-4 rounded border-[#77CF92] bg-[#77CF92]"></div>
                <div className=" border w-[3px] h-5 rounded border-[#77CF92] bg-[#77CF92]"></div>
                <div className='bg-black w-6 h-6 p-[2px] rounded flex justify-center items-center'>
                    <FactCheckOutlinedIcon style={{ fontSize: 18, color: "white" }} />
                </div>
                <div className="text-lg font-bold pl-3 flex pt-[2px]">PROJECTS </div>
            </div>
            <Title params={'Primal:'} />
            <Content title={'PCHF-web'} content={'involves revamp of primal finance limited and various features to let the user aware about the details of primal capital & Housing Finance Ltd. (React with Next,js - Aug 2022 to Sep 2022)'} />
            <Content title={'Shakti-web'} content={'involves landing page banner, customer details(PAN, Aadhar, etc..,) and various verification services requesting through login authentication (React with Next,js - Oct 2022 to Dec 2022)'} />
            <Content title={'Employment-mf-web'} content={'involves employment details  verification and validation through the service requests. (React with Next,js - Apr 2023 to July 2023)'} />
            <Title params={'Experience in sporfy:'} />
            <Content title={'Coupons'} content={'For offers discount to the users to get them more activated and the organisations to contribute more events.(angular, Mar 2022 - Apr 2022)'} />
            <Content title={'Hot in town'} content={'Hot in town feature which is usefull for update the sporty users about the recent activities in their nearby areas(angular, may 2022 - June 2022) and the hot in town feature for hedge which is useful for organisation side to update the activities and the booking details.(next/vue.js , July-2023).'} />
            <Content title={'Lockers'} content={'To provide lockers for the users in slot booked areas and it is easy to create or edit the locker by the facility and they can update the terms and conditions of them.(react , Jan 2023 - Feb 2023)'} />
            <Content title={'Live Queue'} content={'To track the users of their booked slots and the payments via digital or manual. (React, Mar 2023)'} />
            <Title params={'Learning'} />
            <Content title={''} content={'Javascript and advanced backend program.'} />
        </div>
    )
}
export default UserProjects
interface UserDetailsProps {

}
const UserDetails: React.FC<UserDetailsProps> = () => {
    return (
        <div className="pt-4">
            <div className="flex gap-8">
                {/* <div className="w-28 h-28 flex-none rounded-full overflow-hidden border-2 border-black p-1">
                    <div className="border border-black rounded-full overflow-hidden">
                        <img className="w-full h-full" src='/assets/images/webp/new_avatar.webp' />
                    </div>
                </div> */}
                <div className="grow">
                    <div className="text-3xl timesNewRoman uppercase">
                        Rajendran N
                    </div>
                    <div className="text-base text-[#6CBDBD] font-semibold">
                        Software Development Engineer
                    </div>
                    <div className="text-base">
                        Innovative Developer with 1+ years of hands-on experience in designing web applications. Well-versed in Agile methodologies and client approachings. Dedicated to developing creative solutions to meet business goals and requirements.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserDetails
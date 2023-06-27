interface AboutLoginProps {
    userType: string,
    changeUserType: Function
}
const AboutLogin: React.FC<AboutLoginProps> = ({
    userType,
    changeUserType
}) => {
    return (
        <div className=" p-8">
            <div className="text-4xl font-bold text-white">
                {userType == "Login" ? "Create New Account" : "Login"}
            </div>
            <div className="text-md pt-4 text-white">
                {userType == "Login" ? "Already Registered? " : ""}<span className={` ${userType == "Login" ? "hover:underline hover:text-orange-500 cursor-pointer underline-offset-8" : ""} `} onClick={() => { userType == "Login" ? changeUserType("Sign in to continue") : null }}>{userType}</span>
            </div>
            <div className="border border-white w-[10%] h-1 mt-20 bg-white"></div>

            <div className="text-white text-xs pt-12">Looking for an easy way to create a professional-looking resume and you can download instantly.</div>

            <div className="flex pt-12">
                <div className="border border-orange-500 bg-orange-500 py-2 px-4 rounded-full text-white text-sm ">Learn More</div>
            </div>
        </div>
    )
}
export default AboutLogin
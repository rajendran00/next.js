import { useRouter } from "next/router"
import UserDetails from "../../components/resume/userDetails"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AboutLogin from "../../components/login/about";
interface LoginPageProps {
}
const LoginPage: React.FC<LoginPageProps> = () => {
    const router = useRouter()

    const [inputName, setInputName] = useState("")
    const [inputPhone, setInputPhone] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [validEmail, setValidEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [userType, setUserType] = useState("Login")
    const [loginDetails, setLoginDetails] = useState<Map<string, string>>(new Map<string, string>())
    function handleNameChange(value: string) {
        setInputName(value)
    }
    function handlePhoneChange(value: string) {
        const pattern = /^[0-9/]*$/;
        if (pattern.test(value) && value.length <= 10) {
            setInputPhone(value)
        }

    }
    function handleEmailChange(value: string) {
        const validEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        setInputEmail(value)
        if (validEmail.test(value)) {
            setValidEmail(value)
        }
        else {
            setValidEmail("")
        }
    }
    function handlePasswordChange(value: string) {
        setInputPassword(value)
    }
    function togglePassword() {
        setShowPassword(!showPassword)
    }
    function enableSignUp() {
        if (inputName != "" && validEmail != "" && (inputPhone != "" && inputPhone.length == 10) && inputPassword != "") {
            return true
        }
        else {
            return false
        }
    }
    function enableLogIn() {
        if ((validEmail != "") && (inputPassword != "")) {
            return true
        }
        else {
            return false
        }
    }

    function loginVerification() {
        let value = ""
        if (loginDetails.get(validEmail) == undefined) {
            value = "invalidEmail"
        }
        else if (loginDetails.get(validEmail) != inputPassword) {
            value = "invalidPassword"
        }
        else if (loginDetails.get(validEmail) == inputPassword) {
            value = "validDetails"
        }
        return (value)

    }
    function changeUserType() {
        setUserType("Sign in to continue")
    }


    function toCreateUser() {
        setUserType("Sign in to continue")
        let temp = loginDetails
        temp.set(validEmail, inputPassword)
        setLoginDetails(temp)
        setInputEmail("")
        setInputPassword("")
    }
    const [errorMessage, setErrorMessage] = useState("")
    function toLogInUser() {
        if (loginVerification() == "validDetails") {
            router.push('/resume')
        }
        else {
            setErrorMessage(loginVerification())
        }
    }

    return (
        <div className="w-[100%] bg-blue-300 h-screen relative">

            <img className="w-[100%] h-screen bg-black" src="/assets/images/jpeg/background.jpeg"></img>
            <div className="text-black text-3xl absolute top-[10%] md:top-16 left-[15%] right-[15%] md:right-0 md:left-20 ">
                <div className="flex items-center gap-2">
                    <SendOutlinedIcon style={{ fontSize: 24, color: "white" }} />
                    <div className="text-xl font-bold text-white">
                        Create Your Own Resume
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 h-[80%] pt-8">
                    <div className="hidden md:block">
                        <AboutLogin userType={userType} changeUserType={() => { changeUserType() }} />
                    </div>
                    <div className="px-0 sm:px-12 md:px-12 lg:px-32 ">
                        <div className="border rounded-xl py-8 px-2 sm:px-4">
                            <div className="text-2xl font-bold text-white flex justify-center ">
                                {userType == "Login" ? "Login" : "Sign In"}
                            </div>
                            <div className="flex justify-center">
                                <div className="">
                                    {userType == "Login" ? (
                                        <div className="">
                                            <div className="pt-4 pb-1 text-white text-sm sm:text:md md:text-xl ">Name</div>
                                            <TextField
                                                sx={{
                                                    background: "white", border: "black", width: "100%"
                                                }}

                                                autoComplete="off"
                                                placeholder="name"
                                                size="small"
                                                value={inputName}
                                                onChange={(event) => handleNameChange(event.target.value)}
                                            >
                                            </TextField>
                                            <div className="pt-4 pb-1 text-white text-sm sm:text:md md:text-xl">Phone</div>
                                            <TextField
                                                sx={{
                                                    background: "white", border: "black", width: "100%"
                                                }}
                                                autoComplete="off"
                                                placeholder="phone"
                                                size="small"
                                                value={inputPhone}
                                                onChange={(event) => handlePhoneChange(event.target.value)}
                                            >
                                            </TextField>
                                        </div>
                                    ) :
                                        null
                                    }
                                    <div className="pt-4 pb-1 text-white text-sm sm:text:md md:text-xl">Email</div>
                                    <TextField
                                        sx={{
                                            background: "white", border: "black", width: "100%"
                                        }}
                                        className="helperText outlineStyle"
                                        autoComplete="off"
                                        placeholder="email"
                                        helperText={errorMessage == "invalidEmail" ? "enter a valid email" : ""}
                                        size="small"
                                        value={inputEmail}
                                        onChange={(event) => handleEmailChange(event.target.value)}
                                    >

                                    </TextField>
                                    <div className="pt-4 pb-1 text-white text-sm sm:text:md md:text-xl">Password</div>
                                    <TextField
                                        sx={{
                                            background: "white", border: "black"
                                        }}
                                        className="helperText"
                                        autoComplete="off"
                                        placeholder="password"
                                        helperText={errorMessage == "invalidPassword" ? "Incorrect password" : ""}
                                        size="small"
                                        type={showPassword ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: (
                                                <IconButton
                                                    onClick={togglePassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            )
                                        }}
                                        value={inputPassword}
                                        onChange={(event) => handlePasswordChange(event.target.value)}
                                    >
                                    </TextField>
                                    <div className="flex justify-center">
                                        <div className="flex pt-10 cursor-pointer">
                                            <div className={`border ${userType == "Login" ? enableSignUp() ? 'border-orange-500 bg-orange-500' : 'border-gray-400 bg-gray-400'
                                                : enableLogIn() ? 'border-orange-500 bg-orange-500' : 'border-gray-400 bg-gray-400'} py-2 px-8 
                                        rounded-full text-white text-sm hover:underline underline-offset-2`} onClick={() => {
                                                    userType == "Login" ?
                                                        enableSignUp() ? toCreateUser() : null :
                                                        enableLogIn() ? toLogInUser() : null
                                                }}>{userType == "Login" ? "Sign Up" : "Login"}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default LoginPage
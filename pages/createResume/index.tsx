import { useRouter } from "next/router"
import UserDetails from "../../components/resume/userDetails"
interface CreateResumeProps {
}
const CreateResume: React.FC<CreateResumeProps> = () => {
    const router = useRouter()
    function navigateToResume() {
        router.push(`/resume`)
    }
    return (
        <div className="flex justify-center">
            <div className="w-[75%] border" onClick={() => {
                navigateToResume()
            }}>
                welcome
                {/* <UserDetails /> */}
            </div>
        </div>
    )
}
export default CreateResume
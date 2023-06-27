import PsychologyIcon from '@mui/icons-material/Psychology';
import DiamondIcon from '@mui/icons-material/Diamond';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
interface UserSkillsProps {

}
const UserSkills: React.FC<UserSkillsProps> = () => {
    const skills = [
        "Next.js",
        "Angular",
        "Redux",
        "Nuxt/vue.js",
        "Typescript",
        "Python",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "Storybook",
        "GIT",
        "Logical and reasoning",
        "Reusable",
        "Code optimisation",
        "Responsive Web Design",

    ]

    function SkillsChip() {
        return (<div className="flex flex-wrap gap-2 pt-2 pl-2">
            {skills.map((each) => {
                return <div className="border bg-[#4C5F61] rounded border-[#4C5F61] px-2 py-1 text-xs text-white">
                    {each}
                </div>
            })}
        </div>);
    }

    function QualitiesSection({ content }: { content: string }) {
        return <div className=" pl-2 py-1 ">
            <li className='text-sm text-white'>
                {content}
            </li>
        </div>
    }

    function LanguagesSection({ title, content }: { title: string, content: string }) {
        return <div className=" pl-2 py-1 ">
            <div className="text-sm text-white">
                <span className='font-semibold'>{title}</span> - <span>{content}</span>
            </div>
        </div>
    }

    return (
        <div className='w-full border-[#1A302F] bg-[#1A302F] rounded-lg p-6'>
            <div className="pb-8">
                <div className="flex pb-2">
                    <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                        <PsychologyIcon style={{ fontSize: 18 }} />
                    </div>
                    <div className="pl-3 text-white text-base flex items-center">SKILLS </div>
                </div>
                <SkillsChip />
            </div>
            <div className='pb-6'>
                <div className="flex pb-2">
                    <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                        <DiamondIcon style={{ fontSize: 18 }} />
                    </div>
                    <div className="pl-3 text-white text-base flex items-center">QUALITIES  </div>
                </div>
                <QualitiesSection content={"Hands-on experience in 5+ websites which is in live with 1L+ download"} />
                <QualitiesSection content={"Capable of driving team and giving them knowledge for better results."} />
                <QualitiesSection content={"Pixel perfect Ul with Reusable components and responsiveness."} />
                <QualitiesSection content={"Solving problems from understanding the root cause"} />

            </div>
            <div className='pb-8'>
                <div className="flex pb-2">
                    <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                        <GitHubIcon style={{ fontSize: 18 }} />
                    </div>
                    <div className="pl-3 text-white text-base flex items-center">GITHUB</div>
                </div>
                <div className="text-sm text-white pl-2">
                    https://github.com/rajendran00
                </div>
            </div>
            <div className='pb-8'>
                <div className="flex pb-2">
                    <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                        <LanguageIcon style={{ fontSize: 18 }} />
                    </div>
                    <div className="pl-3 text-white text-base flex items-center">LANGUAGES</div>
                </div>
                <LanguagesSection title={'English'} content={'Professional working proficiency'} />
                <LanguagesSection title={'Tamil'} content={'Native or bilingual proficiency'} />
            </div>
            {/* <div className='pb-8'>
                <div className="flex pb-2">
                    <div className='bg-white w-6 h-6 p-1 flex justify-center items-center rounded'>
                        <LoyaltyIcon style={{ fontSize: 18 }} />
                    </div>
                    <div className="pl-3 text-white text-base flex items-center">INTERESTS</div>
                </div>
                <div className="text-sm text-white font-semibold">
                    Arts and adventure
                </div>
                <div className="text-xs text-white font-semibold">
                    https://github.com/jayaram-karunakaran/
                </div>
            </div> */}
        </div>
    )
}
export default UserSkills
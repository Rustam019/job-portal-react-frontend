import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import Profile from "../TalentProfile/Profile"
import { profile } from "../Data/TalentData"
import RecomendTalent from "../TalentProfile/RecomendTalent"


const TalentProfilePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins']">
            <Link className = "p-4 not-odd:my-5 inline-block" to="/find-talent">
                <Button leftSection ={<IconArrowLeft size={20}/>} className="!text-bright-sun-400" variant="light" >Back</Button>
            </Link>
    
            <div className="flex gap-5">
                <Profile {...profile}/>  
                <RecomendTalent/>              
            </div>
        </div>
    )
}

export default TalentProfilePage
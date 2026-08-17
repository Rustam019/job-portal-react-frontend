import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import JobDesc from "../JobDesc/Job"
import RecommendedJob from "../JobDesc/RecommendedJob"


const JobDescPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins']">
        
            <Link className = "p-4 not-odd:my-5 inline-block" to="/find-jobs">
                <Button leftSection ={<IconArrowLeft size={20}/>} className="!text-bright-sun-400" variant="light" >Back</Button>
            </Link>
    
            <div className="flex gap-5 justify-around">  
                <JobDesc/>  
                <RecommendedJob/>        
            </div>
        </div>
    )
}

export default JobDescPage


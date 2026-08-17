import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import ApplyJobComp from "../ApplyJob/ApplyJobComp"

const ApplyJobPage = () => {
    return (
        <div>
            <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins']">
                <Link className="p-4 not-odd:my-5 inline-block" to="/jobs">
                    <Button leftSection={<IconArrowLeft size={20} />} className="!text-bright-sun-400" variant="light" >Back</Button>
                </Link>
                <ApplyJobComp/>
            </div>
        </div>
    )
}

export default ApplyJobPage

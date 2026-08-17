import { Divider } from "@mantine/core"
import PostedJob from "../PostedJob/PostedJob"
import PostedJobDesc from "../PostedJob/PostedJobDesc"

const PostedJobPage = () => {
    return (
        <div>
            <div className="min-h-[90vh] flex bg-mine-shaft-850 font-['Poppins'] px-4">
                <Divider size="xs" />
                <div className="flex gap-10 w-[80%]">
                    <PostedJob />
                    <PostedJobDesc/>
                </div>
            </div>
        </div>
    )
}

export default PostedJobPage

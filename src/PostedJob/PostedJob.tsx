import { Tabs } from "@mantine/core"
import { activeJobs, drafts } from "../Data/PostedJob"
import PostedJobCard from "./PostedJobCard"

const PostedJob = () => {
    return (
        <div className="w-[40%] mt-5">
            <div className="text-2xl font-semibold mb-5">Jobs</div>
            <div>
                <Tabs autoContrast color="yellow" variant="pills" defaultValue="active">
                    <Tabs.List className="flex mb-5">
                        <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                        <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="active">
                        <div className="flex flex-col gap-5">
                            {
                                activeJobs.map((job: any, index: number) => <PostedJobCard key={index}{...job} />)
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="draft">
                        <div className="flex flex-col gap-5">
                            {
                                drafts.map((job: any, index: number) => <PostedJobCard key={index}{...job} />)
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
            </div>

    )
}

export default PostedJob

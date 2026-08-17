import { Badge, Tabs } from "@mantine/core";
import Job from "../JobDesc/Job";
import TalentCard from "../FindTalent/TalentCard";
import { talents } from "../Data/Data";

const PostedJobDesc = () => {
    return (
        <div className="mt-5 w-[90%] px-5">
            <div className="text-xl font-semibold flex items-center">Software Engineer<Badge variant="light" color="blue">Badge</Badge></div>
            <div className="font-medium text-mine-shaft-300 mb-5"> New York, United States</div>
            <div>
                <Tabs className="[&_button]:!text-lg  mb-5 font-semibold [&_button[data-active='true']]:!text-bright-sun-400" variant="outline" radius='lg' defaultValue="overview">
                    <Tabs.List>
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Jobs</Tabs.Tab>
                        <Tabs.Tab value="invited">Employees</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview" className="[&>div]:w-full"><Job edit /></Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        <div className="mt-10 flex flex-wrap gap-5">
                            {
                                talents.map((company: any, index: number) => <TalentCard key = {index} {...company} posted />)
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">Invited</Tabs.Panel>
                </Tabs>

            </div>
        </div>
    )
}

export default PostedJobDesc;

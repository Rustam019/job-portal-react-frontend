import { TextInput } from "@mantine/core"
import { Avatar } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJobs = () => {
    return (
        <div className='py-22 flex items-center  px-16'>
            <div className='w-[45%] flex flex-col gap-3'>
                <div className="text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400 leading-tight">
                    Find your <span>dream</span> <span>job</span> with us</div>
                <div className="text-lg text-mine-shaft-200">Good life begins with a good company. Start explore thousands of jobs in one place.</div>
                <div className="flex gap-3 mt-5">
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Title" placeholder="Software Engineer" />
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="Full Time" />
                    <div className=" flex item-center justify-center h-full w-20 bg-bright-sun-400 rounded-lg text-mine-shaft-100 p-2 cursor-pointer hover:bg-bright-sun-500">
                        <IconSearch className="h-[85%] w-[85%]" /></div>
                </div>
            </div>
            <div className='w-[55%] flex items-center justify-center'>
                <div className='w-[30rem] relative'>
                    <img src="/dreamJob.jpg" alt="boy" />
                    <div className="absolute -right-10 top-[50%] w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">10k+ got job</div>
                        <Avatar.Group>
                            <Avatar src="/dreamJob.jpg" />
                            <Avatar src="/dreamJob.jpg" />
                            <Avatar src="/dreamJob.jpg" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="absolute border top-[10%] -left-30 border-bright-sun-400 rounded-lg p-2 pt-0 backdrop-blur-md flex flex-col gap-2">
                        <div className="mt-5 flex gap-2 item-center ">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-700 rounded-lg">
                                <img src="./Companies/google.png" alt="boy" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">New York</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-around text-mine-shaft-100  flex gap-2 mt-4 text-sm">
                            <span>1 day ago</span>
                            <span>120 applicants</span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default DreamJobs

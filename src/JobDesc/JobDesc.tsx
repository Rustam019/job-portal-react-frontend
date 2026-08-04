import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark, IconMapPin } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { card, desc, skills } from '../Data/JobDescData'
//@ts-ignore
import DOMPurify from 'dompurify'

const JobDesc = () => {
    const data = DOMPurify.sanitize(desc);
    return (
        <div className='w-2/3 mx-2'>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/Icons/Meta.png`} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className="font-semibold text-2xl">Software Engineer 3</div>
                        <div className="text-lg text-mine-shaft-300">Google &#x2022; 3 days ago &#x2022; 48 Applicants </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <Link to="/apply-job">
                        <Button className="!text-bright-sun-400" size="sm" variant="light" >Apply </Button>
                    </Link>
                    <IconBookmark className="cursor-pointer text-bright-sun-400" stroke={1.5} />
                </div>
            </div>
            <Divider my="xl" />
            <div className="flex justify-between">
                {
                    card.map((item: any, index: number) =>
                        <div key={index} className="flex flex-col items-center gap-1">
                            <ActionIcon className='!h-12 !w-12 !text-bright-sun-400' variant="light" radius="xl" aria-label="Settings">
                                <item.icon className="!h-4/5 !w-4/5" style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <div className='text-sm text-mine-shaft-300'>{item.name}</div>
                            <div className="font-semibold">{item.value}</div>
                        </div>)
                }
            </div>
            <Divider my="xl" />
            <div>
                <div>Required Skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        skills.map((skill: any, index: number) =>
                            <ActionIcon key={index} className='!h-fit !font-medium !text-sm !w-fit !text-bright-sun-400' p={"xs"} variant="light" radius="xl" aria-label="Settings">
                                {skill}
                            </ActionIcon>
                        )
                    }

                </div>
            </div>
            <Divider my="xl" />
            <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_*:text-mine-shaft-300] [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_li]:marker:text-bright-sun-400 [&_li]:mb-1" dangerouslySetInnerHTML={{ __html: data }}>
            </div>
            <Divider my="xl" />
            <div>
                <div className="text-xl font-semibold mb-5">About the Company</div>
                <div className="flex justify-between mb-3">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-8" src={`/Icons/Meta.png`} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <div className="font-medium text-lg">Google</div>
                            <div className="text-mine-shaft-300">10K+ Employees </div>
                        </div>
                    </div>
                        <Link to="">
                            <Button className="!text-bright-sun-400" variant="light" >Company Page </Button>
                        </Link>
                    </div>
                    <div className='text-mine-shaft-300 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos ipsum aut a eligendi qui deleniti corrupti, ipsa laborum nemo sunt adipisci perferendis! Ratione delectus sit a assumenda alias, error laboriosam fugit dolorem perferendis dolore nulla! Ad, officiis facere? Dicta.</div>
                </div>
            </div>
    )
}

export default JobDesc

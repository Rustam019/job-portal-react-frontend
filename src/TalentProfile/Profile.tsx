import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import ExpCard from "./ExpCard"
import CertiCard from "./CertiCard"

const Profile = (props: any) => {
    return (
        <div className="w-2/3">
            <div className="relative">
                <img className="rounded-t-2xl h-50 w-full mx-1" src="/Profile/banner.jpg" alt="" />
                <img className="h-48 w-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950  border-8" src="/avatar.png" alt="" />
            </div>
            <div className="px-3 mt-30">
                <div className="text-3xl font-semibold flex justify-between">{props.name} <Button className="!text-bright-sun-400" variant="light">Message</Button></div>
                <div className="text-xl flex gap-1 items-center" ><IconBriefcase className="h=5 w-5" stroke={1.5} />{props.role} &bull; {props.company}</div>
                <div className="flex gap-1 text-xs items-center !text-mine-shaft-400">
                    <IconMapPin className="h=5 w-5" stroke={1.5} /> {props.location}
                </div>
            </div>
            <Divider size="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">About</div>
                <div className="text-sm text-mine-shaft-300 text-justify">
                    {props.about}
                </div>
            </div>
            <Divider mx={"xs"} my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        props.skills.map((skill: any, index: any) =>
                            <div key={index} className="bg-bright-sun-100 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-600 px-3 py-1">{skill}</div>

                        )}
                </div>
            </div>
            <Divider size="xs" my="xl" />
            <div className="px-5">
                <div className="text-2xl font-semibold mb-5">Experience</div>
                <div className="flex flex-col gap-8">
                    {
                        props.experience.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
                    }
                </div>
            </div>
            <Divider size="xs" my="xl" />
            <div className="px-5">
                <div className="text-2xl font-semibold mb-3">Certifications</div>
                <div className="flex flex-col gap-8">
                    {
                        props.certifications.map((certi: any, index: any) => <CertiCard key={index} {...certi} />)
                    }
                </div>
            </div>
            <Divider size="xs" my="xl" />
        </div>
    )
}

export default Profile

import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react"
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core"
import { Link } from "react-router";
import { useDisclosure } from "@mantine/hooks";

const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div className=" bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl
        hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 w-90">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar size="lg" className="h-7" src={`/${props.image}.png`} alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300">{props.role}  &bull; {props.company} </div>
                    </div>
                </div>
                <IconHeart className="!text-mine-shaft-200 cursor-pointer stroke={1.5}" />
            </div>
            <div className="flex gap-2">
                {props.topSkills?.map((skill: any, index: any) => (
                    <div key={index} className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-lg text-xs [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400">
                        <div>{skill}</div>
                    </div>
                ))}
            </div>

            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.about}</Text>

            <Divider size="sm" mx='md' className="!text-mine-shaft-700" />
            <div className="flex justify-between">
                <div className="font-semibold !text-mine-shaft-200">{props.expectedCtc}</div>
                <div className="flex gap-1 text-xs items-center !text-mine-shaft-400">
                    <IconMapPin className="h=5 w-5" stroke={1.5} /> {props.location}
                </div>
            </div>
            <Divider size="sm" mx='md' className="!text-mine-shaft-700" />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                <Link to="/talent-profile">
                    <Button className="!text-bright-sun-400" variant="outline" fullWidth>Profile</Button>
                </Link>
                <div>
                    {props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth />} className="!text-bright-sun-400" variant="light" fullWidth>Schedule</Button> : <Button className="!text-bright-sun-400" variant="light" fullWidth>Message</Button>}
                </div>
            </div>
            <Modal opened={opened} onClose={close} title="Schedue Interview" centered>
                {/* Modal content */}
            </Modal>

        </div>
    )
}

export default TalentCard

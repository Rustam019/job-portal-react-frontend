import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react"
import { Avatar,Indicator } from "@mantine/core"
import NavLinks from "./NavLinks"

const Header = () => {
    return (
        <div className='bg-mine-shaft-950 w-full bg-black h-20 text-white flex justify-between px-6 items-center'>
            <div className='flex gap-1 items-center text-bright-sun-400'>
                <IconAnchor className="h-8 w-10" stroke={2.5} />
                <div className="text-3xl font-semiBold">JobHook</div>
            </div>
            {NavLinks()}
            <div className="flex gap-5 items-center">
                <div className="flex gap-2 items-center">
                    <div>Marshal</div>
                    <Avatar src="sh.jpg" alt="it's me" />
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="bright-sun.4" size={8}  offset={6} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>
            </div>

        </div>
    )
}

export default Header

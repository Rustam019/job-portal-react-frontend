import { ActionIcon } from '@mantine/core'
import { IconBookmark, IconExternalLink } from '@tabler/icons-react'


const CompanyCard = (props: any) => {
    return (
        <div>
            <div className="flex justify-between w-full bg-mine-shaft-900 rounded-lg p-2">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-900 rounded-md">
                        <img className="h-7" src={`/Icons/${props.name}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold">{props.name}</div>
                        <div className="text-xs text-mine-shaft-300">{props.employees}</div>
                    </div>
                </div>
                <ActionIcon color="gray" variant="subtle">
                    <IconExternalLink className='h-5 w-5 text-bright-sun-400' />
                </ActionIcon>
            </div>
        </div>
    )
}

export default CompanyCard

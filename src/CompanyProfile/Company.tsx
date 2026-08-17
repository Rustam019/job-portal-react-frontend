import { Button, Divider } from "@mantine/core"
import { IconMapPin } from "@tabler/icons-react"
import { Avatar } from '@mantine/core';
import { Tabs } from '@mantine/core';
import AboutComp from "./AboutComp";
import CompanyJob from "./CompanyJob";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
  return (
    <div className="w-[75%]">
      <div className="relative">
        <img className="rounded-t-2xl h-50 w-full mx-1" src="/Profile/banner.jpg" alt="" />
        <img className="p-2 h-36 w-36 rounded-3xl -bottom-1/4 absolute left-5 border-mine-shaft-950 bg-mine-shaft-950 border-8" src="./Icons/Meta.png" alt="" />
      </div>
      <div className="px-3 mt-20">
        <div className="text-3xl font-semibold flex justify-between">Google<Avatar.Group>
          <Avatar src="avatar.png" />
          <Avatar src="avatar.png" />
          <Avatar src="avatar.png" />
          <Avatar>+10k</Avatar>
        </Avatar.Group></div>
        <div className="flex gap-1 text-lg items-center !text-mine-shaft-400">
          <IconMapPin className="h=5 w-5" stroke={1.5} /> New York, USA
        </div>
      </div>
      <Divider size="xs" my="xl" />
      <div>
        <Tabs className="[&_button]:!text-lg  mb-5 font-semibold [&_button[data-active='true']]:!text-bright-sun-400" variant="outline" radius='lg' defaultValue="first">
          <Tabs.List>
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
          <Tabs.Panel value="jobs"><CompanyJob/></Tabs.Panel>
          <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>
        </Tabs>
      </div>
    </div>
  )

}

export default Company

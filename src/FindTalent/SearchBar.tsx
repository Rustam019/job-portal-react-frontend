import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/Data";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return (
        <div className="flex px-5 py-8">
            <div className="flex items-center">
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><IconUserCircle size={20} /> </div>
                 <Input className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name" />
            </div>
            {
                searchFields.map((item, index) =>
                    <>
                        <div key={index} className="w-1/5">
                            <MultiInput {...item} />
                        </div>
                        <Divider mr="xs" size="sm" orientation="vertical" />
                    </>)
            }
            <div className="w-1/5 [&_.mantine-RangeSlider-label]:!translate-y-10">
                <div className="flex  text-sm justify-between">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA </div>
                </div>
                <RangeSlider color="yellow" size="xs" value={value} onChange={setValue}
                    labelTransitionProps={{
                        transition: 'skew-down',
                        duration: 150,
                        timingFunction: 'linear',
                    }} />
            </div>
        </div>
    );
}
export default SearchBar
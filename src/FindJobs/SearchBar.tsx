import { Divider, RangeSlider } from "@mantine/core";
import { dropDownData } from "../Data/Data";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return (
        <div className="flex px-5 py-8">
            {
                dropDownData.map((item, index) =>
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
                    }}  />
            </div>
        </div>
    );
}
export default SearchBar
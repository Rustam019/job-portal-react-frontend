import { work } from "../Data/Data"
import { Avatar } from '@mantine/core';

const Working = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100 ">How it
                <span className="text-bright-sun-400"> works </span></div>
            <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-10" >
                Explore diverse job opportunities tailored to your skills. Start your career jouney today !</div>
            <div className="flex justify-between items-center px-16 gap-5">
                <div className="relative">
                    <img className="w-[30rem]" src="/Working/Girl.png" alt="girl" />
                    <div className="top-[15%] right-2 absolute backdrop-blur-md mt-5 w-36 flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1">
                        <Avatar className="!h-16 !w-16" src="avatar.png" alt="it's me" />
                        <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete your profile</div>
                        <div className="text-mine-shaft-300 text-xs">70% Completed</div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        work.map((item, index) =>
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-bright-sun-300 rounded-full">
                                    <img className="w-10 h-10" src={`/Working/${item.name}.png`} alt={`${item.name}.png`} />
                                </div>
                                <div>
                                    <div className="text-xl font-semibold text-mine-shaft-200">{item.name}</div>
                                    <div className="text-mine-shaft-300">{item.desc}</div>
                                </div>
                            </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Working

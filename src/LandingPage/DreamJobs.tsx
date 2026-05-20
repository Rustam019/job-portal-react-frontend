
const DreamJobs = () => {
    return (
        <div className='py-22 flex items-center  px-16'>
            <div className='w-[45%] flex flex-col gap-3'>
                <div className="text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400 leading-tight">
                    Find your <span>dream</span> <span>job</span> with us</div>
                <div className="text-lg text-mine-shaft-200">Good life begins with a good company. Start explore thousands of jobs in one place.</div>
                <div></div>
            </div>
            <div className='w-[55%] flex items-center justify-center'>
                <div className='w-[30rem]'>
                    <img src="/dreamJob.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default DreamJobs

import Marquee from "react-fast-marquee";


const Companies = () => {
    return (<div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold text-mine-shaft-100">
            Trusted by <span className="text-bright-sun-400">1000+</span> companies
        </div>
        <Marquee>
            I can be a React component, multiple React components, or just some text.
        </Marquee>
    </div>
    )
}

export default Companies;

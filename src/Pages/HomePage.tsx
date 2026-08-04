
import DreamJobs from '../LandingPage/DreamJobs';
import CompaniesNew from '../LandingPage/Companies';
import JobCatagory from '../LandingPage/JobCatagory';
import Working from '../LandingPage/Working';
import Testimonials from '../LandingPage/Testimonials';
import Subscribe from '../LandingPage/Subscribe';

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins']">     
            <DreamJobs/>
            <CompaniesNew/>
            <JobCatagory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>
        </div>
    )
}

export default HomePage


import Header from '../Header/Header'
import DreamJobs from '../LandingPage/DreamJobs';
import CompaniesNew from '../LandingPage/Companies';
import JobCatagory from '../LandingPage/JobCatagory';
import Working from '../LandingPage/Working';

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins']">
            <Header />
            <DreamJobs/>
            <CompaniesNew/>
            <JobCatagory/>
            <Working/>
        </div>
    )
}

export default HomePage

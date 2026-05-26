
import Header from '../Header/Header'
import DreamJobs from '../LandingPage/DreamJobs';
import Companies  from '../LandingPage/Companies';

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins']">
            <Header />
            <DreamJobs/>
            <Companies/>
        </div>
    )
}

export default HomePage

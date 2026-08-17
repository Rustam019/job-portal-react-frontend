import { Divider, MantineProvider, createTheme } from '@mantine/core'
import './App.css'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobsPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';

function App() {
  const theme = createTheme({
    focusRing: 'never',
    fontFamily: 'poppins, sans-serif',
    primaryShade: 4,
    colors: {
      'mine-shaft': ['#212121', '#212121', '#212121', '#212121', '#212121', '#212121', '#212121', '#212121', '#212121', '#212121'],
      'bright-sun': ['#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300', '#FFB300'],
    }
  })

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
      <div className="relative">
        <Header />
        <Divider size="xs" />
        <Routes>
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/find-talent" element={<FindTalentPage />} />
          <Route path="/talent-profile" element={<TalentProfilePage />} />
          <Route path="/jobs" element={<JobDescPage/>} />
          <Route path="/apply-job" element={<ApplyJobPage/>} />
          <Route path= "/post-job" element={<PostJobPage/>} />
          <Route path="/company" element={<CompanyPage/>} />
          <Route path="/posted-job" element={<PostedJobPage/>} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App

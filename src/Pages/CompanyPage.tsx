
import { IconArrowLeft } from '@tabler/icons-react'
import { Button } from '@mantine/core'
import Company from '../CompanyProfile/Company'
import { useNavigate } from 'react-router-dom'
import SimilarCompanies from '../CompanyProfile/SimilarCompanies'

const CompanyPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-[100vh] bg-mine-shaft-800 font-['Poppins']">
            <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} className="!text-bright-sun-400" my="md" variant="light" >Back</Button>
            <div className="flex gap-10 ">
                <Company />
                <SimilarCompanies />
            </div>
        </div>
    )
}

export default CompanyPage

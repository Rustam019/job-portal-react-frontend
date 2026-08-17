import { similar } from "../Data/Company"
import CompanyCard from "./CompanyCard"

const SimilarCompanies = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">
        Similar Companies</div>
        <div className="flex flex-col flex-wrap gap-5 ">
            {
                similar.map((talent:any, index:any)=> <CompanyCard key={index} {...talent}/>)
            }
        </div>
    </div>
  )
}

export default SimilarCompanies
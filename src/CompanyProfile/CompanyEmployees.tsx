import { similar } from "../Data/Company";
import CompanyCard from "./CompanyCard";

const CompanyEmployees = () => {
    return (
        <div>
            <div className="mt-10 flex gap-10 flex-wrap">
                {
                    similar.map((company: any, index: number) => <CompanyCard key={index} {...company} />)
                }
            </div>
        </div>
    )
}
export default CompanyEmployees;
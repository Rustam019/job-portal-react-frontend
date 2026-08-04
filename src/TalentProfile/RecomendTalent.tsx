import { talents } from "../Data/Data"
import TalentCard from "../FindTalent/TalentCard"

const RecomendTalent = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">
        Recommended Talents</div>
        <div className="flex flex-col flex-wrap gap-5 ">
            {
                talents.map((talent:any, index:any)=>index<4 && <TalentCard key={index} {...talent}/>)
            }
        </div>
    </div>
  )
}

export default RecomendTalent

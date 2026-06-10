import { Carousel } from '@mantine/carousel';
import { jobCategories } from '../Data/Data';

const JobCatagory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100 ">Browse
        <span className="text-bright-sun-400"> jobs </span> category</div>
      <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-10" >
        Explore diverse job opportunities tailored to your skills. Start your career jouney today !
      </div>
      <Carousel
        slideSize="22%"
        slideGap="md"
        emblaOptions={{
        loop: true
      }}
      >
        {
          jobCategories.map((category, index) =><Carousel.Slide>
        
      <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl">
        <div className="p-2 bg-bright-sun-300 rounded-full">
          <img className="h-8 w-8" src={`/Category/${category.name}.jpg`} alt={category.name} />
        </div>
        <div className="text-xl font-semibold text-mine-shaft-100">{category.name}</div>
        <div className="text-mine-shaft-200 text-sm text-mine-shaft-300 text-center">
         {category.desc}
        </div>
        <div className="text-bright-sun-300 text-lg">
          {category.job}+ new jobs posted
        </div>
      </div>
       </Carousel.Slide>)
        }
      </Carousel>
    </div>
  )
}

export default JobCatagory

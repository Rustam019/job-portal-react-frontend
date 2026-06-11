import { Carousel } from '@mantine/carousel';
import { jobCategories } from '../Data/Data';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const JobCatagory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100 ">Browse
        <span className="text-bright-sun-400"> jobs </span> category</div>
      <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-10" >
        Explore diverse job opportunities tailored to your skills. Start your career jouney today !
      </div>
      <Carousel className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400
       [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        slideSize="22%"
        slideGap="md"
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
        emblaOptions={{
          loop: true
        }}
      >
        {
          jobCategories.map((category, index) => <Carousel.Slide>

            <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl
       hover:cursor-pointer hover:not-visited:shadow-[0_0_5px_2px_black] my-5 !shadow-bright-sun-300 transition duration-300 ease-in-out">
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

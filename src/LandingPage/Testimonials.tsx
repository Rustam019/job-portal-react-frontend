import { Avatar } from "@mantine/core"
import { Rating } from '@mantine/core';
import { testimonials } from "../Data/Data";


const Testimonials = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100 ">What
                <span className="text-bright-sun-400"> User</span>  says about us ?
            </div>
            <div className="flex justify-evenly ">
                {
                    testimonials.map((testimonial, index) =>
                        <div className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 rounded-xl p-3 mt-10">
                            <div className="flex items-center gap-2 ">
                                <Avatar className="!h-16 !w-16" src="/avatar.png" alt="Its me !" />
                                <div>
                                    <div className="text-lg text-mine-shaft-100 font-semibold">{testimonial.name}</div>
                                    <Rating value={testimonial.rating} fractions={2} readOnly />
                                </div>
                            </div>
                            <div className="text-xs text-mine-shaft-300">{testimonial.testimonial}</div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Testimonials

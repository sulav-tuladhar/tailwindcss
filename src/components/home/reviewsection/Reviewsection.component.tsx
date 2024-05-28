import { review } from '../../../utils/reviews'
import { Review } from '../aboutsection/interfaces'

function ReviewsectionComponent() {
    return (
        <section className='w-[90%] mx-auto'>
            <div className='flex flex-wrap gap-4 justify-center'>
                {
                    review.map((item: Review, index: number) => (
                        <div key={index} className='bg-[#2e3b5bcc] w-[25rem] rounded-md p-4'>
                            <div className='flex gap-2'>
                                <img src={item.img} alt='avatar-img' className='h-12 w-12' />
                                <div>
                                    <p className='text-white'>{item.name}</p>
                                    <p className='text-[#94a3b8] text-sm'>{item.position}</p>
                                </div>
                            </div>
                            <p className='text-[#94a3b8] mt-4 text-sm'>{item.review}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ReviewsectionComponent

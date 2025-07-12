import reviewData from "../data/reviewsdata"
import { useState } from "react"
import { nanoid } from "nanoid";
import rate from '../../public/icons/5star-rate.png'
import { Link } from "react-router-dom";
function Review(){
  const [reviews, setReviews] = useState(reviewData);

  // render reviews
  function renderReviews(){
    return reviews.map((review)=>{
      return(
        <article key={nanoid()} className="flex sm:flex-row flex-col-reverse gap-10 px-5">
          <div className="relative sm:h-96 h-40 w-60 rounded-bl-[3rem] border border-black flex-1 ml-4">
            <img src={`${review.image}`} className="w-60 sm:absolute relative -top-4 -right-4 sm:h-auto h-40"/>
          </div>
          <div className="flex flex-col bg-card p-4 flex-1 rounded-none">
            <div className="grid place-content-start">
              <img src={rate} className="w-20"/>
            </div>
            <p className="text-xl italic text-slate-950"><q>{review.comment}</q></p>
            <div className="grid place-content-end">
              <p className="font-bold text-2xl text-slate-950">-{review.reviewer}</p>
            </div>
          </div>
        </article>
      )
    })
  }

  return (
        <main className="min-h-screen flex flex-col gap-10 p-5">
          <h1 className="text-center text-4xl font-bold">Reviews</h1>
          <section className="grid md:grid-cols-2 grid-cols-1 gap-14">
            {renderReviews()}
          </section>
          <section className="flex items-center justify-center ">
            <article className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 sm:w-2/4 w-2/3 border-2 border-slate-950 border-solid rounded-lg py-4 px-5 flex flex-col gap-2">
              <p className="text-center text-2xl">Want to comment on our services? Leave a review below!</p>
              <div className="grid place-content-center">
                <Link to="/leave-review" className="text-xl sm:px-8 px-2 py-2 font-bold hover:opacity-90 bg-gold rounded-lg text-white">Leave a review</Link>
              </div>
            </article>
          </section>
        </main>
    )
}

export default Review
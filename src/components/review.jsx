import reviewData from "../data/reviewsdata"
import { useState } from "react"
import { nanoid } from "nanoid";
function Review(){
  const [reviews, setReviews] = useState(reviewData);

  // render reviews
  function renderReviews(){
    return reviews.map((review)=>{
      return(
        <article key={nanoid()}>
          <div className="relative h-96 w-60 rounded-bl-[3rem] border border-black">
            <img src={`${review.image}`} className="w-60 absolute -top-4 -right-4"/>
          </div>
          <div></div>
        </article>
      )
    })
  }

  return (
        <main className="min-h-screen bg-slate-500 flex flex-col gap-10 p-5">
          <h1 className="text-center text-4xl font-bold">Reviews</h1>
          <section className="grid grid-cols-2 gap-8">
            {renderReviews()}
          </section>
        </main>
    )
}

export default Review
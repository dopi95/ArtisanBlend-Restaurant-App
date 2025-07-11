import StarRating from "./StarRating"
function LeaveReview(){
  return(
    <main className="p-5 md:max-h-screen">
      <h1 className="text-2xl font-bold">Leave a review</h1>
      <section className="flex border-black border rounded-none mt-6 mx-4">
        <article class="p-10 mx-8 flex flex-col gap-4 flex-1">
          <h3 class="text-2xl">How would you rate us?</h3>
          <StarRating/>
          <form action="" class="md:max-w-3xl md:min-w-72 py-2">
            <label for="name" class="text-gray-950 text-xl font-bold">Name:</label>
            <input type="text" id="name" placeholder="Name" class="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border-2 border-solid border-gray-700" required/>
            <label for="E-mail" class="text-gray-950 text-xl font-bold">E-mail:</label>
            <input type="email" id="E-mail" placeholder="E-mail" class="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border-2 border-solid border-gray-700" required/>
            <label for="review" class="text-gray-950 text-xl font-bold">Review:</label>
            <textarea name="review" id="review" cols="30" rows="5" placeholder="Review" class="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border-2 border-solid border-gray-700"></textarea>
            <div class="grid place-content-center w-full">
              <button type="submit" class="px-4 py-2 bg-gold hover:bg-opacity-90 text-white font-bold rounded-lg">Review</button>
            </div>
          </form>
        </article>
        <article className="w-1/3 bg-slate-600">
          <img src="images/leavereview.png" className="md:h-full"/>
        </article>
      </section>
    </main>
  )
}

export default LeaveReview
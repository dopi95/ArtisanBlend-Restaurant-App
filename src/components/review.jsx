import reviewData from "../data/reviewsdata"
function Review(){
    return (
        <main className="grid place-content-center min-h-screen">
            <article className="relative border border-solid border-black h-96 w-60 rounded-bl-[50px]">
                <img src="images/image.png" className="absolute -top-5 -right-5 w-60"/>
            </article>
        </main>
    )
}

export default Review
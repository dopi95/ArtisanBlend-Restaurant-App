import { useState } from "react"
import StarRating from "./StarRating"
function LeaveReview(){
  // declare states for form contolled state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  // declare error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [reviewError, setReviewError] = useState("");

  // state for submission status
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  // form validation logic
  const validateForm = ()=>{ // returns a bollean
    let isValid = true;

    // name validation , name not null
    if (!name.trim()){
      setNameError("Name is required");
      isValid = false;
    }else{
      setNameError("");
    }

    // email validation, not null and using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()){
      setEmailError("E-mail is required");
      isValid = false;
    }else{
      setEmailError("");
    }

    // text area(review) validation
    if (!review.trim()){
      setReviewError("Review is required plz!");
      isValid = false;
    }else if(review.trim().length < 12){
      setReviewError("Review must be atleast 12 characters");
      isValid = false;
    }else{
      setReviewError("");
    }

    // return if form is valid or not
    return isValid
  }

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default submission and reloading or refreshing of the page on submission
    setSubmissionSuccess(false); // reset messages on new attempt of submission

    if (validateForm()){
      // if validation is true , we can now proceed
      const formData = {
        name, email, review,
      };
      setSubmissionSuccess(true);

      // reset the fields
      setEmail("");
      setName("");
      setReview("")
    }else{
      setSubmissionError("Form not submitted")
    }
  }

  return(
    <main className="p-5 min-h-screen mt-16">
      <h1 className="text-2xl font-bold">Leave a review</h1>
      <section className="flex md:flex-row flex-col border-black border rounded-none mt-6 mx-4">
        <article className="md:p-10 p-5 md:mx-8 mx-2 flex flex-col gap-4 flex-1">
          <h3 className="text-2xl">How would you rate us?</h3>
          <StarRating/>
          <form onSubmit={handleSubmit} className="md:max-w-3xl md:min-w-72 py-2">
            <label htmlFor="name" className="text-gray-950 dark:text-white text-xl font-bold">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e)=> setName(e.target.value)} 
              placeholder="Name" 
              className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border-2 border-solid border-gray-700" 
              required
            />
            {nameError && <p className="text-xl font-bold text-orange-700">{nameError}</p>}

            <label htmlFor="E-mail" className="text-gray-950 dark:text-white text-xl font-bold ">E-mail:</label>
            <input 
              type="email" 
              id="E-mail" 
              placeholder="E-mail" 
              value={email} 
              onChange={(e)=> setEmail(e.target.value)} 
              className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border-2 border-solid border-gray-700" 
              required
            />
            {emailError && <p className="text-xl font-bold text-orange-700">{emailError}</p>}

            <label htmlFor="review" className="text-gray-950 dark:text-white text-xl font-bold">Review:</label>
            <textarea 
              name="review" 
              id="review" 
              value={review} 
              onChange={(e)=> setReview(e.target.value)} 
              cols="30" rows="5" 
              placeholder="Review" 
              className="outline-none w-full rounded-lg text-gray-950 text-xl px-2 py-2 mb-3 border-2 border-solid border-gray-700"
            ></textarea>
            {reviewError && <p className="text-xl font-bold text-orange-700">{reviewError}</p>}

            <div className="grid place-content-center w-full">
              <button type="submit" className="px-4 py-2 bg-gold hover:bg-opacity-90 text-white font-bold rounded-lg">Review</button>
            </div>

            {submissionSuccess && <p className="text-xl text-green-500 font-bold">Form submitted successfully!</p>}
            {submissionError && <p className="text-xl text-red-500 font-bold">{submissionError}</p>}
          </form>
        </article>
        <article className="w-1/3 md:flex hidden  bg-slate-600">
          <img src="images/leavereview.png" className="md:h-full"/>
        </article>
      </section>
    </main>
  )
}

export default LeaveReview
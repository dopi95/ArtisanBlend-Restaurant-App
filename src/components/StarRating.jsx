import { useState } from "react"
function StarRating(){

  // declare the state
  const [selectedRating, setSelectedRating] = useState(0);
  const totalStars = 5;

  //declare images icons
  const emptyStar = "icons/icons8-rating-empty.png";
  const fullStar = "icons/icons8-rating-full.png";

  //render stars
  return(
    <div className="flex gap-2">
      {[...Array(totalStars)].map((undefinedPlaceholder, i) => {
        const starValue = i + 1;
        return (
          <img
            key={starValue}
            src={starValue <= selectedRating ? fullStar : emptyStar}
            alt={starValue <= selectedRating ? "Full Star" : "Empty Star"}
            style={{ cursor: "pointer", width: "24px", height: "24px" }}
            onClick={() => setSelectedRating(starValue)}
          />
        );
      })}
    </div>
  )
}

export default StarRating
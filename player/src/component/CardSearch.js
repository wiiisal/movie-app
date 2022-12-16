import ReactStars from "react-stars"

export default function Card({setInput,setRatingg}) {
   const ratingChanged=(newRating)=>{
    setRatingg(newRating)

   }
    
  return (
    <div>
      <div className="search-bar form-inline">
         <input  type="text" placeholder='enter movie name' onChange={(e)=>setInput(e.target.value)}/>
         <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    
  />
         <button>search</button>
      </div>
    </div>
  )
}

import { useState } from "react"
export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let iconClass = "fa-regular fa-heart";
    let toggleLike = ()=>{
        setIsLiked(!isLiked);
        if(isLiked){
            iconClass="fa-solid fa-heart"
        }
        else{
            iconClass = "fa-regular fa-heart"
        }
    }
    return(
        <div className="LikeButton">
            <p onClick={toggleLike}>
                {isLiked ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i> }
            </p>
        </div>
    )
}
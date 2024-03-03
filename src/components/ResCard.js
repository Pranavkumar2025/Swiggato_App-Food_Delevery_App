import React from "react";
import constant from "../utils/constant";

const ResCard = (props)=> {
    const {resdata} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,locality} = resdata.info
    return(
        <div className="ResCard m-4 p-4 w-[250px] h-[550px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img className="ResCardImg rounded-lg" src={`${constant.CDN_URL}${cloudinaryImageId}`} alt="CardImg" />
            <h3 className="font-bold p-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4 className="font-mono">Rating: {avgRating}</h4>
            <h4>Delivery Time: {resdata.info.sla.deliveryTime} min</h4>
            <h4 className="font-medium">Price is: {costForTwo}</h4>
            <h4>{locality}</h4>
           
        </div>
    );
}

export default ResCard;
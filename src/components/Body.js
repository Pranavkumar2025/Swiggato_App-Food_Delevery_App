import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
// import ResObj from "../utils/ResObj";
import Shimmer from "./Shimmer";
import constant from "../utils/constant";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlinStatus";

const Body = () =>{
//------------- if swiggy can change their Api then this will Work always----

// const [Restaurant , setRestaurant] = useState(ResObj.restaurants);
const [Restaurant , setRestaurant] = useState([]);
const [filteredRestaraunt, setfilteredRestaraunt] = useState([]);
const[inputVal,setInputVal]= useState(" ");

const fetchUrl = async ()=>{
    const data = await fetch(constant.MainRestrauntURL);
    const jsonData = await data.json();
    // for Top Restaurant Data
    setRestaurant(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setfilteredRestaraunt(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    

    // -----for Restaurants with online food delivery in Kolkata
    // setRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // setfilteredRestaraunt(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);     
} 
useEffect(()=>{fetchUrl()},[]);

console.log(filteredRestaraunt);

const onlineStatus = useOnlineStatus();

if(onlineStatus == false){
    return(<h1 style={{textAlign:"center"}}>Looks Like Your are Offline Please Check your Internet Conncetion !!!</h1>);
}

    return Restaurant.length == 0 ? <Shimmer/> : (
        <div className="BodyContainer">
            <div className="btn-filter flex items-center">
                <div className="search_div m-4 p-5">
                    <input className="border-2 border-solid border-black rounded-lg" type="text" name="search" id="" value={inputVal} onChange={(event)=>{
                        setInputVal(event.target.value);
                        // console.log(inputVal);
                    }}/>
                    <button className="ml-4 px-4 py-2 bg-green-200 rounded-lg hover:bg-green-400" onClick={()=>{
                        console.log(inputVal);
                        const filteredRestaraunt = Restaurant.filter((res)=>res.info.name.toLowerCase().includes(inputVal.toLowerCase()));
                        setfilteredRestaraunt(filteredRestaraunt);
                    }}>Search</button>
                </div>
                <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-300" onClick={()=>{ 
                    const filteredList= Restaurant.filter(res=>res.info.avgRating > 4.4);
                    setRestaurant(filteredList);
                }}>Top Star Rating</button>
            </div>
            <div className="ResContainer flex flex-wrap justify-center">
            {/* <ResCard resdata = {ResObj.restaurants[0]}/> */}
            {filteredRestaraunt.map((CardData)=>{
              return(
                <Link to={`/restaurant/${CardData.info.id}`}><ResCard key = {CardData.info.id} resdata = {CardData}/></Link>
              );
            })} 
            </div>
        </div>
    );
}

export default Body;




// import React, { useState } from "react";
// import ResCard from "./ResCard";
// import ResObj from "../utils/ResObj";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlinStatus";

// const Body = () => {
//     const [restaurants, setRestaurants] = useState(ResObj.restaurants);
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//     const [inputVal, setInputVal] = useState("");

//     const handleSearch = () => {
//         const filtered = restaurants.filter(res =>
//             res.info.name.toLowerCase().includes(inputVal.trim().toLowerCase())
//         );
//         setFilteredRestaurants(filtered);
//     };

//     const handleTopStarRating = () => {
//         const filtered = restaurants.filter(res => res.info.avgRating > 4.4);
//         setFilteredRestaurants(filtered);
//     };

// const onlineStatus = useOnlineStatus();

// if(onlineStatus == false){
//     return(<h1 style={{textAlign:"center"}}>Looks Like Your are Offline Please Check your Internet Conncetion !!!</h1>);
// }

//     return restaurants.length == 0 ? <Shimmer/> : (
//         <div className="BodyContainer">
//             <div className="btn-filter flex items-center" >
//                 <div className="search_div m-4 p-5" >
//                     <input
//                         className="border-2 border-solid border-black rounded-lg"
//                         type="text"
//                         name="search"
//                         value={inputVal}
//                         onChange={(event) => setInputVal(event.target.value)}
//                     />
//                     <button className="ml-4 px-4 py-2 bg-green-200 rounded-lg  hover:bg-green-400" onClick={handleSearch}>Search</button>
//                 </div>
//                 <button onClick={handleTopStarRating} className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200">Top Star Rating</button>
//             </div>
//             <div className="ResContainer flex flex-wrap justify-center">
//                 {filteredRestaurants.length > 0 ? (
//                     filteredRestaurants.map((CardData) => (
//                         <Link to={`/restaurant/${CardData.info.id}`}><ResCard kye = {CardData.info.id} resdata = {CardData}/></Link>
//                     ))
//                 ) : (
//                     restaurants.map((CardData) => (
//                         <Link to={`/restaurant/${CardData.info.id}`}><ResCard kye = {CardData.info.id} resdata = {CardData}/></Link>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Body;

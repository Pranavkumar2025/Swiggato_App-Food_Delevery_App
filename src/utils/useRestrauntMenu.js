import { useEffect, useState } from "react";
import constant from "./constant";


const RestrauntMenuURL = constant.RestrauntMenuURL;
const useRestrauntMenu = (resId)=>{
    
    const[resInfo,setresInfo] = useState();

    const getData = async ()=>{
        const ResData = await fetch(RestrauntMenuURL+resId);
        const JsonData = await ResData.json();
        setresInfo(JsonData.data);

    }

    useEffect(()=>{
        getData();
    },[]);
    return resInfo;
}

export default useRestrauntMenu;
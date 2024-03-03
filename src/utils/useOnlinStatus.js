import { useEffect, useState } from 'react';

const useOnlineStatus = ()=>{

    const[OnlineStatus ,setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        })
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        })
    },[])

    return OnlineStatus;

}

export default useOnlineStatus;
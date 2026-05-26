import { useEffect, useState} from "react";
 export default function useOfflineStatus(){
    
    const [isOffline, setOffline] = useState(!navigator.Online);

    useEffect(()=>{                 //useEffect( effectFunction , dependencyArray )
        const goOffline = ()=> setIsOffline(true);
        const goOnline = ()=> setIsOffline(false);

        window.addEventListener("offline", goOffline);
        window.addEventListener("online",goOnline);

        return()=>{
            window.removeEventListener("offline",goOffline)
            window.removeEventListener("online",goOnline)
        };
    },[]);
 }
import React, { useEffect, useState } from 'react';
import useUserdata from './useUserdata';

const useDonor = () => {
   const [userInfo] = useUserdata();
   const [isDonor, setIsDonor] = useState(false);
   useEffect(() => {
    if(userInfo?.role === "donor") {
        setIsDonor(true)
    }
   },[userInfo]) 
    return [isDonor]
};

export default useDonor;
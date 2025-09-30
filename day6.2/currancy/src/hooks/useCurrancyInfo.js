import { useEffect,useState } from "react";


function UseCurrancyInfo(currancy){
    const [data ,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currancy}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currancy]))
    }
    ,[currancy])
    return data
}
export default UseCurrancyInfo;
import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint,query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


const options = {
  method: "GET",
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {
    ...query,
  },
  headers: {
    "X-RapidAPI-Key": 'c49a74baacmsh02fda6f0d8d8b3dp1d772ejsn7716b3cc088d',
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};
const fetchData =async()=>{
    setIsLoading(true);
    try{
        const response =await axios.request(options);
        setData(response.data.data);
        setIsLoading(false)
    }catch(error){
        setError(error)
        alert( `There is an error`)
    }finally{
        setIsLoading(false);
    }
}

    useEffect(()=>{
        fetchData();

    },[]);

    const refetch=()=>{
        setIsLoading(true);
        fetchData();
    }
    return{ data,isLoading,error,refetch};
};

export default useFetch;

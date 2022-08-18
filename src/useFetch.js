import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);
       



    useEffect( ()=> {
        setTimeout( () =>{
            fetch(url)
            .then((response) =>{
                if(!response.ok){
                    throw Error ('sorry an error occured');
                }
                return response.json();
                // console.log(response);
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsLoading(false);
                setError(false);
            })
            .catch( (err)=>{
                console.log(err.message);
                setError(true);
                setIsLoading(false);
            })
        },2000)
    }, [url]);

    return {data, isLoading,error}
}
 
export default useFetch;
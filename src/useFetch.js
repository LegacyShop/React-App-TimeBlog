import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError]  = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); 
        fetch(url, { signal: abortCont.signal, headers: {
            "API-KEY": "f5563022-c412-43d7-b2d1-82c2ee10bec4"
        }} )
        .then(res => {
            console.log(res);
            if(!res.ok) {
                throw Error('Could not fetch data for that resource');
            }
           return res.json();
        })
        .then( data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
              } else {
                // auto catches network / connection error
                setIsPending(false);
                setError(err.message);
              }
        })
        // abort the fetch
    return () => abortCont.abort();
}, [url])

return { data, isPending, error };
}

export default useFetch;
 
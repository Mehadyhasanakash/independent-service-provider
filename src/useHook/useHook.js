import { useEffect, useState } from "react"

const usePhotographry = () =>{

    const [photos, setPhotos] = useState([]);
    useEffect(() =>{
        fetch(`potodata.json`)
        .then(res => res.json())
        .then( data => setPhotos(data))
    } ,[])

    return [photos, setPhotos]
    
}

export default usePhotographry;
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false)
    }


    useEffect( () => {
        getImages();
    }, []) // Al dejar las depencias vacias significa que el hook se va a disparar la primera vez que se crea y construye el componente


    return {
        images,
        isLoading
    }
}
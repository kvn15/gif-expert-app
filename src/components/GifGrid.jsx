import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading  ? (<h2>Cargando...</h2>) : null
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifGridItem 
                            key={image.id}
                            { ...image }// de esta manera esparzo la variable image 
                        />
                    ))
                }
            </div>
        </>
    )
}

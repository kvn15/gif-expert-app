import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    // El useState siempre debe tener un valor inicial
    const [ categories, setCategories ] = useState(['One Punch'])

    const onAddCategory = (onNewCategory) => {

        if (categories.includes(onNewCategory)) {
            return;
        }

        //Utilizando operardor spread para realizar copiar del array
        setCategories([onNewCategory, ...categories])
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}/>

            {/* Lista */}
            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }

        </>
    )
}

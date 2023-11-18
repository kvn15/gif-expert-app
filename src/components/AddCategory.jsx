import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    // para poder cambiar el estado del input debemos utilizar el metodo onChange

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;
        
        //
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}

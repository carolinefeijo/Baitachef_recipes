
import { useParams } from 'react-router-dom';
import './recipeDetails.css'

import { fetchRecipeId } from '../../services/recipes';
import { useEffect } from 'react';
import { useState } from 'react';

export default function RecipeDetails() {
   
    const [information, setInformation] = useState([])


    const { id } = useParams();

    useEffect(() => {

        const data = fetchRecipeId(id)
        console.log(data)
        setInformation()
    })


    return (
        <div className='container-recipeDetails'>

            <h1>RECEITA N° : {id}</h1>
            <h1>nome da receita : </h1>


        </div>
    )
}

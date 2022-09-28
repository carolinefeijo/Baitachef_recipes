import React from 'react'
import './recipeDetails.css'

import { fetchRecipeId } from '../../services/recipes'
import { useEffect } from 'react'


export default function RecipeDetails(props) {
    console.log(props)

    const HandlerId = async (id) => {
        const data = await fetchRecipeId(id)

    }


    useEffect(() => {
        HandlerId()

    }, []);

    return (
        <div className='container-recipeDetails'>

            <h2>RECIPE DETAILS</h2>


        </div>
    )
}

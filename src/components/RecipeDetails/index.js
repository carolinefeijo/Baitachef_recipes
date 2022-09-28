
import { useParams } from 'react-router-dom';
import './recipeDetails.css'

export default function RecipeDetails() {
   
    const { id } = useParams();
    console.log( id )
    return (
        <div className='container-recipeDetails'>

            <h1>RECEITA N° : {id}</h1>


        </div>
    )
}

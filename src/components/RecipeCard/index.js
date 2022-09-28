import React from 'react'
import './recipe.css'

import time from '../../assets/icon/time.png'
import Button from '../Button';
import { Link } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails';


export default function RecipeCard({ recipe }) {


    return (
        <div className='container-main'>

            <div className='container-recipe'>

                <div className='container-card'>

                    <div className='container-img'>
                        <img className='img-recipe' src={recipe.image} alt='imagem da receita'></img>
                    </div>

                    <div className='container-description-header'>
                        <h2 className='title-recipe'>{recipe.title}</h2>

                        <div className='container-description-header-secondary'>
                            <h5 className='title-description'>{recipe.pigs}</h5>
                            <img className='icon-time' src={time} alt='icone de tempo de preparo'></img>
                            <h5 className='title-description-time'>{recipe.timeCook}</h5>
                        </div>

                        <div className='container-description-details'>
                            <p className='title-description-details'>{recipe.description} </p>
                        </div>

                        <Link to="/RecipeDetails" params={recipe._id} element={<RecipeDetails />}>
                            <Button />
                        </Link>

                    </div>

                </div>

            </div>

        </div >
    )
}

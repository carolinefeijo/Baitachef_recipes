import React, { useEffect, useState } from 'react';
import RecipeCard from '../../components/RecipeCard';

import './style.css';

import greenPoint from '../../assets/icon/greenPoint.png'

import { fetchRecipeHighlight, fetchCreateRecipe } from '../../services/recipes'

const Home = () => {

  const [RecipeListHighlights, setRecipeListHighlights] = useState([])

  const [title, setTitle] = useState("")

  const UpdateRecipe = async () => {
    const data = await fetchRecipeHighlight();
    setRecipeListHighlights(data)
  }

  const createRecipeUptade = async () => {
    fetchCreateRecipe(title)
  }

  useEffect(() => {
    UpdateRecipe()
  }, []);

  return (
    <div className='container-home'>
      <div className='container-title'>
        <img className='img-point-green' src={greenPoint} alt='icon verde'></img>
        <h1 className='featured-title'>Nossos destaques</h1>
      </div>

      {RecipeListHighlights.map((recipe) => <RecipeCard recipe={recipe} />)}


    </div>
  );
}

export default Home;
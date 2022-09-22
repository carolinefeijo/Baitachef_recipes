import React from 'react';
import RecipeCard from '../../components/RecipeCard';
import './style.css';

import greenPoint from '../../assets/icon/greenPoint.png'

const Home = () => {
  return (
    <div className='container'>

      <div className='container-title'>
        <img className='img-point-green' src={greenPoint} alt='icon verde'></img>
        <h1 className='featured-title'>Nossos destaques</h1>
      </div>

      <RecipeCard />






    </div>
  );
}

export default Home;
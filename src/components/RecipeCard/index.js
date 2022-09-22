import React from 'react'
import './recipe.css'

import moqueca from '../../assets/img/moqueca.png';
import time from '../../assets/icon/time.png'

export default function RecipeCard() {
    return (
        <div className='container-main'>

            <div className='container-recipe'>

                <div className='container-card'>

                    <div className='container-img'>
                        <img className='img-recipe' src={moqueca} alt='imagem da receita'></img>
                    </div>

                    <div className='container-description-header'>
                        <h2 className='title-recipe'>Moqueca baiana</h2>

                        <div className='container-description-header-secondary'>
                            <h5 className='title-description'>10 porções</h5>
                            <img className='icon-time' src={time} alt='icone de tempo de preparo'></img>
                            <h5 className='title-description-time'>50 minutos</h5>
                        </div>

                        <div className='container-description-details'>
                            <p className='title-description-details'>Em um liquidificador, bata todos ingredientes até a textura ficar homogênea.</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

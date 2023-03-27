import React from 'react'
import CardCSS from './CardCSS.module.css'
import { useCategoryContext } from '../Context'
import { changeColor } from './Navbar'


function Card(props) {
    const { catData, setCatData } = useCategoryContext()
    var name = catData.category
 
    return (
        <div className={CardCSS.cardContainer} style={{backgroundColor:changeColor(name)}}>
            <img className={CardCSS.image} src={props.img} alt='notfound'></img>
            <div className={CardCSS.cardBody}>
                <div className={CardCSS.bodyHeader}>
                    <h2 className={CardCSS.title}>{props.title}</h2>
                    <h4 className={CardCSS.rating}> {props.rating}/10</h4>
                    <h4 className={CardCSS.year}> {props.year}</h4>
                    <h4 className={CardCSS.genre}>{props.genre}</h4>
                </div>
                {/* <button>trailer</button> */}
                <p className={CardCSS.description}>{props.description}</p>
                <div className={CardCSS.bodyFooter}>
                    <h4>{props.director}</h4>
                    <h4>{props.actors}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card
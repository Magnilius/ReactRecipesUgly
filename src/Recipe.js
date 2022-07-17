import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, caloires, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{caloires}</p>
            <img src={image} className={style.image} alt="" />
        </div>

    );
}

export default Recipe;
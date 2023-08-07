import styles from './Description.module.css';
import React from 'react';

 function RecipeAuthor() {
    const authorLink = 'https://myloveofbaking.com/sourdough-challah-coconut-cardamom/';
    const authorPhoto = 'https://myloveofbaking.com/wp-content/uploads/2023/06/IMG_1890-200x200.jpg';
    const authorName = "Vindi";
    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Vindi's Picture" className={styles.imageUpdate} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>My Love of Baking</a>
            </div>
        </div>
    )
}


class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>SOURDOUGH CHALLAH (COCONUT & CARDAMOM)</h1>
                    <p>Braided, traditional challah with coconut and cardamom. </p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}


export default RecipeDescription;
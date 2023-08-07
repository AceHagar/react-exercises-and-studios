import styles from './Ingredients.module.css';

export default function Recipeingredients () {

    const ingredients = ["20 g fed active starter", "80 g all purpose flour", "35 g water", "1 tbsp brown sugar", "480 g all purpose flour"];
    return (
        <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
      </ul>
   </div>
    )
    }


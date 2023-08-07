import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList() {
   const chores = ["Walk the Dog", "Take out the Trash", "Do the Laundry", "Wash the Dishes"]
   return (
      <div>
         <h3 className={classes.choresHeading}>Chores to do</h3>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
            <li className={classes.choresText}>{chores[3]}</li>
         </ol>

      </div>

   )
}
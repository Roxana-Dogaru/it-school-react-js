import React from "react";
import MealDetailsComponent from "../components/MealDetailsComponent";

function RandomMealsContainer () {
    return (
        <div style={{display:"flex",}}>
            <MealDetailsComponent/>
            <MealDetailsComponent/>
            <MealDetailsComponent/>
            <MealDetailsComponent/>
            <MealDetailsComponent/>
            <MealDetailsComponent/>
        </div>
       
    )
}

export default RandomMealsContainer
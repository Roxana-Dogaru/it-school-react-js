import React from "react";
import MealsListContainer from '../containers/MealsListContainer';
import RandomMealsContainer from '../containers/RandomMealsContainer';
import SideContainer from '../containers/SideContainer';

function HomepageView () {
    return (
        <>
            <div style={{display:"Flex",flexDirection:"flex-row"}}>
                <SideContainer/>
                <div style={{display: "flex", flexDirection:"flex-row"}}/>
                <RandomMealsContainer/>
                <MealsListContainer/>
            </div>
        </>
        
    )
}

export default HomepageView
import React from "react"
import foods from "./foods"
import {choice, remove} from './helpers'

const App = () => {
    const food = choice(foods)
    remove(foods, food)
    
    return (
    <>
        <h3>I'd like one {food} please.</h3>
        <h3>Here you go: {food}</h3>
        <h3> Delicious!  May I have another?</h3>
        <h3>I'm sorry, we're all out.  We have {foods.length} left</h3>
    </>
    )
}

export default App
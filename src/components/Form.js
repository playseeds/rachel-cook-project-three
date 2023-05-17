// import { useState } from "react";
// import ErrorMessage from "./ErrorMessage";

const Form = (setChosenDate) => {

    return (
        //Credit: got help figuring out how to hold a selected date in state from this tutorial: https://www.youtube.com/watch?v=dobnC4p5PYw
        <>
            <div className="form">
                <form>
                    <label htmlFor="date">Please  select the date you'd like to view:</label>
                    <input className="form" type="date" id="date"
                        placeholder="dd-mm-yyyy"
                        min="2013-02-22"
                        max="2023-12-31" onChange={e => setChosenDate(e.target.value)} />
                </form>
            </div>
        </>
    )
    //     //how do I filter the API data here to only show date and amount for the chosen date?
    //     { if date === chosenDate {
    //     return (date)
    // } else {
    //     return <ErrorMessage />
    // }
}

export default Form;
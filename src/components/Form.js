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
                {/* is there where I'd get React to display setChosenDate on the page? */}
            </div>
        </>
    )
}

export default Form;
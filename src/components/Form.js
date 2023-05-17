import { useState } from "react";

const Form = () => {

    //Create a stateful variable to hold the user's date choice
    const [chosenDate, setChosenDate] = useState();
    const [ records, setRecords ] = useState(chosenDate);

    const filter = (e) => {
        setRecords(chosenDate.filter(f => f.data.arrival_date().includes(e.target.value)))
    }

    return (
        //Credit: got help figuring out how to hold a selected date in state from this tutorial: https://www.youtube.com/watch?v=dobnC4p5PYw

        <>
            <div className="form">
                <form>
                    <label htmlFor="date">Please  select the date you'd like to view:</label>
                    <input className="form" type="date" id="date"
                        placeholder="dd-mm-yyyy"
                        min="2013-02-22"
                        max="2023-12-31" onChange={filter} />
                </form>
            </div>
        </>

        // <>
        //     <div className="form">
        //         <form onSubmit={(e) => displayData(e, chosenDate)}>
        //             <label htmlFor="date">Please  select the date you'd like to view:</label>
        //             <input className="form" type="date" id="date"
        //                 placeholder="dd-mm-yyyy"
        //                 min="2013-02-22"
        //                 max="2023-12-31" onChange={e => setChosenDate(e.target.value)} />
        //         </form>
        //     </div>
        // </>
    )
}

export default Form;
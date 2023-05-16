import { useEffect, useState } from "react";

const Form = () => {

    //Create a stateful variable to hold the user's date choice
    const [chosenDate, setChosenDate] = useState(); //should what's inside the () be a string because it'll be a date inputted in the date form? 

    // useEffect(() => {
    //     //can I filter the API date already returned by the API call in App.js?


    //     // const stripe = require('stripe')('sk_test_51HTHi2Hvy5NeCPEsFMyNF55MzJSDciOw2Qmp4KS4DLaf51eFUxDQcDu4dHfOc7PcqmyTbFHfKh3GhjhVDfmmWE21009ZNmVRCE');

    //     // const payouts = await stripe.payouts.list({
    //     //     limit: 1000
    //     // });
    //     // .then((res) => {

    //     //     setChosenDate(response.data.arrival_date * 1000);

    //     // });
    //     console.log(chosenDate);
    // });

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
            {/* how do I then get React to filter the data to print the ChosenDate to the page? */}
        </>
    )
}

export default Form;
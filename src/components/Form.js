import { useEffect, useState } from "react";

const Form = () => {

    //Create a stateful variable to hold the user's date choice
    const [chosenDate, setChosenDate] = useState(""); //should what's inside the () be a string because it'll be a date inputted in the date form? 

    useEffect(() => {
        //can I filter the API date already returned by the API call in App.js?


        // const stripe = require('stripe')('sk_test_51HTHi2Hvy5NeCPEsFMyNF55MzJSDciOw2Qmp4KS4DLaf51eFUxDQcDu4dHfOc7PcqmyTbFHfKh3GhjhVDfmmWE21009ZNmVRCE');

        // const payouts = await stripe.payouts.list({
        //     limit: 1000
        // });
        // .then((res) => {

        //     setChosenDate(response.data.arrival_date * 1000);

        // });

    }, []);

    return (
        <div className="form">
            <form>
                <label htmlFor="date">Please select the date you'd like to view:</label>
                <input className="form" type="date" id="date"
                    min="2013-02-22"
                    max="2023-12-31">
                </input>
            </form>
        </div>
    )
}

export default Form;

import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import { useState, useEffect } from 'react';

// calling the Stripe API outside of the function and outside of useEffect because can't get await/using a promise to work inside of those (not something we covered in class)
const stripe = require('stripe')('sk_test_51HTHi2Hvy5NeCPEsFMyNF55MzJSDciOw2Qmp4KS4DLaf51eFUxDQcDu4dHfOc7PcqmyTbFHfKh3GhjhVDfmmWE21009ZNmVRCE');

const payouts = await stripe.payouts.list({
  limit: 1000
});

function App() {

  //Creating stateful variables to hold the user's date choice in the form
  const [apiResults, setApiResults] = useState(payouts.data);
  const [chosenDate, setChosenDate] = useState(""); //without the string, initial value is undefined, which can toss errors
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    if (chosenDate === "") {
      setFilteredData(apiResults)
    } else {
      const filteredArray = apiResults.filter((payment) => {
        const dateConversion = new Date(payment.arrival_date * 1000 - 5).toISOString().split("T")[0];

        return dateConversion === chosenDate

      })

      setFilteredData(filteredArray);

    }

  }, [chosenDate, apiResults])

  //Credit: Tried to adapt Esther's recent Unsplash API lesson to make the below work.

  //this function is meant to handle form submission & filtering the date choice and its related amount
  const getDate = (event, chosenDate) => {
    event.preventDefault();

    //trying to loop over the date array to return only the data for the date selected in the form

    const filteredDate = chosenDate.filter

    // (correctSelection => {
    //   return date === chosenDate
    // })

    setChosenDate(filteredDate);

  }

  return (
    <div className="App">
      <Nav />
      <Form setChosenDate={setChosenDate} />
      <header>
        <h2>Date Received</h2>
        <h2>Net Gift Amount (in USD)</h2>
      </header>

      {filteredData.map((data) => {

        let date = new Date(data.arrival_date * 1000)
        let amount = data.amount / 100;

        return (
          //here I'm returning all of the date and amount data available to display it in columns, because I realized this would be more useful for our business needs
          <ul className="columns">
            {/* how do i access the id, which is within an object within the array, to address the below console error?  data.id in line 46 isn't working */}
            <li key={data.id}>
              {date.toLocaleDateString("en-US")}
            </li>
            <li>${amount}</li>
          </ul>
        )
      })};
    </div>
  );
}

export default App;

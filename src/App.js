
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
// import ErrorMessage from './components/ErrorMessage';
import { useState, useEffect } from 'react';

// calling the Stripe API 
const stripe = require('stripe')('sk_test_51HTHi2Hvy5NeCPEsFMyNF55MzJSDciOw2Qmp4KS4DLaf51eFUxDQcDu4dHfOc7PcqmyTbFHfKh3GhjhVDfmmWE21009ZNmVRCE');

const payouts = await stripe.payouts.list({
  limit: 1000
});

function App() {

  const [apiResults,] = useState(payouts.data);
  const [chosenDate, setChosenDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    if (chosenDate === "") {
      setFilteredData(apiResults)
    } else {
      const filteredArray = apiResults.filter((payment) => {

        const dateConversion = new Date(payment.arrival_date * 1000 - 5).toISOString().split("T")[0];

        return dateConversion === chosenDate;

        // //Not sure why ErrorMessage won't render:
        
        // // if dateConversion !== chosenDate{
        //   return <ErrorMessage />
        // } 
    
      })

      setFilteredData(filteredArray);
    }

  }, [chosenDate, apiResults])

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
            <li key={crypto.randomUUID()}>
              {date.toLocaleDateString("en-US")}
            </li>
            <li key={crypto.randomUUID()}>${amount}</li>
          </ul>
        )
      })};
    </div>
  );
}

export default App;

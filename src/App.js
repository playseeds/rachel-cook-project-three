
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   //handling the Stripe API call
  //   const stripe = require('stripe')('sk_test_51HTHi2Hvy5NeCPEsFMyNF55MzJSDciOw2Qmp4KS4DLaf51eFUxDQcDu4dHfOc7PcqmyTbFHfKh3GhjhVDfmmWE21009ZNmVRCE');

  //   const payouts = await stripe.payouts.list({
  //     limit: 1000
  //   })
  //   .then(res => {
  //     //storing the API data
  //     const apiResults = res.payouts.data;
  //     //map over the original API results array to extract the two pieces of data we want (?)

  //     const dateAndAmount = apiResults.map
  //   })

  // })

  return (
    <div>
      <Nav />
      <Form />
      <header>
        <h2>Date Received</h2>
        <h2>Net Gift Amount (in USD)</h2>
      </header>
      {payouts.data.map((data) => {

        let date = new Date(data.arrival_date * 1000)

        let amount = data.amount / 100;

        return (
          <ul className="columns">
            <li>{date.toLocaleDateString("en-US")}</li>
            <li>${amount}</li>
          </ul>
        )
      })};
    </div>
  );
}

const stripe = require('stripe')('sk_test_51HTHi2Hvy5NeCPEsFMyNF55MzJSDciOw2Qmp4KS4DLaf51eFUxDQcDu4dHfOc7PcqmyTbFHfKh3GhjhVDfmmWE21009ZNmVRCE');

const payouts = await stripe.payouts.list({
  limit: 1000
});

export default App;

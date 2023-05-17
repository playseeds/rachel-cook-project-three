
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';

// calling the Stripe API outside of the function and outside of useEffect because can't figure out how to get await/using a promise to work inside of those
const stripe = require('stripe')('sk_test_51HTHi2Hvy5NeCPEsFMyNF55MzJSDciOw2Qmp4KS4DLaf51eFUxDQcDu4dHfOc7PcqmyTbFHfKh3GhjhVDfmmWE21009ZNmVRCE');

const payouts = await stripe.payouts.list({
  limit: 1000
});

payouts.data.map((data) => {

  let date = new Date(data.arrival_date * 1000)
  let amount = data.amount / 100;

})

function App() {

  return (
    <div className="App">
      <Nav />
      <Form />
      <header>
        <h2>Date Received</h2>
        <h2>Net Gift Amount (in USD)</h2>
      </header>
      {payouts.data.map((data) => {

        let date = new Date(data.arrival_date * 1000)
        let amount = data.amount / 100;

        console.log(date, amount);

        return (
          <ul className="columns">
            {/* how do i access the id, which is within an object within the array, to address the below console error?  data.id in line 46 isn't working */}
            {/* {
              payouts.data.map((data) => {
                return

              })} */}

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

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51KdzwaF9THjM6oCRXa6UW4k0cAqLOFLUe4FaNoo6gZk6hIUn1FTZcCtmK7i9KdlkQ2sPoBpN7AKIcIfyA6mpdpHL00QRqQUWUQ"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  const options = {
    // passing the client secret obtained from the server
    clientSecret: "",
  };

  useEffect(() => {
    // will only run once when the app component loads...
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        //const uid = authUser.uid;
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is signed out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          {/* Default route to home page */}
          <Route path="*" element={<Home />} />{" "}
          {/* <Route path="/" element={<Header />}>
            <Route path="home" element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

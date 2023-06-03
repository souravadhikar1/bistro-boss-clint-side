import React from "react";
import SectionTitle from "../../../Components/Sectiontitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide publishable Stripe key

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Pk);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        subheading="Please process your payment"
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl">Taka asbe akhon eiiiiiiii</h2>
      <Elements stripe={stripePromise}>
        <CheckOut></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;

// TODO: Concep-2 https://github.com/shakilahmedatik/aircnc-part1-complete.git clone korte hobe

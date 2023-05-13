import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Nabvar from "../components/Nabvar_";
 
const plans = [
  {
      category:"Health",
    title: "Preferred Provider Organization (PPO) Plans - ",
    description: "These plans allow the insured to choose their healthcare providers and offer more flexibility than HMOs. PPOs typically have a larger network of healthcare providers, but may come with higher out-of-pocket costs.",
    price: "100/month",
  },
  {
    category:"Health",
    title: "Health Maintenance Organization (HMO) Plans - ",
    description: "HMOs typically have a smaller network of healthcare providers but may offer lower out-of-pocket costs. The insured must choose a primary care physician who will coordinate all their healthcare needs.",
    price: "150/month",
  },
  {
    category:"Health",
    title: "Point of Service (POS) Plans - ",
    description: "POS plans are a combination of PPO and HMO plans, allowing the insured to choose between in-network and out-of-network providers. Like HMOs, POS plans require a primary care physician, but offer greater flexibility when it comes to choosing specialists.",
    price: "200/month",
  },
];

function Group_health() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "Insurance System - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Insurance - Light Mode";
    }
  };
  return (
    <>

      <Navbar title="Ecom Store" mode={mode} togglemode={togglemode} />
      <Nabvar/>
    
      <div className="container my-5">
        <h1 className="text-center mb-5">Choose a Plan : Group health insurance</h1>
        <div className="row">
        <div className="card my-3 mx-3 p-3" style={{ "width": "78rem", "height": "40rem" }}>
          {plans.map((plan) => (
              <div className="card-body d-flex flex-column justify-content-between" key={plan.title}>
              <div>
                <h5 className="card-title">{plan.title}</h5>
                <p className="card-text">{plan.description}</p>
              </div>
              <div className="fw-bold fs-6" >Total Price: ₹ {plan.price}/-</div> 
              <div>
                <button  className="btn btn-warning w-100">Enroll</button>
              </div>
              <hr />
            </div>
           
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Group_health;

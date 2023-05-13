import React, { useState ,useEffect} from "react";
import Navbar from "../components/Navbar";
import Nabvar from "../components/Nabvar_";
import './Health.css'

const plans = [
  {
    category:"Health",
    title: "Bronze Plan - ",
    description: "This plan has a lower monthly premium but a higher deductible, making it a good choice for those who don't expect to have many medical expenses. It covers basic medical care such as doctor visits, hospitalization, and emergency care.",
    price: "100/month",
  },
  {
    category:"Health",
    title: "Silver Plan - ",
    description: "This plan has a slightly higher monthly premium but a lower deductible than the Bronze plan. It provides more comprehensive coverage, including prescription drug coverage, and is a good choice for those who have a moderate amount of medical expenses.",
    price: "150/month",
  },
  {
    category:"Health",
    title: "Gold Plan - ",
    description: "This plan has the highest monthly premium but the lowest deductible. It provides the most comprehensive coverage, including vision and dental care, and is a good choice for those who have a high amount of medical expenses or need more specialized care.",
    price: "200/month",
  },
];





function Individual_health() {
  const [name, setName] = useState('');
  const [id, setId] = useState(null);
  const [emailc, setEmailc] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const email = localStorage.getItem('userEmail')
  console.log(email)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/getcustomer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });
        const data = await response.json();
        console.log(data);
        setName(data[0].name);
        setEmailc(data[0].email);
        setCity(data[0].city);
        setPhone(data[0].phone);
        setId(data[0].id);
        console.log(data[0].id, data[0].phone, data[0].city, data[0].email);
  
        // Update the formData object with the fetched data
        setFormData({
          customerId: data[0].id,
          email: data[0].email,
          name: data[0].name,
          city: data[0].city,
          phone: data[0].phone,
          InsuranceType: insuranceType,
          plan: plan,
          price: price,
        });
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, []);
    const [price,setPrice] = useState('');
    const [plan,setPlan] = useState('');
    const [insuranceType, setInsuranceType] = useState('');

  const [mode, setmode] = useState("light");
  const [selectedPlan, setSelectedPlan] = useState(null);

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


const [formData, setFormData] = useState({
  customerId: id,
  email: email,
  name: name,
  city: city,
  phone: phone,
  InsuranceType: '',
  plan: '',
  price: ''
});


// setInsuranceType(selectedPlan.category)
// setPlan(selectedPlan.plan)
// setPrice(selectedPlan.price)
// console.log(plan,price,insuranceType)
console.log(selectedPlan)
const handleSubmit = event => {
  event.preventDefault();

  if (selectedPlan) {
    fetch('http://localhost:5000/insurance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        customerId: id,
        email: email,
        name: name,
        city: city,
        phone: phone,
        InsuranceType: insuranceType,
        plan: plan,
        price: price
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Handle success response
        alert("Insurance added Successfully");
        setSelectedPlan(null);
        setFormData({
          customerId: id,
          email: email,
          name: name,
          city: city,
          phone: phone,
          InsuranceType: insuranceType,
          plan: plan,
          price: price
        });
      })
      .catch(error => {
        console.error(error);
        // Handle error response
      });
  } else {
    alert('Please select a plan before submitting the form');
  }
};
const handleenroll = () => {
  if (selectedPlan) {
    const { category, title, description, price } = selectedPlan;
    setInsuranceType(category);
    setPlan(title);
    setPrice(price);
  }
}
console.log(price,plan,insuranceType)
const [modee, setMode] = useState('light');


const toggleMode = () => {
  setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
};

const cancel = () => {

  setSelectedPlan(null);
  setFormData({
    customerId: id,
    email: email,
    name: name,
    city: city,
    phone: phone,
    InsuranceType: '',
    plan: '',
    price: ''
  });
};


  return (
    <>
      <Navbar title="Ecom Store" mode={mode} togglemode={togglemode} />
      <Nabvar/>

      <div className="container my-5">
        <h1 className="text-center mb-5">Choose a Plan : Individual health insurance</h1>
        <div className="row">

          <div className="card my-3 mx-3 p-3" style={{ "width": "78rem", "height": "40rem" }}>
          {plans.map(plan => (
  <div key={plan.title}>
    <h3>{plan.title}</h3>
    <p>{plan.description}</p>
    <p>Price: {plan.price}</p>
    {selectedPlan === plan ? (
      <button
        className="btn btn-warning w-100"
        onClick={(event) => { 
          event.preventDefault(); 
          handleenroll()
        }}
      >
        Confirm
      </button>
    ) : (
      <button
        className="btn btn-warning w-100"
        onClick={(event) => { 
          event.preventDefault(); 
          setSelectedPlan(plan); 
        }}
      >
        Enroll Now
      </button>
    )}
    <hr />
  </div>
))}
        </div>
        <button
                    className="btn btn-primary w-100"
                    onClick={handleSubmit}
                  >
                    Payment
                  </button>

      </div>
      </div>
      {selectedPlan && (
       
  <div className="my-5 selected-plan-container">

    <h3 className="selected-plan-title">Selected Plan:</h3>
    <p className="selected-plan-description">Title: {selectedPlan.title}</p>
    <p className="selected-plan-description">Description: {selectedPlan.description}</p>
    <p className="selected-plan-price">Price: {selectedPlan.price}</p>
  </div>
)}
    </>
  );
}

export default Individual_health;


{/* <button className="btn btn-warning w-100" onClick={(event) => { 
  event.preventDefault(); 
  SetPrice(plan.price); 
  setPlan(plan.title); 
  setInsuranceType(plan.category); 
  setSelectedPlan(plan); 
}}>Enroll Now</button> */}






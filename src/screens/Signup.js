
// import React, {useState} from 'react'
// import {Link} from "react-router-dom"
// import {useNavigate} from 'react-router-dom';
// import Navbar from '../components/Navbar';
// const Signup = () => {
//     const [credentials, setCredentials] = useState({name:"",email: "", cpassword: "",confirmPassword:""}) 
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         const {name,email,cpassword,confirmPassword} = credentials;
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/userpost", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({name,email, cpassword,confirmPassword})
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success){
//             localStorage.setItem('userEmail', credentials.email); 
//             localStorage.setItem('token', json.token); 
//            navigate('/');
//         }
//         else{
//            alert("User With This email Already exits")
//            navigate('/login');
//         }
        
//     }

//     const onChange = (e)=>{
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }
//     const [mode, setmode] = useState("light");

//     const togglemode = () => {
//       if (mode === "light") {
//         setmode("dark");
//         document.body.style.backgroundColor = "#042743";
//         document.title = "Online Food Ordering System - Dark Mode";
//       } else {
//         setmode("light");
//         document.body.style.backgroundColor = "white";
//         document.title = "Online Food Ordering System - Light Mode";
//       }
//     };
//     return (
//         <>
//           <Navbar
//             title="Online Food Ordering System"
//             mode={mode}
//             togglemode={togglemode}
//           />
//         <div className='container'>
//         <form onSubmit={handleSubmit} className="my-1" >
//         <div className="mb-3" >
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input onChange={onChange} type="test" className="form-control"  id="name" name="name" aria-describedby="emailHelp" />
//                 </div>
//                 <div className="mb-3" >
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input onChange={onChange} type="email" className="form-control"  id="email" name="email" aria-describedby="emailHelp" />
//                     <div  id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3" >
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input onChange={onChange} type="password" className="form-control"  name="cpassword" id="cpassword" required/>
//                 </div>
//                 <div className="mb-3" >
//                     <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//                     <input onChange={onChange} type="password" className="form-control"  name="confirmPassword" id="confirmPassword" required />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//                 <Link to="/login" className="m-3 btn btn-danger" >Already A User</Link>
//             </form>
//         </div>
//          </>
//     )
// }

// export default Signup

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import {useNavigate} from 'react-router-dom';
import './Signup.css';

function  Signup() {
    const navigate = useNavigate();
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [insuranceType, setInsuranceType] = useState('');


    const handleSubmit = async (e) => {
  
        e.preventDefault();
        const response = await fetch("http://localhost:5000/userpost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:name,email:email,password:password,dob:dob,address:address,city:city,state:state,zip:zip,phone:phone,Insurance_Type:insuranceType})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            localStorage.setItem('userEmail', email); 
            localStorage.setItem('token', json.token); 
           navigate('/');
           alert("Successfully Registered")
        }
        else{
           alert("User With This email Already exits")
           navigate('/login');
        }
        
    }



  const styles = {
    formContainer: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    formLabel: {
      fontWeight: 'bold'
    },
    formSubmit: {
      marginTop: '20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  console.log(`${insuranceType}`)
  return (
      <>
        <Navbar
            title="Online Food Ordering System" mode={mode} togglemode={togglemode}
           />
           
           <Form onSubmit={handleSubmit} style={styles.formContainer}>
  <Form.Group controlId="formName" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formEmail" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>Email address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formPassword" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>Password</Form.Label>
    <Form.Control
      type="password"
      placeholder="Password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formDob" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>Date of Birth</Form.Label>
    <Form.Control
      type="date"
      placeholder="Enter your date of birth"
      value={dob}
      onChange={(event) => setDob(event.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formAddress" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>Address</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your address"
      value={address}
      onChange={(event) => setAddress(event.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formCity" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>City</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your city"
      value={city}
      onChange={(event) => setCity(event.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formState" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>State</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your state"
      value={state}
      onChange={(event) => setState(event.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formZip" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>Zip Code</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your zip code"
      value={zip}
      onChange={(event) => setZip(event.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formPhone" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>Phone</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your phone number"
      value={phone}
      onChange={(event) => setPhone(event.target.value)}
    />
  </Form.Group>
  <Form.Group controlId="Insurance Type" style={styles.formGroup}>
    <Form.Label style={styles.formLabel}>Insurance Type</Form.Label>
    <Form.Control
      type="text"
      placeholder="Insurance Type"
      value={insuranceType}
      onChange={(event) => setInsuranceType(event.target.value)}
    />
  </Form.Group>
  <Button variant="primary" type="submit" style={styles.formSubmit}>
    Submit
    </Button>

      </Form >
      </>
  )}

  export default Signup;
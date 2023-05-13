
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../state/index';
import { bindActionCreators } from "redux";
import Navbar from '../components/Navbar';

export default function Admin() {
  const deliveryBoys = ['Gaurav Ratnaparkhi', 'Sayyam Saboo', 'Abhinav Sahu'];
  const [selectedDeliveryBoy, setSelectedDeliveryBoy] = useState(null);
  const handleDeliveryBoySelection = (event) => {
    setSelectedDeliveryBoy(event.target.value);
  };
  const [id, setId] = useState(null);
  //
  useEffect(() => {
    async function fetchData() {
      try {
     
        const response = await fetch('http://localhost:5000/getcustomers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email:userEmail}),
        });
        const data = await response.json();
        setId(data[0].id);
       
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function handleClick() {
   
    // fetch("http://localhost:5000/delivery_boy", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name:selectedDeliveryBoy,customerId:id }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
      alert('Delivery boy assigned successfully')
  }

  console.log(selectedDeliveryBoy)

  const userEmail = localStorage.getItem("userEmail");
  console.log(userEmail)
  const [items, setItems] = useState([]);

  const handleFetch = async () => {
    const response = await fetch('http://localhost:5000/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userEmail: userEmail })
    });

    const data = await response.json();
    setItems(data.map(item => ({ ...item, status: null })));
  };

  useEffect(() => {
    handleFetch();
  }, []);




  const cardItems = items.map(({ id, userEmail, status }) => ({
    id,
    userEmail,
    status,
    buttonLabel: status === true ? 'Approved' : status === false ? 'Rejected' : 'Approve',
  }));

  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreator, dispatch);

  const handleadmin = (id) => {
    const updatedItems = items.map(item => item.id === id ? { ...item, status: true } : item);
    setItems(updatedItems);
    actions.ADDTOADMIN({ id, approved: true });
  };
  //
  const handlefood = (id) => {
    actions.ADDTOFOOD({ id, approved: true });
    alert("send status")
  };
  const handleD = (id) => {
    
  };

  const handlereject = (id) => {
    const updatedItems = items.map(item => item.id === id ? { ...item, status: false } : item);
    setItems(updatedItems);
    actions.ADDTOADMIN({ id, approved: false });
  };

  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "Online Food Ordering System - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Online Food Ordering System - Light Mode";
    }
  };


  return (
//     <div>
//        <Navbar
//       title="Ecom Store"
//       mode={mode}
//       togglemode={togglemode}
//     />
//       <div className='container'>
//        <h2 className='ss' style={{textAlign:"center"}}>Admin Page</h2>
      
//       <table className='table table-hover'>
     
//         <thead className=' text-success fs-4'>
//           <tr>
//             <th scope='col'></th>
//             <th scope='col'>Email</th> : 
       
//           </tr>
//         </thead>
//         <tbody className='text-light'>
//   {cardItems.map((item, index) => (
//     <tr key={item.id}>
//       <th scope='row'>{index + 1}</th>
//       <th scope='col'>Email</th> :  <td>{item.userEmail}</td>
//       <th scope='col'>Assign a Delivery Boi</th> :
//     </tr>
//   ))}
// </tbody>


//       </table>
//     </div>
//     </div>
<div>
  <Navbar
    title="Ecom Store"
    mode={mode}
    togglemode={togglemode}
  />
  <div className='container'>
  <h2 className='ss' style={{textAlign:"center"}}>Admin Page</h2>
  <div className="form-group">
            <h2  htmlFor="deliveryBoySelect">Select Delivery Boy </h2> <b>for : {userEmail}</b> 
            <select className="form-control" id="deliveryBoySelect" value={selectedDeliveryBoy} onChange={handleDeliveryBoySelection}>
              <option value="">-- Select Delivery Boy --</option>
              {deliveryBoys.map((deliveryBoy, index) => (
                <option key={index} value={deliveryBoy}>{deliveryBoy}</option>
              ))}
            </select>
            <div className='container my-3' >
            <button className={`btn btn-danger me-3`}
          onClick={handleClick}>
        Assign
        </button>
        </div>
          </div>
</div>
</div>
  );
}

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import React, { useState,useEffect } from "react";
// import Card from "../components/Card";

// function  Home() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const [mode, setmode] = useState("light");

//   const togglemode = () => {
//     if (mode === "light") {
//       setmode("dark");
//       document.body.style.backgroundColor = "#042743";
//       document.title = "Online Food Ordering System - Dark Mode";
//     } else {
//       setmode("light");
//       document.body.style.backgroundColor = "white";
//       document.title = "Online Food Ordering System - Light Mode";
//     }
//   };


//   useEffect(() => {
//     // Fetch data from the backend API
//     fetch('http://localhost:5000/get')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data[0]);
//         setCategories(data[1]);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   return (
//   //   <>
//   //     <div>
//   //          <Navbar
//   //           title="Ecom Store"
//   //           mode={mode}
//   //           togglemode={togglemode}
//   //          />
//   //       </div>
//   //       <div className="container">
//   //   <div className="row mb-3" style={{maxWidth: "100%", margin: "auto"}}>
//   //     {categories.map(category => (
//   //       <div className=" m-3"  key={category.CategoryName}>
//   //         <h2>{category.CategoryName}</h2>
//   //         <ul className="list-unstyled">
//   //         {products
//   // .filter(product => product.CategoryName === category.CategoryName)
//   // .map(product => (
//   //   <div className="col-lg-3">
//   //     <div key={product.pid} className="col-12 col-md-6 col-lg-3">
//   //          <Card fooditem ={product} options = {product.options} />
//   //     </div>
//   //     </div>
//   // ))}

//   //         </ul>
//   //       </div>
//   //     ))}
//   //   </div>
//   //   </div>
   
//   //             </>
//   <>
//   <div>
//     <Navbar
//       title="Ecom Store"
//       mode={mode}
//       togglemode={togglemode}
//     />
//   </div>
//   <div className="container">
//   <hr></hr>
//     <div className="row mb-3" style={{maxWidth: "100%", margin: "auto"}}>
//       {categories.map(category => (
//         <div className="m-3" key={category.CategoryName}>
//           <h2>{category.CategoryName}</h2>
         
//        <hr></hr>
//             <div className="row">
//               {products
//                 .filter(product => product.CategoryName === category.CategoryName)
//                 .map(product => (
//                   <div className="col-12 col-md-6 col-lg-4 mb-3" key={product.pid}>
//                     <Card fooditem={product} options={product.options} />
//                   </div>
//                 ))}
          
//             </div>
          
//         </div>
//       ))}
//     </div>
//   </div>
// </>
//   );
// }

// export default Home;

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState,useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Navbar_ from "../components/Nabvar_";


function Home() {

  const navigate = useNavigate();
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
  
  const handlehealth=()=>{
navigate("/health")
  }
  return (
    <>
      <div>
        <Navbar
          title="Ecom Store"
          mode={mode}
          togglemode={togglemode}
        />
      </div>
      <div>
        <Navbar_/>
      </div>
      <div style={{ 
          marginTop: '10px',
      position: 'relative',
      height: '190vh',
      width: '100vw', /* subtracting the height of the navbar (64px) */
      backgroundImage: 'url(insurance.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      </div>
      <style jsx>{`
        .mt-3 {
          margin-top: 3rem;
        }
        .card-title {
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .card-text {
          margin-bottom: 1rem;
        }
        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }
        .btn-primary:hover {
          background-color: #0069d9;
          border-color: #0062cc;
        }
        `}</style>
    </>
  );
}

export default Home;

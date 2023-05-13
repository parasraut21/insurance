const {customers,Otp,reset,Order,delivery_boy,insurance} = require('./models/User');
 const express = require('express');
 const bodyParser = require('body-parser');
 
 const jwt = require('jsonwebtoken');
const JWT_SECRET = "idgaf1234##"

 const { body, validationResult } = require('express-validator');

   const cors = require('cors');
   const app = express();
   app.use(bodyParser.json());
  app.use(cors());


  // signup actaul
const bcrypt = require('bcryptjs');
app.post('/userpost', [
  // Validate the name field
  body('name').notEmpty().isLength({ max: 255 }),

  // Validate the email field
  body('email').notEmpty().isEmail(),

  // Validate the password field
  body('password').notEmpty().isLength({ min: 6 }),

], async  (req, res) => {
  var success=false;
  // Check if there are any validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }

 // Hash the password
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Insert the user data into the MySQL database
  const { name, email, password ,dob,address,city,state, zip,phone,Insurance_Type  } = req.body;
 
  customers.create({ name, email, password : hashedPassword ,dob,address,city,state, zip,phone,Insurance_Type })
  .then((customers) => {
    const payload = {
      id: customers.id
    };
    const token = jwt.sign(payload, JWT_SECRET);
    console.log(token);
    success=true;
            res.status(201).json({success,customers,token});
          })
          .catch((error) => {
           console.log("Error hai",error);
              });
 
});

// login actaul


app.post('/login', async (req, res) => {
  var success = false ;
  const { email, cpassword } = req.body;

  // Find the user in the MySQL database
  const user = await customers.findOne({ where: { email: email } });
  if (!user) {
    return res.status(400).json({success, message: 'Invalid credentials' });
  }

  // Compare the password with the hashed password in the database
  const isValidPassword = await bcrypt.compare(cpassword, user.cpassword);
  if (!isValidPassword) {
    return res.status(400).json({success, message: 'Invalid credentials' });
  }

  // Create and send a JWT token as a response
  success=true;
  const token = jwt.sign({ id: user.id }, JWT_SECRET);
  res.json({success, token });
});





/*  ************************* Food Items **************************** */ 
// get food data data 
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'insurance',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


pool.getConnection()
  .then(connection => {
    console.log('*****************Successfully connected to the database!************8');
    connection.release();
  })
  .catch(error => {
    console.error('********************Error connecting to the database: ************', error);
  });

//   app.get('/get', (req, res) => {
//     let r;
//     let c;
  
//     pool.query('SELECT * FROM productdata')
//       .then(results => {
//         console.log('Successfully fetched all products from the database!');
//         r = JSON.parse(JSON.stringify(results[0]));
//         global.items = r;
//         return pool.query('SELECT * FROM category'); // add a new query here
//       })
//       .then(results => {
//         console.log('Successfully fetched all categories from the database!');
//         c = JSON.parse(JSON.stringify(results[0]));
//         global.items_category = c;
//         res.send([global.items, global.items_category]);
//       })
//       .catch(error => {
//         console.error('Error fetching data from the database: ', error);
//         res.sendStatus(500);
//       });
//   });
  

// app.get('/getdata', (req, res) => {
//   pool.getConnection((err, connection) => {
//       if (err) {
//           console.log(err);
//           res.status(500).send('Internal Server Error');
//           return;
//       }
//       connection.query('SELECT * FROM product', (err, result, fields) => {
//           if (err) {
//               console.log(err);
//               res.status(500).send('Internal Server Error');
//               connection.release();
//               return;
//           }

//           const r = JSON.parse(JSON.stringify(result));
//           global.item_details = r;
//           console.log(r)

//           connection.query('SELECT * FROM category', (err, result, fields) => {
//               if (err) {
//                   console.log(err);
//                   res.status(500).send('Internal Server Error');
//                   connection.release();
//                   return;
//               }

//               const c = JSON.parse(JSON.stringify(result));
//               global.item_category = c;
//               console.log(c);

//               res.send([global.Food_items, global.Food_items]);
// console.log([global.Food_items, global.item_details])
//               connection.release();
//           });
//       });
//   });
// });

// // /* ****************************** ORDER BY USER **********************/



// app.post('/insurance', async (req, res) => {
//   try {
//     const {  customerId,
//       email,
//       city,
//       phone,
//       InsuranceType,
//       plan,
//       price} = req.body;

//     // Create a new order document
//  insurance.create({
//       customerId,
//       email,
//       city,
//       phone,
//       InsuranceType,
//       plan,
//       price
//     });

//     res.status(200).json({ message: 'insurance saved successfully!', insurance: insurance.toJSON() });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error saving order details!' });
//   }
// });
app.post('/insurance', async (req, res) => {
  var success=false;

  const {   customerId,
    email,
    name,
    city,
    phone,
    InsuranceType,
    plan,
    price  } = req.body;
 
    insurance.create({   customerId,
    email,
    name,
    city,
    phone,
    InsuranceType,
    plan,
    price})
  .then((insurance) => {
    const payload = {
      id: insurance.id
    };
    success=true;
            res.status(201).json({success,insurance});
          })
          .catch((error) => {
           console.log("Error hai",error);
              });
 
});



app.post('/getcustomer', async (req, res) => {
  const email = req.body.email;
  const sql = 'SELECT * FROM customers WHERE email = ?';
  
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query(sql, [email]);
    res.json(results);
    connection.release();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving customer data');
  }
});

// app.post('/admin', (req, res) => {
//   const userEmail = req.body.userEmail;
  
//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error retrieving orders data');
//       return;
//     }
    
//     connection.query(`SELECT * FROM orders WHERE userEmail='${userEmail}'`, (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error retrieving orders data');
//       } else {
//         const p = JSON.parse(JSON.stringify(result)); // JSON must be capital
//         res.send(p);
//       }
      
//       connection.release();
//     });
//   });
// });


// app.post('/getcustomers', async (req, res) => {
//   const email = req.body.email;
//   const sql = 'SELECT * FROM customers WHERE email = ?';

//   try {
//     const connection = await pool.getConnection();
//     const [results] = await connection.execute(sql, [email]);
//     connection.release();
//     res.json(results);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error retrieving customers data');
//   }
// });

// app.post('/delivery_boy', async (req, res) => {
//   try {
//     const { name, customerId } = req.body;

//     // Create a new order document
//     const order = await delivery_boy.create({
//       name,
      
//       customerId
//     });

//     res.status(200).json({ message: 'Order saved successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error saving order details!' });
//   }
// });

app.listen(5000, () => {
    console.log('Server started on port 5000');
  });
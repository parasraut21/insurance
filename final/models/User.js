const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const { ARRAY } = require('sequelize');

const sequelize = new Sequelize('insurance', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('User Connected to MySQL server');
  })
  .catch((error) => {
    console.error('Unable to connect to MySQL server:', error);
  });


  
  const customers = sequelize.define('customers', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    zip: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Insurance_Type: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  
 const insurance = sequelize.define('insurances', {
  customerId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'customers',
      key: 'id'
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  InsuranceType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  plan:{
    type: Sequelize.STRING,
    allowNull: false
  },
  price:{
    type: Sequelize.STRING,
    allowNull: false
  }
});


  sequelize.sync()
  .then(() => {
    console.log('Schema synchronized with database');
  })
  .catch((error) => {
    console.error('Unable to synchronize schema with database:');
  });
  module.exports =  {customers,insurance} 
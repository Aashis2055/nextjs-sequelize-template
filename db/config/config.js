"use strict";
require('dotenv').config()

module.exports = {
  // mysql setup
  // development: {
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: "mysql",
  // },
  
  // sqlite setup
  development: {
    storage: "./"+process.env.DB_NAME,
    dialect: "sqlite",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
};
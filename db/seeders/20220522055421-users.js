'use strict';
require('dotenv').config();
const bcrypt = require("bcrypt");
const genderTypes= require('../../types/genderTypes');
const userTypes = require('../../types/usertypes');

const SALT_ROUND = 10;

module.exports = {
  async up (queryInterface, Sequelize) {

    const password = process.env.ADMIN_PASSWORD;
    const hash = await bcrypt.hashSync(password, SALT_ROUND);
    return queryInterface.bulkInsert("Users", [
      {
        username: process.env.ADMIN_USER_NAME | "admin",
        firstName: process.env.ADMIN_FIRST_NAME,
        lastName: process.env.ADMIN_LAST_NAME,
        email: process.env.ADMIN_EMAIL,
        password: hash,
        status: 1,
        gender: genderTypes[1],
        role: userTypes[0],
        phoneNumber: "123456789",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {})
  }
};

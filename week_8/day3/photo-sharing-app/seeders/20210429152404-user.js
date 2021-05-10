'use strict';

const { SHOWINDEXES } = require("sequelize/types/lib/query-types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("user",[{
    name:"Batman",
    show:"Batman The Animated Series",
    birthday: "1915-04-17",
    alias: "Bruce Wayne",

   }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

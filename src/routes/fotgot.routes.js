const { FORGOT,UPDATE } = require('../global/_var')

/******** DEPENDENCY  *******/

const express = require('express');
const route = express.Router()

/******** CONTROLLER *******/

const getInfoController = require('../controllers/getInfo.Controller.js')
const saveInfoController = require('../controllers/saveInfoController.js')

/******** ROUTER *********/

route.post(FORGOT, getInfoController.Recuperacion)
route.post(UPDATE,saveInfoController.editPassword)


module.exports= route
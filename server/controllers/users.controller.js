const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const userController = {};
const User = require("../models/User")

//catch Async do try catch in every function see in helpers
userController.create =  catchAsync(async (req, res, next) => {
const user = await new User({ ...req.body})
await user.save() //no save no shown info in database
const accessToken = await user.generateToken();
//check the helper to see the sendRespónes 
sendResponse(res,201,true, {user, accessToken}, null, "Create User Successfully")
});

userController.list = catchAsync(async (req, res, next) => {

});

userController.update = catchAsync(async (req, res, next) => {

});

userController.delete = catchAsync(async (req, res, next) => {
 
});

module.exports = userController;
 
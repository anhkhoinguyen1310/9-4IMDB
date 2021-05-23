const {
    AppError,
    catchAsync,
    sendResponse,
  } = require("../helpers/utils.helper");
  
  const movieController = {};
  const Movie = require("../models/Movie")
  
  movieController.create = catchAsync(async (req, res, next) => {
  });
  
  //catch Async do try catch in every function see in helpers
  movieController.list =  catchAsync(async (req, res, next) => {
  const movies = await Movie.find({}).limit(20) 
  sendResponse(res,201,true, {movies}, null, "Here are your movies")
  });
  
  movieController.searchByTilte = catchAsync(async (req, res, next) => {
    const movies = await Movie.find({}).limit(50) 
  sendResponse(res,201,true, {movies}, null, "Here are your movies")
  
  });
  movieController.update = catchAsync(async (req, res, next) => {
  
  });
  
  movieController.delete = catchAsync(async (req, res, next) => {
   
  });
  
  module.exports = movieController;
   
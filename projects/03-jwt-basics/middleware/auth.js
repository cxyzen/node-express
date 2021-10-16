const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");

const authenticationMiddleware = async(req, res, next)=> {
    const {authorization:authHeader} = req.headers;
    if (!authHeader || !authHeader.startsWith("Bearer ")){
        throw new CustomAPIError("Token invalid", StatusCodes.UNAUTHORIZED);
    }
    try{
        const token = authHeader.split(" ")[1]
        const {id, username} = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {id, username};        
        next();
    } catch (error) {
        throw new CustomAPIError("Not authorized to access this route", StatusCodes.UNAUTHORIZED);
    }
};

module.exports = authenticationMiddleware;
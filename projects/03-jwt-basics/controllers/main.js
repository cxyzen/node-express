const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        throw new CustomAPIError("Please provide email and password", StatusCodes.BAD_REQUEST);
    }

    // just for demo, normally provided by DB
    const id = new Date().getDate();
    // jwt secret should be long and complex
    const token = jwt.sign(
        {id, username}, 
        process.env.JWT_SECRET, 
        {expiresIn: "30d"}
    );
    res.status(200).json({msg: "user created", token});
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, you lucky number is ${luckyNumber}`});
}

module.exports = {
    login,
    dashboard
}
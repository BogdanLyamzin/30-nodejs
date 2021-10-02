const jwt = require("jsonwebtoken");

const SECRET_KEY = "fhgsdffhsd";

const payload = {
    _id: "6154b0ae55bcd821faba0fe9"
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const verifyToken = jwt.verify(`${token}e`, SECRET_KEY);
    console.log(verifyToken);
} catch (error) {
    console.log(error.message);
}

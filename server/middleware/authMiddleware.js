import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
        message: "Authentication required"
    });
}

    console.log(authHeader);
    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(
    token,
    role,
   
    process.env.JWT_SECRET
);



req.user = decoded;

console.log(req.user)
} catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }


    next();
};

export default authMiddleware;
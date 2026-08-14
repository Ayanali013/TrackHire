const roleMiddleware = (allowedRole) => {
  return (req, res, next) => {

    console.log(req.user.role)

    if (req.user.role !== allowedRole) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    next();
  };
};

export default roleMiddleware;
const registerUser = (req, res) => {

    console.log(req.body);

    res.status(200).json({
        message: "Data Received"
    });

};

export { registerUser };
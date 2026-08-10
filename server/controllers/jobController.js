const createJob = async (req, res) => {
    try {

        // Job creation logic will come here

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export { createJob };
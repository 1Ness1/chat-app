export const login = async (req, res) => {
    try {
        const {fullName, userName, password, configPassword, gender} = req.body;

    } catch(error) {

    }

    res.send("Login");
};

export const signup = (req, res) => {
    console.log("Signup");

    res.send("Signup");
};

export const logout = (req, res) => {
    console.log("Logout");

    res.send("Logout")
};
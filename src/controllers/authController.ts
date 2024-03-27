import userModel from "@/models/userModel";

const login = async ({ jwt, body }) => {
    try {
        const { username, password } = body;

        // check if username and password are correct in the database
        const user = await userModel.findOne({ username });

        if (!user) {
            return {
                status: 400,
                message: "Username or password is incorrect",
            };
        }

        // check password
        const isMatch = await Bun.password.verify(password, user.password);

        if (!isMatch) {
            return {
                status: 400,
                message: "Username or password is incorrect",
            };
        }

        // generate token
        const token = await jwt.sign({
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
        });

        // save token
        user.tokens.push({ token });

        await user.save();

        return {
            status: 200,
            message: "Login successful",
            token,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: "Internal server error",
        };
    }
};

const register = async ({ body }) => {
    try {
        const { name, username, email, password } = body;

        // check if username and email are unique
        const isUsernameExist = await userModel.findOne({
            username,
        });

        if (isUsernameExist) {
            return {
                status: 400,
                message: "Username is already taken",
            };
        }

        const isEmailExist = await userModel.findOne({
            email,
        });

        if (isEmailExist) {
            return {
                status: 400,
                message: "Email is already taken",
            };
        }

        // hash password
        const hashedPassword = await Bun.password.hash(password, {
            algorithm: "bcrypt",
        });

        // create user
        const user = new userModel({
            name,
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        return {
            status: 200,
            message: "Register successful",
        };
    } catch (error) {
        return {
            status: 500,
            message: "Internal server error",
        };
    }
};

export { login, register };

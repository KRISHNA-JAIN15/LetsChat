import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";



export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        const isPasswordValid = await bcrypt.compare(password, user?.password ||  "");

        if(!user || !isPasswordValid) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);
        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.log("Error logging in user:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            maxAge: 0
        });
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error logging out user:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const signup = async (req, res) => {
    try {
        const {fullName , username , password , confirmPassword , gender} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const user = await User.findOne({ username });

        if(user){
            return res.status(400).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic =  `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });


        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            return res.status(201).json({ 
                _id : newUser._id,
                fullName : newUser.fullName,
                username : newUser.username,
                profilePic : newUser.profilePic
            });
        } else {
            return res.status(400).json({ error: "Unable to create user" });
        }


    } catch (error) {
        console.log("Error creating user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};                                    

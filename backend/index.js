require("dotenv").config();
require("./db/config")
const express = require('express');
const cors = require("cors");
const User = require("./db/users")
const app = express();
const Product = require('./db/product');
const Wishlist = require('./db/wishlist');
const Jwt = require('jsonwebtoken');
const jwtKey = 'mern-project'
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const SITE_BASE_URL = process.env.SITE_BASE_URL
const PORT = process.env.PORT || 5000
const saltRounds = 10;

app.use(express.json());
app.use(cors());


app.post('/register', async (req, res) => {
    try {
        const { name, email, password, userType, mobile_number, address } = req.body;

        // Validate request body
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        // Create new user without storing password in the User object
        const newUser = new User({ name, email, userType, mobile_number, address });
        newUser.password = hashedPassword; // Set the hashed password separately
        await newUser.save();

        // Generate JWT token
        Jwt.sign({ user: newUser }, jwtKey, { expiresIn: '2h' }, (err, token) => {
            if (err) {
                console.error('JWT error:', err);
                return res.status(500).json({ error: 'Error creating JWT token' });
            }
            res.status(200).json({ user: newUser, auth: token });
        });
    } catch (error) {
        console.error('User registration error:', error);
        res.status(500).json({ error: 'Error during user registration' });
    }
});

app.post("/login", async (req, res) => {
    if (req.body.email && req.body.password) {
        try {
            const user = await User.findOne({ email: req.body.email });

            if (user) {
                // Check if user object has a password property
                if (user.password) {
                    const passwordMatch = bcrypt.compareSync(req.body.password, user.password);

                    if (passwordMatch) {
                        Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                            if (err) {
                                console.error(err);
                                res.status(500).send({ result: "Something went wrong, Please try after some time" });
                            } else {
                                res.send({ user, auth: token });
                            }
                        });
                    } else {
                        res.send({ result: 'Incorrect password' });
                    }
                } else {
                    res.send({ result: 'User object does not have a valid password' });
                }
            } else {
                res.send({ result: 'Email not registered' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({ result: "Something went wrong, Please try after some time" });
        }
    } else {
        res.send({ result: 'Email and password are required' });
    }
});


app.get("/user", async (req, res) => {
    let user = await User.find();
    if (user.length > 0) {
        res.send(user)
    } else {
        res.send({ result: "No user found" });
    }
})
app.get("/user-update/:id", async (req, res) => {
    const result = await User.findOne({ _id: req.params.id })
    if (result) {
        res.send(result)
    } else {
        res.send({ result: "result not found" })
    }
})
app.put("/user/:id", async (req, res) => {
    const result = await User.updateOne({ _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})
app.post("/add-product", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})
app.get("/products", async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: "No products found" });
    }
})
app.post("/add-to-wishlist", async (req, res) => {
    try {
        let wishlist = new Wishlist(req.body);
        let result = await wishlist.save();
        res.send(result);
    } catch (error) {
        console.error("Error while adding to wishlist:", error);
        res.status(500).send({ error: "Failed to add item to wishlist. Please try again later." });
    }
});


app.get("/wishlist/", async (req, res) => {
    let wishlist = await Wishlist.find();
    if (wishlist.length > 0) {
        res.send(wishlist)
    } else {
        res.send({ result: "No products found" });
    }
})
app.delete("/delete-from-wishlist/:id", async (req, res) => {
    const result = await Wishlist.deleteOne({ _id: req.params.id })
    res.send(result);
});


app.post("/forget-password", async (req, res) => {
    const { email } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (!oldUser) {
            return res.json({ status: "User not Exists!!" });
        }
        const secret = oldUser.password;
        const token = Jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
            expiresIn: "5m",
        })
        const link = `${SITE_BASE_URL}/reset-password/${oldUser._id}/${token}`
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sharmasushant245@gmail.com',
                pass: 'vlzyinwxknmmkjcq'
            }
        });

        var mailOptions = {
            from: 'sharmasushant245@gmail.com',
            to: oldUser.email,
            subject: 'Password reset Link',
            text: link
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).json({ status: "Failed to send email" });
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json({ status: "Email sent successfully" });
            }
        });
        console.log(link);
    } catch (error) { return res.status(500).json({ status: "Something went wrong" }); }

})
app.get('/reset-password/:id/:token', async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
        return res.json({ status: "User not Exists!!" });
    }
    const secret = oldUser.password;
    try {
        const verify = Jwt.verify(token, secret);
        res.redirect(`${SITE_BASE_URL}/reset-password/${oldUser._id}/${token}`)
    } catch (error) {
        console.log(error);
        res.send("Not verified")
    }
})

app.post('/reset-password/:id/:token', async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;  // Change here from req.params to req.body
    console.log(req.params);
    const oldUser = await User.findOne({ _id: id });

    if (!oldUser) {
        return res.json({ status: "User not Exists!!" });
    }

    const secret = oldUser.password;

    try {
        const verify = Jwt.verify(token, secret);
        const encryptedPassword = await bcrypt.hash(password, saltRounds);

        await User.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    password: encryptedPassword,
                },
            }
        );
        res.json({ status: "Password updated" });
    } catch (error) {
        console.log(error);
        res.json({ status: "Something Went Wrong" });
    }
});

app.listen(PORT)
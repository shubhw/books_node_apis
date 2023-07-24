const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
// const routes = require('./router/friends.js')
const books = require('./data/books')

let users = [{username:'shubham',password:123}]

const doesExist = (username) => {
    let userswithsamename = users.filter((user) => {
        return user.username === username
    });
    if (userswithsamename.length > 0) {
        return true;
    } else {
        return false;
    }
}

const authenticatedUser = (username, password) => {
    // console.log(username, password)
    let validusers = users.filter((user) => {
        return (user.username === username && user.password === password)
    });
    // { username: 'shubham', password: 123 }
    console.log('validusers =>',validusers)
    if (validusers.length > 0) {
        return true;
    } else {
        return false;
    }
}

const app = express();

app.use(express.json());

app.use(session({ secret: "fingerpint" }))

app.use(express.json());


function jwtAuth(req, res, next) {
    console.log('get friends api ',req.session)
    if (req.session.authorization) {
        token = req.session.authorization['accessToken'];
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user;
                next();
            }
            else {
                return res.status(403).json({ message: "User not authenticated" })
            }
        });
    } else {
        return res.status(403).json({ message: "User not logged in" })
    }
}


app.get("/books",jwtAuth,(req,res)=>{
    return res.status(200).json(books);
});
// app.get("/books/:isbn",jwtAuth,(req,res)=>{
app.get("/books/:isbn",(req,res)=>{
    const isbnBooks = books.filter((item)=>{
     return item.isbn===req.params.isbn   
    })
    return res.status(200).json(isbnBooks);
});

app.get("/books/author/:author",(req,res)=>{
    const isbnBooks = books.filter((item)=>{
     return item.authors===req.params.author   
    })
    return res.status(200).json(isbnBooks);
});

app.get("/books/title/:title",(req,res)=>{
    const isbnBooks = books.filter((item)=>{
     return item.title===req.params.title   
    })
    return res.status(200).json(isbnBooks);
});

app.get("/books/review/:review",(req,res)=>{
    const isbnBooks = books.filter((item)=>{
     return item.review===req.params.review   
    })  
    return res.status(200).json(isbnBooks);
});

app.put("/books/:id",(req,res)=>{
    const updatedBook = books.map((item)=>{
        const newItem = item;
        if(newItem.id.toString()===req.params.id.toString()){
            newItem.title = req.body.name
        }   
        return newItem;
    })  
    return res.status(200).json({"message":'Books has been sucessfully updated',"book":updatedBook});
});

app.delete("/books/:id",(req,res)=>{
    const deleteBook = books.filter((item)=>{
        return item.id.toString() !==req.params.id.toString()
    })  
    return res.status(200).json({"message":'Books has been sucessfully deleted',"book":deleteBook});
});

app.get("/all-books/",(req,res)=>{
    return res.status(200).json({"book":books});
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(404).json({ message: "Error logging in" });
    }

    if (authenticatedUser(username, password)) {
        let accessToken = jwt.sign({
            data: password
        }, 'access', { expiresIn: 60 * 60 });

        req.session.authorization = {
            accessToken, username
        }
        return res.status(200).send("User successfully logged in");
    } else {
        return res.status(208).json({ message: "Invalid Login. Check username and password" });
    }
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        if (!doesExist(username)) {
            users.push({ "username": username, "password": password });
            return res.status(200).json({ message: "User successfully registred. Now you can login" });
        } else {
            return res.status(404).json({ message: "User already exists!" });
        }
    }
    return res.status(404).json({ message: "Unable to register user." });
});


const PORT = 5000;

// app.use("/friends", routes);

app.listen(PORT, () => console.log("Server is running"));
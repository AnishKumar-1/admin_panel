const con = require('./config');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

//astrologer update api.............................
app.post('/api/asupdate/:id', (req, res) => {
    let data = [
        req.body.gender,
        req.body.name,
        req.body.password,
        req.body.mobile_number,
        req.body.email,
        req.body.experience,
        req.body.city,
        req.body.system_knows,
        req.body.language_knows,
        req.body.catagories,
        req.body.short_bio,
        req.body.status,
        req.body.profilepic,
        req.body.about,
        req.body.insta_link,
        req.body.youtube_link,
        req.body.fb_link,
        req.params.id
    ];
    con.query('update astrologer set gender = ?,name = ?,password = ?,mobile_number = ?,email = ?,experience = ?,city = ?,system_knows = ?,language_knows = ?,catagories = ?,short_bio = ?,status = ?,profilepic = ?,about = ?,insta_link = ?,youtube_link = ?,fb_link = ? where id = ?', data, (err, result) => {
        if (err) throw err;
        res.json({ message: "data update successfully" });
    })
})


//astrologer get by id data.....
app.get('/api/asgetid/:id', (req, res) => {
    let id = req.params.id;
    con.query('select *from astrologer where id = ? ', id, (err, result) => {
        if (err) throw err;

        res.json(result);
    })
})


//delete astrologer data api
app.delete('/api/asdelete/:id', (req, res) => {
    let id = req.params.id;
    con.query('delete from astrologer where id =?', id, (err, result) => {
        res.json({ message: "data deleted successfully." });
    })
})







//user table get  by  id   api...........................................
app.get('/api/usget/:id', (req, res) => {
    let id = req.params.id;
    con.query('select *from users where id = ?', id, (err, result) => {
        res.json(result);
    })
})

//user update api..............
app.post('/api/usupdate/:id', (req, res) => {
    let data = [
        req.body.email,
        req.body.name,
        req.body.mobileno,
        req.body.wallet,
        req.body.token,
        req.body.dob,
        req.body.profilepic,
        req.body.otp,
        req.params.id
    ];
    con.query('update users set email = ?,name = ?,mobileno = ?,wallet = ?,token = ?,dob = ?,profilepic = ?,otp = ? where id = ?', data, (err, result) => {
        if (err) throw err;
        res.json({ message: "data update successfully" });
    })
})


//user delete api....
app.delete('/api/usdelete/:id', (req, res) => {
    let id = req.params.id;
    con.query('delete from users where id =?', id, (err, result) => {
        res.json({ message: "data deleted successfully." });
    })
})


//admin login api................................
app.post('/api/adlogin', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    con.query('select *from admin', (err, result) => {
        if (err) throw err;
        
        if (username === result[0].username) {
            if (password === result[0].password) {
                res.json({ message: "login success" })
            }
            else {
                res.json({ message: "incorrect password" });
            }
        }
        else {
            res.json({ message: "incorrect username" });
        }
    })
})




app.listen(3000, () => {
    console.log("server running on port no 3000");
});
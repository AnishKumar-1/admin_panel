const con = require('./config');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
var axios = require("axios").default;
const app = express();
const corsOptions = {
    origin: "http://192.168.1.2:19000",
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json());


let randomotp = generateotp(999, 9999);

// register api....
app.post('/api/register', (req, res) => {
    const profileurl = "https://media.istockphoto.com/id/922962354/vector/no-image-available-sign.jpg?b=1&s=170667a&w=0&k=20&c=VqpxaeBt-p0q2JlujQV-0fmCsaD3NeP4mmOUX4uZEIc=";


    const { mobile } = req.body;
    const otp = randomotp;
    const data = {
        email: "no",
        name: "no",
        mobileno: mobile,
        wallet: "0",
        token: "",
        dob: "no",
        profilepic: profileurl,
        otp: randomotp
    }
    con.query("select * from users where mobileno = ?", mobile, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            con.query("insert into users set ?", data, (err, result) => {
                if (err) throw err;
                sendOtp(otp, mobile);
                res.json({ message: "Otp sent success", mobile: mobile });
            })

        } else {
            con.query("update users set otp = ? where mobileno = ?", [otp, mobile], (err, result) => {
                if (err) throw err;
                sendOtp(otp, mobile);
                res.json({ message: "Otp sent success", mobile: mobile });
            })

        }


    })





})

//otp varification api.................
app.post('/api/smsverify', (req, res) => {
    let mobile = req.body.mobile;
    let otp1 = req.body.otp1;
    let otp2 = req.body.otp2;
    let otp3 = req.body.otp3;
    let otp4 = req.body.otp4;
    let finalotp = otp1.toString() + otp2.toString() + otp3.toString() + otp4.toString();
    con.query("select * from users where mobileno = ?", mobile, (err, result) => {
        if (finalotp == result[0].otp.toString()) {
            res.json({ message: "Verified Otp", username: result[0].name.toString(), dob: result[0].dob.toString(), userid: result[0].id.toString() })
        }
        else {
            res.json({ message: "Enter Valid Otp" })
        }


    })
})






//username update api.....................

app.post('/api/usernameupdate', (req, res) => {
    const data = [req.body.username, req.body.id];
    con.query("update users set name = ? where id = ? ", data, (err, result) => {
        res.send({ message: "Username Updated" });
    })

})


//for dob update api....
app.post('/api/userdobupdate', (req, res) => {
    const data = [req.body.dateofbirth, req.body.id];
    con.query("update users set dob = ? where id = ? ", data, (err, result) => {
        res.send({ message: "Dob Updated" });
    })
})
//for update profile...
app.post('/api/updateprofile', (req, res) => {
    const data = [req.body.name, req.body.email, req.body.mobileno, req.body.id];
    con.query("update users set name = ?, email = ?, mobileno = ? where id = ?", data, (err, result) => {
        res.send({ message: "Profile Updated" });
    })

})


//for wallet get api.....
app.post('/api/getwallet', (req, res) => {
    const data = [req.body.id];
    con.query("select * from users where id  = ? ", data, (err, result) => {
        res.json({ "walletbal": result[0].wallet.toString(), "dob": result[0].dob.toString(), "username": result[0].name.toString(), "mobile": result[0].mobileno.toString(), "email": result[0].email.toString(), "profilepic": result[0].profilepic.toString() });

    })
})
// start astrologer api
app.post('/api/asregister', (req, res) => {
    const mobile_number = req.body.mobile_number;
    const about = req.body.about;
    const insta_link = req.body.insta_link;
    const youtube_link = req.body.youtube_link;
    const fb_link = req.body.fb_link;
    const status = "pending";
    const { gender, name, password, email, experience, city, system_knows, language_knows, catagories, short_bio } = req.body;
    const data = {
        gender: gender,
        name: name,
        password: password,
        mobile_number: mobile_number,
        email: email,
        experience: experience,
        city: city,
        system_knows: system_knows,
        language_knows: language_knows,
        catagories: catagories,
        short_bio: short_bio,
        status: status,
        about: about,
        insta_link: insta_link,
        youtube_link: youtube_link,
        fb_link: fb_link

    }
    con.query("select mobile_number from astrologer ", (err, result) => {
        const mobile_number_exist = result.find(obj => obj.mobile_number == mobile_number);
        if (mobile_number_exist) {
            res.json({ message: "Mobile Number Already Exist" })
        }
        else {
            con.query(" insert into astrologer set ? ", data, (err, result) => {
                res.json({ message: "Register Successfully." });
            })
        }
    })
})




//astrologer login api.....
app.post('/api/aslogin', (req, res) => {
    const { mobile_number, password } = req.body;
    let mobile_number_check = 0;
    let password_check = 0;
    let check_status = 0;
    con.query("select mobile_number,password,status from astrologer", (err, result) => {
        for (let i = 0; i < result.length; i++) {
            if (result[i].mobile_number == mobile_number) {
                mobile_number_check++;
                if (result[i].status == "pending") {
                    check_status++;
                }
            }
            if (result[i].password == password) {
                password_check++;
            }

        }

        if (mobile_number_check > 0 && password_check > 0) {
            if (check_status > 0) {
                res.json({ message: "your status is pending you cannot login" });
            }
            else {
                res.json({ message: "login successfully" })
            }
        }
        else if (mobile_number_check > 0) {
            if (password_check == 0) {
                res.json({ message: "Please Enter Valid Password" });
            }
        }
        else {
            res.json({ message: "Please Enter Valid Data" });
        }
    })
})

//astrologer get api.......................
app.get('/api/asgetdata', (req, res) => {
    con.query("select * from astrologer", (err, result) => {
        res.json(result);
    })
})







//user get api..........................
app.get('/api/usgetdata', (req, res) => {
    con.query('select * from users', (err, result) => {
        if (err) throw err;

        res.json(result);
    })
})










//astrologer file upload api..............................................

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

app.use('/uploads', express.static("uploads"));
const upload = multer({ storage: storage }).single('photo');

app.post('/fileupload', upload, (req, res) => {
    let filepath = req.file.path;
    con.query('insert into astrologer set profilepic ?', filepath, (err, result) => {

        res.json({ message: "file uploaded successfully.." });
    })

});




function generateotp(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
function sendOtp(otp, mobile) {
    var options = {
        method: 'POST',
        url: 'https://www.fast2sms.com/dev/bulk',
        headers: {
            "authorization": "HMKmXgRAc4bZ0pExP6dorj7JCiv29yLOfQh8n3VwFDkYztTlsIPXUzKEW49pVO7Ab5c8sfoIaF3nljQJ",
            "accept": "*/*",
            "cache-control": "no-cache",
            "content-type": "application/json",
        },
        data: {
            "sender_id": "FSTSMS",
            "message": "Your Astroseek verification  code is " + otp,
            "language": "english",
            "route": "p",
            "numbers": mobile,
            "flash": "1"
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data.message);
    }).catch(function (error) {
        console.error(error);
    });

}
app.listen(5000, () => {
    console.log("server is running on port 5000")
})

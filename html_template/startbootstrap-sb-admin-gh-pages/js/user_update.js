let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');
let save = document.getElementById('update_data');
fetch(`http://localhost:3000/api/usget/${id}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.email').value = data[0].email;
        document.querySelector('.name').value = data[0].name;
        document.querySelector('.mobileno').value = data[0].mobileno;
        document.querySelector('.wallet').value = data[0].wallet;
        document.querySelector('.token').value = data[0].token;
        document.querySelector('.dob').value = data[0].dob;
        document.querySelector('.profilepic').value = data[0].profilepic;
        document.querySelector('.otp').value = data[0].otp;
        save.addEventListener('click', function (event) {
            event.preventDefault();
            let email = document.querySelector('.email').value;
            let name = document.querySelector('.name').value;
            let mobileno = document.querySelector('.mobileno').value;
            let wallet = document.querySelector('.wallet').value;
            let token = document.querySelector('.token').value;
            let dob = document.querySelector('.dob').value;
            let profilepic = document.querySelector('.profilepic').value;
            let otp = document.querySelector('.otp').value;

            //update api................
            fetch(`http://localhost:3000/api/usupdate/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name, mobileno, wallet, token, dob, profilepic, otp}),
              })
                .then(response => response.json())
                .then(data => {
        
                    
                  window.location.href="UsersTable.html";  
        
                }).catch(error => {
                  console.log(error);
                })
        

        })

    }).catch(error => {
        console.log(error);
    });



// let email=document.querySelector('.email').value;
// let name=document.querySelector('.name').value;
// let mobileno=document.querySelector('.mobileno').value;
// let wallet=document.querySelector('.wallet').value;
// let token=document.querySelector('.token').value;
// let dob=document.querySelector('.dob').value;
// let profilepic=document.querySelector('.profilepic').value;
// let otp=document.querySelector('.otp').value;

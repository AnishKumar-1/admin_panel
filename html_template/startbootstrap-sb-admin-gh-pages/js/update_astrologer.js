let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

let optpending=document.getElementById('pending');
let optactive=document.getElementById('active');


//astrologer get data api............................
let save = document.getElementById('update_data');
fetch(`http://localhost:3000/api/asgetid/${id}`)
  .then(response => response.json())
  .then(data => {
    
     if(data[0].status=="pending" || data[0].status=="Pending")
     {
      optpending.textContent="pending";
      optactive.textContent="active";
     }
     else
     {
      optpending.textContent="active";
      optactive.textContent="pending";
     }
 
    document.querySelector('.gender').value = data[0].gender;
    document.querySelector('.name').value = data[0].name;
    document.querySelector('.password').value = data[0].password;
    document.querySelector('.mobile_number').value = data[0].mobile_number;
    document.querySelector('.email').value = data[0].email;
    document.querySelector('.experience').value = data[0].experience;
    document.querySelector('.city').value = data[0].city;
    document.querySelector('.system_knows').value = data[0].system_knows;
    document.querySelector('.language_knows').value = data[0].language_knows;
    document.querySelector('.catagories').value = data[0].catagories;
    document.querySelector('.short_bio').value = data[0].short_bio;

    document.querySelector('.profilepic').value = data[0].profilepic;
    document.querySelector('.about').value = data[0].about;
    document.querySelector('.insta_link').value = data[0].insta_link;
    document.querySelector('.youtube_link').value = data[0].youtube_link;
    document.querySelector('.fb_link').value = data[0].fb_link;



    
    


    save.addEventListener('click', function (event) {
      event.preventDefault();
    
      const select = document.getElementById("inputGroupSelect04");
      const selectedOption = select.options[select.selectedIndex];
      let status = selectedOption.value;
   
  
      

      let gender = document.querySelector('.gender').value;
      let name = document.querySelector('.name').value;
      let password = document.querySelector('.password').value;
      let mobile_number = document.querySelector('.mobile_number').value;
      let email = document.querySelector('.email').value;
      let experience = document.querySelector('.experience').value;
      let city = document.querySelector('.city').value;;
      let system_knows = document.querySelector('.system_knows').value;
      let language_knows = document.querySelector('.language_knows').value;
      let catagories = document.querySelector('.catagories').value;
      let short_bio = document.querySelector('.short_bio').value;
      let profilepic = document.querySelector('.profilepic').value;
      let about = document.querySelector('.about').value;
      let insta_link = document.querySelector('.insta_link').value;
      let youtube_link = document.querySelector('.youtube_link').value;
      let fb_link = document.querySelector('.fb_link').value;

      //update api call

      fetch(`http://localhost:3000/api/asupdate/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gender, name, password, mobile_number, email, experience, city, system_knows, language_knows, catagories, short_bio,status, profilepic, about, insta_link, youtube_link, fb_link }),
      })
        .then(response => response.json())
        .then(data => {

          window.location.href="index.html";  

        }).catch(error => {
          console.log(error);
        })


    })

  }).catch(error => {
    console.log(error);
  });





let logoutbtn = document.getElementById('logout-btn');
logoutbtn.addEventListener("click", event => {
  event.preventDefault();
  sessionStorage.clear();
  window.location.href = "login.html";

})



let total_users=document.getElementById('user_count');


//astrologer get  api call..



fetch('http://localhost:5000/api/asgetdata')
  .then(response => response.json())
  .then(data => {
    let tableBody = document.getElementById('table-body');
    for (let i = 0; i < data.length; i++) {
      total_users.innerText=data[i].id;
      let tr = document.createElement('tr');
      let idCell = document.createElement('td');
      idCell.textContent = data[i].id;
      tr.appendChild(idCell);
      let gendercell = document.createElement('td');
      gendercell.textContent = data[i].gender;
      tr.appendChild(gendercell);
      let nameCell = document.createElement('td');
      nameCell.textContent = data[i].name;
      tr.appendChild(nameCell);
      let passwordCell = document.createElement('td');
      passwordCell.textContent = data[i].password;
      tr.appendChild(passwordCell);
      let mobile_numberCell = document.createElement('td');
      mobile_numberCell.textContent = data[i].mobile_number;
      tr.appendChild(mobile_numberCell);
      let emailCell = document.createElement('td');
      emailCell.textContent = data[i].email;
      tr.appendChild(emailCell);
      let experienceCell = document.createElement('td');
      experienceCell.textContent = data[i].experience;
      tr.appendChild(experienceCell);
      let cityCell = document.createElement('td');
      cityCell.textContent = data[i].city;
      tr.appendChild(cityCell);
      let system_knowsCell = document.createElement('td');
      system_knowsCell.textContent = data[i].system_knows;
      tr.appendChild(system_knowsCell);
      let language_knowsCell = document.createElement('td');
      language_knowsCell.textContent = data[i].language_knows;
      tr.appendChild(language_knowsCell);
      let catagoriesCell = document.createElement('td');
      catagoriesCell.textContent = data[i].catagories;
      tr.appendChild(catagoriesCell);
      let short_bioCell = document.createElement('td');
      short_bioCell.textContent = data[i].short_bio;
      tr.appendChild(short_bioCell);
      let statusCell = document.createElement('td');
      statusCell.textContent = data[i].status;
      tr.appendChild(statusCell);
      let profileCell = document.createElement('td');
      profileCell.textContent = data[i].profilepic;
      tr.appendChild(profileCell);
      let aboutcell = document.createElement('td');
      aboutcell.textContent = data[i].about;
      tr.appendChild(aboutcell);
      let instacell = document.createElement('td');
      instacell.textContent = data[i].insta_link;
      tr.appendChild(instacell);
      let youtubecell = document.createElement('td');
      youtubecell.textContent = data[i].youtube_link;
      tr.appendChild(youtubecell);
      let fbcell = document.createElement('td');
      fbcell.textContent = data[i].fb_link;
      tr.appendChild(fbcell);
      let updateCelltd = document.createElement('td');
      let button = document.createElement('button');
      let updateButtonCell = document.createElement('i');
      updateButtonCell.classList.add("fa-regular", "fa-pen-to-square");
      button.appendChild(updateButtonCell);
      updateCelltd.appendChild(button);
      updateButtonCell.style.fontSize = "20px";
      updateButtonCell.style.cursor = "pointer";
      button.style.border = "none";
      button.style.background = "transparent";
      button.style.width = "fit-content";
      button.addEventListener("click", function () {
        const id = data[i].id;
        const url = "astrologer_update.html?id=" + id;
        location.href = url;

      });
      tr.appendChild(updateCelltd);

      let deleteCelltd = document.createElement('td');
      let deletebtn = document.createElement('button');
      let deletebutton = document.createElement('i');
      deletebutton.classList.add("fa-sharp", "fa-solid", "fa-trash");
      deletebtn.appendChild(deletebutton);
      deleteCelltd.appendChild(deletebtn);
      deletebtn.style.border = "none";
      deletebtn.style.background = "transparent";
      deletebtn.style.fontSize = "20px";
      deletebtn.addEventListener("click", function () {
        let id_no = data[i].id;
        if (confirm("are you sure")) {
          fetch(`http://localhost:3000/api/asdelete/${id_no}`, {
            method: 'DELETE',
          }
          )
            .then(response => response.json())
            .then(data => {
              location.reload();
            }).catch(error => {

            });
          

        }
      });
      tr.appendChild(deleteCelltd);


      tableBody.appendChild(tr);
    }



  })
  .catch(error => {
    console.error('Error:', error);
  });




//get id function..

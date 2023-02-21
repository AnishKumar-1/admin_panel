let logoutbtn = document.getElementById('logout-btn');
logoutbtn.addEventListener("click", event => {
  event.preventDefault();
  sessionStorage.clear();
  window.location.href = "login.html";

})


fetch('http://localhost:5000/api/usgetdata')
  .then(response => response.json())
  .then(data => {

    let tableBody = document.getElementById('table-body');
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr');
      let idCell = document.createElement('td');
      idCell.textContent = data[i].id;
      tr.appendChild(idCell);
      let emailcell = document.createElement('td');
      emailcell.textContent = data[i].email;
      tr.appendChild(emailcell);
      let nameCell = document.createElement('td');
      nameCell.textContent = data[i].name;
      tr.appendChild(nameCell);
      let mobilenoCell = document.createElement('td');
      mobilenoCell.textContent = data[i].mobileno;
      tr.appendChild(mobilenoCell);
      let walletCell = document.createElement('td');
      walletCell.textContent = data[i].wallet;
      tr.appendChild(walletCell);
      let tokenCell = document.createElement('td');
      tokenCell.textContent = data[i].token;
      tr.appendChild(tokenCell);
      let dobCell = document.createElement('td');
      dobCell.textContent = data[i].dob;
      tr.appendChild(dobCell);
      let profilepicCell = document.createElement('td');
      profilepicCell.textContent = data[i].profilepic;
      tr.appendChild(profilepicCell);
      let otpCell = document.createElement('td');
      otpCell.textContent = data[i].otp;
      tr.appendChild(otpCell);
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
        const url = "update_user.html?id=" + id;
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
          fetch(`http://localhost:3000/api/usdelete/${id_no}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
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



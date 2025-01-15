//ganti nama
let user = prompt("siapakah nama anda?", "");
document.getElementById('name-user').innerHTML = user

//banner autoslide
let start = 0;
otomatis();

function otomatis()
{
    const sliders = document.querySelectorAll(".slider");

    for (let i = 0; i < sliders.length; i++)

     {
    sliders[i].style.display = "none";
    }

    if (start >= sliders.length)
    {
        start = 0;
    }
    sliders[start].style.display = "block";
    console.log("gambar ke" +start)
    start++;

    setTimeout(otomatis, 3000)
    }

    //validasi
document.getElementById("userForm").addEventListener("submit", function(event) {  
    event.preventDefault(); // Prevent form submission  
  
    // Hapus pesan error
    var errorMessages = document.querySelectorAll(".error-message");  
    errorMessages.forEach(function(element) {  
        element.textContent = "";  
    });  
  
    var isValid = true;  
  
    // Validasi nama  
    var name = document.getElementById("sender-name").value.trim(); // Ensure the ID matches  
    if (!name) {  
        document.getElementById("name-error").textContent = "Name is required.";  
        isValid = false;  
    }  
  
    // Validasi tanggal lahir 
    var birthdate = document.getElementById("birthdate").value;  
    if (!birthdate) {  
        document.getElementById("birthdate-error").textContent = "Birthdate is required.";  
        isValid = false;  
    }  
  
    // Validasi gender  
    var genderMale = document.getElementById("male").checked;  
    var genderFemale = document.getElementById("female").checked;  
    if (!genderMale && !genderFemale) {  
        document.getElementById("gender-error").textContent = "Gender is required.";  
        isValid = false;  
    }  
  
    // Validasi pesan 
    var message = document.getElementById("message-content").value.trim();  
    if (!message) {  
        document.getElementById("message-error").textContent = "Message is required.";  
        isValid = false;  
    }  
  
    // submit form  
    if (isValid) {  
        // Preview pesan 
        document.getElementById("sender-full-name").textContent = name;  
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var formattedBirthdate = new Date(birthdate).toLocaleDateString('id-ID', options);
        document.getElementById("sender-birth-date").textContent = formattedBirthdate;
        document.getElementById("sender-gender").textContent = genderMale ? "Laki-Laki" : "Perempuan";  
        document.getElementById("sender-messages").textContent = message;  

    }  
});  
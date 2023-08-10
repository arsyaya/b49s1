// Condition if else
// let nilai = 20;

// if (nilai == 90) {
//   console.log("kamu sugoi abis");
// } else if (nilai >= 90) {
//   console.log("lulus");
// } else {
//   console.log("tidak lulus");
// }

// function
// adalah suatu rangkaian perintah atau kode yang dijalankan ketika fungsinya dipanggil
// function hello() {
//   let bilanganSatu = 50;
//   let bilanganDua = 20;

//   let result = bilanganSatu + bilanganDua;

//   console.log(result);
// }
// pemanggilan fungsi
// hello();

// function Hello memiliki parameter ()
// dengan parameter :
// - bilanganSatu
// - bilanganDua
// function Hello(bilanganSatu, bilanganDua) {
//   let result = bilanganSatu + bilanganDua;

//   console.log(result);
// }
// Hello(50, 20);

// function namaSaya(name) {
//   console.log(name);
// }
// namaSaya("Arsya Rizvadwinafisa");

function submitData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("telp").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("desc").value;

  if (name == "") {
    return alert("Nama harus diisi");
  } else if (email == "") {
    return alert("E-mail harus diisi");
  } else if (phone == "") {
    return alert("No hp harus diisi");
  } else if (subject == "") {
    return alert("Subject harus dipilih");
  } else if (message == "") {
    return alert("Deskripsi harus diisi");
  }

  //   console.log(name);
  //   console.log(email);
  //   console.log(phone);
  //   console.log(subject);
  //   console.log(message);

  let emailReceiver = "arsyajr9@gmail.com";

  let a = document.createElement("a");
  a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}`;
  a.click();

  // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}

  let data = { name, email, phone, subject, message };

  console.log(data);
}

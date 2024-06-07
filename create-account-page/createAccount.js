const daftar = document.querySelector(".daftar");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const back = document.querySelector(".kembali");

// back to sign in page
back.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".loader-container").style.visibility = "visible";
  setTimeout(() => {
    document.querySelector(".loader-container").style.visibility = "hidden";
    window.location.href = "../";
  }, 1000);
});

// daftar
daftar.addEventListener("click", async (e) => {
  e.preventDefault();
  if (username.value.trim() === "" && password.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Username and password are required",
    });
  } else if (username.value.trim() === "" && password.value.trim() !== "") {
    Swal.fire({
      icon: "error",
      title: "Username are required",
    });
  } else if (username.value.trim() !== "" && password.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Password are required",
    });
  } else {
    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("password", password.value.trim());

    await Swal.fire({
      icon: "success",
      title: "Account Created Successfully",
    });

    document.querySelector(".loader-container").style.visibility = "visible";
    setTimeout(() => {
      window.location.href = "../";
      document.querySelector(".loader-container").style.visibility = "hidden";
    }, 1000);
  }
});

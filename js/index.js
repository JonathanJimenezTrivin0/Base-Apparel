const FORM = document.getElementById("form");
const INPUT = document.querySelector("#input");
const ERROR_MESSAGE = document.getElementById("form__error");
const ICON_ERROR = document.getElementById("iconError");

const handleSubmit = (e) => {
  e.preventDefault();
  const EMAIL = e.target.elements.email.value;
  const RESULT = { Email: EMAIL };

  if (EMAIL !== "") {
    INPUT.style.border = "1px solid hsl(0, 36%, 70%)";
    INPUT.style.backgroundImage = "none";
    ERROR_MESSAGE.style.display = "none";
    ICON_ERROR.style.display = "none";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Good job!",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(RESULT);
    FORM.reset();
  } else {
    ERROR_MESSAGE.style.display = "block";
    ICON_ERROR.style.display = "block";
    INPUT.style.border = "2px solid hsl(0, 93%, 68%)";
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "Validate the structure of the entered email",
    });
  }
};

FORM.addEventListener("submit", handleSubmit);

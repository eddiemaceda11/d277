console.log("Testing");

const email1 = document.querySelector("#email");
const email2 = document.querySelector("#confirmed-email");

// document.addEventListener("");
email1.addEventListener("input", () => {
  if (email1.value !== email2.value) {
    email2.classList.add("email-error");
  } else if (email1.value === email2.value) {
    email2.classList.remove("email-error");
  }
});

email2.addEventListener("input", () => {
  console.log(email1.value);
  console.log(email2.value);
  if (email1.value !== email2.value) {
    email2.classList.add("email-error");
  } else if (email1.value === email2.value) {
    email2.classList.remove("email-error");
  }
});

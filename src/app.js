let paymentForm = document.querySelector("#paymentForm");

paymentForm.addEventListener("submit", e => {
  e.preventDefault();
  let todoCorrecto = true;
  const form = e.target;

  console.log(e.target);
  let checkCard = /^5432[0-9]{4}[0-9]{4}[0-9]+$/;
  let solonumeros = /^[0-9]+$/;
  let checkCVC = /[0-9]{3,4}/;
  let soloLetras = /^[A-Za-z]+$/;
  let inputState = document.getElementById("inputState");

  if (form.card.value === "" || !checkCard.test(form.card.value)) {
    todoCorrecto = false;
  }
  console.log(`card: ${!checkCard.test(form.card.value)} ${form.card.value}`);

  if (form.cvc.value === "" || !checkCVC.test(form.cvc.value)) {
    todoCorrecto = false;
  }
  console.log(`cvc: ${!checkCVC.test(form.cvc.value)} ${form.cvc.value}`);

  if (form.amount.value === "" || !solonumeros.test(form.amount.value)) {
    todoCorrecto = false;
  }
  console.log(
    `amount: ${!solonumeros.test(form.amount.value)} ${form.amount.value}`
  );

  if (form.firstName.value === "" || !soloLetras.test(form.firstName.value)) {
    todoCorrecto = false;
  }
  console.log(
    `firstName: ${!soloLetras.test(form.firstName.value)} ${
      form.firstName.value
    }`
  );

  if (form.lastName.value === "" || !soloLetras.test(form.lastName.value)) {
    todoCorrecto = false;
  }
  console.log(
    `lastName: ${!soloLetras.test(form.lastName.value)} ${form.lastName.value}`
  );

  if (form.city.value === "" || !soloLetras.test(form.city.value)) {
    todoCorrecto = false;
  }
  console.log(`city: ${!soloLetras.test(form.city.value)} ${form.city.value}`);

  if (inputState.options[inputState.selectedIndex].value === "") {
    todoCorrecto = false;
  }
  console.log(
    `inputSate: ${inputState.options[inputState.selectedIndex].value}`
  );

  if (
    form.postalCode.value === "" ||
    !solonumeros.test(form.postalCode.value)
  ) {
    todoCorrecto = false;
  }

  console.log(
    `postalCode: ${!solonumeros.test(form.postalCode.value)} ${
      form.postalCode.value
    }`
  );

  if (
    form.formTextarea.value === "" ||
    !soloLetras.test(form.formTextarea.value)
  ) {
    todoCorrecto = false;
  }

  console.log(
    `formTextarea: ${!soloLetras.test(form.formTextarea.value)} ${
      form.formTextarea.value
    }`
  );

  if (todoCorrecto) {
    alert("formulario enviado");
    form.submit();
  } else {
    alert("Por favor verifique el formulario");
  }
});

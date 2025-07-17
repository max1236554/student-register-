document.getElementById('form').onsubmit = e => {
  e.preventDefault();
  const data = {
    email: form.email.value,
    password: form.password.value,
    name: form.name.value,
    address: form.address.value,
    hobbies: form.hobbies.value,
    department: form.department.value
  };
  console.log(data);
  alert("Registered! Check console.");
  form.reset();
};

function toggleAnonymous() {
  const anon = document.getElementById("anonCheck").checked;
  const nameField = document.getElementById("nameField");
  const emailField = document.getElementById("emailField");

  if (anon) {
    nameField.value = "Anonymous";
    nameField.readOnly = true;

    emailField.value = "anonymous@iisermohali.ac.in";
    emailField.readOnly = true;
  } else {
    nameField.value = "";
    nameField.readOnly = false;

    emailField.value = "";
    emailField.readOnly = false;
  }
}

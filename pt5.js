function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var birthDate = document.getElementById('birthDate').value;
    var streetAddress1 = document.getElementById('streetAddress1').value;
    var streetAddressline2 = document.getElementById('streetAddress2').value;
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;
    var region = document.getElementById('region').value;
    var postalCode = document.getElementById('postalCode').value;

    // Perform your validation here, for example:
    if (fullName === '' || email === '' || phoneNumber === '' || birthDate === '' || streetAddress1 === '' || country === '' || city === '' || region === '' || postalCode === '') {
        alert('Please fill in all fields');
        return false;
    } else {
        // If all fields are filled, you can proceed with form submission
        document.getElementById('registrationForm').submit();
    }
}
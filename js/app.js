$(document).foundation()

function getInputs() {
    'use strict';
    var input, firstName, lastName, petName, petType, phone, email, date, time;
  
      // alert('Submit button clicked');
      firstName = $('#firstName').val();
      lastName = $('#lastName').val();
      phone = $('#phone').val();
      email = $('#email').val();
      address = $('#address').val();
      city = $('#city').val();
      giftQty = $('#giftQty').val();
      trips = $('#trips').val();
      input = {
        'firstName': firstName,
        'lastName': lastName,
        'phone': phone,
        'email': email,
        'address': address,
        'city': city,
        'giftQty': giftQty,
        'trips': trips
      }
      console.log("Input:", input)
      return input;
  }

$( document ).ready(function() {
    AOS.init();
    console.log( "Ready!" );

    reqForm.on('submit', function (event) {
        event.preventDefault();
        var input = getInputs();
        emailjs.sendForm('contact_service', 'elfForm', this);
      })
  
});

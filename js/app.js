const btn = $('#button');

$(document).foundation();

var elfForm = $("#elfForm");

function getInputs() {
    'use strict';
    var input, firstName, lastName, petName, petType, phone, email, date, time;
  
      // alert('Submit button clicked');
      firstName = $('#firstName').val();
      lastName = $('#lastName').val();
      phone = $('#phone').val();
      email = $('#email').val();
      // address = $('#address').val();
      // city = $('#city').val();
      // giftQty = $('#giftQty').val();
      // trips = $('#trips').val();
      input = {
        'firstName': firstName,
        'lastName': lastName,
        'phone': phone,
        'email': email,
        // 'address': address,
        // 'city': city,
        // 'giftQty': giftQty,
        // 'trips': trips
      }
      console.log("Input:", input)
      return input;
  }



$( document ).ready(function() {
    AOS.init();
    console.log( "Ready!" );

    $('#elfForm')
 .on('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'elfForm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your Elf Request Has Been Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
  
});

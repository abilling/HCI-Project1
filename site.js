"use strict";
var tel_input = document.querySelector('#telephone');
var submission= document.querySelector('#signup');

(function(){
  // needed to see what kind of browser it is
  if(!('querySelector' in document && 'addEventListener' in document)){
    // Javascript just wont show up.
    return;
  }
  document.addEventListener('DOMContentLoaded', function(){
    // console.log('DOM has loaded.');
  // var heading_text = document.querySelector('#content h1').innerText;
    // console.log('the heading text is:', heading_text);
    submission.setAttribute('disabled', 'disabled');
  });
  tel_input.addEventListener('focus', function(){
    console.log('Person has focused on the telephone input box');
  });
  tel_input.addEventListener('blur', function(){
    console.log('Person has unfocused on the telephone input box');
  });
  tel_input.addEventListener('keyup', function(){
    // checking for non-number symbols
    var clean_number = this.value.replace(/\D/g, '');
    // after replacing non numbers, move to replace 1's
    var best_number = clean_number.replace(/^1/, '');
    // checking for 10 digits
    console.log('The value of #telephone is', this.value);
    if (best_number.length === 10) {
      console.log('number is valid US number.');
      submission.removeAttribute('disabled');
    }
      else{
        submission.setAttribute('disabled','disabled');
      }
  });
}());

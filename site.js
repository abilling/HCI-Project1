(function(){
  // needed to see what kind of browser it is
  if(!('querySelector' in document && 'addEventListener' in document)){
    //Javascript just wont show up.
    return;
  }
  document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM has loaded.');
    var heading_text = document.querySelector('#content h1').innerText;
    console.log('the heading text is:', heading_text);
    var submission= document.querySelector('#signup');
    submission.setAttribute('disabled')
  });
  var tel_input = document.querySelector('#telephone');
  tel_input.addEventListener('focus', function(){
    console.log('Person has focused on the telephone input box');
  });
  var tel_input = document.querySelector('#telephone');
  tel_input.addEventListener('blur', function(){
    console.log('Person has unfocused on the telephone input box');
  });
  tel_input.addEventListener('keyup', function(){
   console.log('The value of #telephone is', this.value);
   var clean_number = this.value.replace(/\D/g,'');
   var best_number = clean_number.replace(/^1/,'');
   if (best_number.length === 10) {
     submission.removeAttribute('disabled');
   }
 });
}());

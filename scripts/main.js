var $form = $('[data-form="info"]');
var $name = $('[data-input="name"]');
var $age = $('[data-input="age"]');
var $shirtSmall = $('[data-input="shirt-small"]');
var $shirtMedium = $('[data-input="shirt-medium"]');
var $shirtLarge = $('[data-input="shirt-large"]');
var $message = $('[data-input="message"]');
var $submit = $('[data-type="submit"]');


function storeData(){
    $form.on('submit', function(event){
        event.preventDefault();
        localStorage.setItem('name', $name.val());
        localStorage.setItem('age', $age.val());
        localStorage.setItem('shirt small', $shirtSmall.is(':checked'));
        localStorage.setItem('shirt medium', $shirtMedium.is(':checked'));
        localStorage.setItem('shirt large', $shirtLarge.is(':checked'));
        localStorage.setItem('message', $message.val());
    });
}

storeData();
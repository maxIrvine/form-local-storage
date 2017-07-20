var $form = $('[data-form="info"]');
var $name = $('[data-input="name"]');
var $age = $('age-field');
var $shirt = $('shirt-field');
var $message = $('message-field');
var $submit = $('[data-type="submit"]');


function storeData(){
    $form.on('submit', function(event){
        console.log("here");
        $name.on('input', function(event){
            console.log($name.val());
        });
    });
}
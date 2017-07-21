// function validateForm(form){
// 	var email= document.getElementById('InputEmail').value;
// 	if(!email){
// 		alert ('please enter email');
// 		return false;
// 	}
// 	validNum();
// 	return true;
// }
// function validNum(){
// 	var num=document.getElementById('InputNumber').value;
// 	if(!Number(num) || num==null){
// 		alert('Please enter valid phone number');
// 		return false;
// 	}
// }
$('document').ready(function(){
	$('#move').fadeIn('slow').animate({
            'left': '6%'
            }, 'slow', function() {
            // Animation complete.
        });
	})
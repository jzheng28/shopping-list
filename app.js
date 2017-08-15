/*

NOTES:
1. Not sure how inputVal works with addItem --> how to get the value of the input,
put it in the array, and spit out the array. Should the inputVal function
be a paremeter in the addItem function?


*/


//shopping list array
var shoppingList = [];

/*get value of input
function inputVal(){
	var input = $('#shopping-list-entry').val();
	return input;
	console.log(input);

}
*/

//add item to shopping list

function addItem(item){
	var item = $('#shopping-list-entry').val();
	shoppingList.push({

		name: item,
		checked: false,

		});
	return item;

}


//list template to inject into the html

var listTemplate = (
	 
     '<li>' +
        '<span class="shopping-item"></span>'+
       ' <div class="shopping-item-controls">'+
         ' <button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>'+
          '</button>'+
        '</div>'+
      '</li>'    

)

//renders the list template 
// ??
function renderTemplate(){

}

//handle form submission

function formSubmission(){
	$('#js-shopping-list-form').submit(function(e){
		e.preventDefault();
		//Display text input here
		$('.shopping-item').text(addItem());
		
	});
}

//run the form submission

$(function() {
	formSubmission();
});



/* TESTING

function test(){
	$('#js-shopping-list-form').submit(function(e){
		e.preventDefault();
		var message = "this is amazing";
		alert(message);
	});
}


$(function(){
	test();
});

*/




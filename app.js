$(document).ready(function(){

 // add item 
  	$('#js-shopping-list-form').submit(function(e){
			e.preventDefault();
			//get value of input
				var item = $('#shopping-list-entry').val();
        var ul = $(".shopping-list");
         var newHtml=listTemplate1+item+listTemplate2;
         //append html template to ul
         ul.append(newHtml);
         document.getElementById("js-shopping-list-form").reset();
   });
   
 
 /* Cross off functionality
Use jQuery event delegation to attach event listener to static node, which will fire for descendents that match the specified selector
 
 */
    $(".shopping-list").on('click', '.shopping-item-toggle',function(e) {
    e.stopPropagation();
  
    if ($(this).closest('li').hasClass('shopping-item__checked')){
    	$(this).closest('li').removeClass('shopping-item__checked')
    } else{
    $(this).closest('li').addClass('shopping-item__checked');
    }
  });
  
  // Delete functionality
     $(".shopping-list").on('click', '.shopping-item-delete',function(e) {
    e.stopPropagation();
     $(this).closest("li").remove();
 
  });
   
})


// HTML template for shopping list item
var listTemplate1 = (
	 
     '<li>' +
        '<span class="shopping-item">');
var listTemplate2=(        
        '</span>'+
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




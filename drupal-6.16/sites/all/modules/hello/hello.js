jQuery(document).ready(function(){

jQuery("#submitAjaxButton").click(function(){
console.log(jQuery("#edit-name").val());
//alert("Event for click");
jQuery.ajax({
   url:Drupal.settings.basePath+'gethello',
   data:{
  name:jQuery("#edit-name").val(),
  
},
success:function(data){
//data:value returned from server
//console.log(JSON.parse(data);
alert(data);
jQuery("#msg-display-area").append('Hi '+data);
},
error:function(data){
alert("Hiiii");
}

});


});
});
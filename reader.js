$(document).ready(function(){
    $.getJSON( "http://halilbilgin.com.tr/staticness/data.json", function( data ) {
        console.log(data)
      });
});
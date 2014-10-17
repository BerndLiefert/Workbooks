

function createpost(){
//document.write("It works!");
var title = $('#posttitle').val();
var comment = $('#mypost').val();



comment = setspan(comment);



$('#wrapper').append('<div class="post"><h2><a id="' + title + '">' + title + '</a></h2>' + comment + '</div>');

}





function setspan(text){
var keywords = ["function", "var", "log"];


var regex = text.match(/"\S*"/gi);
console.log(regex.length);


if(regex){

var unique = [];
$.each(regex, function(i, el){
    if($.inArray(el, unique) === -1) unique.push(el);
});

console.log(unique);


/*
//Dublikate entfernen
for(var a = 0; a < regex.length; a++){
var item = regex[a];
	for(var b = 0; b < regex.length; b++){
	 if(item = regex[b]){
	 
	 var test = regex.indexOf(item);
	console.log('indexOf:'+ regex[test] + ' / ' + test);
	 
	  regex.splice(b, 1);
	 }
	}


}
*/

//console.log(regex.length);


for(var i=0; i<unique.length; i++){
text = text.replace(unique[i], '<i><b>' + unique[i] + '</i></b>');
console.log(unique[i]);
	}
}



for(var i=0; i < keywords.length; i++){

console.log(keywords[i]);
text = text.replace(keywords[i], '<span class="keyword">' + keywords[i] + '</span>');
console.log(text);
}



return text;

}
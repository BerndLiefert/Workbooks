

function createpost(){
//document.write("It works!");
var title = $('#posttitle').val();
var comment = $('#mypost').val();



comment = setspan(comment);



$('#wrapper').append('<div class="post"><h2><a id="' + title + '">' + title + '</a></h2>' + comment + '</div>');

}





function setspan(text){
var keywords = ["abstract ", "arguments", "boolean", "break", "byte", "case", "catch",
"char", "const", "continue", "debugger",
"default", "delete", "do", "double", "else", "enum",
"eval",
"export",
"extends",
"false",
"final",
"finally",
"float",
"for",
"function",
"goto",
"if",
"implements",
"import",
"in",
"instanceof",
"int",
"interface",
"let",
"long",
"ative",
"new",
"null",
"package",
"private",
"protected",
"public",
"return",
"short",
"static",
"super",
"switch",
"synchronized",
"this",
"throw",
"throws",
"transient",
"true",
"try",
"typeof",
"var",
"void",
"volatile",
"while",
"with",
"yield"];



var regex = text.match(/"\S*"/gi);








if(regex){

var unique = [];
$.each(regex, function(i, el){
    if($.inArray(el, unique) === -1) unique.push(el);
});

console.log(unique);


for(var i=0; i<unique.length; i++){

var myreg = new RegExp(unique[i], 'g');
text = text.replace(myreg, '<i><b>' + unique[i] + '</i></b>');
console.log(unique[i]);
	}
}





for(var i=0; i < keywords.length; i++){

console.log(keywords[i]);

var pattern = new RegExp(keywords[i], 'g');
text = text.replace(pattern, '<span class="keyword">' + keywords[i] + '</span>');
console.log(text);
}



return text;

}

function replace(){

var input = $('#input').val();

input = input.replace(/</g, "&lt;");
input = input.replace(/>/g, "&gt;");

input = input.replace(/ /g, "&nbsp;");

input = input.replace(/class/g, '<span class="keyword">class</span>');

input = input.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");


//Comments 
var comments = input.match("//.*\n", "g");

//console.log(comments);

	if(comments != null){
		for(var i = 0; i < comments.length; i++){

			var pattern = new RegExp(comments[i], 'g');

			input = input.replace(pattern, '<span class="comment">' + comments[i] + '</span>');

	}
}




input = input.replace(/\n/g, "<br>");




var keywords = [
"void", 
"function", 
"int", 
"boolean", 
"String",
"static", 
"public",
"private",
"protected", 
"this", 
"extends", 
"interface",
"throw",
"try",
"catch",
"finally",
"for",
"while",
"do",
"switch",
"case",
"super",
"return"
];

for(var i = 0; i < keywords.length; i++){

	var pattern = new RegExp(keywords[i], 'g');

	input = input.replace(pattern, '<span class="keyword">' + keywords[i] + '</span>');

}


$('#preview').append(input);




var rownumbers = input.match("<br>", "g");
console.log('rownumbers: ' + rownumbers);

var result = "";

	for(var a = 1; a < rownumbers.length+2; a++){

			result = result + a + "<br>";

	}

	console.log('result: ' + result);

$('#rownumbers').append(result);

}
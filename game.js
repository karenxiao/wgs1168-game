var images = [
	["1a.jpg", "1b.jpg", "a", "Marissa Mayer, CEO, Yahoo", "Mayer was employee No. 20 at Google and the company's first female engineer. She helped Google develop its search technologies and worked on a long list of other key products including images, maps, books, news, and the toolbar."],
	["2a.jpg", "2b.jpg", "a", "Larry Page, Founder, Google", "Larry Page is an American computer scientist and Internet entrepreneur who, with Sergey Brin, is best known as the co-founder of Google. "],
	["3a.jpg", "3b.jpg", "b", "Linda Cureton, NASA, CIO", "Linda Cureton has the coolest job. She's the CIO for NASA. And NASA has all the coolest technology in the world from the fastest computer networks to a bunch of stuff used to conduct experiments in outer space."],
	["4a.jpg", "4b.jpg", "b", "Jack Dorsey, CEO, Twitter, Square", "Jack Dorsey is an American web developer and businessman widely known as the creator of Twitter and as the founder and CEO of Square, a mobile payments company"],
	["5a.jpg", "5b.jpg", "a", "Grace Murray Hopper", "A pioneer in the field, Grace Murray Hopper was one of the first programmers of the Harvard Mark I computer, and developed the first compiler for a computer programming language. She conceptualized the idea of machine-independent programming languages, which led to the development of COBOL, one of the first modern programming languages"],
	["6a.jpg", "6b.jpg", "b", "Kimber Lockhart, director of engineering, Box", "At Box, Kimber Lockhart leads the web application engineering team that builds most new features on Box. For instance, Lockhart was responsible for a major redesign and rebuild of the Box user interface."],
	["7a.jpg", "7b.jpg", "a", "David Malan, Instructor, CS50", "David Malan is the instructor for Computer Science 50, Harvard’s introductory Computer Science course. He is on a mission to catapult computer science to the forefront of students’ academic interests and reinvent the way computer science is taught and viewed by students."],

]

var a = document.getElementById("image-a");
var b = document.getElementById("image-b");
var result = document.getElementById("result");
var num = 0;

function start()
{

	// remove start button
	document.getElementById("start").style.visibility = "hidden";

	// load initial images
	loadImages();

}

function loadImages()
{
	a.src = "images/" + images[num][0];
	b.src = "images/" + images[num][1];
}

function imageSelected(image)
{
	if (image == images[num][2])
	{
		result.innerHTML = "Correct!<hr><b>" + images[num][3] + "</b><br>" + images[num][4] + "<hr><a onclick='next()'>Next</a>"
;
	}
	else
	{
		result.innerHTML = "Incorrect!<br>" + images[num][3] + "<br><a onclick='next()'>Next</a>"
	}
}

function next()
{
	result.style.visibility = "hidden";
	num += 1;
	loadImages();
}
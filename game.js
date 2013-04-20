var images = [
	["1a.jpg", "1b.jpg", "a", "Marissa Mayer, CEO, Yahoo", "Mayer was employee No. 20 at Google and the company's first female engineer. She helped Google develop its search technologies and worked on a long list of other key products including images, maps, books, news, and the toolbar."],
	["2a.jpg", "2b.jpg", "a", "Larry Page, Founder, Google", "Larry Page is an American computer scientist and Internet entrepreneur who, with Sergey Brin, is best known as the co-founder of Google. "],
	["3a.jpg", "3b.jpg", "b", "Linda Cureton, NASA, CIO", "Linda Cureton has the coolest job. She's the CIO for NASA. And NASA has all the coolest technology in the world from the fastest computer networks to a bunch of stuff used to conduct experiments in outer space."],
	["4a.jpg", "4b.jpg", "b", "Jack Dorsey, CEO, Twitter, Square", "Jack Dorsey is an American web developer and businessman widely known as the creator of Twitter and as the founder and CEO of Square, a mobile payments company"],
	["5a.jpg", "5b.jpg", "a", "Grace Murray Hopper", "A pioneer in the field, Grace Murray Hopper was one of the first programmers of the Harvard Mark I computer, and developed the first compiler for a computer programming language. She conceptualized the idea of machine-independent programming languages, which led to the development of COBOL, one of the first modern programming languages"],
	["6a.jpg", "6b.jpg", "b", "Kimber Lockhart, director of engineering, Box", "At Box, Kimber Lockhart leads the web application engineering team that builds most new features on Box. For instance, Lockhart was responsible for a major redesign and rebuild of the Box user interface."]
]

var a = document.getElementById("image-a");
var b = document.getElementById("image-b");
var result = document.getElementById("result");
var end = document.getElementById("end").style.visibility = "hidden";
var num = 0;

function startGame()
{

	// remove start button
	document.getElementById("start").style.display = "none";
	end.visibility = "hidden";

	// load initial images
	a.src = "images/" + images[num][0];
	b.src = "images/" + images[num][1];

}

function imageSelected(image)
{
	if (image == images[num][2])
	{
		result.style.visibility = "visible";
		result.innerHTML = "Correct!<hr><b>" + images[num][3] + "</b><br>" + images[num][4] + "<hr><a onclick='next()'>Next</a>";
	}
	else
	{
		result.style.visibility = "visible";
		result.innerHTML = "Incorrect! Try again.<hr><a onclick='next()'>Next</a>";
	}
}

function loadImages()
{
	a.src = "images/" + images[num][0];
	a.onclick = imageSelected('a');
	b.src = "images/" + images[num][1];
	b.onclick = imageSelected('b');
}

function endGame()
{
	a.style.display = "none";
	b.style.display = "none";
	result.style.display = "none";
	end.style.visibility = "visible";
}

function next()
{
	if (num == 5)
	{
		endGame();
	}
	else
	{
		num += 1;
		loadImages();
		result.style.visibility = "hidden";
	}
}





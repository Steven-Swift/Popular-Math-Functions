function calculator()
{
	var a = parseFloat(document.querySelector("#first").value);
	var b = parseFloat(document.querySelector("#second").value);
	var op = document.querySelector("#operation").value;
	var answer;
	
	if (op == "add")
	{
		answer = a + b;
	}
	else if (op == "sub")
	{
		answer = a - b;
	}
	else if (op == "mult")
	{
		answer = a * b;
	}
	else if (op == "div")
	{
		answer = a / b;
	}
	
	document.querySelector("#result2").innerHTML = "The Result is: " + answer;
}


function flip()
{
	var user = parseFloat(document.querySelector("#pos").value);
	
	user = user * -1;
	
	document.querySelector("#result3").innerHTML = "Your number is now: " + user;
}

function hypotenuse()
{
	var sideA = parseFloat(document.querySelector("#sideA").value);
	var sideB = parseFloat(document.querySelector("#sideB").value);
	var sideC;
	
	sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
	document.querySelector("#result4").innerHTML ="The length of your hypotenuse (side C) is: " + sideC;
}

function circle()
{
	var radius = parseFloat(document.querySelector("#uCircle").value);
	var are;
	
	are = Math.PI * Math.pow(radius, 2);
	
	document.querySelector("#result5").innerHTML ="The Area of your circle is: " + are;
}
	
function square()
{
	var length = parseFloat(document.querySelector("#squareAL").value);
	var width = parseFloat(document.querySelector("#squareAW").value);
	var are;
	
	are = length * width;
	
	document.querySelector("#result6").innerHTML ="The Area of your square is: " + are;
}
	
function triangle()
{
	var length = parseFloat(document.querySelector("#triangleAL").value);
	var width= parseFloat(document.querySelector("#triangleAH").value);
	var are;
	
	are = .5*(length * width);
	
	document.querySelector("#result7").innerHTML ="The Area of your triangle is: " + are;
}

function cube()
{
	var length = parseFloat(document.querySelector("#cubeS").value);
	var volume;
	
	volume = Math.pow(length,3);
	
	document.querySelector("#result8").innerHTML ="The Volume of your Cube is: " + volume;
}

function sphere()
{
	var radius = parseFloat(document.querySelector("#sphereR").value);
	var volume;
	
	volume = (4/3) * Math.PI * Math.pow(radius, 3);
	
	document.querySelector("#result9").innerHTML ="The Volume of your Sphere is: " + volume;
}

function cylinder()
{
	var radius = parseFloat(document.querySelector("#cylinderR").value);
	var height = parseFloat(document.querySelector("#cylinderH").value);
	var volume;
	
	volume = Math.PI * Math.pow(radius, 2) * height;
	
	document.querySelector("#result10").innerHTML ="The Volume of your Cylinder is: " + volume;
}

function prism()
{
	var height= parseFloat(document.querySelector("#prismH").value);
	var length= parseFloat(document.querySelector("#prismL").value);
	var volume;
	
	volume = Math.pow(length,2) * height;
	
	document.querySelector("#result11").innerHTML ="The Volume of your Triangular Prism is: " + volume;
}




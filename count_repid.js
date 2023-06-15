list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
n=0
a=0
t=0
g=0
x=0
u=0
i=0
while (i<list.length){
	if (list[i]=="a"){
		a=a+1
	}
	else if (list[i]=="n"){
		n=n+1
	}
	else if (list[i]=="t"){
		t=t+1
	}
	else if (list[i]=="g"){
		g=g+1
	}
	else if (list[i]=="x"){
		x=x+1
	}
	i=i+1
}
console.log("a is count",a)
console.log("n is count",n)
console.log(t)
console.log(g)
console.log(x)

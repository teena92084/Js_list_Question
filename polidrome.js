var p=require('readline-sync')
var num=p.question("enter the number")
b=""
i=0
while (i<num.length){
	b=num[i]+b
	i=i+1
	}
if (b==num){
	console.log("polidrome")
	
}
else{
	console.log("not plidrome")
}
	

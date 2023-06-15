var arr = [ 1, 2, 3, 4, 5, 6 ,34,45,8,9,4];
a=[]
b=[]
c=0
c1=0
s=0
s1=0
for (i=0;i<arr.length;i++){
	if (arr[i]%2==0){
		s=s+arr[i]
		c=c+1
		a.push(arr[i])
		
	}
	else{
		b.push(arr[i])
		s1=s1+arr[i]
		c1=c1+1
	}
	
	
}

console.log(a,"even")
console.log(b,"odd")
console.log(s,"sum of even")
console.log(s1,"sum of even")
console.log(c,"count even")
console.log(c1,"count odd")
console.log(s/c,"Avrage even")
console.log(s1/c1,"Avarage odd")
console.log((s+s1)/arr.length,"total average")

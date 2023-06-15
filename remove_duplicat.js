a=[1,3,56,2,90,76,44,1,3]
i=0
b=[]
for (i of a){
	if (!b.includes(i))
		b.push(i)
		i=i+1
}
console.log(b)

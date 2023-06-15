//a=[19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
//b=[]
//for (i of a){
//	if (!b.includes(i){
   //   b.push(i)
 //     }
//		console.log(b)
	
//}




var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
uniques=[]
dupli=[]
for(var i of number_list){
  if(!uniques.includes(i)){
      uniques.push(i)
  }

c=0
for (k of uniques){
	for (s of number_list){
		if(k==s){
			c=c+1
}
}
}
if (c>1){
	dupli.push(k)
	




}

}

console.log(dupli)













var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
uniques=[]
duplicates=[]
for(var i of number_list){
  if(!uniques.includes(i)){
      uniques.push(i)
  }
}
 
for(var j of uniques){
  count=0
  for(var k of number_list){
      if (j === k){
          count+=1
      }
  }
 if(count >1){
   duplicates.push(j);
 };
}
 
console.log(duplicates);


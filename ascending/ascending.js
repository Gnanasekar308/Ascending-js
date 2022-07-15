//ascending order


let a=334;
let b=215;
let c=149;
console.log('Given Order = ',a,b,c);
console.log('Ascending Order');
if(a>b && a>c && b>c)
console.log(c,b,a);
else if (a>b && a>c && b<c)
console.log(b,c,a);
else if(a>b && a>c)
console.log(b,a,c);
else if(a<b && b>c && a>c)
console.log(c,a,b);
else if(a<b && b>c && a<c)
console.log(a,c,b);
else{
console.log(a,b,c);
}
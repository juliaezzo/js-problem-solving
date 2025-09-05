// 1:write a function to calculate the hypotenuse of a right triangle.
const hypotenuse = (a,b) => {
 let hyp = 0;
 res = (a**2) + (b**2)
 for(let i = 1; i <= res; i++){
    if(i * i === res) {
       i = hyp
    }
 }
 return hyp;
};
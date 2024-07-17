/////////////////map - crete new array///////////////////////
/////valu ,index,array////////////////////////////////////////
let arr = [45,33,56]
 let a = arr.map((value,index,array)=>{
//  let a = arr.map((value)=>{

    // console.log(value+1)
    // return value+1
    return value+index

})
console.log(a)
/////////////////////filter/////////////////////////////
// let array = [2,4,7,44,33,77,9]
//  let aa = array.filter((a)=>{
//     return a<10

// })
// console.log(aa)

///////////////////////////////////////////////////////
let array = [2,4,7,44,33,77,9]
let h = array.reduce((abhi)=>{
return abhi +abhi
})
console.log(h)
///////////////////////////////////////////////////////

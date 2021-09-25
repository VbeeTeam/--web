// ES6模块化导出
// export导出一个变量
// export let myName="laowang";
// export导出多个
let myName="laowang";
let myAge=90;
let myfn=function(a, b){
    return a + b
}
// export {
//     myName,
//     myAge,
//     myfn
// }
export {
    myName as name,
    myAge as age,
    myfn as fn
}

// // Q1 comparing two JSON having same properties with different order
obj1 ={
    name:"person1",age:5
  };
obj2 ={
    age:5,name:"person1"
  };
  var comnparition= JSON.stringify(obj1)===JSON.stringify(obj2)
  console.log(comnparition);
  
// // Q2 using rest countries API and displaying all countries flag
var request= new XMLHttpRequest();
request.open("Get","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var data=request.response;
    var op =JSON.parse(data);
    for(var i=0; i<op.length; i++){
    console.log("svg"+" "+op[i].flags.svg,"png"+" "+op[i].flags.png);
    } }

// // Q3 print all countries names, regions, sub-regions and population
   var request= new XMLHttpRequest();
   request.open("Get","https://restcountries.com/v2/all");
   request.send();
   request.onload=function(){
       var info=request.response;
       var res=JSON.parse(info);
       for(var i in res){
       console.log(res[i].name);
       console.log(res[i].region);
       console.log(res[i].subregion);
       console.log(res[i].population);
   } }


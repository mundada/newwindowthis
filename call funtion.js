// this keyword---->

function find() {					
  return this.name.toUpperCase();
}
function say1() {
  var intro1 = "my first name is " + find.call( this );
console.log( intro1 );
}
function say2() {
  var intro2 = "my last name is" + find.call(this);
  console.log( intro2 );
}
var obj1 = {
name: " Ashish "
};
var obj2 = {
name: " Mundada "
};
find.call( obj1 ); // ASHISH
find.call( obj2 ); // MUNDADA
say1.call( obj1 ); // My first name is ASHISH
say2.call( obj2 ); // my last name is MUNDADA


//call function----->

var person = {var :'Ashish'};

var bio= function( a, b, c){
return this.var+ a +" "+ b +" " +c;
};
console.log(bio.call(person,'mundada', 'MS', 'student')); // passsing argument values directly



//apply function ---->

var person = {var :'Ashish'};

var bio= function( a, b, c){
return this.var+ a +" "+ b +" " +c;
};
var arr = ['mundada', 'MS', 'student'] //here instead of passing argument directly we are creating arr list
console.log(bio.apply(person,arr));




//bind function -----> 

var person = {var :'Ashish'};

var bio= function( a, b, c){
return this.var+ a +" "+ b +" " +c;
};
var arr = ['mundada', 'MS', 'student']
var bound = bio.bind(person);			// we are calling object person here  and in the next line we are passing argument values to the bound
bound('mundada', 'MS', 'student');





//window alert------->

<script type="text/javascript">  
function msg(){  
var v= confirm("Are u sure?");  
if(v==true){  
alert("ok");  
}  
else{  
alert("cancel");  
}  
  
}  
</script>  
  
<input type="button" value="delete record" onclick="msg()"/




//new keyword------>

function Car(make, model, year) {		
  this.make = make;
  this.model = model;
  this.year = year;
}
car1 = new Car();
var mycar = new Car('sonata', 'SUV', '2007');



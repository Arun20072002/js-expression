// t1
var a=10,b=5,c="ring"
console.log((a===b)&&(a<b)&&(b<c));

// t2
var a=5,b=8,c=9;
console.log((a>=b)||(c!=a));

// t3
var a="world",b=5,c=34;
console.log((a!=c)||(c>a)||(c===b));

// t4
var a=12,b=8,c=5;
console.log((a<=b)&&(a>b)&&(a!==c));

// t5
var a="5",b="hello",c=8;
console.log((a+b)&&(a>b)&&(c==b));

// t6
var a=4,b=5;
console.log((a!=b)&&(a<b));

// t7
var a=2,b=4,c=3;
console.log((a==b)&&(b==c));

// t8
var a=1,b=2,c=3;
console.log((a*b)&&(b*c)&&(c*a));

// t9
var a=2,b=3,c=4;
console.log((a<b)||(b<c)||(a<c));

// t10
var a=5,b=4,c=0;
console.log((a&&b&&c||a||b||c));

// t11
var a=10,b=5,c=20;
console.log((a<b)&&(a++)<=c);

// t12
var a=1,b=2,c=3;
console.log(!(a=b)&&(b===c));

// t13
var a=1,b=2,c=3;
console.log((a*b)&&(b*c)&&(c*a));

// t14
var a=2,b=4,c=3;
console.log((a<=b)&&(a%b<3));

// t15
var a=5,b=5,c=7;
console.log((a!=b)||(b<c));

// t16
var a=10,b=12,c=23;
console.log((a==b)&&(c=+b)||(b/a));

// t17
var a=5,b=10,c=25;
console.log((a<=c)||(b=-c)||!(c>a));

// t18
var a=15,b="Hello",c=10;
console.log((a===b)||(a*=b)||(c<a));

// t19
var a=5,b="20",c=15;
console.log((a*b)&&(a%b)||(a/c));

// t20
var a=3,b="5",c=4;
console.log((a+b)*(b<c)%(c-b))

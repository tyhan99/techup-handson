var age = 20
var username ="pokemon"
var password ="techup"
var isMale = true
var isLoggedIn = false
var blog_posts = ["today is a good day", "it's raining cats and dogs now", "there's a rainbow!"]

age = 65

console.log(age) 
console.log(username)
console.log(password)
console.log(isMale)
console.log(isLoggedIn)
console.log(blog_posts)

if (isMale == true) {
    console.log("You are male");
}
else {
    console.log("You are not male.");
} 

while (age < 70){
    console.log("Your age is " + age);
    age += 1;
}

function sayHello() {
    alert("Hello, " + username);
}

sayHello();
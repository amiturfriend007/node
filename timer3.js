function welcome()
{
    console.log("Welcome to Java");
}
var id1 = setTimeout(welcome,1000);
var id2 = setTimeout(welcome,1000);
clearInterval(id2);
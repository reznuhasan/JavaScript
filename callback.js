function fun1(){
    console.log("It's my function")
}
function fun3(a){
    a();
}
fun3(fun1)
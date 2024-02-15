const cal = (a,b,op) =>{
    switch(op){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        default:
            return "Invalid Operator";
    }
}
// console.log(cal(2,3,'+'));
module.exports = {
    cal:cal
}

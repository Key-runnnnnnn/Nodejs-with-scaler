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
module.exports = {
  cal:cal
}

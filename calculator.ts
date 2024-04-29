type Operation='add'|'multiply'|'divide'

const calculator =(num1:number,num2:number,op:Operation):number|string=>{
  switch(op){
    case'add':
      return num1+num2;
    case 'multiply':
     return num1*num2;
    case 'divide':
     if(num2===0) throw new Error('can\'t divide by zero');
     return num1/num2;
    default:
      throw new Error('operation is not in our operation type');
  }
  
}
try {
  console.log( calculator(3,0,'add'));
} catch (error) {
    let errorMessage='something bad happened: Error: ';
    //since error is unknown type ,need to use instanceof typeguard for processing error object
    if(error instanceof Error)
      errorMessage+=error.message;
    console.log(errorMessage); 
}

//console.log(process.argv);


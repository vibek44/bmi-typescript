type Result='Normal (healthy weight)'|'Underweight (unhealthy weight)'|'Overweight (unhealthy weight)';

const bmiCalculator=(height:number,weight:number):Result=>{
  height=height/100
  const bmi=weight/(height*height)
  console.log();
  if(bmi>25)
  return 'Overweight (unhealthy weight)'
  else if(bmi<16)
    return 'Underweight (unhealthy weight)'
  else
  return 'Normal (healthy weight)' 
}
try {
  console.log(bmiCalculator(170,80));
} catch (error:unknown) {
  if(error instanceof Error)
  console.log(`Error happened :Error :${error.message}`);
  
}



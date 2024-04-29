type Result='Normal (healthy weight)'|'Underweight (unhealthy weight)'|'Overweight (unhealthy weight)';

interface ParameterValues{
  height:number; //in cm
  weight:number; //kg
}

const parseArguments=(args:string[]):ParameterValues=>{
   if(args.length>4) throw new Error('too many arguments')
   if(args.length<4) throw new Error('Not enough arguments')
   if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))){
      return {
        height:Number(args[2]),
        weight:Number(args[3])
      }
   }else{
    throw new Error('provided values were not number')
   }
}

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
  const {height, weight }=parseArguments(process.argv)
  console.log(bmiCalculator(height,weight));
  
} catch (error:unknown) {
  if(error instanceof Error)
  console.log(`Error happened :Error :${error.message}`);
  
}



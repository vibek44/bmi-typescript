import { isNotNumber } from "./utils/helper";

interface exerciseResult {
  periodLength:number;
  trainingDays:number;
  success:boolean;
  rating:number;
  ratingDescription:string;
  target:number;
  average:number;
}

interface ReturnParseValues{
  trainingHours:number[];
  target:number
}

const parseArguments1=(args:string[]):ReturnParseValues=>{
 
  if( args.length < 4 ) throw new Error('Not enough arguments')
   const [, , ...rest]=args
   const argument  =rest.map(el=>isNotNumber(el))
   const [target, ...trainingHours]=argument
   return{
    trainingHours,
    target
   }
     
}

const exerciseCalculator=(traingHours:number[],target:number):exerciseResult=>{
 let sum=traingHours.reduce((sum,currentElement)=>sum+currentElement)
 let average=sum/traingHours.length
 return {
  periodLength:traingHours.length,
  trainingDays:traingHours.filter((hour)=>hour!==0).length,
  success:average>=target,
  rating:average>=target?3:2,
  ratingDescription:average>=target?'keep going great with consistent achievement':'not too bad try again',
  target,
  average
 }
}

try {
  //let [ , , ...rest]=process.argv 
  const{trainingHours,target}=parseArguments1(process.argv)
  //console.log(typeof target);
  console.log(exerciseCalculator(trainingHours,target));
} catch (error:unknown) {
  if(error instanceof Error)
  console.log(`Error : ${error.message}`);
  
}



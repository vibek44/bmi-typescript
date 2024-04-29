interface exerciseResult {
  periodLength:number,
  trainingDays:number,
  success:boolean,
  rating:number,
  ratingDescription:string,
  target:number,
  average:number
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
  console.log(exerciseCalculator([2,6,0,4,3,2,6],3));
  
} catch (error) {
  
}
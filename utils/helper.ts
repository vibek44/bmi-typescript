export const isNotNumber=(args:string|number):number=>{
  if(isNaN(Number(args)))
  throw new Error('arguments are not numbers');
 return (Number(args));
};


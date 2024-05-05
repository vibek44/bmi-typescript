export const isNotNumber=(args:string|number):number=>{
  if(!args && args!==0) throw new Error('parameter is missing');
  if(isNaN(Number(args)))
  throw new Error('arguments are not numbers');
 return (Number(args));
};


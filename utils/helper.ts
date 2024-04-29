export const isNotNumber=(args:any):number=>{
  if(isNaN(Number(args)))
  throw new Error('arguments are not numbers')
 return (Number(args))
}


import express from 'express';
import cors from 'cors';
import { bmiCalculator } from './bmicalculator';
import { exerciseCalculator } from './exerciseCalculator';
import { isNotNumber } from './utils/helper';



const app=express();
app.use(cors());
app.use(express.json());


app.get('/hello',(_req,res)=>{
  res.send('hello FullStack');
});

app.get('/bmi',(req,res)=>{
 const { height,weight }=req.query;
 
 if(!isNaN(Number(height)) && !isNaN(Number(weight))){

  const result=bmiCalculator(Number(height),Number(weight));
  res.send({height,weight,bmi:result});
  return;
 }
 res.send({error:'malformatted parameters'});
 
});

app.post('/exercises',(req,res)=>{
  
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let  {trainingHours , target} = req.body;
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  trainingHours=trainingHours.map((el: string | number)=>isNotNumber(el));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  target =isNotNumber(target);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result=exerciseCalculator(trainingHours,target);
  return res.send(result);

});

const PORT=3003;

app.listen(PORT,()=>{
  console.log(`server running on port : ${PORT}`);
});

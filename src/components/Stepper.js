import React from 'react';
import { useState } from 'react';

const Stepper = ({ list }) => {
  console.log(list[0 ])  
  const steps = [];
  const [currentStep, setCurrentStep] = useState(0)
  for (let i = 0; i < list.length; i++) {
    steps.push(<div className={`border border-black px-8 m-2 py-6 rounded-full cursor-pointer ${i<=currentStep?"bg-emerald-100":""}`} key={i} onClick={()=>{
        setCurrentStep(i)
    }}
    >{i + 1}</div>);
  }

  const width = (100/(steps.length-1))*(currentStep)
  console.log(width)

  return (
    <div className=''>
        <div className='flex justify-evenly'>
            {steps.map((d, index) => (
            <React.Fragment key={index} >{d}</React.Fragment>
            ))}
        </div>
        <div>
            <div className={`h-2 w-20 bg-black mx-auto`}></div>
        </div>

        <div className="flex justify-center items-center py-10">
            <button onClick={()=>{
                if(currentStep!==0)
                setCurrentStep(currentStep-1)
                }} className='bg-slate-100 rounded-md px-2 m-2 border'>Prev</button>
    
       
            <button onClick={()=>{
                if(currentStep<steps.length-1)
                setCurrentStep(currentStep+1)
                }} className='bg-slate-100 rounded-md px-2 m-2 border'>Next</button>
        
        </div>

        <div>
            {list[currentStep]}
        </div>
    </div>

  );
};

export default Stepper;

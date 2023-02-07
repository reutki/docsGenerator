import { React, useState, cloneElement, useEffect } from 'react'
import './App.css'
import { Box, Typography, TextField, Button, Step, Stepper, StepLabel } from '@mui/material'
import { InputField } from './components/InputField';
import { useForm } from 'react-hook-form'
import { Checks } from './components/Form'
import { DefiningQualityStandards } from './components/files/definingQualityStandards';



function App() {
  const { handleSubmit } = useForm()
  const [count, setCount] = useState(1);
  const [standard, setStandard] = useState([])
  const [rows, setRows] = useState([]);
  const [step, setStep] = useState(0)
  const [standardStep, setStandardStep] = useState(0)
  const [optionsContainer, setOptionsContainer] = useState([])
  useEffect(() => {
    handleAddTask();
  }, [])

  const handleAddTask = () => {
    setCount(count + 1);
    setRows([...rows, <InputField setStandard={setStandard} removeComponent={handleRemoveTask}
      addComponent={handleAddTask} id={count} standard={standard} />]);
  };

  const handleRemoveTask = (id) => {
    setRows(rows => {
      const filteredRows = rows.filter(standard => standard?.props?.id !== id);
      return filteredRows.map((row, index) => cloneElement(row, { id: index + 1 }));
    });
    setCount(count => count - 1);
  };
  const handleNext = (data) => {
    setOptionsContainer([...optionsContainer, data])
    setStandardStep(prev => prev + 1)
    console.log(optionsContainer)
  }
  return (
    <div className="App">

      <Stepper activeStep={step}>
        <Step><StepLabel>Write standard name</StepLabel>
        </Step>
        <Step><StepLabel>Standard type</StepLabel></Step>
        <Step><StepLabel>Generate pdf</StepLabel></Step>
      </Stepper>
      {step == 0 ? <form onSubmit={handleSubmit((data) => setStandard(data))} className='container'>
        {rows}
        <Button variant="contained" onClick={handleAddTask}>Add Row</Button>
        <Button variant="contained" onClick={() => setStep(1)} sx={{ backgroundColor: 'orange' }}>Next</Button>

      </form>
        : null}
      {step == 1 ? (
        <Stepper activeStep={standardStep}>
          <Step>
            <StepLabel>{standard[standardStep]}</StepLabel>
            <Checks name={standard[standardStep]} step={standardStep} length={standard.length} handleNext={handleNext} />
          </Step>
        </Stepper>
      ) : null}
    </div >
  );
}


export default App
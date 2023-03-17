import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    margin: '8px',
  },
});

function calculateBMI(weight: number, height: number): number {
  const heightInMeters = height / 100; // Convert height from cm to m
  const bmi = weight / (heightInMeters ** 2); // Calculate BMI using weight and height
  return bmi;
}

export default function BMICalculator() {
  const classes = useStyles();
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [bmi, setBMI] = useState<number | null>(null);

  const handleCalculateClick = () => {
    if (weight && height) {
      const calculatedBMI = calculateBMI(weight, height);
      setBMI(calculatedBMI);
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <Typography variant="h4" gutterBottom>
          BMI Calculator
        </Typography>
        <TextField
          className={classes.input}
          label="Weight (kg)"
          type="number"
          value={weight || ''}
          onChange={(event: any) => setWeight(parseFloat(event.target.value))}
        />
        <TextField
          className={classes.input}
          label="Height (cm)"
          type="number"
          value={height || ''}
          onChange={(event: any) => setHeight(parseFloat(event.target.value))}
        />
        <Button
          className={classes.input}
          variant="contained"
          color="primary"
          onClick={handleCalculateClick}
        >
          Calculate BMI
        </Button>
        {bmi !== null && (
          <Typography variant="h5">
            Your BMI is {bmi.toFixed(2)}
          </Typography>
        )}
      </form>
    </div>
  );
}

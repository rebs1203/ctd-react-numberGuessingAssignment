import React, { useState } from "react";
import Button from "./Button";


function GuessControl() {
  
  const [ currentGuess, setCurrentGuess ] = useState('')
  
  const handleInputChange = (event) =>  {
    setCurrentGuess( Number(event.target.value) );
  }

<<<<<<< HEAD
  const onSubmitGuess = () => {
    setCurrentGuess('')
=======
  onSubmitGuess() {
    // Since the values from an HTML input are strings by default,
    //  convert to a number for the returned guess value
    this.props.onGuess(Number(this.state.currentGuess));
    this.setState({ currentGuess: "" });
>>>>>>> parent of 92a5047 (Update instructions)
  }

  return (
    <>
      <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmitGuess}>Submit Guess</Button>
      </div>
    </>
  )
}


export default GuessControl;

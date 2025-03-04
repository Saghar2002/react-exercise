import { useState } from "react"
import Button from "../common/Button"

export const Stepper = () => {
  const buttonStyle = "bg-blue-200 py-2 px-7 rounded text-black border-solid border"
  const buttonActiveStyle = "bg-blue-600 py-2 px-7 rounded text-white border-solid border"
    const [step, setStep] = useState(1);
    const changeStep = (payload) => {
        setStep(payload);
    }
    const prev = () => {
        step > 1 && setStep ( step - 1 );
    }
    const next = () => {
      step < 3 && setStep ( step + 1 );
    }
  return (
    <div className="my-4 bg-white dark:bg-gray-800 rounded-md p-7">
        <div className="flex gap-10 items-center justify-center">
            <Button buttonStyle= {step >= 1 ? buttonActiveStyle : buttonStyle} buttonClick={() => changeStep(1)} title="مرحله اول"/>
            <Button buttonStyle= {step >= 2 ? buttonActiveStyle : buttonStyle} buttonClick={() => changeStep(2)} title="مرحله دوم"/>
            <Button buttonStyle= {step >= 3 ? buttonActiveStyle : buttonStyle} buttonClick={() => changeStep(3)} title="مرحله سوم"/>
        </div>
        <div>
            <p>{step}</p>
        </div>
        <div className="flex gap-5 justify-center">
          <Button title="Pre " buttonStyle="bg-violet-600 text-white rounded p-4" buttonClick={() => {
            prev();
          }} />
          <Button title="Next" buttonStyle="bg-violet-600 text-white rounded p-4" buttonClick={() => {
            next();
          }}/>
        </div>
    </div>
  )
}

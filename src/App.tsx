import { useEffect, useState } from "react"
import Header from "./component/Header"
import Display from "./component/Display"
import ButtonPanel from "./component/ButtonPanel"
import './app.css'

function App() {

  const [theme,setTheme]=useState('1')
  const[currentOperand, setCurrentOperand] = useState('')
  const[prevOperand, setPrevOperand] = useState('')
  const[operator, setOperator] = useState('')


  const handleThemeChange = (t:string)=>{
    setTheme(t)
  }
  const addNumber = (number:string)=>{
    if (number === '.' && currentOperand.includes('.')) return;
    setCurrentOperand(currentOperand+number)
  }
 
  const deleteOperand = ()=>{
    setCurrentOperand(currentOperand.slice(0,-1))
  }

  const reset = ()=>{
    setPrevOperand('');
    setCurrentOperand('')
    setOperator('')
  }

  const operationSelection = (operate:string)=>{
    if(currentOperand==='')return;
    if (prevOperand!=='') {
      calculatorOperation()
    }
    setOperator(operate);
    setPrevOperand(currentOperand)
    setCurrentOperand('')
  }

  const calculatorOperation =()=>{
    const prev=parseFloat(prevOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev)||isNaN(current)) return
      
    let result;
    switch(operator){
      case '+':
      result = prev + current;
      break;
      case '-':
      result = prev - current;
      break;
      case '*':
      result = prev * current;
      break;
      case '/':
      result = prev / current;
      break;
      default:
      return;
    }
    setCurrentOperand(result.toString())
    setOperator('')
    setPrevOperand('')
  }


  useEffect(() => {
    document.body.className = `theme${theme}`;
  }, [theme]);

  return (
    <div className={`calculator theme${theme}`}>
      <Header setTheme={handleThemeChange}></Header>
      <Display currentOperand={currentOperand} 
      operator={operator} prevOperand={prevOperand}></Display>
      <ButtonPanel
      calculatorOperation={calculatorOperation}
      reset={reset}
      deleteOperand={deleteOperand}
      addNumber={addNumber}
      operationSelection={operationSelection}
      ></ButtonPanel>
    </div>
  )
}

export default App

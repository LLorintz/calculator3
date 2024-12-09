
type buttonPanelProps={
    addNumber:(num:string)=>void
    deleteOperand:()=>void;
    reset:()=>void;
    operationSelection:(operator:string)=>void;
    calculatorOperation:()=>void
}
const ButtonPanel = (props:buttonPanelProps) => {
  return (
    <div className="grid-container">
         {['7', '8', '9', 'DEL','4', '5', '6', '+','1', '2', '3', '-', '.', '0', '/', '*', 'RESET', '='].map((symbol,index)=>(
             <button key={index} onClick={()=>{
                if (symbol==='RESET') return props.reset();
                if (symbol==='DEL') return props.deleteOperand();
                if (['+', '-', '/', '/'].includes(symbol)) return props.operationSelection(symbol);
                if (symbol==='=') return props.calculatorOperation();
                return props.addNumber(symbol)        
            }}>{symbol}</button>
        ))}
    </div>
  )
}

export default ButtonPanel
import React from "react";
import "../../styles/index.css";

const Tasks = () => {
    const [inputValue, setInputValue ] = React.useState('');
    
    const validateInput = () => {
      if(inputValue === "") alert("The input cannot be empty");
      else alert("All perfect!");
    };
    return <div>
        <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
        <button onClick={validateInput}>Click to validate empty</button>
    </div>;
}

ReactDOM.render(
  <Tasks />,
  document.getElementById('container')
);

export default Tasks;

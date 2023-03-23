import { useState } from "react";
function Dropdown ({options, selection, onSelect}){
    var [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
     setIsOpen(!isOpen);
    }
    const handleOptionClick =(option) => {
     setIsOpen(false);
     console.log(option);
     onSelect(option);
     
    }
    
  var renderedOptions = options.map((option) =>{
    return <div onClick ={()=>{handleOptionClick(option)}} key={option.value}>{option.value} </div>
  })
  let content = 'Select ...';
  if(selection) {
    content = selection.label;
  }
return (    
        <div>
            <div onClick={handleClick}> {content } </div>
            {isOpen && <div>
                {renderedOptions}
            </div>}
        </div>
    )
}

export default Dropdown;
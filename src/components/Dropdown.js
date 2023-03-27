import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
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
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick ={()=>{handleOptionClick(option)}} key={option.value}>{option.value} </div>
  })
  // let content = 'Select ...';
  // if(selection) {
  //   content = selection.label;
  // }
return (    
        <div className="w-48 relative">
          <Panel className="flex justify-between item-center cursor-pointer" onClick={handleClick}>
               {selection?.label || 'Select...'}
               <GoChevronDown className = "text-lg" />
               </Panel>
            {isOpen && (<Panel className="absolute top-full">
                {renderedOptions}
            </Panel>)}
        </div>
    )
}

export default Dropdown;
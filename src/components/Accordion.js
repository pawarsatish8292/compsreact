import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
function Accordion({items}){
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const handleClick = (nextIndex) =>{
        if(nextIndex == expandedIndex){
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }        
    }
    const renderItem = items.map((item, index) =>{     
        const isExpanded = index === expandedIndex;
        const icon = <span>{isExpanded ? <GoChevronDown />:<GoChevronLeft />}</span>
      return (
        <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b item-center cursore-pointer" onClick ={()=>handleClick(index)}>{item.label}
        {icon}</div>
        {isExpanded &&<div>{item.content}</div> }
        </div>
      )
    });
    return <div className="border-b p-5 ronded ">{renderItem}</div>
}

export default Accordion;
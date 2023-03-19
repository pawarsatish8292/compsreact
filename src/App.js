
import Dropdown from './components/Dropdown';
function App () {
 const option =[
    {label :'Red', value:'red'},
    {label :'Green', value:'green'},
    {label :'Blue', value:'blue'}    
]
    return <Dropdown option = {option}/>
}

export default App;
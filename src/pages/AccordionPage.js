
import Accordion from '../components/Accordion';
function AccordionPage () {
 const items =[
    {   id:'1',
        label:'can i use react on project?',
        content:'you can use react on any project you want.'
    },
    {  id:'2',
        label:'can i use react on project?',
        content:'you can use react on any project you want.'
    },
    {    id:'3',
        label:'can i use react on project?',
        content:'you can use react on any project you want.'
    },
    {   id:'4',
        label:'can i use react on project?',
        content:'you can use react on any project you want.'
    },
    {   id:'5',
        label:'can i use react on project?',
        content:'you can use react on any project you want.'
    }
]

return <div><Accordion items={items}/></div>
}

export default AccordionPage;
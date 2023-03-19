import Button from '../components/Button';
import { GoBell, GoEyeClosed ,GoDeviceMobile, GoCloudDownload} from 'react-icons/go';
function ButtonPage (){
    return (
    <div>
            <div>
            <Button secondary outline rounded >
                <GoBell />
                Click Me!
            </Button>
        </div>
        <div> 
        <Button danger outline >
            <GoEyeClosed />
            Buy Now!
        </Button>
        </div>
        <div> 
        <Button warning> 
        <GoCloudDownload />
        Hide Ads!
        </Button >
     </div>
         <div>
        <Button secondary outline>
            <GoDeviceMobile />
            something
        </Button>
        </div >
        <div>
        <Button primary rounded>
        <GoBell />
        See Deal!
        </Button>
        </div>
    </div>     
    )
}
export default ButtonPage;
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import { DiAndroid, DiCodeigniter } from "react-icons/di";
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };
  const handleMouseEnter = () => {
    console.log("Get off me!");
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div><Button onClick={handleClick} className="mb-5"><GoBell/>Plain</Button></div>
        <div><Button primary> <DiAndroid/>Primary</Button></div>
        <div><Button secondary><DiCodeigniter/>Secondary</Button></div>
        <div><Button success>Success</Button></div>
        <div><Button warning>Warning</Button></div>
        <div><Button danger>Danger</Button></div>
      </div>
      <div className="flex flex-col items-center">
        <div><Button rounded onMouseEnter={handleMouseEnter}>Plain</Button></div>
        <div><Button primary rounded>Primary</Button></div>
        <div><Button secondary rounded>Secondary</Button></div>
        <div><Button success rounded>Success</Button></div>
        <div><Button warning rounded>Warning</Button></div>
        <div><Button danger rounded>Danger</Button></div>
      </div>
      <div className="flex flex-col items-center">
        <div><Button rounded outline>Plain</Button></div>
        <div><Button primary outline>Primary</Button></div>
        <div><Button secondary outline>Secondary</Button></div>
        <div><Button success outline>Success</Button></div>
        <div><Button warning outline>Warning</Button></div>
        <div><Button danger outline>Danger</Button></div>
      </div>
    </div>
  )
}

export default ButtonPage;

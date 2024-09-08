import style from './showMore.module.css'
import appStyle from '../../../app.module.css'
import showMore from '../../../image/showMore.svg'

import "rsuite/dist/rsuite-no-reset.min.css";  
import { Popover, Whisper, Dropdown,  
    Button } from "rsuite/";
// eslint-disable-next-line react/prop-types

const renderMenu = ({ className }, ref) => { 
  
    return ( 
        <Popover ref={ref}  
            className={className}
            style={{ width: "137px", marginLeft: 'calc(90px + 0.5vh)', fontFamily: "Noto Sans", marginTop: '6px'}}> 
            <Dropdown.Menu style={{}} title="Show 25"> 
                <Dropdown.Item style={{paddingLeft: '25px'}} eventKey={1}> 
                    Show 25
                </Dropdown.Item> 
                <Dropdown.Item style={{paddingLeft: '25px'}} eventKey={2}> 
                    Show 50 
                </Dropdown.Item> 
                <Dropdown.Item style={{paddingLeft: '25px'}} eventKey={3}> 
                    Show 100
                </Dropdown.Item> 
            </Dropdown.Menu> 
        </Popover> 
    ); 
}; 


const ShowMore = ({ text, subText = "", onShowMoreChange }) => {
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    onShowMoreChange(value);
  };

  return (
    <select
      style={{
        width: '150px',
        background: 'url(http://194.58.123.133:5000/src/image/arrow-down.svg) no-repeat right',
        borderColor: '#AAAAAA',
        appearance: 'none',
        paddingRight: '4rem',
        backgroundPosition: 'center right 10px',
        borderRadius: '6px',
      }}
      onChange={handleChange}
    >
      <option value="25">Show 25</option>
      <option value="50">Show 50</option>
      <option value="100">Show 100</option>
    </select>
  );
};

export default ShowMore;
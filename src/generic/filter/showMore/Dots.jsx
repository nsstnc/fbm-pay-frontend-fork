import style from './showMore.module.css'
import appStyle from '../../../app.module.css'
import showMore from '../../../image/showMore.svg'
import dots from '../../../image/dots.svg'

import "rsuite/dist/rsuite.min.css"; 
import { Popover, Whisper, Dropdown,  
    Button } from "rsuite/";
// eslint-disable-next-line react/prop-types

const renderMenu = ({ left, top, className }, ref) => { 
  
    return ( 
        <Popover ref={ref}  
            className={className}  
            style={{ left, top, marginLeft:'-50px' }}> 
            <Dropdown.Menu title="Edit"> 
                <Dropdown.Item eventKey={1}> 
                    Edit
                </Dropdown.Item> 
                <Dropdown.Item eventKey={2}> 
                    Block
                </Dropdown.Item> 
            </Dropdown.Menu> 

        </Popover> 
    ); 
}; 


const Dots = ({text="", subText = ""}) => {
  return (
<Whisper placement="left" 
                    trigger="click" speaker={renderMenu}> 



                                                  <div style={{width: '1rem'}}><a href="#" className={`dots`}><img src={dots} /></a></div>
   
                




</Whisper> 
  )
}

export default Dots
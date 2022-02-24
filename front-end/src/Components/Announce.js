import {Close} from '@mui/icons-material'
import {React, useState }from 'react';


function Announce() {
    const[announceStyle, setAnnounceStyle] = useState("bg-teal-300 font-bold text-white flex items-center justify-center")
   
    const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden")
    }

    return <div className={announceStyle}>
     <h2>Vibe out and Save 40% off </h2>
     <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
}
export default Announce
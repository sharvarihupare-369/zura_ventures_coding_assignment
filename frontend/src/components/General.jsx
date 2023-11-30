import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createGeneralConfig } from '../redux/configurations/action'
import { ToastContainer, toast } from 'react-toastify';

const General = () => {
    const [generalConfig,setGeneralConfig] = useState({
        chatbotname : "",
        welcomemsg : "",
        inputmsg :""
    })
    const dispatch = useDispatch()
    const notify = () => toast.success('General Information Added Successfully!');
    const {isConfigGeneralAdded} = useSelector(store=>store.configReducer)

    const handleChange = (e) => {
        const {value,name} = e.target;
        setGeneralConfig({...generalConfig,[name] : value});
    }

    const handleAddGeneral = () => {
        dispatch(createGeneralConfig(generalConfig))
        setGeneralConfig({
        chatbotname : "",
        welcomemsg : "",
        inputmsg :""  
        })
    }

    useEffect(()=>{
        if(isConfigGeneralAdded){
            notify()
        }
        return
    },[isConfigGeneralAdded])

  return (
    <div>
        <div className='mt-7'>
            <p className='font-bold text-[#3C3C3C] mb-3'>Chatbot Name</p>
            <input className='w-5/6 p-1 border border-gray-300 rounded-[5px] focus:border-sky-500' name='chatbotname' value={generalConfig.chatbotname} onChange={handleChange} />
            <p className='text-[#646464] text-[12px]'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
        </div>

        <div>
            <p className='font-bold text-[#3C3C3C] mt-3 mb-2'>Welcome Message</p>
            <input className='w-5/6 p-1 border border-gray-300 rounded-[5px] focus:border-sky-500' name='welcomemsg' value={generalConfig.welcomemsg} onChange={handleChange} />
            <p className='text-[#646464] text-[12px]'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
        </div>

        <div>
            <p className='font-bold text-[#3C3C3C] mt-3 mb-2'>Input Placeholder</p>
            <input className='w-5/6 p-1 border border-gray-300 rounded-[5px] focus:border-sky-500' name='inputmsg' value={generalConfig.inputmsg} onChange={handleChange} />
            <p className='text-[#646464] text-[12px]'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
        </div>

        <div> 
            <button onClick={handleAddGeneral} className='bg-[#7E22CE] py-1 px-3 text-white rounded-[5px] mt-4 '>Add</button>
        </div>
        <ToastContainer />
    </div>
  )
}

export default General
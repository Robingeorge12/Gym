import React, { useState } from 'react'
import "./Form.css"
import { useLocation, useNavigate } from 'react-router-dom'


function FormPage({ }) {

    const location = useLocation() 
    // const { category,time } = route.params;
    const [submit,setSubmit] = useState()

    const [cat, setCat] = useState(location.state.obj.category)
    const [trainer, setTrainer] = useState(location.state.obj.trainer)
     console.log(location.state.obj)

     const handleSubmit = (e)=>{
        setSubmit(e.target.value)
     }

    console.log(submit)
    return (
        <div className='form-container'>

            <div className='form-heading'><h3>FILL APLLICATION</h3></div>
            {/* <div className='form-table'> */}
                <form action="" className='form' >

                    <input type="text" placeholder='Enter Your Name' />
                    <input type="text" placeholder='Enter Your Age' />
                    <label className='lab'>Gender<select name="" id="">
                    <option value="">Select</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        </select></label>

                      
                        <input type="text" onChange={((e)=>setCat(e.target.value))} value={cat} />
                        <input type="text"  onChange={((e)=>setTrainer(e.target.value))} placeholder='Enter Your trainer Name' value={trainer} />

                   <input type="submit" value="Submit" onChange={(e)=>handleSubmit(e.target.value)} id="submit" />
                  

                </form>
            {/* </div> */}



        </div>
    )
}

export default FormPage
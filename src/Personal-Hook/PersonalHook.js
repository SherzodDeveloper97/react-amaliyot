import React from 'react';
// bootstrap:
import "bootstrap/dist/css/bootstrap.min.css";
// hook:
import useInputValidation from '../hook/useInputValidate';


const PersonalHook = () => {
    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");

    // const validateInput = (text) => {
    //     if(text.search(/\d/) >= 0){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    
    // const validateColorFirstname = validateInput(firstname) ? "text-danger" : null;
    // const validateColorLastname = validateInput(lastname) ? "text-danger" : null;

    const firstname = useInputValidation("");
    const lastname = useInputValidation("");

    // const validateColorFirstname = firstname.validateInput() ? "text-danger" : null;
    // const validateColorLastname = lastname.validateInput() ? "text-danger" : null;


  return (
    <div className='w-50 mx-auto mb-5'>
        <div className="border p-3 mt-5">
            <p className="text-center fs-3">Register</p>
            <div className="d-flex gap-3">
                <input type="text" className={`form-control ${firstname.validateColor}`} onChange={firstname.onChange} placeholder='Firstname' value={firstname.value} />
                <input type="text" className={`form-control ${lastname.validateColor}`} onChange={lastname.onChange} placeholder='Lastname' value={lastname.value} />
            </div>
            <button className="mt-3 btn btn-success">Send data</button>
        </div>
    </div>
  )
}

export default PersonalHook;
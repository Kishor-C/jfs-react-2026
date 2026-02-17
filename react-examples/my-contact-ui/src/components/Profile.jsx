import { useState } from "react";

export function Profile(props) {  
    let id = props.details.id;
    let name = props.details.name;
    let dob = props.details.dob;
    return (<div>
        <h2>Hello {name}, id is {id} and your dob is {dob}</h2>
    </div>)
}
export function UserForm() {
    //useState(initialValue)
    //console.log("rendering userForm()")
    let [name, setName] = useState("Guest");
    let [phone, setPhone] = useState("0");
    
    let handleSubmit = (e) => {
        // prevent refresh
        e.preventDefault();
        console.log(name, phone);
    }
    
    return (<div>
        <h2 className="alert alert-primary w-50 text-center">User component</h2>
        <form onSubmit = {handleSubmit}>
            Name: <input className="form-control form-control-lg w-50" autoComplete="off" 
                type = "text" name = "username" onChange = {(e)=>setName(e.target.value)}/> <br />
            Phone: <input className="form-control form-control-lg w-50"  autoComplete="off" 
                type = "number" name = "userphone" onChange =  {(e)=>setPhone(e.target.value)}/> <br />
            <input className="btn btn-primary btn-lg w-50" type = "submit" value = "Save" />
        </form>
        <div>
            Name = {name}, Phone = {phone}
        </div>
    </div>)
}
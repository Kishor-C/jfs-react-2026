import { useState } from "react";
import axios from 'axios';

export function Profile(props) {
    let id = props.id;  
    let url = `http://localhost:8080/api/v1/profile/${id}`;
    let[profile, setProfile] = useState(undefined);
    axios.get(url).then(res => setProfile(res.data)).catch(err => console.log(err));

    return (<div>
  
        <div className = "row">
            <div className="col">
                <h3>Profile Information</h3> <hr />
                <b>Name: </b> {profile.name} <br />
                <b>Birthday: </b>{profile.dob} <br />
                <b>Mobile No: </b>{profile.phone}
            </div>
            <div className="col">
                <h3>Hello {profile.name}</h3>
                <h4>Total contacts: {profile.contactList.length}</h4>
            </div>
        </div>
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
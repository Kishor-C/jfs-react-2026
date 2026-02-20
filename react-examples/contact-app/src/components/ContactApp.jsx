import { useEffect, useState } from "react"
import { URL } from "./config";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


export function Register() {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [dob, setDob] = useState("");
    let [phone, setPhone] = useState("");
    let [message, setMessage] = useState("");
    let handleSubmit = (e) => {
       e.preventDefault();
       let url = `${URL}`;
       let content = {"name":name, "password":password, "dob":dob, "phone":phone};
       axios.post(url, content)
       .then(res=>setMessage(`Registered with an id ${res.data.id}`))
       .catch(err=>console.log(err))
    }
    return (<div>
        <h2>Profile Registration Form</h2>
        <h3 className="text text-success">{message}</h3>
        <form onSubmit={handleSubmit}>
            Name <input type = "text" name = "name" onChange={e=>setName(e.target.value)}/> <br />
            Password <input type = "password" name = "password" onChange={e=>setPassword(e.target.value)}/> <br />
            Phone <input type = "number" name = "phone" onChange={e=>setPhone(e.target.value)}/> <br />
            Birthday <input type = "date" name = "dob" onChange={e=>setDob(e.target.value)}/> <br />
            <input type = "submit" value = "Register" />
        </form>
        <hr />
        <Link to = "/login">Sign In</Link>
    </div>)
}


export function Login() {
    let [id, setId] = useState("");
    let [password, setPassword] = useState("");
    let [message, setMessage] = useState("");
    // useNavigate can do a navigation programmatically
    let nav = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let url = `${URL}/login`;
        let content = {"id":id, "password":password};
        axios.post(url, content)
        .then(res=>nav(`/success/${id}`))
        .catch(err=>{
            setMessage(err.response.data.message);
            setId("");
            setPassword("");
        });
       
    }
    return (<div>
        <h2>Login Form</h2>
        <h3 className="text text-danger">{message}</h3>
        <form onSubmit={handleSubmit}>
            Id <input type = "text" name = "id" value={id} onChange={e=>setId(e.target.value)}/> <br />
            Password <input type = "password" name = "password" value={password} onChange={e=>setPassword(e.target.value)}/> <br />
            <input type = "submit" value = "Login" />
            <hr />
            <Link to = "/register">Create Account</Link>
        </form>
    </div>)
}

export function Success() {
    // read the path parameter & assigns to the variable
    // vairable name must be same as path parameter /success/:profileId
    let {profileId} = useParams();
    let [profile, setProfile] = useState("");
    // useEffect(): hook is autmatically called when components are loaded/state changes
    useEffect(()=>{
        let url = `${URL}/${profileId}`;
        axios.get(url).then(res => setProfile(res.data))
    }, []);

    return (<div className="container-fluid">
        <h2>Welcome {profile.name}</h2>
        <h5>Id: {profile.id}</h5>
        <h5>Birthday: {profile.dob}</h5>
        <h5>Mobile No: {profile.phone}</h5>
        <h5>Total contacts: {profile?.contactList?.length}</h5>
        <hr />
        <div>
            <h3>Contacts are:</h3>
            <ol>
            {profile?.contactList?.map((contact, index)=><li key={contact.contactId}>
                Name: {contact.name}, Phone: {contact.phone}</li>)}
            </ol>
        </div>
    </div>)
}
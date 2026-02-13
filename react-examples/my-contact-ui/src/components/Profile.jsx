
export function Profile(props) {  
    let id = props.details.id;
    let name = props.details.name;
    let dob = props.details.dob;
    return (<div>
        <h2>Hello {name}, id is {id} and your dob is {dob}</h2>
    </div>)
}

export function SimpleArrays(props) {
    let names = ["Alex", "Brad", "Charles", "David"];
    return (<div>
        <h2>Simple Arrays</h2>
        {names.map((item, index) => <p key = {item}>{index + 1}. {item}</p>)}
    </div>)
}
import './App.css';
import {useState} from "react";

function App() {
    let [email, setEmail] = useState('user@example.com');
    let [validation, setValidation] = useState('');

    function validateEmailLength(emailInput) {
        if (emailInput.length < 5) {
            setValidation("The email is too short!")
        } else if (emailInput.length > 5 && emailInput.length < 35) {
            setValidation("The email is ok")
        } else {
            setValidation("The email is too long!")
        }
    }

    function handleChange(event) {
        let emailInput = event.target.value;
        setEmail(emailInput);
        validateEmailLength(emailInput);
    }

    function showAlert() {
        alert("The email is: " + email);
    }

    return (
        <div>
            <h1>Class enrollment system</h1>
            <h2>Your email: {email}</h2>
            <div>{validation}</div>
            <input type="text" value={email} onChange={handleChange} />
            <button onClick={showAlert}>Show alert</button>
        </div>
    );
}

export default App;

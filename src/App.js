import './App.css';
import {useState} from "react";

function App() {
    let [email, setEmail] = useState('user@example.com');
    let [validation, setValidation] = useState('');

    function validateEmailLength(emailInput) {
        if (emailInput.length < 5) {
            setValidation("Ale masz krótki adres!")
        } else if (emailInput.length > 5 && emailInput.length < 35) {
            setValidation("Email jest dobry!")
        } else {
            setValidation("Email jest za długi!")
        }
    }

    function handleChange(event) {
        let emailInput = event.target.value;
        setEmail(emailInput);
        validateEmailLength(emailInput);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to: {email}</h2>
            <div>{validation}</div>
            <input type="text" value={email} onChange={handleChange} />
        </div>
    );
}

export default App;

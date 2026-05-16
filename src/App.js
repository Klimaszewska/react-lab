import './App.css';
import {useState} from "react";

function App() {
    let [email, setEmail] = useState('');
    let [validation, setValidation] = useState('');
    let [isLoggedIn, setIsLoggedIn] = useState(false);

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

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setEmail('');
        setValidation('');
        setIsLoggedIn(false);
    }

    return (
        <section>
            {!isLoggedIn &&
                <section>
                    <h1>Class enrollment system</h1>
                    <h2>Log in with your email: </h2>
                    <div>{validation}</div>
                    <input type="text" onChange={handleChange}/>
                    <button disabled={!email} onClick={login}>Log in</button>
                </section>
            }
            {isLoggedIn &&
                <section>
                    <h1>Welcome, {email}!</h1>
                    <button onClick={logout}>Log out</button>
                </section>
            }
        </section>
    );
}

export default App;

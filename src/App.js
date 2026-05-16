import './App.css';
import 'milligram';
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import MeetingsPage from "./MeetingsPage";

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

    function handleEmail(event) {
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
            {
                isLoggedIn
                    ? <section>
                        <UserPanel
                            email={email}
                            logout={logout}/>
                        <MeetingsPage/>
                    </section>
                    : <LoginForm
                        email={email}
                        validation={validation}
                        handleEmail={handleEmail}
                        login={login}/>
            }
        </section>
    );
}

export default App;

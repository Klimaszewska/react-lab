import './App.css';

function App() {
    let email = 'user@example.com';

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to: {email}</h2>
            <input type="text" placeholder="Wpisz swój e-mail" onChange={handleChange} />
        </div>
    );
}

export default App;

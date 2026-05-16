export default function LoginForm({email, validation, handleEmail, login}) {

    return <section>
        <h1>Class enrollment system</h1>
        <h2>Log in with your email: </h2>
        <div>{validation}</div>
        <input type="text" onChange={handleEmail}/>
        <button disabled={!email} onClick={login}>Log in</button>
    </section>
}
export default function MainPage({email, logout}) {
    return <section>
        <h1>Welcome, {email}!</h1>
        <button onClick={logout}>Log out</button>
    </section>
}
export default function UserPanel({email, logout}) {
    return <section>
        <h1>Welcome, {email}!</h1>
        <button onClick={logout}>Log out</button>
    </section>
}
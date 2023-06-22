export default function Register()
{

    return <div >
    <h1>Register your Organization</h1>
    <label htmlFor="account">Organization name</label> <input type="text" id="orgn"></input><br></br>
    <label htmlFor="account">email</label> <input type="text" id="account"></input><br></br>
    <label htmlFor="password">password</label> <input type="password" id="password"></input><br></br>
    <label htmlFor="password2">confirm password</label> 
    <input type="password" id="password2"></input><br></br>
    <button type="submit">Create Account</button>
    </div>
}
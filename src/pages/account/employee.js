export default function Employee()
{

    return <div >
    <h1>Create employee Account </h1>
    <label for="account">account</label> <input type="text" id="account"></input><br></br>
    <label htmlFor="password">password</label> <input type="password" id="password"></input><br></br>
    <label htmlFor="password2">confirm password</label> 
    <input type="password" id="password2"></input><br></br>
    <button type="submit">Create Account</button>
    </div>
}
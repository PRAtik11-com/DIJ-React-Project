import "./Login.css"
import GoogleButton from 'react-google-button'
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from "../Firebase/Allfirebaseauth";

const Login = () => {

  function Logout() {
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClick() {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ backgroundImage: "url('https://dji-official-fe.djicdn.com/cms/uploads/a9b0636a0208b6467b18abcf6f8bb06d.jpg')", backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center',width: '98.8vw',height: '100vh',margin: '0',padding: '0'}}>
      <div className='Login-form'>
        <form onClick={Logout}>
          <h1 style={{ textAlign: "center" }}><img src="/images/Screenshot 2025-01-18 113704.png" alt="Screenshot" /></h1>
          <label htmlFor="useName">Email<span>*</span></label>
          <input type="email" placeholder='Enter your Email..' />
          <label htmlFor="usePass">Password<span>*</span></label>
          <input type="Password" placeholder='Enter your Password...' />
          <button type='submit'>LogOut</button>
        </form>
        <hr />
        <GoogleButton style={{ marginTop: "10px", textAlign: "center", marginLeft: "10px" }} onClick={handleClick} />
        
      </div>
    </div>
  )
}

export default Login;

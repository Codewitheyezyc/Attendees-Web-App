import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '../ui/Button';
import Navbar from '../components/Navbar';

function Login() {
  return (
    <>
      <Navbar />
      <section className="formContainer bg-purple-200">
        <div className="formGrid">
          <div className="formFirstGridCell bg-purple-900">
            <h1 className="pb-5 text-4xl font-bold text-purple-100">
              Welcome back 🎉
            </h1>
            <p className="text-lg text-purple-400">
              You can sign in to access your existing account
            </p>
          </div>
          <div className="formSecondGridCell bg-purple-50">
            <p className="mb-4 text-2xl font-semibold sm:text-4xl">Sign In</p>
            <form action="" className="p-10">
              <div className="formInputBox">
                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  placeholder="Username or email"
                  className="input"
                />
              </div>
              <div className="formInputBox">
                <FontAwesomeIcon icon={faLock} />
                <input type="text" placeholder="Password" className="input" />
              </div>
              <div className="mb-10 flex items-center gap-5 text-xs">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <p>Forget password?</p>
              </div>
              <Button type={'signIn'}>Sign In</Button>
              <div className="mt-5 text-center text-xs">
                <p>
                  New here? <span>Create an Account</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

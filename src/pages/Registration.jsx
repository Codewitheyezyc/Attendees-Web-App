import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../ui/Button';
import { useAuth } from '../context/useAuth';

function Registration() {
  const {
    firstname,
    lastname,
    onChangeFun,
    kc,
    email,
    phoneNumber,
    zone,
    dispatch,
  } = useAuth();
  console.log(email);

  const navigate = useNavigate();
  function handleRegister(e) {
    e.preventDefault();
    navigate('/thank-you');
    dispatch({ type: 'addUser' });
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="formContainer flex flex-grow items-center justify-center bg-blue-200 px-4 py-10">
        <div className="formRegGrid grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg lg:grid-cols-2">
          <div className="formRegFirstGridCell flex flex-col items-center justify-center bg-blue-900 p-10 sm:p-16">
            <h1 className="pb-5 text-4xl font-bold text-blue-100">
              Hey!!! 🖐 Welcome
            </h1>
            <p className="text-lg text-blue-400">
              Welcome to the Attendees platform, we are so glad to have you
              register with us for the upcoming/ongoing program!
            </p>
          </div>
          <div className="formRegSecondGridCell flex flex-col items-center justify-center bg-blue-50 p-8 sm:p-12">
            <p className="mb-4 text-2xl font-semibold sm:text-4xl">
              Registration
            </p>
            <form
              action=""
              onSubmit={handleRegister}
              className="w-full max-w-md space-y-5"
            >
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Firstname
                </label>

                <input
                  value={firstname}
                  onChange={(e) => onChangeFun('firstname', e)}
                  type="text"
                  placeholder="Firstname"
                  className="regFormInput"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <label htmlFor="" className="regFormLabel">
                  Lastname
                </label>
                <input
                  value={lastname}
                  type="text"
                  onChange={(e) => onChangeFun('lastname', e)}
                  placeholder="Lastname"
                  className="regFormInput"
                />
              </div>
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Zone
                </label>
                <input
                  value={zone}
                  onChange={(e) => onChangeFun('zone', e)}
                  type="text"
                  placeholder="zone"
                  className="regFormInput"
                />
              </div>
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  KC Handle
                </label>
                <input
                  value={kc}
                  onChange={(e) => onChangeFun('kc', e)}
                  type="text"
                  placeholder="kc"
                  className="regFormInput"
                />
              </div>
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Role
                </label>
                <select
                  name="role"
                  className="regFormInput"
                  onChange={(e) => onChangeFun('role', e)}
                >
                  <option value="">Select role</option>
                  <option value="leader">Leader</option>
                  <option value="member">Member</option>
                </select>
              </div>
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Gender
                </label>
                <select
                  name="role"
                  className="regFormInput"
                  onChange={(e) => onChangeFun('gender', e)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => onChangeFun('email', e)}
                  type="email"
                  placeholder="email"
                  className="regFormInput"
                />
              </div>
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Phone Number
                </label>
                <input
                  value={phoneNumber}
                  onChange={(e) => onChangeFun('phoneNumber', e)}
                  type="number"
                  placeholder="+234 222 444 111"
                  className="regFormInput"
                />
              </div>
              <div className="mt-10 flex items-center justify-center gap-5">
                <Button type={'cancel'}>Cancel</Button>
                {/* <Link to="/dashboard"> */}
                <Button type={'primary'}>Confirm</Button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;

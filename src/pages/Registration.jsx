import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../ui/Button';

function Registration() {
  return (
    <>
      <Navbar />
      <section className="formContainer bg-blue-200">
        <div className="formRegGrid">
          <div className="formRegFirstGridCell bg-blue-900">
            <h1 className="pb-5 text-4xl font-bold text-blue-100">
              Hey!!! 🖐 Welcome
            </h1>
            <p className="text-lg text-blue-400">
              Welcome to the Attendees platform, we are so glad to have you
              register with us for the upcoming/ongoing program!
            </p>
          </div>
          <div className="formRegSecondGridCell bg-blue-50">
            <p className="mb-4 text-2xl font-semibold sm:text-4xl">
              Registration
            </p>
            <form action="" className="w-full px-10 py-5">
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Firstname
                </label>

                <input
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
                  type="text"
                  placeholder="lastname"
                  className="regFormInput"
                />
              </div>
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="address"
                  className="regFormInput"
                />
              </div>
              <div className="regFormInputBox">
                <label htmlFor="" className="regFormLabel">
                  Email
                </label>
                <input
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
                  type="number"
                  placeholder="+234 222 444 111"
                  className="regFormInput"
                />
              </div>
              <div className="mt-10 flex items-center justify-center gap-5">
                <Button type={'cancel'}>Cancel</Button>
                <Link to="/thank-you">
                  <Button type={'primary'}>Confirm</Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;

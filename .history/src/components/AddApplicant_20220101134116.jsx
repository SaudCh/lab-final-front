import { useState } from "react";
import axios from "axios";
const AddApplicant = () => {
  const [studentName, setStudentName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [pref, setPref] = useState();

  const [message, setMessage] = useState();

  const addDetails = async (e) => {
    e.preventDefault();

    const data = {
      studentName: studentName,
      registrationNumber: registrationNumber,
    };
    await axios
      .post("http://localhost:5000/user/add", data)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((e) => console.log(e));
    setStudentName("");
    setRegistrationNumber("");
  };

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      {message && <div className="alert alert-success">{message}</div>}
      <form>
        <div>
          <label className="mb-2">Student Name</label>
          <input
            type="text"
            className="form-control mb-3"
            name="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2">Registration Number</label>
          <input
            type="text"
            className="form-control mb-3"
            value={registrationNumber}
            name="registrationNumber"
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2">Hostel Prefrences</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Johar Hall
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              MA Jinnah Hall
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              Jupiter Hall
            </label>
          </div>
        </div>

        <div>
          <div class="form-check form-check-inline">
            <label className="mb-2">Gender</label>
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={gender === "Male"}
              onClick={() => setGender("Male")}
            />
            <label class="form-check-label" for="male">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={gender === "Female"}
              onClick={() => setGender("Female")}
            />
            <label class="form-check-label" for="female">
              Female
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary form-control"
          onClick={(e) => addDetails(e)}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default AddApplicant;

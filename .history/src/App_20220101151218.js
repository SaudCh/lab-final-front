import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import AddApplicant from './components/AddApplicant';
import ViewApplicant from './components/ViewApplicant';
import UpdateRecord from "./components/UpdateRecord";
import DeleteRecord from "./components/DeleteRecord";
import BoardingPass from "./components/BoardingPass";

function App() {
  return (
    <div>
      <h1 className="text-center">Hostel Application System</h1>
      <Navbar />
      <Routes>
        <Route path="/hostelApplicants" element={<AddApplicant />} />
        <Route
          path="/viewApplicants"
          element={<ViewApplicant />}
        />
        <Route
          path="/editApplicant"
          element={<UpdateRecord />}
        />
        <Route
          path="/deleteApplicant"
          element={<DeleteRecord />}
        />
        <Route
          path="/boardingPass/:id"
          element={<BoardingPass />}
        />
      </Routes>
    </div>
  );
}

export default App;

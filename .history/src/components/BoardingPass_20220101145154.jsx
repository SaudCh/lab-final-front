import React from "react";
import { useParams } from "react-router-dom";

export default function BoardingPass() {
  const { id } = useParams();
  return (
    <div>
      <div class="card mb-3 col-6">
        <div class="row g-0">
          <div class="col-md-6">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title p-0 m-0">Name</h5>
              <p class="card-text p-0  m-0">Regd Num</p>
              <p class="card-text p-0  m-0">Gender</p>
              <p class="card-text p-0 m-0">Prefrences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

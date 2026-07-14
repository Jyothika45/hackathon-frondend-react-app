import React from 'react'

const AddTeam = () => {
  return (
    <div>

      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row">

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="teamid" className="form-label">Team ID:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="teamname" className="form-label">Team Name:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="leadername" className="form-label">Team Leader Name:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="projecttitle" className="form-label">Project Title:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="leaderemail" className="form-label">Leader Email:</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="problemstatement" className="form-label">Problem Statement:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="leaderphone" className="form-label">Leader Phone:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="track" className="form-label">Track:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="college" className="form-label">College Name:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="technology" className="form-label">Technology Stack:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="members" className="form-label">Number of Members:</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="mentor" className="form-label">Mentor Name:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="registrationdate" className="form-label">Registration Date:</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="table" className="form-label">Table / Station Number:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 mt-4 text-center">
                <button className="btn btn-primary">ADD</button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddTeam
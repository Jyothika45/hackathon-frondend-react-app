import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from '../NavigationBar'

const AddTeam = () => {

    const [input, changeData] = useState({
        team_id: "",
        team_name: "",
        team_leader_name: "",
        project_title: "",
        leader_email: "",
        problem_statement: "",
        leader_phone: "",
        track: "",
        college_name: "",
        technology_stack: "",
        number_of_members: "",
        mentor_name: "",
        registration_date: "",
        table_station_number: ""
    })

    const inputHandler = (event) => {
        changeData({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-team", input).then(
            (response) => {
                console.log(response.data)
                alert("Team Added Successfully")
            }
        ).catch(
            (error) => {
                console.error("Error Adding Team:", error)
                alert("Failed to Add Team")
            }
        )
    }

    return (
        <div>
<NavigationBar/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" mt-3>

                        <h3 className="text-center mb-4">ADD TEAM</h3>

                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Team ID</label>
                                <input type="text" className="form-control" name="team_id" value={input.team_id} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Team Name</label>
                                <input type="text" className="form-control" name="team_name" value={input.team_name} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Team Leader Name</label>
                                <input type="text" className="form-control" name="team_leader_name" value={input.team_leader_name} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Project Title</label>
                                <input type="text" className="form-control" name="project_title" value={input.project_title} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Leader Email</label>
                                <input type="email" className="form-control" name="leader_email" value={input.leader_email} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Problem Statement</label>
                                <input type="text" className="form-control" name="problem_statement" value={input.problem_statement} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Leader Phone</label>
                                <input type="text" className="form-control" name="leader_phone" value={input.leader_phone} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Track</label>
                                <input type="text" className="form-control" name="track" value={input.track} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">College Name</label>
                                <input type="text" className="form-control" name="college_name" value={input.college_name} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Technology Stack</label>
                                <input type="text" className="form-control" name="technology_stack" value={input.technology_stack} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Number of Members</label>
                                <input type="number" className="form-control" name="number_of_members" value={input.number_of_members} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Mentor Name</label>
                                <input type="text" className="form-control" name="mentor_name" value={input.mentor_name} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Registration Date</label>
                                <input type="date" className="form-control" name="registration_date" value={input.registration_date} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Table / Station Number</label>
                                <input type="text" className="form-control" name="table_station_number" value={input.table_station_number} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                                <button className="btn btn-primary" onClick={readValue}>
                                    ADD TEAM
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTeam
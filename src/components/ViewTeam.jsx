import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewTeam = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios
            .get("http://localhost:3000/view-team")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <NavigationBar />

            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 className="text-center mb-4">
                            View All Teams
                        </h2>

                        <div className="row">

                            {
                                data.map((value, index) => {
                                    return (

                                        <div
                                            key={index}
                                            className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
                                        >

                                            <div className="card h-100 shadow">

                                                <div className="card-body">

                                                    <h5 className="card-title">
                                                        {value.team_name}
                                                    </h5>

                                                    <p className="card-text">
                                                        <strong>Team ID :</strong> {value.team_id}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Team Leader :</strong> {value.team_leader_name}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Project Title :</strong> {value.project_title}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Leader Email :</strong> {value.leader_email}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Problem Statement :</strong> {value.problem_statement}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Leader Phone :</strong> {value.leader_phone}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Track :</strong> {value.track}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>College Name :</strong> {value.college_name}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Technology Stack :</strong> {value.technology_stack}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Number of Members :</strong> {value.number_of_members}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Mentor Name :</strong> {value.mentor_name}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Registration Date :</strong> {value.registration_date}
                                                    </p>

                                                    <p className="card-text">
                                                        <strong>Table / Station Number :</strong> {value.table_station_number}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewTeam
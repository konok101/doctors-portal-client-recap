import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {

    const [user] = useAuthState(auth);
    const [appoinments, setAppoinments] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookingPatients?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppoinments(data))

        }
    }, [user])
    console.log(user.email);

    return (
        <div>
           {/*  <h1>Appoinment {appoinments.length}</h1> */}

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th> Date</th>
                            <th> Time</th>
                            <th>  Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments.map((appoinment, index) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{appoinment.patientName}</td>
                                    <td>{appoinment.date}</td>
                                    <td>{appoinment.slot}</td>
                                    <td>{appoinment.treatment}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;
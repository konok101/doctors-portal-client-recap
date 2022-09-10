import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Succesfully Make admin');
            })

    }
    return (
        <tr>
            <th>1</th>
            <th>{email}</th>
            <th>{
                role !== 'admin' &&
                <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>
            }</th>
            <th><button class="btn btn-xs">Remove User</button></th>
        </tr>


    );
};

export default UserRow;
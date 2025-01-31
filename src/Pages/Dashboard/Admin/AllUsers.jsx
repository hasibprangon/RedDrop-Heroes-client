import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res?.data;
        }
    });

    const [statusFilter, setStatusFilter] = useState("all");

    const handleFilterChange = (event) => {
        setStatusFilter(event.target.value);
    };

    // Filter users based on selected status
    const filteredUsers = users.filter(user =>
        statusFilter === "all" ? true : user.status === statusFilter
    );

    const makeAdmin = {
        role: "admin"
    }

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/${user?._id}`, makeAdmin)
                    .then(res => {
                        if (res?.data?.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Success",
                                text: `You have successfully created ${user?.name} to admin`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    const makeVolunteer = {
        role: "volunteer"
    }


    const handleMakeVolunteer = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user a volunteer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Volunteer"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/${user?._id}`, makeVolunteer)
                    .then(res => {
                        refetch();
                        if (res?.data?.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: `You have successfully assigned ${user?.name} to volunteer`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    const blockUser = {
        status: "blocked"
    };

    const handleBlockUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to block this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Block!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/status/${user?._id}`, blockUser)
                    .then(res => {
                        refetch();
                        if (res?.data?.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success",
                                text: `You block ${user?.name} `,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const unblockUser = {
        status: "active"
    };

    const handleUnblockUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to unblock this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, unblock"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/status/${user?._id}`, unblockUser)
                    .then(res => {
                        refetch();
                        if (res?.data?.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: `You unblocked ${user?.name}`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>All Users || RedDrop-Heroes</title>
            </Helmet>
            <div className='flex justify-evenly mb-5'>
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users?.length}</h2>
                <select
                    value={statusFilter}
                    onChange={handleFilterChange}
                    className="select select-bordered w-40"
                >
                    <option value="all">All Users</option>
                    <option value="active">Active</option>
                    <option value="blocked">Blocked</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Manage Users</th>
                            <th>User Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredUsers.map((user, index) =>
                                <tr
                                    key={user?._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar relative">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user?.photoUrl}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                                <span className={`${user?.status === "active" ? 'text-green-500' : ''} text-xl absolute -top-1 -left-1`}><GoDotFill></GoDotFill></span>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user?.name}</div>
                                                <div className="text-sm opacity-50">{user?.upazila}, {user?.district}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user?.email}
                                    </td>
                                    <td>
                                        {user?.role}
                                    </td>
                                    <td>
                                        {user?.role === "admin" ? '' :
                                            <details className="dropdown">
                                                <summary className="btn btn-sm btn-outline text-xl m-1">
                                                    <BsThreeDotsVertical></BsThreeDotsVertical></summary>
                                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                    <li><a onClick={() => handleMakeAdmin(user)} >Make Admin</a></li>
                                                    <li><a onClick={() => handleMakeVolunteer(user)}>Make Volunteer</a></li>
                                                    <li><a onClick={() => handleMakeDonor(user)}>Make Donor</a></li>
                                                </ul>
                                            </details>}
                                    </td>
                                    <td>{user?.status}</td>

                                    <td>
                                        {user?.role === "admin" ? '' :
                                            <>
                                                <button
                                                    onClick={() => handleBlockUser(user)}
                                                    className='btn btn-xs btn-outline mr-2 btn-error'>Block</button>
                                                <button
                                                    onClick={() => handleUnblockUser(user)}
                                                    className='btn btn-xs btn-outline mr-2 btn-success'>Unblock</button>
                                            </>
                                        }
                                    </td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;
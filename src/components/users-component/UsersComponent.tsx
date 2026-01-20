import React from 'react';
import {apiService} from "@/service/api.service";
import Link from "next/link";

const UsersComponent = async () => {
    const users = await apiService.getUsers();

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={{pathname: `/users/${user.id}`, query:{data:JSON.stringify(user)}}}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersComponent;
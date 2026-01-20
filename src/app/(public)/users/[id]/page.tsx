import { apiService } from "@/service/api.service";

interface Props {
    params: {
        id: string;
    };
}

const UserDetailsPage = async ({ params }: Props) => {
    const {id} = await params
    const user = await apiService.getUserById(id);

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserDetailsPage;

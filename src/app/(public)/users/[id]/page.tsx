import {SearchParams} from "next/dist/server/request/search-params";
import {IUsers} from "@/models/IUsers";

interface Props {
    searchParams:Promise<SearchParams>
}

const UserDetailsPage = async ({searchParams}: Props) => {

    const {data} = await searchParams;
    let obj = null
    if (typeof data === "string") {
        obj = JSON.parse(data) as IUsers
    }

    return (
        <div>
            {obj &&
                <>
                    <p>Name: {obj.name}</p>
                    <p>Email: {obj.email}</p>
                </>

            }
        </div>
    );
};

export default UserDetailsPage;

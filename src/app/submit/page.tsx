import {FC} from "react";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

const SubmitPage:FC<Props> = async ({searchParams}) => {

    const awaitSP = await searchParams;
    return (
        <div>
             {awaitSP.name}
            <hr/>
            {awaitSP.password}

        </div>
    );
};

export default SubmitPage;
// localhost:3000/users/api [GET]

export async function GET(request: Request) {
    // console.log('GET request route handler');
    //
    // const users = await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json());

    return Response.json({message: request.url, status: 200});
}
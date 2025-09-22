"use client";
import useSWR from 'swr';
const fetcher = (url: string)=>fetch(url).then((res)=>res.json())
export default function AllUsers(){
    const {data, error} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
    if(error){
        return <div>Failed to load</div>
    }
    if(!data){
        return <div>Loading.........</div>
    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            {
                data.map((user:any)=>
                <div className='mt-3'>
                   <h1> <strong>id:</strong> {user.id} </h1>
                    <h2><strong>Name: </strong>{user.name}</h2>
                    <h2><strong>email: </strong>{user.email}</h2>
                    <h2><strong>Phone: </strong>{user.phone}</h2>
                </div>
                )
            }
        </div>
        
    )
}
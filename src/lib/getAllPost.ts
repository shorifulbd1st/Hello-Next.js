import { promises } from "dns";

export interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}
export default async function getAllPosts(): Promise<Post[]> {
    const allPosts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
            next:{
                revalidate: 10,
            }
        });
    return allPosts.json() as Promise<Post[]>;
}
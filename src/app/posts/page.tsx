import getAllPosts, { Post } from '@/lib/getAllPost'
import { Roboto } from 'next/font/google';
import React from 'react'
const roboto = Roboto({subsets: ["latin"], weight: "400"});
export const metadata = {
  title: "All posts ",
  description: "Learn more about our company, our mission and vision",
};
const page = async() => {
    const posts: Post[] = await getAllPosts();
    
  return (
    <div className={`${roboto.className} w-11/12 mx-auto `}>
      {
        posts.map(post =>(
            <div key={post.id}>
                <h2 className='mt-10 italic text-xl'>{post.title}</h2>
                <h2>{post.body}</h2>
            </div>
        ))
      }
    </div>
  )
}

export default page

"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Total count: {count}</h1>
       <div className="flex text-center items-center justify-center gap-5 mt-10">
         <button className="px-3 py-1 rounded-xl bg-green-500 text-xl cursor-pointer text-white" onClick={() => setCount(count + 1)}>Increment</button>
        <button  className="px-3 py-1 rounded-xl bg-red-500 text-white cursor-pointer text-xl"onClick={() => setCount(count - 1)}>Decrement</button>
       </div>
    </div>
  );
}
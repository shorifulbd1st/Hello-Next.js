import Image from "next/image";
import Counter from "./counter/Counter";

export default function Home() {
  return (
   <div className="w-11/12 mx-auto">
    <h1 className="text-2xl font-bold">Welcome to Next js</h1>
    <Counter></Counter>
   </div>
  );
}

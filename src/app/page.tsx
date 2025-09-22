import Image from "next/image";
import Counter from "./counter/Counter";
import { Roboto } from "next/font/google";
import Calculator from "./components/Calculator/Calculator";
const roboto = Roboto({subsets: ["latin"], weight: "400"});
export default function Home() {
  return (
   <div className={`${roboto.className} w-11/12 mx-auto `}>
    <h1 className="text-2xl font-bold">Welcome to Next js</h1>
   <div className="flex justify-center items-center gap-5 ">
    <Calculator></Calculator>
     <Counter></Counter>
   </div>
   </div>
  );
}

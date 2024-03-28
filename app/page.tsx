
import { Info } from "./components/Info";
import { Background } from "./components/Background";


export default function Home() {
  



  return (
    <main className="relative h-full w-full">
      <div
        className={` m-10 absolute z-20 translate-x-0 bottom-0 left-0 opacity-100 transition-all duration-300  text-2xl font-bold`}>
        <Info />
      </div>
      <Background  />

    </main>
  );
}

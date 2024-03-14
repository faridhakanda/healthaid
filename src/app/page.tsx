//import Image from "next/image";
//flex min-h-screen flex-col items-center justify-between p-24
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center text-center pt-20 pb-2">
      <div className="sm:w-full md:w-96 h-fit p-2 bg-lime-400 rounded-md mx-auto justify-center">
        <h1>Health Application!</h1>
      </div>
      <div>
        <h1>All of health product and services</h1>
      </div>
    </main>
  );
}

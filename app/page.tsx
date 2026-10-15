import Image from "next/image";

export default function Home() {
  return (
    <div className=" ml-2 flex flex-col flex-1 w-[98%] font-sans ">
      <section className="flex flex-col gap-2 rounded-3xl  bg-[#F5F5F5] p-4">
        <section className="flex flex-col">
          <h2 className="text-2xl font-semibold tracking-tight">
            Good morning ☀️
          </h2>
          Welcome to Yur Platform, Zander.
        </section>
      </section>
      <h4 className="text-base font-semibold text-[#333333] mt-4">Your Projects:</h4>
    </div>
  );
}

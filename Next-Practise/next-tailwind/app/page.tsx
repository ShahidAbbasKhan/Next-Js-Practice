import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center bg-gray-300">
      <div className="mx-4 order-last">
        <Image
          src="/Panaverse.png"
          alt="Next Logo"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="mx-4 self-center text-center">
        <h1 className="text-4xl font-bold text-red-900"> Panaverse DAO</h1>
        <h2 className="text-3xl font-semibold text-red-800">
          A Community of Web 3 Developer and Metaverse
        </h2>
        <button
          type="button"
          className="m-4 py-2 px-4 border-2 border-stone-800 -700 rounded-lg text-white bg-red-600"
        >
          Go for Syllabus
        </button>
      </div>
    </div>
  );
}

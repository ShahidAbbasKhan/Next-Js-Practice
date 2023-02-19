import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h2>This is About Page</h2>
      <Image
        src={"/panaverse.jpg"}
        alt="panaverse"
        width={"100"}
        height={"100"}
      />
      <Link href="/">Go to Home</Link>
    </>
  );
}

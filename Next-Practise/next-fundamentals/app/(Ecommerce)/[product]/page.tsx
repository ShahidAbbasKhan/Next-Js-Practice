import React from "react";
import Link from "next/link";

export default function Home({ params }: { params: { product: string } }) {
  return (
    <>
      <h2>Home</h2>
      <Link href="/about">Go to About</Link>
      <div>The product is : {params.product}</div>
    </>
  );
}

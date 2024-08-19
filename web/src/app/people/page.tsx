import React from "react";
import Card from "../../components/Card/Card.tsx";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function fetchPeople() {
  const res = await fetch(`${process.env.API_URL}/people`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data;
}

export default async function People() {
  const data = await fetchPeople();

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      {data.results.map((person) => (
        <div key={person.name} className="w-[30%]">
          <Card person={person} />
        </div>
      ))}
    </div>
  );
}

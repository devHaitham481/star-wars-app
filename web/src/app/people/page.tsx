import React from "react";
import Card from "../../components/Card/Card.tsx";

async function fetchPeople() {
  const res = await fetch("http://localhost:3001/people");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json()
  const data = await res.json()

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

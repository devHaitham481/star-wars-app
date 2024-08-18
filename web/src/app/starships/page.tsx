import React from "react";
import Card from "../../components/Card/Card.tsx";

async function fetchStarships() {
  const res = await fetch("http://localhost:3001/starships");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json()

  return data;
}

export default async function Starships() {
  const data = await fetchStarships();

  return (
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {data.results.map((starship) => (
          <div key={starship.name} className="w-[30%]">
            <Card starship={starship} />
          </div>
        ))}
      </div>
  );
}

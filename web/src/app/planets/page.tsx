import React from "react";
import Card from "../../components/Card/Card.tsx";

async function fetchPlanets() {
  const res = await fetch("http://localhost:3001/planets");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json()

  return data;
}

export default async function Planets() {
  const data = await fetchPlanets();

  return (
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {data.results.map((planet) => (
          <div key={planet.name} className="w-[30%]">
            <Card planet={planet} />
          </div>
        ))}
      </div>
  );
}

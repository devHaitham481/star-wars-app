import React from "react";
import Card from "../../components/Card/Card.tsx";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function fetchPlanets() {
  const res = await fetch(`${process.env.API_URL}/planets`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

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

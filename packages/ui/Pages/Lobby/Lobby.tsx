/* eslint-disable @next/next/no-img-element */

import data from "./gamesData.json";

interface Lobby {
  brand: string;
}

export const Lobby = (props: Lobby) => {
  const isCosmoswin = props.brand === "Cosmoswin";
  const thumbnailClass = isCosmoswin
    ? "rounded-lg transition duration-300 transform hover:scale-110"
    : "";

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center m-4 cursor-pointer"
        >
          <img
            className={`h-48 w-48 object-cover ${thumbnailClass}`}
            src={item.image}
            alt={item.string}
          />
          <p className="mt-2 font-medium text-center text-white">
            {item.string}
          </p>
        </div>
      ))}
    </div>
  );
};

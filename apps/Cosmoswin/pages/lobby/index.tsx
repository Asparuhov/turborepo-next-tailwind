import React, { useState } from "react";
import { Lobby } from "ui";
type Props = {};

export default function LobbyGames({}: Props) {
  const [numItems, setNumItems] = useState(32);
  return (
    <Lobby
      loadingImages={{count: numItems, setCount: setNumItems}}
      imageClass="aspect-square w-50 h-50 shrink object-cover rounded-lg transition duration-300 transform hover:scale-110"
    />
  );
}

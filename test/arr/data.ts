interface Ball {
  colors: string[];
  name: string;
  size: "big" | "small";
}

const balls: Ball[] = [
  {
    colors: ["black", "white"],
    name: "Baseball",
    size: "small"
  },
  {
    colors: ["green", "red", "blue"],
    name: "Beach",
    size: "big"
  },
  {
    colors: ["black", "orange"],
    name: "Basketball",
    size: "big"
  }
];

export { balls };
export type { Ball };

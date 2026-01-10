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

const abcArrLike = { 0: "a", 1: "b", 2: "c", length: 3 };

export { abcArrLike, balls };
export type { Ball };

interface Person {
  birth: {
    day: number;
    month: number;
    year: number;
  };
  id: number;
  name: string[];
}

const person: Person = {
  birth: {
    day: 1,
    month: 2,
    year: 2000
  },
  id: 12,
  name: ["John", "Doe"]
};

export type { Person };
export { person };

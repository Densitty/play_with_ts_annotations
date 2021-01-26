const profile = {
  name: "Jeremy",
  age: 21,
  profession: "banker",
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructing a property
const { age, profession }: { age: number; profession: string } = profile;

// destructuring a nested object
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;

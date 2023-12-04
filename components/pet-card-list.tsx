import PetCard from "@/components/pet-card";

const dogs = [
  { id: 1, name: "pet1", src: "/pet1.jpg", weight: "3kg", gender: "man" },
  { id: 2, name: "pet2", src: "/pet2.jpg", weight: "3kg", gender: "man" },
  { id: 3, name: "pet3", src: "/pet3.jpg", weight: "3kg", gender: "man" },
  { id: 4, name: "pet4", src: "/pet4.jpg", weight: "3kg", gender: "man" },
  { id: 5, name: "pet5", src: "/pet5.jpg", weight: "3kg", gender: "man" },
  { id: 6, name: "pet6", src: "/pet6.jpg", weight: "3kg", gender: "man" },
];

const PetCardList = () => {
  return (
    <div className="space-y-10">
      {dogs.map((dog) => {
        return (
          <div key={dog.id}>
            <PetCard
              id={dog.id}
              name={dog.name}
              src={dog.src}
              weight={dog.weight}
              gender={dog.gender}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PetCardList;

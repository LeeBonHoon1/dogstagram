import PetCardList from "@/components/pet-card-list";
import PetCategory from "@/components/pet-category";
import SearchInput from "@/components/search-input";

export default function Home() {
  return (
    <div className="space-y-5 px-5 pt-5 pb-24 bg-primary-foreground">
      <SearchInput />
      <PetCategory />
      <PetCardList />
    </div>
  );
}

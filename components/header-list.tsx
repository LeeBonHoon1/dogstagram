import { cn } from "@/lib/utils";

const routes = [
  {
    id: 1,
    href: "/profile",
    active: false,
    title: "profile",
  },
  {
    id: 2,
    href: "/profile",
    active: false,
    title: "profile",
  },
  {
    id: 3,
    href: "/profile",
    active: false,
    title: "profile",
  },
  {
    id: 4,
    href: "/profile",
    active: false,
    title: "profile",
  },
  {
    id: 5,
    href: "/profile",
    active: false,
    title: "profile",
  },
];

const HeaderList = () => {
  return (
    <div className="flex gap-6 cursor-pointer">
      {routes.map((item) => {
        return (
          <div
            key={item.id}
            className="hover:border-b-2 border-b-orange-500 pb-1"
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderList;

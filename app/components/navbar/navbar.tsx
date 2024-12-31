import { ActiveLink } from "./active-link/activelink";

export const Navbar = () => {
  const navItem = [
    { title: "Pricing", path: "/pricing" },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "./about",
    },
  ];

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 rounded p-2 m-2">
      <>
        <ActiveLink path="/" title="Home" key="home" />

        <div className="flex flex-1"></div>
        {navItem.map((item, index) => (
          <ActiveLink key={`${index}`} {...item} />
        ))}
      </>
    </nav>
  );
};

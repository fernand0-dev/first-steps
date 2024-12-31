import { Navbar } from "../components/navbar/navbar";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundillo</span>
        {children}
      </main>
    </>
  );
}

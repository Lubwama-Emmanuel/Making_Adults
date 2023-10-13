import Links from "../ui/Links";

export default function MobileMenu({ setClicked }) {
  return (
    <div className="bg-stone-100 z-50 h-[25svh] top-0 mt-20 left-0 right-0 fixed py-2 text-center">
      <Links
        styles={"text-red-700 text-xl space-y-3 py-0"}
        setClicked={setClicked}
      />
    </div>
  );
}

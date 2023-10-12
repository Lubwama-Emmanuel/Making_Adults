import { Link } from "react-router-dom";

const scrollToTop = () => {
  console.log("called");
  window.scrollTo(0, 0);
};

export default function HeaderMitch() {
  return (
    <header className="m-auto z-50 py-5 px-2 sm:px-10 top-0 bg-white shadow-sm left-0 right-0 fixed flex justify-between items-center ">
      <Link onClick={scrollToTop} to="/">
        <div className="flex items-center">
          <img src="images/vector.svg" alt="logo" />
          <h3 className="text-2xl font-semibold text-red-700">Untangle</h3>
        </div>
      </Link>
      <Link onClick={scrollToTop} to={"/"}>
        <p className="text-red-700 text-xl">Back to home</p>
      </Link>
    </header>
  );
}

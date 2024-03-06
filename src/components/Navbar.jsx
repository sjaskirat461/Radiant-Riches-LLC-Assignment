import { CiSearch } from 'react-icons/ci';
const MENU_BUTTONS = ['Categories', 'Website Builders', "Today's Deals"];

export default function Navbar() {
  return (
    <navbar className="fixed top-0 left-0 right-0 w-[100vw] p-4 m-0 bg-[#212731] flex flex-row  flex-wrap text-lg justify-center items-center sm:gap-24 px-2 gap-6 z-40">
      <span className="bg-white flex flex-row justify-self-center items-center rounded-md p-1 gap-2">
        <button className="text-2xl">
          <CiSearch />
        </button>
        <input type="text" className=" flex-grow outline-none" />
      </span>
      <ul className="flex flex-row flex-wrap gap-6 text-[#D1D6DA] text-sm">
        {MENU_BUTTONS.map((menuButton, index) => (
          <li key={index} className="hover:text-white">
            <button>{menuButton}</button>
          </li>
        ))}
      </ul>
    </navbar>
  );
}

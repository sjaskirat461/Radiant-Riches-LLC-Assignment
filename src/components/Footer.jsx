import { CATEGORIES } from '../Data';
import { CONTACTS } from '../Data';

export default function Footer() {
  return (
    <footer className="flex flex-row flex-wrap justify-evenly px-54 pt-20 pb-36 bg-[#212731] gap-16">
      <div>
        <p className="text-white text-xl">CATEGORIES</p>
        <ul>
          {CATEGORIES.map((category) => (
            <li
              key={category}
              className="text-[#B6BDC4] text-l my-5 hover:text-white"
            >
              <button>{category}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-white text-xl">CONTACT</p>
        <ul>
          {CONTACTS.map((contact) => (
            <li
              key={contact}
              className="text-[#B6BDC4] text-l my-5 hover:text-white"
            >
              <button>{contact}</button>
            </li>
          ))}
        </ul>
      </div>
      <select className="text-xl text-[#D1D6DA] bg-[#212731] outline-none">
        <option value="option1" selected>
          United States
        </option>
        <option value="option2">Canada</option>
        <option value="option3">United Kingdom</option>
        <option value="option3">New Zealand</option>
        <option value="option3">Australia</option>
      </select>
    </footer>
  );
}

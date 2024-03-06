import { CiLight } from 'react-icons/ci';
import { GoInfo } from 'react-icons/go';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaGreaterThan } from 'react-icons/fa';
import { Rating } from '@mantine/core';
const OPTIONS = [
  'Tools',
  'AWS Builder',
  'Start Build',
  'Build Supplies',
  'Tooling',
  'Blue Hosting',
];

const NAVS = ['Home', 'Hosting for all', 'Hosting', 'Hosting6', 'Hosting5'];

export default function Header() {
  return (
    <div className="mt-36 md:mt-24 flex flex-col flex-wrap gap-6 justify-center items-start m-auto p-8 pt-0 lg:w-[70vw] md:w-[80vw] sm:w-[90vw]">
      <p className="lg:text-5xl md:text-4xl text-3xl font-normal text-[#2C384A]">
        Best Website Builders in the US
      </p>
      <div className="flex flex-row flex-wrap flex-stretch justify-start border-y-2 border-[#E1E4E6] py-3 text-l text-[#4B5665] gap-8 w-full">
        <span className="flex flex-row items-center gap-3">
          <IoIosCheckmarkCircleOutline className="text-xl" />
          <p>Last Updated &nbsp;&nbsp;-&nbsp;&nbsp; February 22, 2020</p>
        </span>
        <button className="flex flex-row items-center gap-3">
          <GoInfo className="text-xl" />
          <p>Advertising Disclosure</p>
        </button>
        <select className="flex flex-col gap-6 outline-none ml-auto bg-[#fbfcfd]">
          <option value="option1" selected>
            Top Relevant
          </option>
          <option value="option2">Latest</option>
          <option value="option3">Oldest</option>
        </select>
      </div>
      <div>
        <div>
          {OPTIONS.map((option, index) => (
            <button
              key={index}
              className="bg-[#FFFFFF] py-2 px-4 mx-2 text-[#4B5665] rounded-full"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="px-3 text-[#727D87] flex flex-row flex-wrap gap-4 items-center justify-center">
        {NAVS.map((navi, index) => (
          <button
            key={index}
            className="flex gap-3 items-center justify-center"
          >
            {navi}
            {index !== NAVS.length - 1 && <FaGreaterThan />}
          </button>
        ))}
      </div>
    </div>
  );
}

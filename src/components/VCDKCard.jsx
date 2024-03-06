import cardLogo from '../assets/cardLogo.png';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';
import { GoVerified } from 'react-icons/go';
import StarRating from './StarRating';

export default function VCDKCard(props) {
  const [showMore, setShowMore] = useState(false);
  function toggleShowContent() {
    setShowMore((prevstate) => !prevstate);
  }

  return (
    <div className=" px-8 bg-white text-[#4B5665] rounded-2xl relative">
      <span className="border-[#E1E4E6] border-2 bg-white text-xl rounded-full px-4 py-2 text-[#626E79] absolute -left-3 top-10">
        {props.index}
      </span>
      <div className="flex md:flex-row flex-col gap-20">
        <div className="flex flex-col gap-3 justify-center items-center ml-10">
          <img src={cardLogo} alt="cardLogo" className="w-40" />
          <p className="text-[#626E79]">{props.card.picLogo}</p>
        </div>
        <div className="flex flex-col flex-wrap gap-2 py-4">
          <p>
            <span className="font-bold">{props.card.heading} </span>
            {props.card.body}
          </p>
          <span className="p-1 text-l bg-[#F2F4F7] text-[#074786] w-fit rounded-md font-semibold">
            {props.card.discount} % off
          </span>
          <span className="text-[#2C384A] font-bold">Main Highlights</span>
          <ul className="rounded-2xl px-4 py-2 bg-[#FFF4ED] ml-8">
            {props.card.highlightList.map((item) => {
              return (
                <button className="flex flex-row gap-4 items-center my-1">
                  <span className="px-1 text-l text-[#1B88F4] rounded-sm bg-white">
                    {item[0]}
                  </span>
                  <p className="text-l text-[#4B5665]">{item[1]}</p>
                </button>
              );
            })}
          </ul>
          <div>
            <p className="text-[#2C384A]">Why we love it ?</p>
            <ul className="py-2 px-6">
              {props.card.loveItPoints.map((point) => (
                <li className="flex flex-row items-center gap-2 my-2">
                  <GoVerified className="text-[#1B88F4]" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
          {showMore && <p>{props.card.showMoreContent}</p>}
          <button
            onClick={toggleShowContent}
            className="mr-auto text-[#1B88F4] flex flex-row items-center"
          >
            {showMore ? 'Show Less' : 'Show More'}
            {showMore === false ? (
              <RiArrowDropDownLine className="text-2xl" />
            ) : (
              <RiArrowDropUpLine className="text-2xl" />
            )}
          </button>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div
            className="bg-[#F3F9FF] p-6 md:mb-auto mb-4 rounded-t-3xl md:rounded-t-none rounded-b-3xl flex flex-col items-center font-normal text-[#074786] gap-3"
            style={{ width: '70%' }}
          >
            <p className="text-4xl">{props.card.rating}</p>
            <StarRating rating={props.card.starRating} />
            <p className="text-l">{props.card.remark}</p>
          </div>
          <button
            className="text-white bg-[#1B88F4] px-20 py-4 mb-4 mt-auto rounded-xl"
            style={{ width: '100%' }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

import cardLogo from '../assets/cardLogo.png';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';
import { IoDiamondOutline } from 'react-icons/io5';
import { GrTrophy } from 'react-icons/gr';
import StarRating from './StarRating';

export default function VBuilderCard(props) {
  const [showMore, setShowMore] = useState(false);
  function toggleShowContent() {
    setShowMore((prevstate) => !prevstate);
  }

  return (
    <div className=" px-8 bg-white text-[#4B5665] rounded-2xl relative">
      {props.card.tagged && (
        <span className="bg-[#FF7724] px-3 py-2 -left-0 -top-4 text-l text-white rounded-e-xl absolute mr-auto flex flex-row items-center justify-around gap-3">
          {props.card.tagValue === 'Best Value' ? (
            <IoDiamondOutline />
          ) : (
            <GrTrophy />
          )}
          <p>{props.card.tagValue}</p>
        </span>
      )}
      <span className="border-[#E1E4E6] border-2 bg-white text-xl rounded-full px-4 py-2  text-[#626E79] absolute -left-3 top-10">
        {props.index}
      </span>
      <div className="flex md:flex-row flex-col gap-20 ">
        <div className="flex flex-col gap-3 justify-center items-center ml-10">
          <img src={cardLogo} alt="cardLogo" />
          <p className="text-[#626E79]">{props.card.picLogo}</p>
        </div>
        <div className="flex flex-col flex-wrap gap-2 py-4">
          <p>
            <span className="font-bold">{props.card.heading} - </span>
            {props.card.body}
          </p>
          <span className="text-[#2C384A] font-bold">Main Highlights</span>

          <p className="ml-4">{props.card.content}</p>
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

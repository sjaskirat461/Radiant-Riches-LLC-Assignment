import cardLogo from '../assets/cardLogo.png';

export default function HCard(props) {
  return (
    <div className="flex flex-col gap-2 bg-white  rounded-xl p-4">
      <img src={cardLogo} alt="card logo" className="w-36 m-10 mx-auto" />
      <div className="flex flex-row gap-2 ">
        <p className="text-[#074786] bg-[#F2F4F7] rounded-lg py-1 px-2 font-semibold">
          {props.card.discount} % off
        </p>
        <p className="text-[#074786] bg-[#F2F4F7] rounded-lg py-1 px-2 font-semibold">
          {props.card.time}
        </p>
      </div>
      <p className="mx-auto text-[#626E79] font-bold">{props.card.title}</p>
      <p className="text-[#626E79]">{props.card.text}</p>
      <div className="flex flex-row gap-2 items-baseline">
        <p className="text-[#5C6874] text-xl">${props.card.oldPrice}</p>
        <p className="text-[#9FA9B3] text-sm">${props.card.newPrice}</p>
        <p className="text-[#EF4C5D] text-sm">({props.card.discount} % off)</p>
      </div>
      <button className="rounded-xl w-full p-4 bg-[#1B88F4] text-white">
        View Deal
      </button>
    </div>
  );
}

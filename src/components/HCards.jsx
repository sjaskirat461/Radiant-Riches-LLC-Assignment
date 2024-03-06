import { H_CARDS } from '../Data';
import HCard from './HCard';

export default function HCards() {
  return (
    <div className="w-[70vw] mx-auto">
      <p className="md:text-3xl text-2xl text-[#2C384A] my-8">
        Related deals you might like for
      </p>
      <div className="flex flex-row flex-wrap gap-8">
        {H_CARDS.map((card) => (
          <HCard card={card} />
        ))}
      </div>
    </div>
  );
}

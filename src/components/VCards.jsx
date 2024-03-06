import VBuilderCard from './VBuilderCard';

import { BUILDER_CARDS, CDK_CARD } from '../Data';
import VCDKCard from './VCDKCard';

export default function VCards() {
  return (
    <div className="w-[70vw] flex flex-col flex-wrap items-center justify-center m-auto gap-8 mt-4">
      {BUILDER_CARDS.map((card, index) => (
        <VBuilderCard card={card} key={index} index={index + 1} />
      ))}
      {CDK_CARD.map((card, index) => (
        <VCDKCard card={card} key={index} index={BUILDER_CARDS.length + 1} />
      ))}
    </div>
  );
}

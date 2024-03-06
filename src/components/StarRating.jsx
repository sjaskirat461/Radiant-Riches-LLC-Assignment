import { FaStar } from 'react-icons/fa';

export default function StarRating({ rating }) {
  const maxRating = 5;
  const coloredStars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} className="star" color={'#ffc107'} />
  ));
  const blankStars = Array.from({ length: maxRating - rating }, (_, index) => (
    <FaStar key={index + rating} className="star" color={'#c4c8cf'} />
  ));

  return (
    <div className="flex flex-row flex-nowrap">
      {coloredStars}
      {blankStars}
    </div>
  );
}

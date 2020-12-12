import React, { useEffect, useCallback, useState } from "react";
import "./CC.css";

const cardItems = [
  {
    id: 1,
    title: "Join Us!",
    copy:
      "To add your store to Worth-It!"
  },
  {
    id: 2,
    title: "Quick Contact",
    copy: "9752763949"
  },
  {
    id: 3,
    title: "For personal feedback:",
    copy:
      "mail us at: worthwrhfy@gmail.com"
  },
  {
    id: 4,
    title: "Stay safe and healthy!",
    copy: "We take precautionary measures at each level of order processing.."
  }
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 7000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <div className="container">
      <ul className="card1-carousel">
        {cardItems.map((card1, index) => (
          <li
            key={card1.id}
            className={`card1 ${determineClasses(indexes, index)}`}
          >
            <h2>{card1.title}</h2>
            <p>{card1.copy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;

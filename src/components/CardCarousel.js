import React, { useRef, useEffect } from 'react';

const CardCarousel = ({ children }) => {
  const cardsContainerRef = useRef(null);
  const cardsControllerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cardsContainerElement = cardsContainerRef.current;
    const cardsControllerElement = cardsControllerRef.current;
    const cardElements = cardsRef.current;
    const cardWidthRef = useRef(null);
    const xScaleRef = useRef({});
    const centerIndexRef = useRef(Math.floor(cardElements.length / 2));

    const updateCardWidth = () => {
      cardWidthRef.current = cardElements[0].offsetWidth;
    };

    const build = () => {
      updateCardWidth();
      cardsContainerElement.style.height = `${cardElements[0].offsetHeight}px`;

      for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].setAttribute('data-x', i - centerIndexRef.current);
        cardElements[i].addEventListener('click', () => {
          const currentX = parseInt(cardElements[i].dataset.x);
          moveCards({ x: currentX });
        });
      }

      window.addEventListener('resize', updateCardWidth);
    };
    build();

    const moveCards = (data) => {
      let xDist;

      if (data !== null) {
        cardsContainerElement.classList.remove('smooth-return');
        xDist = data.x / 250;
      } else {
        cardsContainerElement.classList.add('smooth-return');
        xDist = 0;

        for (let x in xScaleRef.current) {
          updateCards(xScaleRef.current[x], {
            x: x,
            zIndex: Math.abs(Math.abs(x) - centerIndexRef.current),
          });
        }
      }

      for (let i = 0; i < cardElements.length; i++) {
        const x = checkOrdering(cardElements[i], parseInt(cardElements[i].dataset.x), xDist);
        const scale = calcScale(x + xDist);
        const leftPos = calcPos(x + xDist, scale);

        updateCards(cardElements[i], {
          scale: scale,
          leftPos: leftPos,
        });
      }
    };

    const checkOrdering = (card, x, xDist) => {
      const original = parseInt(card.dataset.x);
      const rounded = Math.round(xDist);
      let newX = x;

      if (x !== x + rounded) {
        if (x + rounded > original) {
          if (x + rounded > centerIndexRef.current) {
            newX = x + rounded - 1 - centerIndexRef.current - rounded + -centerIndexRef.current;
          }
        } else if (x + rounded < original) {
          if (x + rounded < -centerIndexRef.current) {
            newX = x + rounded + 1 + centerIndexRef.current - rounded + centerIndexRef.current;
          }
        }

        xScaleRef.current[newX + rounded] = card;
      }

      const temp = -Math.abs(newX + rounded);

      updateCards(card, { zIndex: temp });

      return newX;
    };

    const updateCards = (card, data) => {
      if (data.x || data.x === 0) {
        card.setAttribute('data-x', data.x);
      }

      if (data.scale || data.scale === 0) {
        card.style.transform = `scale(${data.scale})`;

        if (data.scale === 0) {
          card.style.opacity = data.scale;
        } else {
          card.style.opacity = 1;
        }
      }

      if (data.leftPos || data.leftPos === 0) {
        card.style.left = `${data.leftPos}px`;
      }

      if (data.zIndex || data.zIndex === 0) {
        card.style.zIndex = data.zIndex;
      }
    };

    const calcScale = (x) => {
      const scale = 1 - Math.pow(1 / 2, Math.abs(x));
      return Math.max(scale, 0);
    };

    const calcPos = (x, scale) => {
      const cardWidth = cardWidthRef.current;
      return (1 - scale) * (cardWidth / 2) + x * cardWidth;
    };

    const moveCardsOnClick = (e) => {
      const prevX = parseInt(cardsContainerElement.dataset.x);
      const newX = prevX + e.movementX / 3;

      cardsContainerElement.setAttribute('data-x', newX);
      moveCards({ x: newX });
    };

    cardsContainerElement.addEventListener('mousedown', () => {
      cardsContainerElement.addEventListener('mousemove', moveCardsOnClick);
    });

    cardsContainerElement.addEventListener('mouseup', () => {
      cardsContainerElement.removeEventListener('mousemove', moveCardsOnClick);
      const finalX = parseInt(cardsContainerElement.dataset.x);
      const remainder = finalX % 1;

      if (Math.abs(remainder) >= 0.5) {
        if (finalX >= 0) {
          cardsContainerElement.setAttribute('data-x', Math.ceil(finalX));
        } else {
          cardsContainerElement.setAttribute('data-x', Math.floor(finalX));
        }
      } else {
        cardsContainerElement.setAttribute('data-x', Math.round(finalX));
      }

      moveCards(null);
    });

    const DraggingEvent = function (element) {
      let distance;
      let startX;

      this.getDistance = (callback) => {
        element.addEventListener('mousedown', (e) => {
          startX = e.pageX;

          element.addEventListener('mouseup', () => {
            callback({ x: distance });
          });

          element.addEventListener('mousemove', (e) => {
            distance = e.pageX - startX;
          });
        });
      };
    };

    const clamp = (num, min, max) => {
      return Math.min(Math.max(num, min), max);
    };

    const checkFormula = (formula) => {
      if (formula >= 1) {
        return 1;
      } else if (formula < 0) {
        return 0;
      } else {
        return formula;
      }
    };

    // Initialize dragging event
    const dragEvent = new DraggingEvent(cardsControllerElement);
    dragEvent.getDistance(moveCards);

    // Clean up
    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  return (
    <div className="container_review body_review" ref={cardsContainerRef} id="cardContainer">
      <div className="card-carousel" ref={cardsControllerRef} id="cardsController">
        {children.map((child, index) => (
          <div className="card" key={index} ref={(element) => (cardsRef.current[index] = element)}>
            {child}
          </div>
        ))}
      </div>
      <a href="/" className="visuallyhidden card-controller">
        Carousel controller
      </a>
    </div>
  );
};

export default CardCarousel;

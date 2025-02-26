import { useState, useEffect, useRef, useMemo } from 'react'
import './App.css'

interface Card {
  id: number;
}

const cards = Array.from({ length: 100 }, (_, index) => ({ id: index }));
const cardGap = 20;

const Card = ({ number }: { number: number }) => {
  return (
    <div className='flex justify-center items-center w-full h-full bg-slate-700 rounded-lg shadow-md text-white text-2xl font-bold'>
      {number}
    </div>
  );
};

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [cardDimensions, setCardDimensions] = useState({ width: 200, height: 200 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setContainerSize({ width, height });
      const cardsPerRow = Math.max(1, Math.floor((width - cardGap) / (200 + cardGap)));
      const cardWidth = (width - (cardsPerRow + 1) * cardGap) / cardsPerRow;
      setCardDimensions({ width: cardWidth, height: cardWidth });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  const { rowHeight, totalHeight } = useMemo(() => ({
    rowHeight: cardDimensions.height + cardGap,
    totalHeight: Math.ceil(cards.length * (cardDimensions.height + cardGap))
  }), [cardDimensions.height]);

  const visibleCards = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight));
    const endIndex = Math.min(
      cards.length,
      Math.ceil((scrollTop + containerSize.height) / rowHeight)
    );
    return cards.slice(startIndex, endIndex);
  }, [scrollTop, containerSize.height, rowHeight]);

  return (
    <div ref={containerRef} className='h-screen overflow-y-auto' onScroll={handleScroll}  >
      <div style={{ height: totalHeight }} className='relative'>
        {visibleCards.map(card => (
          <div
            key={card.id}
            id={`dummy-card-${card.id}`}
            className='flex justify-center w-full absolute'
            style={{
              top: `${card.id * rowHeight}px`,
              height: `${cardDimensions.height}px`,
              padding: `0 ${cardGap / 2}px`,
            }}
          >
            <div style={{ width: `${cardDimensions.width}px`, height: '100%' }}>
              <Card number={card.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
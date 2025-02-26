import React, { useRef, useMemo } from 'react';
import useVirtualList from '../hooks/useVirtualList';
import useContainerDimensions from '../hooks/useContainerDimensions';
import { calculateCardDimensions } from '../utils/cardSizing';
import Card from './Card';

const CardsList = ({ cards = [] }) => {
  const containerRef = useRef(null);
  const { width, height } = useContainerDimensions(containerRef);
  
  // Calculate dynamic card dimensions and buffer size
  const { cardWidth, cardHeight, bufferSize } = useMemo(() => 
    calculateCardDimensions(width, height, 3), [width, height]);
  
  const { virtualItems, totalHeight } = useVirtualList({
    items: cards,
    itemHeight: cardHeight + 16, // Add margin
    containerHeight: height,
    bufferSize: bufferSize
  });
  
  return (
    <div 
      ref={containerRef} 
      style={{ 
        height: '100%', 
        overflow: 'auto',
        position: 'relative',
        width: '100%'
      }}
    >
      <div
        style={{
          height: `${totalHeight}px`,
          position: 'relative',
        }}
      >
        {virtualItems.map(virtualItem => (
# Cards List - Virtual Scrolling Demo

A React application demonstrating efficient virtual scrolling implementation with TypeScript and Tailwind CSS. This project showcases how to handle large lists of items with optimal performance by only rendering visible elements.

## Features

- Virtual scrolling implementation for efficient rendering of large lists
- Responsive card layout that adapts to screen size
- Dynamic calculation of visible items based on viewport
- Smooth scrolling experience with minimal memory footprint
- Built with React 19 and TypeScript
- Styled using Tailwind CSS

## Tech Stack

- React 19.0.0
- TypeScript 5.7.2
- Vite 6.2.0
- Tailwind CSS 4.0.9

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

The main application logic is in `src/App.tsx`, which implements:
- Virtual scrolling logic using React hooks
- Dynamic card sizing based on viewport
- Efficient rendering of visible cards
- Responsive layout handling

## Performance Considerations

The application implements virtual scrolling to handle large lists efficiently by:
- Only rendering cards that are visible in the viewport
- Calculating visible items based on scroll position
- Using React's useMemo for optimized calculations
- Implementing efficient scroll and resize event handlers

## License

This project is open source and available under the MIT license.

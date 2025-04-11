# InfoBox Component

A simple InfoBox component built with React and TypeScript.

## Features

- Displays title, text, and a link button
- Responsive design (mobile-friendly)
- Opens links in a new tab
- Button with hover effect

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository URL]
cd info-box
```

2. Install dependencies:
```bash
npm install
```

## Starting the Development Server

Run the following command to start the development server:
```bash
npm start
```

The development server will automatically open [http://localhost:3000](http://localhost:3000) in your browser.

## Component Usage Example

```tsx
import InfoBox from './components/InfoBox/InfoBox';

function App() {
  return (
    <InfoBox
      title="Sample Title"
      text="This is a sample text for demonstrating the InfoBox component."
      linkText="Learn More"
      linkUrl="https://example.com"
    />
  );
}

export default App;
```

## Building for Production

To create a production build, run:
```bash
npm run build
```

The built files will be generated in the `build` directory.

## License

MIT

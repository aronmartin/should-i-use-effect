# Should I Use Effect

A monorepo containing three React Vite applications and a shared UI library.

## Project Structure

```
should-i-use-effect/
├── apps/
│   ├── 01/         # First React Vite application
│   ├── 02/         # Second React Vite application
│   └── 03/         # Third React Vite application
└── packages/
    └── ui/         # Shared UI library
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

To run the applications:

```bash
npm run dev:01    # Run first application
npm run dev:02    # Run second application
npm run dev:03    # Run third application
```

### Building

To build all packages and applications:

```bash
npm run build
```

Or build individual packages:

```bash
npm run build:ui    # Build UI library
npm run build:01    # Build first application
npm run build:02    # Build second application
npm run build:03    # Build third application
```

## License

ISC 
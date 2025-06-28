# PoLLi AI - Screeps Bot Development Environment

A TypeScript-based development environment for Screeps bot development with automatic building, minification, and deployment.

## Features

- **TypeScript Support**: Full TypeScript development with Screeps type definitions
- **Single File Output**: Bundles and minifies all code into a single `main.js` file
- **Automatic Deployment**: One-command deployment to local Screeps server
- **Minification**: Production builds are minified for optimal performance

## Project Structure

```
├── src/
│   ├── main.ts           # Main bot code with loop function
│   ├── types.d.ts        # TypeScript type declarations
│   └── roles/
│       └── harvester.ts  # Harvester role implementation
│       └── newRole.ts    # More Roles
├── dist/
│   └── main.js           # Built and minified output
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── webpack.config.js     # Webpack bundling configuration
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

The main bot code is located in `src/main.ts`. This file exports a `loop` function that serves as the main entry point for your Screeps bot. Role-specific logic is organized in the `src/roles/` directory.

### Available Scripts

- **`npm run build`**: Build and minify the project into `dist/main.js`
- **`npm run dev`**: Build in development mode (unminified)
- **`npm run deploy`**: Build and deploy to local Screeps server
- 
### Deployment

The project is configured to deploy to:
```
C:\Users\datgu\AppData\Local\Screeps\scripts\127_0_0_1___21025\default\
```
This is a local Server Deployment. Change the path inside the package.json

To deploy your bot:
```bash
npm run deploy
```

This will:
1. Build the project in production mode
2. Minify the output
3. Copy `main.js` to the Screeps directory

### TypeScript Configuration

The project includes:
- Screeps type definitions (`@types/screeps`)
- Lodash type definitions (`@types/lodash`)
- Optimized TypeScript compiler settings for Screeps

### Build Configuration

Webpack is configured to:
- Bundle all TypeScript files into a single output
- Minify the code for production
- Target Node.js environment
- Preserve console.log statements for debugging
- Remove comments and optimize for size


### Bot Features

The included bot has basic functionality:
- **Memory Management**: Automatically cleans up memory of dead creeps
- **Harvester Creeps**: Spawns and manages harvester creeps
- **Energy Collection**: Harvesters collect energy from sources
- **Energy Distribution**: Harvesters transfer energy to spawns, extensions, and towers




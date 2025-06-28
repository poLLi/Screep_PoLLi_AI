const fs = require('fs');
const path = require('path');
const { ScreepsAPI } = require('screeps-api');

// Load environment variables from .env file if it exists
require('dotenv').config();

async function deploy() {
    try {
        // Read the built main.js file
        const codePath = path.join(__dirname, 'dist', 'main.js');
        if (!fs.existsSync(codePath)) {
            console.error('Error: Built code not found at dist/main.js. Run "npm run build" first.');
            process.exit(1);
        }

        const code = fs.readFileSync(codePath, 'utf8');

        // Get credentials from environment variables
        const email = process.env.SCREEPS_EMAIL;
        const password = process.env.SCREEPS_PASSWORD;
        const branch = process.env.SCREEPS_BRANCH || 'default';

        if (!email || !password || email === 'your-email@example.com' || password === 'your-password') {
            console.error('Error: Screeps credentials not found or using placeholder values.');
            console.error('Please provide your Screeps credentials using one of these methods:');
            console.error('');
            console.error('Method 1: Environment variables');
            console.error('  set SCREEPS_EMAIL=your-email@example.com');
            console.error('  set SCREEPS_PASSWORD=your-password');
            console.error('  set SCREEPS_BRANCH=default');
            console.error('  npm run deploy-official');
            console.error('');
            console.error('Method 2: .env file');
            console.error('  Copy .env.example to .env and fill in your credentials:');
            console.error('  copy .env.example .env');
            console.error('  # Edit .env with your actual credentials');
            console.error('  npm run deploy-official');
            console.error('');
            console.error('Note: Make sure to replace placeholder values with your actual Screeps account credentials.');
            process.exit(1);
        }

        console.log('Connecting to Screeps server...');

        // Initialize Screeps API
        const api = new ScreepsAPI();

        // Authenticate
        await api.auth(email, password);
        console.log('Authentication successful!');

        // Upload code
        console.log(`Deploying to branch: ${branch}`);
        const modules = {
            main: code
        };

        await api.code.set(branch, modules);
        console.log('Deployment successful!');
        console.log(`Code deployed to branch "${branch}" on the official Screeps server.`);

    } catch (error) {
        console.error('Deployment failed:', error.message);
        process.exit(1);
    }
}

// Run deployment
deploy();

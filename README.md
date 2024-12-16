# TOP-backend-2025

The backend for **TOP 2025 Orientation**. This backend handles:
- **Leaderboard Management:** Track and display sub-OG card progress.
- **Card Tracking:** Manage OG and sub-OG cards earned during the games.
- **Telegram Bot Integration:** Provides commands and features for Game Leaders to manage scores via telegram bot.
- **API Endpoints:** Allows frontend to fetch the data.

---

## Setup

### Prerequisites
- Node.js 
- npm

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/CCDS-TOP/TOP-backend-2025.git
   cd TOP-backend-2025
   ```

2. Install dependencies:
   ```
   npm install
   ```

<!-- 3. Set up the environment variables:
   Create a `.env` file in the project root and define your environment variables. Example:
   ```
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   TELEGRAM_BOT_TOKEN=<your-telegram-bot-token>
   ``` -->

---

## Running the Server

### Development Mode
```
npm run dev
```
- Runs the server using `nodemon` for live reloading.

### Production Mode
1. Build the project:
   ```
   npm run build
   ```
2. Start the server:
   ```
   npm start
   ```

---

## Project Structure
```
TOP-backend-2025
├── src
│   ├── index.ts        # Main entry point
│   ├── routes          # API route definitions
│   ├── controllers     # Controller logic for endpoints
│   ├── models          # Mongoose schemas/models
│   ├── bot             # Telegram bot setup and handlers
│   └── utils           # Utility functions
├── dist                # Compiled JavaScript files (after build)
├── .env                # Environment configuration file
├── package.json        # Dependencies and scripts
```


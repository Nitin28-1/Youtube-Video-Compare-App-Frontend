🎥 YouTube Video Compare App — Frontend

YouTube Video Compare App — Frontend is a React-based user interface that works with the backend of the YouTube Video Compare App. This frontend allows users to enter two YouTube video URLs/IDs and visually compare key statistics like views, likes, duration, and other metrics.

🚀 Features

✔️ Responsive UI built with React
✔️ Fetches and displays comparison results from the backend
✔️ Video previews using embedded YouTube players
✔️ Clean comparison layout for multiple video metrics
✔️ Easy inputs and error handling for invalid URLs

(Update this list with features you’ve implemented — e.g., React Router pages, UI library used, animations, dark mode, etc.)

🧰 Tech Stack
Layer	Technology
UI library	React
Styling	CSS / Tailwind / Bootstrap (update if you’re using any)
API	Fetch / Axios
Routing	React Router
Video embeds	YouTube iframe API / react-youtube component

(This follows typical React project stack patterns — update based on your actual code.)

📁 Project Structure
Youtube-Video-Compare-App-Frontend/
├─ Frontend/                # Main frontend source
│  ├─ public/               # Static assets
│  ├─ src/
│  │  ├─ components/        # Reusable UI components
│  │  ├─ pages/             # App pages (e.g., Home, Compare)
│  │  ├─ services/          # API calls & helpers
│  │  ├─ App.js             # Main application
│  │  └─ index.js           # Entry point
├─ .gitignore
├─ package.json
└─ README.md

🛠️ Setup & Installation
1. Clone the Repository
git clone https://github.com/Nitin28-1/Youtube-Video-Compare-App-Frontend.git
cd Youtube-Video-Compare-App-Frontend/Frontend

2. Install Dependencies
npm install

3. Create Environment Variables

If your frontend needs any environment variables (e.g., backend API URL), create a .env file in the Frontend/ folder:

REACT_APP_BACKEND_URL=http://localhost:5000


(Replace value with your backend URL.)

4. Start the Development Server
npm start


After this, open your browser to:

http://localhost:3000


to see your app in action.

📡 How It Works

The frontend interacts with your backend endpoints to fetch data for two videos and display a comparison. For example:

Action	API Called
Compare two videos	GET /compare?video1={id}&video2={id}
Fetch details of a video	GET /video/:id

Make sure your backend server is running when using the frontend.

Note: React apps typically use fetch or axios to call backend APIs and update UI state accordingly.

📦 Deployment

You can deploy this app on popular hosting services like:

🔹 Netlify
🔹 Vercel
🔹 GitHub Pages (as static site)

Build for production:

npm run build


and then follow your chosen host’s instructions to deploy the build/ folder.

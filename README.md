WeatherPro Dashboard

A high-performance, responsive meteorological dashboard featuring a premium dark glassmorphism UI. Get real-time weather updates and 5-day forecasts for any city in the world, built with modern web technologies.


Features

Premium UI/UX: Custom agency-grade dark theme with frosted glass components, mesh gradient backgrounds, and fluid Framer Motion animations.

Real-time Data: Accurate telemetry updated instantly via the OpenWeatherMap API.
5-Day Forecast: Detailed upcoming weather outlook.
Geolocation Support: Instantly fetch weather data for your current coordinates.
Favorites System: Pin and save your go-to locations for quick access.
Lightning-fast Performance: Optimized engine utilizing React and Vite.



Quick Start

1. Clone the repository
git clone https://github.com/PrabashVijayanga/weather-dashboard.git
cd weather-dashboard


2. Install dependencies
npm install


3. Set up environment variables
# Copy the example env file
cp .env.example .env

Edit .env and add your OpenWeatherMap API key. You can get your free API key from OpenWeatherMap.

4. Start development server
npm run dev


Security Note
Never commit your .env file to Git!
Your API key is sensitive information. The .env file is already included in .gitignore to prevent accidental commits.

Deployment

When deploying to platforms like Vercel, Netlify, or GitHub Pages, make sure to add your environment variables in the platform's settings:

GitHub Pages: Use GitHub Secrets for Actions (Required for npm run deploy).
Vercel/Netlify: Add VITE_WEATHER_API_KEY in the Environment Variables section.


Built With

React 18
Vite
Tailwind CSS (Custom Glassmorphism UI)
Framer Motion (Fluid Animations)
React Router
Axios
Lucide React Icons


Author

Prabash Vijayanga
GitHub: @PrabashVijayanga

License
MIT License - feel free to use this project for learning and personal use!
If you found this helpful, please star the repository!
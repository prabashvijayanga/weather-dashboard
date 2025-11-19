Weather Dashboard

A modern, responsive weather dashboard built with React, Vite, Tailwind CSS, and Chakra UI.

Quick Start

1. Clone the repository
```bash
git clone https://github.com/PrabashVijayanga/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your OpenWeatherMap API key
```

Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)



4. Start development server
```bash
npm run dev
```



Security Note

Never commit your `.env` file to Git!

Your API key is sensitive information. The `.env` file is already included in `.gitignore` to prevent accidental commits.


Deployment

When deploying to platforms like Vercel, Netlify, or GitHub Pages, make sure to add your environment variables in the platform's settings:

- **Vercel/Netlify**: Add `VITE_WEATHER_API_KEY` in Environment Variables section
- **GitHub Pages**: Use GitHub Secrets for Actions



Features

- Real-time weather data for any city
- 5-day weather forecast
- Geolocation support
- Save favorite cities
- Beautiful, responsive UI
- Lightning-fast performance



Built With

- React 18.3
- Vite 7.2
- Tailwind CSS 3.4
- Chakra UI 2.10
- Framer Motion 10.18
- React Router 7.1
- Axios
- Lucide React Icons

Author

Prabash Vijayanga
- GitHub: [@PrabashVijayanga](https://github.com/PrabashVijayanga)


License

MIT License - feel free to use this project for learning and personal use!

---

If you found this helpful, please star the repository!
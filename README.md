# Pulley Countdown

A simple React web app that displays a countdown timer to May 29th, 12PM Pacific Time (America/Los_Angeles).

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## Build for Production

```bash
npm run build
```

## Docker Usage

To build and run the app with Docker:

```bash
docker build -t pulley-countdown .
docker run -p 8080:80 pulley-countdown
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser. 
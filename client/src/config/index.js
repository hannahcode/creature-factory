// TODO update the urls to match your deployed heroku app and local development port

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://https://stormy-ocean-90176.herokuapp.com/"
    : "http://localhost:8081/creatures";

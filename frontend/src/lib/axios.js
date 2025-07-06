import axios from "axios";

const api = axios.create( {
    baseURL: window.location.hostname === "localhost"      // we are checking that we are locally  
    ? "http://localhost:5001/api"
    : "https://leafpad.onrender.com/api"
});

export default api;


// window.location.hostname => This is JavaScript running in the browser. It gives you the domain name in the address bar.

// When you run locally:   =>   window.location.hostname = localhost

// When you deploy to Vercel:   =>  window.location.hostname = your-vercel-domain.com



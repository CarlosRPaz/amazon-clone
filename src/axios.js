import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-4e2fc.cloudfunctions.net/api'
    // 'http://127.0.0.1:5001/challenge-4e2fc/us-central1/api' // THE API (cloud function) URL
});

export default instance;
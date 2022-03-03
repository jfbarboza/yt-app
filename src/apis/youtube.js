import axios from "axios";

const KEY = 'AIzaSyDgRg0PDlAIsX6Ctvhvgq70NRoaXZ6Uq9I';
const URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL: URL,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});


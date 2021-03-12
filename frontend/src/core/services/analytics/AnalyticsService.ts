import axios from 'axios';

const _GET_URL  = "https://api.countapi.xyz/get/buzzword-io-prod/generations";
const _POST_URL = "https://api.countapi.xyz/hit/buzzword-io-prod/generations"

const _postClickCount = () => axios.get(_POST_URL);
const _getClickCount = () => axios.get(_GET_URL);

export const AnalyticsService = {
    PostClickCount : _postClickCount,
    GetClickCount : _getClickCount
}
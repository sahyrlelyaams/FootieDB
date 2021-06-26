const axios = require('axios'), dotenv = require('dotenv');

dotenv.config();

axios.interceptors.request.use(req => {
    req.headers['X-Auth-Token'] = process.env.API_KEY;
    return req;
}, err => {
    console.log(err);
    return Promise.reject(err);
});

module.exports = {
    getMatchesByLeagueAndYear: async function(lge, year){
        try{
            const matchData = await axios.get(`https://api.football-data.org/v2/competitions/${lge}/matches?season=${year}`);
            return matchData.data.matches;
        }catch(err){
            console.log(err);
        }
    }
}
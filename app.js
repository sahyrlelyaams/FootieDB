const express = require('express'), app = express(), footie = require('./footie-api');
const port = 4400;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const matches = await footie.getMatchesByLeagueAndYear('BL1', '2019');
    console.log(matches);
    return res.send(matches.map(element => Object({
        homeTeam: element.homeTeam.name,
        awayTeam: element.awayTeam.name
    })));
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
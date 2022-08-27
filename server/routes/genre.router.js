const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `
                SELECT "genres".name, "movies".title, "movies".description, "movies".poster FROM "genres"
                JOIN "movies_genres"
                ON "genres".id = "movies_genres".genre_id
                JOIN "movies"
                ON "movies".id = "movies_genres".movie_id
                WHERE "movies".title = 'Avatar';
                `;
  pool.query(query)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;
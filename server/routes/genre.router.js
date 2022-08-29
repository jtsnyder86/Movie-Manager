const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `
                SELECT "genres".name FROM "genres"
                `;
  pool.query(query)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: GET genres names', err);
      res.sendStatus(500)
    })

});



//gets the genres for specific movie
router.get('/:id', (req, res) => {
  const query = `
                SELECT "genres".name FROM "genres"
                JOIN "movies_genres"
                ON "genres".id = "movies_genres".genre_id
                JOIN "movies"
                ON "movies".id = "movies_genres".movie_id
                WHERE "movies".id = $1;
                `;

  const queryValue = [req.params.id]
  pool.query(query, queryValue)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get movie genres', err);
      res.sendStatus(500)
    })

});

module.exports = router;
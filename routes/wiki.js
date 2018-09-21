const app = require('express');
const router = app.Router();


router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.post('/', (req, res, next) => {
  res.send('got to Post /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send('got to GEt /wiki/add')
});

module.exports = router;
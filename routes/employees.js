const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
  
});

router.get('/:id', (res, req) => {
  res.send('getting employees...')
});

router.get('firstname/:first_name', (res, req) => {
  res.send('getting employees...')
});

module.exports = router;
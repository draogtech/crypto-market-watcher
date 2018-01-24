import express from 'express';

const router = express.Router();

/* GET index page. */
//router.get('/', (req, res) => {
//  res.render('pages/index', {
//    title: 'crypto market watcher'
//  });
//});

/* GET Register page. */
router.get('/', (req, res) => {
   res.render('pages/register', {
      title: 'Crypto-Register'
   });
});

/* GET login page. */
router.get('/login', (req, res) => {
   res.render('pages/login', {
      title: 'Crypto-Login'
   });

});

/* GET admin page. */
router.get('/admin', (req, res) => {
   res.render('pages/admin', {
      title: 'Crypto-Admin'
   });
});

export default router;

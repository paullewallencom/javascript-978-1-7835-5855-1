var router = express.Router();

router.get('/', stormpath.loginRequired, function(request, response) {
  response.render('index.ejs');
});

router.post('/', stormpath.loginRequired, function(request, response) {
  response.render('index.ejs');
});

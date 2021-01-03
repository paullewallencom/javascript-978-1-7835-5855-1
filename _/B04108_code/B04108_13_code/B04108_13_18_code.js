router.post('/restore', json_parser, function(request, response, next) {
  var result = restore(request.user.href, request.body.identifier);
  response.type('application/json');
  response.send(result);
});

router.post('/save', function(request, response, next) {
  console.log('router.post /save');
  var success_or_failure = save_identifier(request.user.href,
  request.query.identifier,
    request.query.data);
  response.type('application/json');
  response.send(String(success_or_failure));
});

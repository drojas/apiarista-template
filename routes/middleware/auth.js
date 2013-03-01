module.exports = function(resource) {

  return function auth(req, res, res) {

    var query = req.query[resource + '_secret'],
        secret = req[resource].secret;

    if ( secret === query ) {

      next();

    } else {

      res.send(401, 'Unauthorized');
    }
  };
};
module.exports = function(req, res, next) {
  
  req.$resource = req.body;

  req.$resource.save(function(err, $resource) {
    
    if (err) {
    
      return next(err);
    
    } else {
    
      next();
    }
  });
};
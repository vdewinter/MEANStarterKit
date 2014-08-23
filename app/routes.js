module.exports = function(app) {
    // server routes
        // handle api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in DB
            Nerd.find(function(err, nerds) {
                if (err) {
                    res.send(err);
                }
                res.json(nerds); // return all nerds in json format
            });
        });

        // route for creating (app.post)

        // route for deleting (app.delete)

        // frontend routes
            // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load index.html as catch-all route
        });
};
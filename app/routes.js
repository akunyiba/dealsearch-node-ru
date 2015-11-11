var Ad = require('./models/ad');
var Category = require('./models/category');
var City = require('./models/city');

module.exports = function(app) {
    // get categories
    app.get('/api/categories', function(req, res) {
        Category.find(function(err, categories) {
            if (err){
                res.send(err);
            }
            else {
                res.json(categories);
            }
        });
    });

    // get cities
    app.get('/api/cities', function(req, res) {
        City.find(function(err, cities) {
            if (err){
                res.send(err);
            }
            else {
                res.json(cities);
            }
        });
    });

    // get all ads
    app.get('/api/ads', function(req, res) {
        Ad.find(function(err, ads) {
            if (err){
                res.send(err);
            }
            else {
                res.json(ads);
            }
        });
    });

    // get specific ad
    app.get('/api/ads/:id', function (req, res) {
        Ad.findById(req.params.id, function(err, ad){
            if(err){
                res.send(err);
            }
            else {
                res.json(ad);
            }
        });
    });

    // post (create new ad)
    app.post('/api/ads', function(req, res) {
        Ad.create({
            type : req.body.type,
            name : req.body.name,
            email : req.body.email,
            allow_mails : req.body.allow_mails,
            contact_number : req.body.contact_number,
            category : req.body.category,
            city : req.body.city,
            title : req.body.title,
            description : req.body.description,
            price : req.body.price
        }, function(err, ad) {
            if (err){
                res.send(err);
            }
            else {
                Ad.find(function(err, ads) {
                    if (err){
                        res.send(err);
                    }
                    else {
                        res.json(ads);
                    }
                });
            }
        });
    });

    // put (update an ad)
    app.put('/api/ads/:id', function(req, res, next) {
        Ad.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err){
                return next(err);
            }
            else {
                res.json(post);
            }
        });
    });

    // delete an ad
    app.delete('/api/ads/:id', function(req, res) {
        Ad.remove({
            _id : req.params.id
        }, function(err, ad) {
            if (err){
                res.send(err);
            }
            else {
                Ad.find(function(err, ads) {
                    if (err){
                        res.send(err);
                    }
                    res.json(ads);
                });
            }
        });
    });

    // application
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
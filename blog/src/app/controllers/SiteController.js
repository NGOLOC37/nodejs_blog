class SiteController {

    // [GET] /news
    index(req, res){
        res.render('home');
    }

    //[GET] /news/:slug
    search(req, res){
        res.send('SEARCH')
    }
}

module.exports = new SiteController;
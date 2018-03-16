var User = require('./models/user');
module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index.ejs');
	});

// > int routes

	// app.get('/entry', function(req, res){
		// res.render('entry.ejs');
	// });

///////////////////////////

	// router.get('/entry2', function(req, res) {
	//   employee.list(req, res);
	// });


// < int routes



	app.get('/login', function(req, res){
		res.render('auth_login.ejs', { message: req.flash('loginMessage') });
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));


	// my routes in


	app.get('/home', isLoggedIn, function(req, res){
		res.render('home.ejs', { user: req.user });
	});
//
	app.get('/project', isLoggedIn, function(req, res){
		res.render('project.ejs', { user: req.user });
	});

	app.get('/feed', isLoggedIn, function(req, res){
		res.render('templete.ideadisplay.ejs', { user: req.user });
	});

//



// internal routes in
    
	app.get('/landing', isLoggedIn, function(req, res){
		res.render('internal_demo/landing.ejs', { user: req.user });
	});
	app.get('/dictionary', isLoggedIn, function(req, res){
		res.render('internal_demo/dictionary.ejs', { user: req.user });
	});
	app.get('/library', isLoggedIn, function(req, res){
		res.render('internal_demo/library.ejs', { user: req.user });
	});
	app.get('/collaborate', isLoggedIn, function(req, res){
		res.render('internal_demo/collaborate.ejs', { user: req.user });
	});
	app.get('/ask', isLoggedIn, function(req, res){
		res.render('internal_demo/ask.ejs', { user: req.user });
	});
	app.get('/earn', isLoggedIn, function(req, res){
		res.render('internal_demo/earn.ejs', { user: req.user });
	});
	app.get('/out_source', isLoggedIn, function(req, res){
		res.render('internal_demo/out_source.ejs', { user: req.user });
	});
	app.get('/analyze', isLoggedIn, function(req, res){
		res.render('internal_demo/analyze.ejs', { user: req.user });
	});
	app.get('/language_engine', isLoggedIn, function(req, res){
		res.render('internal_demo/language_engine.ejs', { user: req.user });
	});
	app.get('/pages', isLoggedIn, function(req, res){
		res.render('internal_demo/pages.ejs', { user: req.user });
	});
	app.get('/contribute', isLoggedIn, function(req, res){
		res.render('internal_demo/contribute.ejs', { user: req.user });
	});


// internal routes out



	// my routes out

	app.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	app.get('/profile', isLoggedIn, function(req, res){
		res.render('home.ejs', { user: req.user });
	});
		app.get('/status', isLoggedIn, function(req, res){
		res.render('profile.ejs', { user: req.user });
	});

	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

	app.get('/auth/facebook/callback',
	  passport.authenticate('facebook', { successRedirect: '/profile',
	                                      failureRedirect: '/' }));

	app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

	app.get('/auth/google/callback',
	  passport.authenticate('google', { successRedirect: '/profile',
	                                      failureRedirect: '/' }));


	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}

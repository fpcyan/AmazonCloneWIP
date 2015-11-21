(function () {


  $(document).ready(function () {
    
    var Router, Route, IndexRoute, home, routes;
    Router = ReactRouter.Router;
    Route = ReactRouter.Route;
    IndexRoute = ReactRouter.IndexRoute;


    routes = (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );



    home = document.getElementById('content');
    React.render(routes, home);
  });

})();

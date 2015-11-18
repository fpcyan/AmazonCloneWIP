$(function () {
    var Router, Route, IndexRoute, home, routes;
    Router = ReactRouter.Router;
    Route = ReactRouter.Route;
    IndexRoute = ReactRouter.IndexRoute;
    home = document.getElementById('content');


    routes = (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
            <
        </Route>
      </Router>
    );



    React.render(routes, home);

});

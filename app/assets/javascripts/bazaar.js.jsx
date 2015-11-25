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
          <Route path="signin" component={SessionForm} />
          <Route path="signup" component={UserForm} />
          <Route path="cart" component={CartIndex} />
          <Route path="products/:productId" component={ShowProduct} />
        </Route>
      </Router>
    );



    home = document.getElementById('content');
    React.render(routes, home);
  });

})();

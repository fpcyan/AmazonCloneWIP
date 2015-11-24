var App = React.createClass({

  render: function () {

    return (
      <main>
        <NavBar />
        <ShoppingCart />
        { this.props.children }
      </main>
    );
  }
});

var App = React.createClass({

  render: function () {

    return (
      <main>
        <NavBar />
        { this.props.children }
      </main>
    );
  }
});

var App = React.createClass({

  render: function () {
    debugger;
    return (
      <main>
        <NavBar />
        { this.props.children }
      </main>
    );
  }
});

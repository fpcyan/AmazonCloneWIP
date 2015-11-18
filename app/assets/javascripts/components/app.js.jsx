var App = React.createClass({

  render: function () {

    return (
      <main>
        <header>Internet Bazaar</header>
        { this.props.children }
      </main>
    );
  }
});

var NavModal = React.createClass({

  getInitialState: function () {
    return ({ hover: false });
  },

  handleDropdown: function (e) {
    console.log("HOVerING");
  },

  render: function () {
    var klass = this.props.klass;
    var dropBox = null;
    var holdThis = (
      <ul className="nav-drop-box">

      </ul>
    );
    return (
      <div onMouseEnter={this.handleDropdown}>
        
        { dropBox }
      </div>
    );

  }

});

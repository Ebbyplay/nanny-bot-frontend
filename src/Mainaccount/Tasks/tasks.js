import React from "react";
import NewTask from "./components/newtask";

class MainTasks extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showNew: false,
      showEdit: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  showComponent = name => {
    switch (name) {
      case "showNew":
        this.setState({ showNew: true });
        break;
      case "showEdit":
        this.setState({ showEdit: true });
        break;
      default:
        return false;
    }
  };

  hideComponent = name => {
    switch (name) {
      case "showNew":
        this.setState({ showNew: false });
        break;
      case "showEdit":
        this.setState({ showEdit: false });
        break;
      default:
        return false;
    }
  };

  render() {

    const showNew = this.state.showNew;

    return (
      <div>
        <div>
          {!showNew && <button onClick={() => this.showComponent("showNew")}>Neu</button>}
        </div>
        {showNew && <NewTask hideOnClick={this.hideComponent} />}
      </div>
    );
  }
}

export default MainTasks;

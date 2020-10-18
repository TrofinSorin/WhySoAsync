import React from "react";

class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      details: "",
      pet: "dog",
    };
  }

  usernameChangeHandler = (event) => {
    console.log("username event.target.value:", event.target.value);
    this.setState({ username: event.target.value });
  };

  detailsChangeHandler = (event) => {
    console.log("textarea event.target.value:", event.target.value);
    this.setState({ details: event.target.value });
  };

  petChangeHandler = (event) => {
    console.log("textarea event.target.value:", event.target.value);
    this.setState({ pet: event.target.value });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();

    const payload = {
      username: this.state.username,
      details: this.state.details,
      pet: this.state.pet,
    };
    console.log("payload", payload);
  };

  render() {
    const { username, details, pet } = this.state;

    return (
      <div className="ControlledComponentWrapper">
        <div className="form-element">
          <label>Username</label>
          <input
            value={username}
            type="text"
            onChange={this.usernameChangeHandler}
          />
        </div>

        <div className="form-element">
          <label>Details</label>
          <textarea value={details} onChange={this.detailsChangeHandler} />
        </div>

        <div className="form-element">
          <label>Pet</label>
          <select value={pet} onChange={this.petChangeHandler}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="turtle">Turtle</option>
          </select>
        </div>

        <button onClick={this.formSubmitHandler} type="button">
          Submit
        </button>
      </div>
    );
  }
}

export default ControlledComponent;

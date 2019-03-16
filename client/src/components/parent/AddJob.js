import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { addJob } from "../../actions/parentActions";

class AddJob extends Component {
  // constructor to set the state
  constructor() {
    super();
    this.state = {
      jobName: "",
      points: 0,
      description: "",
      errors: {}
    };

    // bind the functions before using them
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit function
  onSubmit(e) {
    e.preventDefault();
    const newJob = {
      jobName: this.state.jobName,
      points: this.state.points,
      description: this.state.description
    };

    this.props.addJob(newJob, this.props.history);
  }

  // onChange function
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const errors = this.state.errors;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Job</h1>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.jobName
                    })}
                    placeholder="Job Name"
                    name="jobName"
                    value={this.state.jobName}
                    onChange={this.onChange}
                  />
                  {errors.jobName && (
                    <div className="invalid-feedback">{errors.jobName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.points
                    })}
                    placeholder="Points this job is worth"
                    name="points"
                    value={this.state.points}
                    onChange={this.onChange}
                  />
                  {errors.points && (
                    <div className="invalid-feedback">{errors.points}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Description of Job"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddJob.propTypes = {
  addJob: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addJob }
)(AddJob);

import React, { Component } from "react";

class ChildHome extends Component {
  render() {
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Child Home Page</h1>
              <p className="lead text-center">
                Keep track of your weekly jobs and your progress towards earning
                rewards
              </p>

              <div className="card card-body bg-light mb-3">
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
                    <h3>Weekly Schedule</h3>
                    <p>See your jobs broken down by each day of the week.</p>
                    <a href="profile.html" className="btn btn-info">
                      View Schedule
                    </a>
                  </div>
                  <div className="col-md-4 d-none d-lg-block">
                    <h4>Week of ____</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Monday
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Tuesday
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Wednesday
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Thursday
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Friday
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card card-body bg-light mb-3">
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeA860JaB9fF52Q1f2QbvAWjHOuSlAvs1x1ajJfGIDHEoSOO-"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
                    <h3>Completion Requests</h3>
                    <p>
                      See the status of completion requests that you've
                      submitted.
                    </p>
                    <a href="profile.html" className="btn btn-info">
                      View Completions Requests
                    </a>
                  </div>
                  <div className="col-md-4 d-none d-lg-block">
                    <h4>Completion Requests</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Submission 1 Status: Pending
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Submission 2 Status: Approved
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Submission 3 Status: Rejected
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Submission 4 Status: Pending
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Submission 5 Status Accepted
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card card-body bg-light mb-3">
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      src="https://cdn3.iconfinder.com/data/icons/vote-and-rewards/48/12-512.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
                    <h3>Rewards Catalog</h3>
                    <p>View the rewards you can earn and your progress.</p>
                    <a href="profile.html" className="btn btn-info">
                      View Catalog
                    </a>
                  </div>
                  <div className="col-md-4 d-none d-lg-block">
                    <h4>Earned Rewards</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Reward 1
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Reward 2
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Reward 3
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Reward 4
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChildHome;

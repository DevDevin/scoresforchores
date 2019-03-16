import React, { Component } from "react";
import { Link } from "react-router-dom";

class ParentHome extends Component {
  render() {
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Parent Home Page</h1>
              <p className="lead text-center">
                Manage your childrens jobs and rewards
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
                    <h3>Childrens Weekly Schedules</h3>
                    <p>
                      Keep track of each of your childrens weekly schedules.
                    </p>
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
                      Manage the completion requests that you're children have
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
                        Child 1
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 2
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 3
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 4
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 5
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
                      src="https://icons-for-free.com/free-icons/png/512/1891020.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
                    <h3>Communication Manager</h3>
                    <p>Send and view messages.</p>
                    <a href="profile.html" className="btn btn-info">
                      Go to Communication Manager
                    </a>
                  </div>
                  <div className="col-md-4 d-none d-lg-block">
                    <h4>Messages</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 1
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 2
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 3
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 4
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 5
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
                      src="https://cdn2.iconfinder.com/data/icons/employment-business/256/Employment_News-512.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
                    <h3>Jobs Manager</h3>
                    <p>Edit, Add, or Delete Jobs in your system.</p>
                    <Link className="btn btn-info" to="/jobs">
                      Go to Jobs Manager
                    </Link>
                  </div>

                  <div className="col-md-4 d-none d-lg-block">
                    <h4>Jobs Manager</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link to="/add-job">Add Job</Link>
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 2
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 3
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 4
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 5
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
                    <h3>Rewards Manager</h3>
                    <p>Edit, Add, or Delete Rewards in your system.</p>
                    <Link className="btn btn-info" to="/rewards">
                      Go to Rewards Manager
                    </Link>
                  </div>

                  <div className="col-md-4 d-none d-lg-block">
                    <h4>Messages</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link to="/add-reward">Add Reward</Link>
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 2
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 3
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 4
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        Child 5
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

export default ParentHome;

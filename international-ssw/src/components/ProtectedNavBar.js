import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdArrowDropDown, MdPerson } from 'react-icons/md'
import { fetchUser } from '../store/actions';
import { connect } from 'react-redux';

class ProtectedNavBar extends React.Component {

  componentDidMount(){
    this.props.fetchUser();
    console.log("wegotaUser", this.props);
    console.log("username", this.props.userfirstname)
}

render ()
  {return (
    <header className='top-header protected-nav'>
      <div className="container header-nav protected-nav">
        <div className="logo">
          <Link to="/protected">
            <img className="logo-img" src="../../../assets/logo.png" alt="Educell Logo"/>
          </Link>
        </div>

        <nav>
          <ul className='main-menu'>
            <li>
              <Link to="/protected">
                <MdHome className="home-icon"/>
              </Link>
            </li>
            <li className="user">
              <a href="" className="trigger">
                <span><MdPerson /></span>
                <span className="caret">
                  <MdArrowDropDown />
                </span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <Link to="/logout">Log Out</Link>
                </li>
              </ul>
              <Link to="/signup">
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )}
}
const mapStateToProps = state =>   ({
  data: state.roleReducer.data,
  fetchingData: state.roleReducer.fetching,
  error: state.roleReducer.error
 })
export default connect(mapStateToProps, {fetchUser}) (ProtectedNavBar)

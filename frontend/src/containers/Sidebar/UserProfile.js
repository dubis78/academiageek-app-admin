import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Avatar, Popover} from "antd";
import {userSignOut} from "appRedux/actions/Auth";
import IntlMessages from "../../util/IntlMessages";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [visiblePopover, setvisiblePopover] = useState(false);
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li><Link to="/social-apps/profile" onClickCapture = {() => setvisiblePopover(false)}><IntlMessages id="appModule.myAccount"/></Link></li>
      <li onClick={() => dispatch(userSignOut())}><IntlMessages id="appModule.logout"/></li>
    </ul>
  );

  return (

    <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
      <Popover visible={visiblePopover} onVisibleChange={() => setvisiblePopover(!visiblePopover)} onClick={() => setvisiblePopover(!visiblePopover)} placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src={"https://via.placeholder.com/150"}
                className="gx-size-40 gx-pointer gx-mr-3" alt=""/>
        <span className="gx-avatar-name">Edgar Alirio Rodriguez<i
          className="icon icon-chevron-down gx-fs-xxs gx-ml-2"/></span>
      </Popover>
    </div>

  )
};

export default UserProfile;

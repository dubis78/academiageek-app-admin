import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import {useSelector} from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = ({sidebarCollapsed, setSidebarCollapsed}) => {

  let {navStyle, themeType} = useSelector(({settings}) => settings);
  let {pathname} = useSelector(({common}) => common);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed}/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <MenuItemGroup key="/admin/main" className="gx-menu-group" title={<IntlMessages id="sidebar.topics"/>}>
              <SubMenu key="/admin/main/courses" popupClassName={getNavStyleSubMenuClass(navStyle)}
                title={<span><Link to="/main/widgets"><i className="icon icon-apps"/>
                <IntlMessages id="sidebar.topics.courses"/></Link></span>}>
                <Menu.Item key="table">
                  <Link to="/components/table/basic">
                    <i className="icon icon-listing-dbrd"/>
                    <span><IntlMessages id="sidebar.topics.courses.cohorts"/></span>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="/admin/members" popupClassName={getNavStyleSubMenuClass(navStyle)}
                title={<span><Link to="/admin/members"><i className="icon icon-user"/>
                <IntlMessages id="sidebar.topics.members"/></Link></span>}>
                <Menu.Item key="/admin/members/prospects">
                  <Link to="/admin/members/prospects">
                    <i className="icon icon-files"/>
                    <span><IntlMessages id="sidebar.topics.members.prospects"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/admin/members/students">
                  <Link to="/components/dataEntry/checkbox">
                    <i className="icon icon-files"/>
                    <span><IntlMessages id="sidebar.topics.members.students"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/admin/members/graduates">
                  <Link to="/components/dataEntry/checkbox">
                    <i className="icon icon-files"/>
                    <span><IntlMessages id="sidebar.topics.members.graduates"/></span>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="tests" popupClassName={getNavStyleSubMenuClass(navStyle)}
                title={<span><Link to="/main/widgets"><i className="icon icon-editor"/>
                <IntlMessages id="sidebar.topics.tests"/></Link></span>}>
                <Menu.Item key="components/dataEntry/checkbx">
                  <Link to="/components/dataEntry/chekbox">
                    <i className="icon icon-files"/>
                    <span><IntlMessages id="sidebar.topics.tests.bank-test"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/ataEntry/checkbo">
                  <Link to="/components/dataEntry/checkbox">
                    <i className="icon icon-files"/>
                    <span><IntlMessages id="sidebar.topics.tests.technicals"/></span>
                  </Link>
                </Menu.Item>
              </SubMenu>

            </MenuItemGroup>

            <MenuItemGroup key="in-built-apps" className="gx-menu-group"
                           title={<IntlMessages id="sidebar.Members"/>}>
              <Menu.Item key="in-built-apps/mail">
                <Link to="/in-built-apps/mail"><i className="icon icon-user"/><span><IntlMessages
                  id="sidebar.Members.students"/></span></Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/firebase-crud">
                <Link to="/in-built-apps/firebase-crud"><i
                  className="icon icon-editor"/><span><IntlMessages
                  id="sidebar.Members.teachers"/></span></Link>
              </Menu.Item>

              <Menu.Item key="main/algolia">
                <Link to="/main/algolia"><i className="icon icon-auth-screen"/>
                  <span><IntlMessages id="sidebar.Members.coordinators"/></span></Link>
              </Menu.Item>

            </MenuItemGroup>

            <MenuItemGroup key="documents" className="gx-menu-group" title={<IntlMessages id="sidebar.help"/>}>

              <Menu.Item key="documents/changelog">
                <Link to="/documents/changelog">
                  <i className="icon icon-timeline-new"/>
                  <span><IntlMessages id="sidebar.help.user.manual"/></span>
                </Link>
              </Menu.Item>

              <Menu.Item key="documents/installation">
                <Link to="/documents/installation">
                  <i className="icon icon-steps"/>
                  <span><IntlMessages id="sidebar.help.contactUs"/></span>
                </Link>
              </Menu.Item>

            </MenuItemGroup>

          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;


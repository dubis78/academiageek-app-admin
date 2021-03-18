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

            <MenuItemGroup key="main" className="gx-menu-group" title={<IntlMessages id="sidebar.topics"/>}>
              <SubMenu key="topics" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <i className="icon icon-apps"/>
                         <span><IntlMessages id="sidebar.topics.js"/></span></span>}>
                <Menu.Item key="components/table/basic">
                  <Link to="/components/table/basic">
                    <i className="icon icon-copy"/>
                    <span><IntlMessages id="sidebar.topics.js.TheoryDocumentation"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/table/data">
                  <Link to="/components/table/data">
                    <i className="icon icon-icon"/>
                    <span><IntlMessages id="sidebar.topics.js.Challenges"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/dataEntry/checkbox">
                  <Link to="/components/dataEntry/checkbox">
                    <i className="icon icon-listing-dbrd"/>
                    <span><IntlMessages id="sidebar.topics.js.Deliverables"/></span>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="main/widgets">
                <Link to="/main/widgets"><i className="icon icon-widgets"/>
                  <span><IntlMessages id="sidebar.topics.css"/></span></Link>
              </Menu.Item>

              <Menu.Item key="documents/changelog">
                <Link to="/documents/changelog"><i className="icon icon-card"/>
                  <span><IntlMessages id="sidebar.topics.Git"/></span></Link>
              </Menu.Item>

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


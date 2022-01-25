import React from 'react';
import {
  Nav,
  NavGroup,
  NavList,
  NavItem,
  Page,
  PageHeader,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import TemplateLayout from '../../components/TemplateLayout.js';
import Swagger from '../../components/Swagger.js';
import Logout from '../../components/Logout.js';

export default class MakeRequestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen } = this.state;

    const logoProps = {
      href: '/home',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };

    const Header = (
      <PageHeader
        logo="Helix"
        logoProps={logoProps}
        headerTools=
        {<PageHeaderTools>
          <PageHeaderToolsGroup>
            <PageHeaderToolsItem className="header-item">
              <Link to="/about">about</Link>
            </PageHeaderToolsItem>
            <PageHeaderToolsItem className="header-item">
              <Swagger/>
            </PageHeaderToolsItem>
            <PageHeaderToolsItem className="header-item">
              <Link to="/user-details">username</Link> <Logout/>
            </PageHeaderToolsItem>
          </PageHeaderToolsGroup>
        </PageHeaderTools>}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );

    const Sidebar = <PageSidebar nav={
      <Nav>
        <NavGroup title="Requests">
          <NavList>
            <NavItem><Link to="/my-requests">My requests</Link></NavItem>
            <NavItem><Link to="/make-request">Make a request</Link></NavItem>
          </NavList>
        </NavGroup>
        <NavGroup title="Blueprints">
          <NavList>
            <NavItem><Link to="/my-blueprints">My blueprint</Link></NavItem>
          </NavList>
        </NavGroup>
        <NavGroup title="Templates">
          <NavList>
            <NavItem><Link to="/order-template">Order a template</Link></NavItem>
          </NavList>
        </NavGroup>
      </Nav>} isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection variant={PageSectionVariants.darker}>
          <h1 className="page-title">Make a request</h1>
        </PageSection>
        <PageSection variant={PageSectionVariants.light}>
          
        </PageSection>
      </Page>
    );
  }
}
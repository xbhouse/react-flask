import React from 'react';
import {
  Alert,
  Button,
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
import BlueprintLayout from '../../components/BlueprintLayout.js';
import Swagger from '../../components/Swagger.js';
import Logout from '../../components/Logout.js';

export default class BlueprintListPage extends React.Component {
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
              <Link to="/admin-details">admin</Link> <Logout/>
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
            <NavItem><Link to="/requests">See all requests</Link></NavItem>
          </NavList>
        </NavGroup>
        <NavGroup title="Blueprints">
          <NavList>
            <NavItem><Link to="/blueprints">See all blueprints</Link></NavItem>
          </NavList>
        </NavGroup>
        <NavGroup title="Templates">
          <NavList>
            <NavItem><Link to="/all-templates">See all templates</Link></NavItem>
            <NavItem><Link to="/order-template">Order a template</Link></NavItem>
          </NavList>
        </NavGroup>
        <NavGroup title="Clusters">
          <NavList>
            <NavItem><Link to="/clusters">See all clusters</Link></NavItem>
          </NavList>
        </NavGroup>
        <NavGroup title="Administrative">
          <NavList>
            <NavItem><Link to="/settings">Adjust settings</Link></NavItem>
          </NavList>
        </NavGroup>
      </Nav>} isNavOpen={isNavOpen}/>;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection variant={PageSectionVariants.darker}>
          <h1 className="page-title">Blueprints</h1>
        </PageSection>
        <PageSection variant={PageSectionVariants.light}>
          <div className="template-list-container">
            <BlueprintLayout/>
          </div>
          <div className="button-container">
            <Button variant="tertiary">Delete selected</Button>
          </div>
        </PageSection>
      </Page>
    );
  }
}
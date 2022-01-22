import React from 'react';
import {
  Nav,
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
import TemplateLayout from '../../components/TemplateLayout.js';
import Swagger from '../../components/Swagger.js';

export default class TemplateListPage extends React.Component {
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
      href: 'https://openshift.com',
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
              <a href>about</a>
            </PageHeaderToolsItem>
            <PageHeaderToolsItem className="header-item">
              <Swagger/>
            </PageHeaderToolsItem>
            <PageHeaderToolsItem className="header-item">
              <a href>username</a>
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
        <NavList>
          <NavItem>Tickets</NavItem>
          <NavItem>Blueprints</NavItem>
          <NavItem>Template orders</NavItem>
        </NavList>
      </Nav>} isNavOpen={isNavOpen} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection variant={PageSectionVariants.darker}>
          <h1 className="page-title">Order your hybrid architecture</h1>
        </PageSection>
        <PageSection variant={PageSectionVariants.light}>
          <div className="template-list-container">
            <TemplateLayout/>
          </div>
        </PageSection>
      </Page>
    );
  }
}
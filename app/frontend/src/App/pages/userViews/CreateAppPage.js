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
import HorizontalForm from '../../components/Form.js';

export default class CreateAppPage extends React.Component {
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
              <a href>API docs</a>
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
          <h1 className="page-title">Create an application</h1>
        </PageSection>
        <PageSection variant={PageSectionVariants.light}>
          <div className="form-container">
           <HorizontalForm />
          </div>
        </PageSection>
      </Page>
    );
  }
}
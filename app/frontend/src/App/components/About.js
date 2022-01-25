import React from 'react';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

const About = () => {
  return (
    <div>
      <PageSection variant={PageSectionVariants.darker}>
        <h1 className="page-title">About Helix</h1>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        
      </PageSection>
    </div>
  )
}

export default About;
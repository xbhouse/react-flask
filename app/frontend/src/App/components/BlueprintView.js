import React from 'react';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

const BlueprintView = () => {
  return (
    <div>
      <PageSection variant={PageSectionVariants.darker}>
        <h1 className="page-title">My blueprint</h1>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        
      </PageSection>
    </div>
  )
}

export default BlueprintView;
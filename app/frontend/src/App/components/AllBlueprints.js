import React from 'react';
import {
  Button,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import BlueprintLayout from './BlueprintLayout.js';


const AllBlueprints = () => {
  return (
    <div>
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
    </div>
  )
}

export default AllBlueprints;
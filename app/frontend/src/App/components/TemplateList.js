import React from 'react';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import TemplateLayout from './TemplateLayout.js';


const TemplateList = () => {
  return (
    <div>
      <PageSection variant={PageSectionVariants.darker}>
        <h1 className="page-title">Order your hybrid architecture</h1>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        <div className="template-list-container">
          <TemplateLayout/>
        </div>
      </PageSection>
    </div>
  )
}

export default TemplateList;

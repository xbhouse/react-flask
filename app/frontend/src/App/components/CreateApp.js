import React from 'react';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import CreateForm from './CreateForm.js';


const CreateApp = () => {
  return (
    <div>
      <PageSection variant={PageSectionVariants.darker}>
        <h1 className="page-title">Create an application</h1>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        <div className="form-container">
          <CreateForm />
        </div>
      </PageSection>
    </div>
  )
}

export default CreateApp;



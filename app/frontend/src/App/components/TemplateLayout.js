import React from 'react';
import { Gallery } from '@patternfly/react-core';
import Template from './Template.js';

const TemplateLayout = () => {
  return (
    <Gallery hasGutter style={{ '--pf-l-gallery--GridTemplateColumns--min': '500%' }}>
      <Template/>
      <Template/>
      <Template/>
    </Gallery>
  );
};

export default TemplateLayout;
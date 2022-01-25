import React from 'react';
import { Gallery, Button } from '@patternfly/react-core';
import Blueprint from './Blueprint.js';


const BlueprintLayout = () => {
  return (
    <Gallery hasGutter style={{ '--pf-l-gallery--GridTemplateColumns--min': '400%' }}>
      <Blueprint/>
      <Blueprint/>
      <Blueprint/>
    </Gallery>
  );
};

export default BlueprintLayout;
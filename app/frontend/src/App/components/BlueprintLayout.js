import React from 'react';
import { Gallery, Button } from '@patternfly/react-core';
import Blueprint from './Blueprint.js';


const BlueprintLayout = () => {
  return (
    <Gallery hasGutter style={{ '--pf-l-gallery--GridTemplateColumns--min': '400%' }}>
      <Blueprint/>
      <div className="button-container">
        <Button variant="primary">Go to app</Button>
      </div>
      <Blueprint/>
      <div className="button-container">
        <Button variant="primary">Go to app</Button>
      </div>
      <Blueprint/>
      <div className="button-container">
        <Button variant="primary">Go to app</Button>
      </div>
    </Gallery>
  );
};

export default BlueprintLayout;
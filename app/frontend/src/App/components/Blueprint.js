import React from 'react';
import {
  Button, 
  Card, 
  CardHeader, 
  CardActions, 
  CardTitle, 
  CardBody, 
  CardFooter, 
  Checkbox, 
  Dropdown, 
  DropdownItem, 
  KebabToggle
} from '@patternfly/react-core';

const Blueprint = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [check1, setCheck1] = React.useState(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const onClick = checked => {
    setCheck1(checked);
  };

  const dropdownItems = [<DropdownItem key="edit">Edit</DropdownItem>];

  return (
    <Card>
      <CardHeader>
        <CardActions>
          <Dropdown onSelect={onSelect} toggle={<KebabToggle onToggle={setIsOpen} />} isOpen={isOpen} isPlain dropdownItems={dropdownItems} position={'right'} />
          <Checkbox isChecked={check1} onChange={onClick} aria-label="card checkbox example" id="check-2" name="check2" />
        </CardActions>
        <CardTitle>
          Blueprint name
        </CardTitle>
      </CardHeader>
      <CardBody>Creator's username</CardBody>
      <CardFooter>
        Description of app
        <div className="button-container">
          <Button variant="primary">Go to app</Button>
        </div>
      </CardFooter>
    </Card>
  )
};

export default Blueprint;
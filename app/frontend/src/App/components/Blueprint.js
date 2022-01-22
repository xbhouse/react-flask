import React from 'react';
import {Card, CardHeader, CardActions, CardTitle, CardBody, CardFooter, Checkbox, Dropdown, DropdownItem, DropdownSeparator, KebabToggle} from '@patternfly/react-core';

const Blueprint = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [check1, setCheck1] = React.useState(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const onClick = checked => {
    setCheck1(checked);
  };

  const dropdownItems = [<DropdownItem key="link">Link</DropdownItem>, <DropdownItem key="action" component="button">
      Action
    </DropdownItem>, <DropdownItem key="disabled link" isDisabled>
      Disabled Link
    </DropdownItem>, <DropdownItem key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItem>, <DropdownSeparator key="separator" />, <DropdownItem key="separated link">Separated Link</DropdownItem>, <DropdownItem key="separated action" component="button">
      Separated Action
    </DropdownItem>];

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
      <CardBody>Username</CardBody>
      <CardFooter>Description of app</CardFooter>
    </Card>
  )
};

export default Blueprint;
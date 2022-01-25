import React, {useState} from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Title,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
} from '@patternfly/react-core';
import {
  Link
} from "react-router-dom";

const Template = () => {
  const [numLikes, setNumLikes] = useState(0);

  const handleChange = () => {
    setNumLikes(numLikes + 1);
  }

  return (
    <Card>
      <CardTitle>
        <Title headingLevel="h2" size="xl">
          Template name
        </Title>
      </CardTitle>
      <CardBody>
        <DescriptionList>
          <DescriptionListGroup>
            <DescriptionListTerm>Author</DescriptionListTerm>
            <DescriptionListDescription>
              The author's name
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Description</DescriptionListTerm>
            <DescriptionListDescription>
              The app description
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Number of people that like this</DescriptionListTerm>
            <DescriptionListDescription>{numLikes}</DescriptionListDescription>
            <div>
              <Button variant="tertiary"onClick={handleChange}>Like</Button>
            </div>
          </DescriptionListGroup>
        </DescriptionList>
      </CardBody>
      <CardFooter>
        <div className="button-container">
          <Link to="/create">
            <Button variant="primary">Use this template</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Template;
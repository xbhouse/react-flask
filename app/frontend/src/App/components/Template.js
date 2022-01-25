import React, {useState} from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Gallery,
  Title,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Divider
} from '@patternfly/react-core';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreateAppPage from '../pages/userViews/CreateAppPage.js';

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
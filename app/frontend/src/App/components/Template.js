import React from 'react';
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

const Template = () => (
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
            Bob Joe
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Description</DescriptionListTerm>
          <DescriptionListDescription>
            An app
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Number of people that liked this</DescriptionListTerm>
          <DescriptionListDescription>17</DescriptionListDescription>
          <div>
            <Button variant="tertiary">Like</Button>
          </div>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Git repository</DescriptionListTerm>
          <DescriptionListDescription><a href="#">https://github.com</a></DescriptionListDescription>
        </DescriptionListGroup>
      </DescriptionList>
    </CardBody>
    <Divider />
    <CardFooter>
      <div className="button-container">
        <Button variant="primary">Use this template</Button>
      </div>
    </CardFooter>
  </Card>
)

export default Template;
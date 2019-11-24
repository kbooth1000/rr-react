import React from 'react';
import { Icon, Step } from 'semantic-ui-react';

const ShopSteps = ({stepNum=0}) => (
  <Step.Group size="mini">
    <Step active={stepNum === 0 ? true : false}>
      <Icon name='fire' />
      <Step.Content>
        <Step.Title>Heat Source</Step.Title>
        {/* <Step.Description>What's your current heat source?</Step.Description> */}
      </Step.Content>
    </Step>

    <Step active={stepNum === 1 ? true : false}>
      <Icon name='home' />
      <Step.Content>
        <Step.Title>Tonnage/House Size</Step.Title>
        {/* <Step.Description>House size or current system tonnage</Step.Description> */}
      </Step.Content>
    </Step>

    <Step active={stepNum === 2 ? true : false}>
      <Icon name='boxes' />
      <Step.Content>
        <Step.Title>Full System or Parts</Step.Title>
        {/* <Step.Description>House size or current system tonnage</Step.Description> */}
        </Step.Content>
    </Step>
  </Step.Group>
)

export default ShopSteps;

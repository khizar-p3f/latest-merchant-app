import { Divider, Steps } from 'antd'
import React from 'react'

const StepsWidget = () => {
    const { Step } = Steps;

  return (
    <div id='steps'>

    <Divider />
    <Steps id="steps-container" progressDot current={1} direction="vertical">
      <Step title="Finished" description="This is a description. This is a description." />
      <Step title="Finished" description="This is a description. This is a description." />
      <Step title="In Progress" description="This is a description. This is a description." />
      <Step title="Waiting" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>

    </div>
  )
}

export default StepsWidget
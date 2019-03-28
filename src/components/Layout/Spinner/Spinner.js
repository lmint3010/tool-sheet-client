import React from 'react'
import styled from 'styled-components'

import './Spinner.css'

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
`

export default ({ color }) => (
  <SpinnerWrapper>
    <div className="lds-ripple">
      <div style={{ borderColor: color}} />
      <div style={{ borderColor: color}} />
    </div>
  </SpinnerWrapper>
)
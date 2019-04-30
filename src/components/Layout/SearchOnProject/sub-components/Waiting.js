import React from 'react'
import { ConfigWrapper, ConfigText } from '../style'

export default function waiting() {
  return (
    <ConfigWrapper>
      <i className="fal fa-cog icon" />
      <ConfigText>Setting up your workspace</ConfigText>
    </ConfigWrapper>
  )
}

import React from 'react'
import '../../assets/icons/all.min.css'
import { ScrollTopButton } from './styled'

export default ({ onClick, isVisible }) => (
  <ScrollTopButton style={{ display: `${isVisible ? 'block' : 'none'}` }} onClick={onClick}>
    <i className="far fa-chevron-double-up" />
  </ScrollTopButton>
)

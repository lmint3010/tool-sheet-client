import React from 'react'
import {
  Checklist,
  Listitem,
  ChecklistTitle,
  ChecklistWrapper,
  ChecklistClose,
} from '../style'

export default ({ toggle, onChoose, onToggle, list }) => {
  return (
    <Checklist className={toggle ? 'on' : 'off'}>
      <ChecklistTitle>Choose any site you want to work</ChecklistTitle>
      <ChecklistWrapper>
        {list.map((e, i) => (
          <Listitem
            key={i}
            onClick={() => onChoose(i)}
            className={e.checked ? 'active' : ''}>
            {e.title}
            <i className="fas fa-badge-check" />
          </Listitem>
        ))}
      </ChecklistWrapper>
      <ChecklistClose onClick={onToggle}>
        <i className="far fa-times" />
      </ChecklistClose>
    </Checklist>
  )
}

import React from 'react'

import { Workspace, WorkspaceTitle, Project } from '../style'

export default React.memo(({ checkedList }) => {
  return (
    <Workspace>
      <WorkspaceTitle>Current workspace:</WorkspaceTitle>
      {checkedList.length > 0 ? (
        checkedList.map((e, i) => <Project key={i}>{e.title}</Project>)
      ) : (
        <span style={{ marginLeft: '8px' }}>Nothing here</span>
      )}
    </Workspace>
  )
})

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// -------------- Styles --------------
import { Wrapper, Button, Backdrop } from './style'
import '../style.css'

// -------------- Sub-components --------------
import Board from './sub-components/Board'
import Waiting from './sub-components/Waiting'
import ChooseWorkspace from './sub-components/ChooseWorkspace'
import CurrentWorkspace from './sub-components/CurrentWorkspace'
import SearchForm from './sub-components/searchForm'

// -------------- Actions --------------
import {
  getAllSpreadsheet,
  fetchWorkspaceData,
} from '../../../actions/spreadsheetAction'

function SearchOnProject(props) {
  // console.log('Page render')
  // -------------- Main State --------------
  const [listProject, setListProject] = useState([])
  const [syncedProject, setSyncedProject] = useState([])
  const [checklistToggle, setChecklistToggle] = useState(false)
  const [configuation, setConfiguation] = useState(false)
  const [workspaceData, setWorkspaceData] = useState([])
  const [submit, setSubmit] = useState({ languageCode: 'de', content: '' })

  const [sync, setSync] = useState(false)
  const [syncButton, setSyncButton] = useState(false)

  const checkedList = listProject.filter(e => e.checked)

  // -------------- Lifecycle --------------
  useEffect(() => {
    const { reduxState } = props
    const fetchData = async () => {
      // Fecth spreadsheets
      const spreadsheet = await getAllSpreadsheet()

      const listSpreadsheet = spreadsheet.map(e => ({
        title: e.alias,
        mongoId: e._id,
        spreadsheetId: e.spreadsheetId,
        checked:
          e.userLiked && e.userLiked.includes(reduxState.user._id)
            ? true
            : false,
      }))
      setListProject(listSpreadsheet)

      // Fetch translation data
      const requestBody = {
        listSite: JSON.stringify(
          spreadsheet
            .filter(
              e => e.userLiked && e.userLiked.includes(reduxState.user._id)
            )
            .map(e => e.alias)
        ),
      } // Array of site
      const workspaceData = await fetchWorkspaceData(requestBody)
      if (workspaceData.data.success) {
        setWorkspaceData(workspaceData.data.response.filter(e => e.translated))
        setSyncedProject(listSpreadsheet.filter(e => e.checked))
      } else {
        console.log('false to fetch workspace data')
        setConfiguation(true)
        return
      }
      // Finsish fetch process
      console.log('Static Data fetched')
      setConfiguation(true)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!checklistToggle) {
      const listProjectChecked = listProject.filter(e => e.checked)
      if (listProjectChecked.length === syncedProject.length) {
        let diff = listProjectChecked
          .map((e, i) => e.title !== syncedProject[i].title)
          .find(e => e)
        if (diff === undefined) diff = false
        if (diff) setSyncButton(true)
        else setSyncButton(false)
        return
      }
      setSyncButton(true)
    }
  }, [checklistToggle])

  // -------------- Handle Functions --------------
  const handleToggle = () => setChecklistToggle(!checklistToggle)

  const handleChecklistchoosen = index => {
    const nextState = [...listProject]
    nextState[index].checked = !nextState[index].checked
    setListProject(nextState)
  }

  const handleFormSubmit = (languageCode, content) => event => {
    event.preventDefault()
    if (languageCode !== submit.languageCode || content !== submit.content) {
      setSubmit({ languageCode, content })
    }
  }

  const handleSync = async () => {
    setSync(true)
    setSyncedProject(listProject.filter(e => e.checked))
    const listSite = JSON.stringify(
      listProject.filter(e => e.checked).map(e => e.title)
    )
    const workspaceData = await fetchWorkspaceData({ listSite })
    setSyncButton(false)
    if (workspaceData.data.success) {
      setSync(false)
      setWorkspaceData(workspaceData.data.response.filter(e => e.translated))
      setSyncedProject(listProject.filter(e => e.checked))
    } else {
      setSync(false)
      console.log('false to fetch workspace data')
      return
    }
  }

  // -------------- Render condition components --------------
  const layout = configuation ? (
    <Wrapper>
      <div>
        <Button showing={true} onClick={handleToggle}>
          Setup workspace
          <i className="far fa-chart-network" style={{ marginLeft: '6px' }} />
        </Button>
        <Button
          onClick={handleSync}
          showing={syncButton}
          style={{ marginLeft: '12px' }}
          className={sync ? 'sync' : ''}>
          Sync Workspace
          <i
            className={`far fa-sync ${sync ? 'sync' : ''}`}
            style={{ marginLeft: '6px' }}
          />
        </Button>
      </div>
      <CurrentWorkspace checkedList={checkedList} />
      <SearchForm onSubmit={handleFormSubmit} />
      <Board data={workspaceData} searchData={submit} />

      <ChooseWorkspace
        toggle={checklistToggle}
        list={listProject}
        onChoose={handleChecklistchoosen}
        onToggle={handleToggle}
      />
      <Backdrop
        className={checklistToggle ? 'on' : 'off'}
        onClick={handleToggle}
      />
    </Wrapper>
  ) : (
    <Waiting />
  )

  return layout
}

// -------------- React.Redux Connection --------------
const mapStateToProps = ({ auth: { user } }) => ({
  reduxState: { user },
})

export default connect(mapStateToProps)(SearchOnProject)

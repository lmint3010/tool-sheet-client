import styled from 'styled-components'
import theme from '../../../themes'
import { TextArea } from '../../../themes/styled_comp/InputGroup'

export const Wrapper = styled.div`
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  padding-top: 0.6rem;
  // background: orange;
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  &.sync {
    pointer-events: none;
    cursor: not-allowed;
    background-color: #9e9e9e;
  }
  & i.sync {
    animation: 2s fetching infinite;
  }
  &:hover {
    opacity: 1;
  }
  user-select: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  background-color: ${theme.color.main};
  color: white;
  display: ${props => (props.showing ? 'inline-block' : 'none')};
  outline: none;
  transition: 120ms ease-in-out;
  opacity: 0.8;
  cursor: pointer;
  border: none;
`

export const SubmitButton = styled(Button)`
  paddign: 6px 0;
  border-radius: 0 0 2px 2px;
`

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Workspace = styled.div`
  margin: 1rem 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const WorkspaceTitle = styled.div`
  font-weight: bold;
`
export const Project = styled.div`
  &:nth-child(2) {
    margin-left: 0.6rem;
  }
  &:hover {
    transform: scale(1.092);
  }
  font-size: 13px;
  border-radius: 1rem;
  color: rgba(0, 0, 0, 0.7);
  padding: 4px 8px;
  background-color: rgba(100, 100, 100, 0.2);
  margin: 0.3rem;
  transition: 0.2s ease-out;
  cursor: default;
`

export const Checklist = styled.div`
  &.on {
    display: flex;
  }
  &.off {
    display: none;
  }
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background: white;
  border-radius: 4px;
  width: 80vw;
  height: 86vh;
  padding: 1.2rem;
  z-index: 9999;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Backdrop = styled(Checklist)`
  &.on {
    display: block;
  }
  display: none;
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
  opacity: 0.4;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`

export const Listitem = styled.div`
  &.active .fas {
    color: mediumseagreen;
  }
  &.active,
  &.active:hover {
    background-color: #4caf501c;
    border-color: #4caf50;
    color: mediumseagreen;
  }
  & .fas {
    margin-left: 8px;
  }
  &:hover {
    background-color: rgba(150, 150, 150, 0.15);
  }
  border: 1px solid rgba(150, 150, 150, 0.15);
  margin: 2px;
  font-size: 13px;
  border-radius: 4px;
  padding: 12px;
  color: gray;
  transition: 100ms ease-in-out;
  cursor: pointer;
`

export const ChecklistTitle = styled.h2`
  color: ${theme.color.text.main}
  font-size: 20px;
  margin-top: 0;
`

export const ChecklistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ChecklistClose = styled.div`
  position: absolute;
  font-size: 26px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  right: 1rem;
  top: 0.5rem;
`

export const ConfigWrapper = styled.div`
  & .icon {
    font-size: 5rem;
    color: rgba(120, 120, 120, 0.8);
    animation: 2s fetching infinite;
  }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ConfigText = styled.h2`
  color: rgba(100, 100, 100, 0.8);
  font-size: 1.26rem;
`

export const ContentSearch = styled(TextArea)`
  &:focus {
    border-color: rgba(120, 120, 120, 0.16);
    box-shadow: none;
  }
  border: 1px solid rgba(120, 120, 120, 0.16);
  border-radius: 0;
  border-bottom-color: transparent;
  min-width: 100%;
  max-width: 100%;
  height: 4rem;
  outline: none;
`

export const LanguageCode = styled.input`
  &::placeholder {
    color: rgba(120, 120, 120, 0.4);
    text-transform: none;
  }
  text-transform: uppercase;
  font-size: 14px;
  padding: 6px;
  color: ${theme.color.main};
  text-align: center;
  outline: none;
  border-radius: 2px 2px 0 0;
  border: 1px solid rgba(120, 120, 120, 0.16);
  border-bottom: none;
`

// ----------> Board <----------
export const Board = styled.div`
  flex-grow: 1;
  max-height: 100%;
  overflow: scroll;
  background: white;
  border-radius: 2px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.06);
`

export const BoardRow = styled.div`
  display: flex;
  padding: 1rem 0;
`

const BoardBase = styled.textarea`
  &:focus {
    color: dodgerblue;
  }
  transition: 80ms linear;
  box-sizing: border-box;
  text-align: center;
  border-color: rgba(100, 100, 100, 0.16);
  border-width: 0;
  border-style: solid;
  font-size: 13px;
  outline: none;
  resize: none;
  padding: 0.5rem 8px;
  overflow-x: hidden;
  height: 10vh;
`

export const BoardSite = styled.div`
  font-size: 14px;
  padding: 0.5rem 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`

export const Sheetname = styled.div`
  margin: 0.5rem;
  color: rgba(120, 120, 120, 0.6);
  font-size: 12px;
`

export const Sitename = styled(Sheetname)`
  font-size: 13px;
  margin: 0;
  text-transform: uppercase;
  color: ${theme.color.text.main};
`

export const BoardEnglish = styled(BoardBase)`
  width: 40%;
  max-width: 45%
  border-width: 0 1px 0 1px;
`
export const BoardTranslate = styled(BoardBase)`
  width: 40%;
`

export const BoardNotification = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Noti = styled.h2`
  color: rgba(150, 150, 150, 0.6);
  border: 2px dashed rgba(120, 120, 120, 0.4);
  user-select: none;
  padding: 1rem;
  border-radius: 2px;
`

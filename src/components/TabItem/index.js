// Write your code here

import './index.css'

const TabItem = props => {
  const {tabItem, isActive, tabClicks} = props
  const {displayText, tabId} = tabItem

  const buttonClick = () => {
    tabClicks(tabId)
  }

  const workingButton = isActive ? 'active-button' : 'app-button '
  return (
    <li>
      <button className={workingButton} type="button" onClick={buttonClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

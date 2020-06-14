import React, { useState } from "react"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Icon from '@material-ui/core/Icon'
import { useTranslation } from "react-i18next"
import translate from '../img/translate.svg'

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()
  
  const [values, setValues] = useState({
    language: 'en'
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

const translateIcon = () => (
    <Icon>
        <img src={translate} height={"20em"} width={"20em"}/>
    </Icon>
)

  return(
    <Select
      value={values.language}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language'
      }}
      className="navbar-item" 
      IconComponent = {translateIcon}
    >
            
      <MenuItem className="navbar-item" value={'en'}><b>En</b></MenuItem>
      <MenuItem className="navbar-item" value={'zh'}><b>中文</b></MenuItem>
    </Select>
  )
}

export default LanguageMenu
import React from 'react'
import PropTypes from 'prop-types'
import { TrainingPageTemplate } from '../../templates/training-page'

const TrainingPagePreview = ({ entry, getAsset, widgetFor }) => {

  return (
    <TrainingPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      content={widgetFor('body')}
    />
  )
}

TrainingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TrainingPagePreview

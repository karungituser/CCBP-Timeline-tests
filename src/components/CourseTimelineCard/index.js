import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineDetails} = props
  const {courseTitle, duration, description, tagsList} = courseTimelineDetails

  return (
    <div className="course-card-container">
      <div className="course-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tagList-container">
        {tagsList.map(eachTag => (
          <p className="items">{eachTag.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

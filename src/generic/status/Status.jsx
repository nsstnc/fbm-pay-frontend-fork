import style from './status.module.css'
import appStyle from '../../app.module.css'

// eslint-disable-next-line react/prop-types
const Status = ({className = '', text = ''}) => {
  return (
    <div className={`${className} ${style.status}`}>
      <p className={appStyle.mainText}>
        {text}
      </p>
    </div>
  )
}

export default Status
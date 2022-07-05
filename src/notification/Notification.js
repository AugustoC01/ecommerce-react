import './Notification.css'
import { useState, createContext } from 'react';

const Notification = ({ message, severity, image }) => {
  const title = severity === 'error' ? 'Oops!' : 'Mision cumplida!'
  const link = severity === 'error' ? '/cart' : '/'

  if(message === '') return

  return(
    <div className='notification'>
      <img src={image} alt='notification-img' className='notification-img'/>
      <h1 className='notification-title'>{ title }</h1>
      <h2 className='notification-message'>{ message }</h2>
    </div>
  )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [msgConfig, setMsgConfig] = useState({
    severity: 'success',
    message: '',
    image: ''
  })

  const setNotification = (sev, msg, img, timeout) => {
    setMsgConfig({ severity: sev, message: msg, image: img })
    setTimeout(() => {
      setMsgConfig({ ...msgConfig, message: ''})
    }, timeout * 1000)
  }

  return(
    <NotificationContext.Provider value={setNotification}>
      <Notification message={msgConfig.message} severity={msgConfig.severity} image={msgConfig.image}/>
      { children }
    </NotificationContext.Provider>
  )
}

export default NotificationContext
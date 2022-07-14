import './Notification.css';
import { useState, createContext, useContext } from 'react';

const Notification = ({ message, severity, image }) => {
  const title = severity === 'error' ? 'Oops!' : 'Mision cumplida!';
  const className =
    severity === 'error' ? 'notification error' : 'notification';

  if (message === '') return;

  return (
    <div className={className}>
      <img src={image} alt='notification-img' className='notification-img' />
      <h1 className='notification-title'>{title}</h1>
      <h2 className='notification-message'>{message}</h2>
    </div>
  );
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [msgConfig, setMsgConfig] = useState({
    severity: 'success',
    message: '',
    image: '',
  });

  const setNotification = (sev, msg, img, timeout = 5) => {
    setMsgConfig({ severity: sev, message: msg, image: img });
    setTimeout(() => {
      setMsgConfig({ ...msgConfig, message: '' });
    }, timeout * 1000);
  };

  return (
    <NotificationContext.Provider value={setNotification}>
      <Notification
        message={msgConfig.message}
        severity={msgConfig.severity}
        image={msgConfig.image}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};

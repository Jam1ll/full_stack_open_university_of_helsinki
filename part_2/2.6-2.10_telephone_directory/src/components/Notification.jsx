const Notification = ({ message, isErrorMessage }) => {
  if (message === null) return null;

  let messageType = "success";

  if (isErrorMessage === true) messageType = "error";

  return <div className={messageType}>{message}</div>;
};

export default Notification;

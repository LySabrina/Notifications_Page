// import Mark from "/assets/images/avatar-mark-webber.webp";

import "../Notification/NotificationCard.scss";
import { createNotification } from "../../utility/createNotification";

export default function NotificationCard({ notification, setNotification }) {
  /**
   * Clears out a notification
   * @returns Updated notifications
   */
  const handleClearNotification = () => {
    const id = notification.commentId;
    const isSeen = notification.seen;
    if (isSeen) {
      return;
    } else {
      setNotification((prev) => {
        return prev.map((element) => {
          if (element.commentId == id) {
            return {
              ...element,
              seen: !element.seen,
            };
          }
          return element;
        });
      });
    }
  };

  return (
    <button
      className={`notification__card__container  `}
      onClick={handleClearNotification}
    >
      <div className={`notification__card ${notification.seen && "seen"}`}>
        <div className="user__img__container">
          <img src={notification.img} className="user__img" />
        </div>
        <div className="notification__info">
          {createNotification(notification.type, notification)}
          {notification.event_img && <img src="assets/images/image-chess.webp"/>}
          <p className="notification__date">{notification.date}</p>
        </div>
      </div>
    </button>
  );
}

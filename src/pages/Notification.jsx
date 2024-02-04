import NotificationCard from "../component/Notification/NotificationCard";
import "./Notification.scss";
import { useState } from "react";
import { Type } from "../utility/Type";

export default function Notification() {
  const [notifications, setNotification] = useState([
    {
      name: "Mark Webber",
      img: "/Notifications_Page/assets/images/avatar-mark-webber.webp",
      type: Type.REACTION,
      event: "My first torunament today!",
      seen: false,
      commentId: 1,
      date: "1m ago",
    },
    {
      name: "Angela Gray",
      img: "/Notifications_Page/assets/images/avatar-angela-gray.webp",
      type: Type.FOLLOW,
      event: null,
      seen: false,
      commentId: 2,
      date: "5m ago",
    },
    {
      name: "Jacob Thompson",
      img: "/Notifications_Page/assets/images/avatar-jacob-thompson.webp",
      type: Type.MEMBER_JOIN,
      event: "Chess Club",
      seen: false,
      commentId: 3,
      date: "1 day ago",
    },
    {
      name: "Rizky Hasanuddin",
      img: "/Notifications_Page/assets/images/avatar-rizky-hasanuddin.webp",
      event: null,
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
      type: Type.DM,
      seen: true,
      commentId: 4,
      date: "5 day ago",
    },
    {
      name: "Kimberly Smith",
      img: "/Notifications_Page/assets/images/avatar-kimberly-smith.webp",
      type: Type.COMMENT,
      event: "picture",
      event_img: "/assets/images/image-chess.webp",
      seen: true,
      commentId: 5,
      date: "1 week ago",
    },
    {
      name: "Nathan Peterson",
      img: "/Notifications_Page/assets/images/avatar-nathan-peterson.webp",
      type: Type.REACTION,
      event: "5 end-game strategies to increase your win rate",
      seen: true,
      commentId: 6,
      date: "2 weeks ago",
    },
    {
      name: "Anna Kim",
      img: "/Notifications_Page/assets/images/avatar-anna-kim.webp",
      type: Type.MEMBER_LEFT,
      event: "Chess Club",
      seen: true,
      commentId: 7,
      date: "2 weeks ago",
    },
  ]);

  const unseen = () => {
    let value = 0;
    for (let i = 0; i < notifications.length; i++) {
      if (!notifications[i].seen) {
        value += 1;
      }
    }

    return value;
  };

  const handleClearAllNotifications = () => {
    setNotification((prev) =>
      prev.map((element) => {
        return {
          ...element,
          seen: true,
        };
      })
    );
  };

  return (
    <div className="notification__container">
      <header className="notification__header">
        <h1 className="notification__title">
          Notifications
          <span className="notification__title__unread">{unseen()}</span>
        </h1>
        <button
          className="notification__readAll"
          onClick={handleClearAllNotifications}
        >
          Mark all as read
        </button>
      </header>

      <ul className="notification__list">
        {notifications.map((element) => (
          <li key={element.commentId} className="notification__list__item">
            <NotificationCard
              notification={element}
              setNotification={setNotification}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

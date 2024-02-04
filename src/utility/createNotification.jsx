import { Type } from "./Type";
/**
 * Creates a notification JSX template based on the type
 * @param {Type} type
 * @param {Object} notification
 */
export function createNotification(type, notification) {
  switch (type) {
    case Type.REACTION:
      return (
        <p className={`notification__info__text`}>
          <span className="notification__info__text__user">
            {notification.name}{" "}
          </span>
          reacted to your recent post
          <span className="notification__info__text__event">
            {" "}
            {notification.event}{" "}
          </span>
          {!notification.seen && <span className="unseen-notification"></span>}
        </p>
      );

    case Type.COMMENT:
      return (
        <p className="notification__info__text">
          <span className="notification__info__text__user">
            {notification.name}{" "}
          </span>
          commented on your
          <span className="notification__info__text__event club">
            {" "}
            {notification.event}{" "}
          </span>
        
          {!notification.seen && <span className="unseen-notification"></span>}
        </p>
      );

    case Type.MEMBER_JOIN:
      return (
        <p className="notification__info__text">
          <span className="notification__info__text__user">
            {notification.name}{" "}
          </span>
          has joined your group
          <span className="notification__info__text__event club">
            {" "}
            {notification.event}{" "}
          </span>
          {!notification.seen && <span className="unseen-notification"></span>}
        </p>
      );

    case Type.FOLLOW:
      return (
        <p className="notification__info__text">
          <span className="notification__info__text__user">
            {notification.name}{" "}
          </span>
          followed you{" "}
          {!notification.seen && <span className="unseen-notification"></span>}
        </p>
      );

    case Type.MEMBER_LEFT:
      return (
        <p className="notification__info__text">
          <span className="notification__info__text__user ">
            {notification.name}{" "}
          </span>
          left the group
          <span className="notification__info__text__event club">
            {" "}
            {notification.event}{" "}
          </span>
          {!notification.seen && <span className="unseen-notification"></span>}
        </p>
      );

    case Type.DM:
      return (
        <p className="notification__info__text">
          <span className="notification__info__text__user">
            {notification.name}{" "}
          </span>
          sent you a private message
          {!notification.seen && <span className="unseen-notification"></span>}
          <p className="notification__info__text__DM">{notification.message}</p>
        </p>
      );

    default:
      return "";
  }
}

import { labels } from '../text';
import defaultIcon from '../../assets/images/outerrupt-icon-01.png';
import { useCallback, useEffect, useState } from 'react';
import { DateTimeUnits } from '../defaults';

type NotificationContent = { notifIcon?: string, message: string; title: string, link?: string, activityId?: string };

export function useNotification() {
  const [blurred, setBlurred] = useState(false);

  const handleVisibiltyChange = useCallback((event: Event) => {
    console.log('visibility change:', event.type);
    if (event.type === 'blur'
      || event.type === 'focusout'
      || event.type === 'visibilitychange'
      || event.type === 'webkitvisibilitychange'
      || event.type === 'pagehide'
    ) {
      // if (!blurred) {
      setBlurred(true);
      // }
    }
    else {
      if (blurred) {
        setBlurred(false);
      }
    }
  }, [blurred]);

  // const handleBlur = useCallback(() => {
  //   setBlurred(true);
  //   console.log('blurred');
  // }, []);

  // const handleFocus = useCallback(() => {
  //   setBlurred(false);
  //   console.log('focused');
  // }, []);

  useEffect(() => {
    document.addEventListener('blur', handleVisibiltyChange);
    document.addEventListener('focus', handleVisibiltyChange);
    document.addEventListener('mozvisibilitychange', handleVisibiltyChange);
    document.addEventListener('msvisibilitychange', handleVisibiltyChange);
    document.addEventListener('visibilitychange', handleVisibiltyChange);
    document.addEventListener('webkitvisibilitychange', handleVisibiltyChange);
    window.addEventListener('blur', handleVisibiltyChange);
    window.addEventListener('focus', handleVisibiltyChange);
    return () => {
      document.removeEventListener('blur', handleVisibiltyChange);
      document.removeEventListener('focus', handleVisibiltyChange);
      document.removeEventListener('mozvisibilitychange', handleVisibiltyChange);
      document.removeEventListener('msvisibilitychange', handleVisibiltyChange);
      document.removeEventListener('visibilitychange', handleVisibiltyChange);
      document.removeEventListener('webkitvisibilitychange', handleVisibiltyChange);
      window.removeEventListener('blur', handleVisibiltyChange);
      window.removeEventListener('focus', handleVisibiltyChange);
    }
  }, [handleVisibiltyChange]);

  function showNotification({
    message,
    title = labels.appTitle,
    notifIcon = defaultIcon,
    link,
    activityId,
  }: NotificationContent) {

    if (!blurred) {
      console.log('window is visible: !blurred');
      return;
    }

    if (!document.hidden) {
      console.log('window is visible: !document.hidden');
      // return;
    }

    if (document.visibilityState === 'visible') {
      console.log('window is visible: document.visibilityState === "visible"');
      // return;
    }

    if (document.hasFocus()) {
      console.log('window is visible: document.hasFocus()')
      return;
    }

    const notification = new Notification(title, {
      body: message,
      icon: notifIcon,
      requireInteraction: true, // persist until click
    });
    notification.onclick = () => {
      notification.close();
      window.parent.focus();
      window.parent.location = `${link}/${activityId}`
    };
    notification.onshow = () => {
      setTimeout(() => notification.close(), DateTimeUnits.Minute * 5); // persist until click or close after 30sec
    }
  }

  async function requestAndShowNotification({ notifIcon, message = 'next!', title, link, activityId }: NotificationContent) {
    const permissionResult = await Notification.requestPermission(function () {
      if (Notification.permission === 'granted') {
        showNotification({ message, notifIcon, title, link, activityId });
      }
      else {
        console.log('no permission granted.');
      }
    });
    console.log('permissionResult', permissionResult);
  }

  return { blurred, requestAndShowNotification };
}

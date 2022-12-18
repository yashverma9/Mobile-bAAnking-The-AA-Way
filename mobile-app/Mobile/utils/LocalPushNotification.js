import notifee, {
  AndroidCategory,
  AndroidImportance,
  AndroidLaunchActivityFlag,
  AndroidVisibility,
} from '@notifee/react-native';

const callNotification = async (number, notificationId) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
  });

  // Display a notification
  await notifee.displayNotification({
    // title: 'Incoming Call',

    id: notificationId,
    title:
      '<p style="color: #1E4552; font-size: 48px;"><b>Incoming Call</span></p></b></p>',
    body: `<p style="color: #1E4552; font-size: 14px;"><b>${number}</span></p></b></p>`,

    android: {
      category: AndroidCategory.CALL,
      channelId,
      ongoing: true,
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
      smallIcon: 'defaultallobluenotification',
      color: '#1E4552',
      largeIcon: require('../assets/png/dial.png'),
      fullScreenAction: {
        id: 'default',
      },
      pressAction: {
        id: 'default',
      },
      actions: [
        {
          pressAction: {
            id: 'answer',
            launchActivity: 'default',
            launchActivityFlags: [AndroidLaunchActivityFlag.SINGLE_TOP],
            color: '#03b84d',
          },
          // title: 'Answer Call',
          title: '<p style="color: #03b84d;"><b>Answer Call</b> </p>',
        },
        {
          pressAction: {
            id: 'reject',
            color: '#03b84d',
            // launchActivity: 'default',
            // launchActivityFlags: [AndroidLaunchActivityFlag.SINGLE_TOP],
          },
          // title: 'Reject Call',
          title: '<p style="color: #f44336;"><b>Reject Call</b> </p>',
        },
      ],
    },
  });
  //   await notifee.displayNotification({
  //     body: 'Full-screen notification',
  //     android: {
  //         channelId,
  //       // Recommended to set a category
  //       category: AndroidCategory.CALL,
  //       // Recommended to set importance to high
  //       importance: AndroidImportance.HIGH,
  //       fullScreenAction: {
  //         id: 'default',
  //       },
  //     },
  //   });
};
const displayConnectionStatus = async status => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'connectionStatus',
    name: 'Connection Status',
    // importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
  });

  // Display a notification
  await notifee.displayNotification({
    title: 'Connection Status',
    body: status,
    android: {
      channelId,
      smallIcon: 'defaultallobluenotification',
      color: '#1E4552',

      pressAction: {
        id: 'default',
        // importance: AndroidImportance.HIGH,
      },
    },
  });
};

const cancel = async notificationId => {
  await notifee.cancelNotification(notificationId);
};

export {callNotification, displayConnectionStatus, cancel};

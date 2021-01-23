/**
 * NotificationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  hitNotification : async function(req , res){
    var serverKey = 'YOUR_SERVER_KEY';
    var FCM=require('fcm-push');
    var fcm = new FCM(serverKey);

    var message = {
      to: 'YOUR_FCM_TOKEN',
      collapse_key: 'type_a',

      notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification'
      },

      data: {
        key_one: 'first value',
        key_two: 'second value'
      }
    };

    fcm.send(message, (err, response) => {
      if (err) {
        console.log('Something has gone wrong!  '+err);
      } else {
        console.log('Successfully sent with response: ', JSON.stringify(response));
      }
    });
  }
};



import axios from "axios"
// import convertedVapidKey from "./FrontEndWebPushBoilerplate"

const vapidPublicKey =
  "BLo2AcZTKNOIcpOk02j-AKrxJXb_SozzSMfBfaq1grL5HFOlz8Tn4bDrbxXvqAQwC4YwsKBc4mCMUW6a_XRy64I"
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)

//boilerplate code that converts the public key to one used in Cloud based messaging API
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
// This checks if notifications are supported on your device
export default function subscribePush(userid) {
  navigator.serviceWorker.ready.then(registration => {
    if (!registration.pushManager) {
      alert("Push Unsupported")
      return
    }
   //checks if you have a subscription already in your service worker. if you do then display that element.
    registration.pushManager.getSubscription().then(subscription => {
      if (subscription) {
        document.getElementById("subscriptionStatusAlreadySub").style.display = "block";
        document.getElementById("subscriptionStatusAlreadyUnSub").style.display = "none";
        document.getElementById("subscriptionStatusSub").style.display = "none";
        document.getElementById("subscriptionStatusWarn").style.display = "none";
        return
        //If there is a subscription, then there's nothing to do
      } // if there isn't a subscription, then we make one!
    registration.pushManager
      .subscribe({
        userVisibleOnly: true, //Always display notifications
        applicationServerKey: convertedVapidKey
      })
      .then(subscription => axios.post("push/subscriptionReg", {
          subscription: subscription,
          userid:userid
          }))
      .catch(err => console.error("Push subscription error: ", err))
      document.getElementById("subscriptionStatusSub").style.display = "block";
      document.getElementById("subscriptionStatusAlreadyUnSub").style.display = "none";
      document.getElementById("subscriptionStatusWarn").style.display = "none";
      document.getElementById("subscriptionStatusAlreadySub").style.display = "none";
  })
})
}
  

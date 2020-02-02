import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    var node = document.createElement("p");
    var textnode1 = document.createTextNode(data.user.email);
    var textnode2 = document.createTextNode(":");
    var textnode3 = document.createTextNode(data.content.tweet);
    node.appendChild(textnode1);
    node.appendChild(textnode2);
    node.appendChild(textnode3);
    node.normalize();

    document.getElementById("new_message").appendChild(node);
    document.getElementById("tweet_form").value = "";
  }
});

angular.module('chatApp', [])
  .controller('ChatController', function() {
    var chatScope = this;
    chatScope.messages = [
      {sender:'David', msg:'Welcome!'}
    ]

    chatScope.sendMsg = function() {
      chatScope.messages.push({sender:chatScope.sender, msg:chatScope.msg})
      chatScope.sender = ''
      chatScope.msg = ''
    }

    chatScope.delete = function(index) {
      chatScope.messages.splice(index, 1)
    }

     chatScope.edit = function(index) {
      chatScope.sender = chatScope.messages[index].sender
      chatScope.msg = chatScope.messages[index].msg
      chatScope.messages.splice(index, 1)
    }
  })

App.eta = App.cable.subscriptions.create "EtaChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    setEta(data.id, data.eta);



  notify: (id, eta) ->
    @perform 'notify', {id: id, eta: eta}
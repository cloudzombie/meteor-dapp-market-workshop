BlazeLayout.setRoot('body')

FlowRouter.route('/', {
  name: 'landing',
  action: function () {
    BlazeLayout.render('mainLayout', {main: 'landing'})
  }
})

FlowRouter.route('/market/:address', {
  name: 'market',
  action: function () {
    BlazeLayout.render('mainLayout', {main: 'market'})
  }
})

FlowRouter.route('/market/:marketAddress/:productAddress', {
  name: 'product',
  action: function () {
    BlazeLayout.render('mainLayout', {main: 'product'})
  }
})

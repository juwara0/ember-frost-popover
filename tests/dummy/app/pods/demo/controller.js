import Ember from 'ember'
const {Controller} = Ember

export default Controller.extend({
  actions: {
    onCreate (item) {
      window.alert(`got here ${item}`)
    }
  }
})

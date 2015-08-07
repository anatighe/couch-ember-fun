import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('song');
  },

  actions: {
    createSong: function() {
      this.controllerFor('song').set('globals.isEditing', true);
      var newsong = this.store.createRecord('song');
      this.transitionTo('song', newsong.save());
    },

    saveSong: function() {
      this.modelFor('song').save();
    },

    deleteSong: function() {
      this.modelFor('song').destroyRecord().then(function() {
        console.log(this);
        this.transitionTo('songs');
      }.bind(this));
    }
  }
});
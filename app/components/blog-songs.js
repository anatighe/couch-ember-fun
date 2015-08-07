import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({

  pagedContent: pagedArray("arrangedContent", {pageBinding: "page", perPageBinding: "perPage"}),

  totalPagesBinding: "pagedContent.totalPages",

  arrangedContent: function() {
    return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      sortProperties: ['title'],
      sortAscending: true,
      sortFunction: function(v, w) {
        var lowerV = v.toLowerCase();
        var lowerW = w.toLowerCase();

        if (lowerV < lowerW) {
          return -1;
        }
        if (lowerV > lowerW) {
          return 1;
        }
        return 0;
      },
      content: this.get('songs')
    });
  }.property('songs'),

  actions: {
    createSong: function() {
      this.sendAction('createAction');
    }
  }
});
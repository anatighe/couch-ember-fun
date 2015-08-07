import DS from "ember-data";
import { Model } from 'ember-pouch';

var Song = Model.extend({
  composer: DS.attr('string', {defaultValue: ""}),
  title: DS.attr('string', {defaultValue: ""})
});

export default Song;

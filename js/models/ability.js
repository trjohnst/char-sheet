Dnd.Ability = DS.Model.extend({
  title: DS.attr('string'),
  value: DS.attr('number')
});

Dnd.Ability.FIXTURES = [
  {
    id: 1,
    title: 'Strength',
    value: 8
  },
  {
    id: 2,
    title: 'Dexterity',
    value: 8
  },
  {
    id: 3,
    title: 'Constitution',
    value: 8
  },
  {
    id: 4,
    title: 'Intelligence',
    value: 8
  },
  {
    id: 5,
    title: 'Wisdom',
    value: 8
  },
  {
    id: 6,
    title: 'Charisma',
    value: 8
  },
]
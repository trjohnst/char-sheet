Dnd.Ability = DS.Model.extend({
  title: DS.attr('string'),
  rank: DS.attr('number')
});

Dnd.Ability.FIXTURES = [
  {
    id: 1,
    title: 'Strength',
    rank: 8
  },
  {
    id: 2,
    title: 'Dexterity',
    rank: 8
  },
  {
    id: 3,
    title: 'Constitution',
    rank: 8
  },
  {
    id: 4,
    title: 'Intelligence',
    rank: 8
  },
  {
    id: 5,
    title: 'Wisdom',
    rank: 8
  },
  {
    id: 6,
    title: 'Charisma',
    rank: 8
  },
]
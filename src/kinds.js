window.kinds = {
  data: [
    { id: 'dog', text: 'Create Dog Robot 🐕' },
    { id: 'turtle', text: 'Create Turtle Robot 🐢' },
    { id: 'bee', text: 'Create Bee Robot 🐝' },
    { id: 'cat', text: 'Create Cat Robot 🐈' },
    { id: 'rhino', text: 'Create Rhino Robot 🦏' }
  ],
  template: function (kind, i) {
    var color = !!(i % 2) ? 'light' : 'dark'
    return `<button id="${kind.id}" class="btn btn-${color} btn-block">${kind.text}</button>`
  }
}

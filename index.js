// In `index.js`, write a constructor function called `BoardMember` that sets the following properties: `name`, `homeState`, and `training`.

const BoardMember = function (name, homestate, training) {
  [self.name, self.homestate, self.training] = [name, homestate, training]
}
// Add following methods to the class:
// + `veto` — returns `No, I must disagree`
//
// + `approve` — returns `You can do that!`
//
// + `doCharity` — returns `I like to help people.`
//
// + `releasePressStatement` — returns `You will see great things from Scuber.`
//
// + `sayHi` — returns `"Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.`

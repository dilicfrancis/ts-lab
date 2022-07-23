// import { User } from "./models/User";

// const user = User.build({ id: 5 });
// // const user = new User({ id: 4 });

// // user.attributes.get("id"); //Bad Access - the caller should not have to reach into delegated classes. The User class will contain the necessary methods and then delegate execution to other classes when those methods are called.
// //user.cycle.save(`${id}`); // user.attributes.get("id"); //Bad Access - the caller should not have to reach into delegated classes. The User class will contain the necessary methods and then delegate execution to other classes when those methods are called.

// user.on("change", () => console.log(user));
// user.fetch();

// const collection = User.buildCollection();
// collection.on("change", () => console.log(collection));
// collection.fetch();

//////////----------------------------------

// import { UserEdit } from "./views/UserEdit";
// import { User } from "./models/User";

// const user = User.build({ name: "Gotaka Lina", age: 31 });
// const root = document.getElementById("root");
// if (!root) throw new Error("Root Element Does Not Exist!");
// const userEdit = new UserEdit(root, user);
// userEdit.render();

///////////-----------------------------------

import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserAttributes } from "./models/User";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserAttributes) => User.build(json)
);

users.on("change", () => {
  const root = document.getElementById("root");
  if (!root) throw new Error("No Root Element Found");
  new UserList(root, users).render();
});

users.fetch();

import { User, UserAttributes } from "../models/User";
import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserAttributes> {
  renderItem(instance: User, itemParent: Element): void {
    new UserShow(itemParent, instance).render();
  }
}

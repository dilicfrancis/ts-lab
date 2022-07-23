import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(instance: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    for (let instance of this.collection.models) {
      const itemParent = document.createElement("div");
      this.renderItem(instance, itemParent);
      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }
}

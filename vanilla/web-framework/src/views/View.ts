import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};
  constructor(public parent: Element, public instance: T) {
    this.bindInstance();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  //Forces child class to create these methods
  // abstract eventsMap(): { [key: string]: () => void };

  //Implements above methods so that child class needn't create them
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindInstance(): void {
    this.instance.on("change", (): void => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [event, tag] = eventKey.split(":");
      fragment
        .querySelectorAll(tag)
        .forEach((e) => e.addEventListener(event, eventsMap[eventKey]));
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ""; //clears previous rendition before new render
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}

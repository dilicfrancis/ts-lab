namespace Application {
  export abstract class General<T extends HTMLElement, K extends HTMLElement> {
    htmlTemplate: HTMLTemplateElement;
    htmlHost: T;
    html: K;

    constructor(
      template: string,
      host: string,
      prefix: boolean,
      html?: string
    ) {
      this.htmlTemplate = document.getElementById(
        template
      )! as HTMLTemplateElement;
      this.htmlHost = document.getElementById(host)! as T;

      const node = document.importNode(this.htmlTemplate.content, true);
      this.html = node.firstElementChild as K;
      if (html) this.html.id = html;

      this.attach(prefix);
    }

    private attach(prefix: boolean) {
      this.htmlHost.insertAdjacentElement(
        prefix ? "afterbegin" : "beforeend",
        this.html
      );
    }

    abstract configure(): void;
    abstract render(): void;
  }
}

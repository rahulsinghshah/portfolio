declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | Element[] | NodeList | any, ...args: any[]);
    revert(): void;
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    constructor(vars?: any);
    static create(vars?: any): ScrollSmoother;
    static get(): ScrollSmoother | undefined;
    static refresh(force?: boolean): void;
    paused(value?: boolean): boolean;
    kill(): void;
    revert(): void;
    scrollTop(value?: number): number;
    scrollTo(target: any, smooth?: boolean, position?: string | number): void;
  }
}

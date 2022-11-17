import { Renderer } from "marked";

export class BaseRenderer {
  assemble(): Partial<Renderer> {
    throw new Error("assemble function is not implement!");
  }
}

import { createBEM } from './bem';
import { createComponent } from './component';
import { createTranslate } from './translate';

export function createNamespace(name: string) {
  name = 'i-think-' + name;
  return [
    createComponent(name),
    createBEM(name),
    createTranslate(name),
  ] as const;
}

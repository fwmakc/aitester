import type { Ref } from 'vue';

export function increment(arg: Ref<number>): number {
  arg.value += 1;
  return arg.value;
}

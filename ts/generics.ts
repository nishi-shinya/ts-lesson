// ジェネリクス
function copy <T extends { name: string}, U extends keyof T>(value: T, key: U) {
  console.log(value[key]);
  return value;
}

console.log(copy({ name: 'hello' }, 'name'));

// keyof演算子
type K = keyof { name: string, age: number }

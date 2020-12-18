// インターセクション型
interface Enginner {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

type EnginnerBlogger = Enginner & Blogger;
const quiil: EnginnerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

// タイプガード
// 関数のオーバーロード
function toUpperCase (x: string): string
function toUpperCase (x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}

type NomadWorker = Enginner | Blogger;
function describeProfile (nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  // in演算子でプロパティが存在するか調べられる
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
}

class Dog {
  kind: 'dog' = 'dog'
  speak () {
    console.log('bow-wow');
  }
}

class Bird {
  kind: 'bird' = 'bird'
  speak () {
    console.log('tweet-tweet');
  }
  fly () {
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet (pet: Pet) {
  pet.speak();
  // instanceof演算子でクラスを絞り込める
  if (pet instanceof Bird) {
    pet.fly();
  }

  // タグ付きユニオン
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }
}

// 型アサーション
const input = <HTMLInputElement>document.getElementById('input');
input.value = 'initial input value';
const asInput = document.getElementById('asInput') as HTMLInputElement;
input.value = 'intial input value';

// none Null assertion operator
const noneInput = document.getElementById('noneInput')!;

// インデックスシグネチャ
interface Desiner {
  name: string;
  [index: string]: string;
}
const desiner: Desiner = {
  name: 'Quill',
  role: 'web'
}


// タイプガード
// 関数のオーバーロード
function toUpperCaseOver (x: string): string
function toUpperCaseOver (x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}


// 関数のオーバーロード
const upperHello = toUpperCaseOver('hello');

// optionalChaining
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string
      last: string
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1
}
console.log(downloadedData.user?.name);


// NullishCoallesceing
const userData = downloadedData.user ?? 'no-user';

// Lookup型
type id = DownloadedData["id"]




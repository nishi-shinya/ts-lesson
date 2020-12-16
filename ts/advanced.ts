// インターセクション型
type Enginner = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

type EnginnerBlogger = Enginner & Blogger;
const quiil: EnginnerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}


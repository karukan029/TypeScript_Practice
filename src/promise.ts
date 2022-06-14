import { resolve } from "path";

console.log("タイマーを設定しました");

const p = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 3000);
})

p.then((num) => {
  console.log(`結果は${num}`);
})

// 副作用ロジックを実行する非同期処理
// コールバック関数にした方が、一手間くらいの処理なら楽か？
// 元々実装されている処理の改修なので...
// 保守性考えると、コールバックはないんだけどね...

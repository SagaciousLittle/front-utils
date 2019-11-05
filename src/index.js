// 可以尽情的使用es的新特性了，可以在dist对应文件查看编译后的结果

// let const
let a = 1
const b = true

// 箭头函数
const c = a => a * 10

// 解构赋值
const d = {
  a: 1,
  b: 2,
}

/**
 * f = {
 *  a: 1,
 *  b: 2,
 *  c: 3,
 * }
 */
const f = {
  ...d,
  c: 3,
}

// 新API...
// 自行翻阅ES6手册学习，能大幅度提高工作效率 link: https://es6.ruanyifeng.com/

const {
  watch,
  src,
  dest,
  series,
  parallel,
} = require('gulp')
const babel = require('gulp-babel')
const execa = require('execa')
const chalk = require('chalk')
const dayjs = require('dayjs')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

// 清空dist
const clear = async function () {
  await execa('rimraf dist')
  log(chalk.green('完成清空dist文件夹'))
}

// 转义JS
const reverseJs = async function () {
  src('src/**/*.js')
    .pipe(babel({
      presets: [
        ['@babel/preset-env', {
          useBuiltIns: 'usage',
          corejs: 3,
        }],
      ],
    }))
    .pipe(dest('dist'))
  log(chalk.green('完成转义JS代码'))
}

// lint JS
const lintJs = async function () {
  try {
    await execa('eslint --fix src/**/*.js')
  } catch (e) {
    log(`\n${chalk.red(e.stdout)}`)
  }
}

// 转义css
const reverseCss = async function () {
  src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', function (e) {
        log(`\n\n${chalk.red(e.message)}`)
      }))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(dest('./dist/css'))
  log(chalk.green('完成转义CSS代码'))
}

// 开始
const start = async function () {
  log(chalk.green('开始监听文件变化...'))
}

watch('src/**/*', series(clear, lintJs, parallel(reverseJs, reverseCss)))

exports.default = series(clear, lintJs, parallel(reverseJs, reverseCss), start)

function log (message) {
  console.log(`[${chalk.gray(dayjs()
    .format('HH:mm:ss'))}] ${message}`)
}

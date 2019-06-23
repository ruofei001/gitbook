### npm run release 怎样执行的

- release 命令写在 scripts 中

```
script: {
  "release": "release"
}
```

- release 是怎样执行的？
  > 这种类似于自定义的命令，是在 node_modules 下.bin 文件中有对应的命令文件，可以参考 vue-cli-service 命令
  > 也就是说这个命令文件是 npm 自动根据包的配置生成的
- wtt-release 包相对于普通的 npm 包特点是
  1. package.json,bin 很关键！
  ```
  "main": "index.js",
  "bin": "./index.js",
  ```
  2. 入口文件 index.js 这个配置很重要！感觉像是临时注册了一个本地的命令
  ```
  #!/usr/bin/env node
  ```

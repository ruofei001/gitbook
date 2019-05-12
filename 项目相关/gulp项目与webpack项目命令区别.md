|               |  启动伺服器 | 伺服器默认端口  | 只编译不生成zip | 编译并生成上线zip包|
| -------- | -------- |-------- | -------- |-------- |
| gulp   | npm run  server  | 20000   |  npm run dist   | npm run release   |
| webpack  (xxx为项目名) |  npm start xxx   | 8080  | npm run build xxx   | npm run release xxx   |



gulp项目编译压缩以已经打入zip包中文件和当前未提交文件为准

webpack项目编译压缩以项目名为准
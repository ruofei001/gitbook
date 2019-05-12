# npm依赖版本管理

### 内部公共依赖地址

> http://git.taoche.com/groups/npm

### semver版本管理

a.b.c

> a: 主版本号
> b: 次版本号
> c: 修订号

### 使用`npm version` cli管理npm包版本

> npm version [majoir|minor|patch]

```bash
# 当前版本 1.2.3

# 升级主版本号 1.2.3 -> 2.0.0
# 主版本号代表不兼容以前版本的改动
npm version major

# 升级次版本号 1.2.3 -> 1.3.0
# 次版本号代表兼容性的新特性添加
npm version minor

# 升级修订号 1.2.3 -> 1.2.4
# 修订号代表修复上一版的bug
npm version patch

```

### 流程
1. npm包的修改迭代，并commit/push
2. 使用`npm version`改动版本
3. git push
4. git push --tags
5. 调用方更改依赖版本


### 内部依赖使用(git+http或git+ssh)
```json
"dependencies": {
  "href": "git+http://git.taoche.com/npm/href.git#v1.0.0",
  "tc": "git+ssh://git@git.taoche.com/npm/tc.git#v0.1.14",
  ...
}
```
务必要加#版本号

### 参考

* semver: https://semver.org/lang/zh-CN/
# make

## `.editorconfig`
[https://github.com/airbnb/javascript/blob/master/.editorconfig](https://github.com/airbnb/javascript/blob/master/.editorconfig)

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
# editorconfig-tools is unable to ignore longs strings or urls
max_line_length = off

[*.md]
indent_size = false
```

## `.npmrc`
[https://github.com/slidevjs/slidev/blob/main/.npmrc](https://github.com/slidevjs/slidev/blob/main/.npmrc)

```
shamefully-hoist=true
ignore-workspace-root-check=true
strict-peer-dependencies=false
```

## `eslint`
> choose `eslint-config-airbnb`
&&
`eslint-config-alloy`
1. 基本配置项目

```bash
pnpm add -D eslint eslint-config-airbnb eslint-config-alloy
```

1. babel，React+TS 基础内建

[https://github.com/AlloyTeam/eslint-config-alloy#react](https://github.com/AlloyTeam/eslint-config-alloy#react)
```bash
pnpm add -D @babel/core @babel/eslint-parser @babel/preset-react
```
[https://github.com/AlloyTeam/eslint-config-alloy#typescript-react](https://github.com/AlloyTeam/eslint-config-alloy#typescript-react)

```bash
pnpm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
```
> touch .eslintrc

因为是**vite** `package.json`中`"type":"module"`

`.js` 要运行需改名 `.cjs`
```jsonc
{
  "root": true,
  "extends": [
    "airbnb",
    "alloy",
    "alloy/react",
    "alloy/typescript"
  ]
}
```
> VSCode 配置 auto fix

[https://github.com/AlloyTeam/eslint-config-alloy#autofix-eslint-errors-on-save](https://github.com/AlloyTeam/eslint-config-alloy#autofix-eslint-errors-on-save)

> 增加lint脚本
`"lint" : "eslint --fix src --ext .ts,.tsx"`

> 处理常见规则
```json
{
  "import/no-unresolved": 0,
  "import/extensions": 0,
  "import/no-extraneous-dependencies": 0
}
```



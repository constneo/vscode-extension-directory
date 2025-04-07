# Extension Manager

## Options

.vscode/settings.json

```json
{
  "vscode-extension-directory.show": false
}
```

## Build

```shell
npm install

npm install -g @vscode/vsce

vsce package --no-dependencies

vsce package --dependencies
```

## Document

[Contribution Points](https://code.visualstudio.com/api/references/contribution-points)  
[Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)

// import  pkg from "../package.json" with  { type: "json" }

/**
 * 当前插件的唯一标识符,应该与 package.json中的 configuration.id相对应
 * @example
 * context.extension.id == "publisher.name"
 * vscode.extensions.getExtension(id).id == "publisher.name"
 */
export const EXNTENSION_ID = "vscode-extension-directory"

/**
 * 插件名字, package.json -> displayName
 */
export const DISPLAY_NAME = "Open Extension Directory"

/**
 * package.json -> contributes -> commands
 */
export const Commands = {
  open: `${EXNTENSION_ID}.open`
}

/**
 * 配置
 * @type {Configuration}
 */
export const Config = {
  show: true
}

export const message = `Thank you for using ${DISPLAY_NAME}`

export const selector = [{ scheme: "file", language: "markdown", pattern: "**/*.md" }]

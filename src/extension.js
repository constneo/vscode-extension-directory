import vscode from "./vscode.js"
import open from "./provider.js"

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
  context.subscriptions.push(open(context))
  // vscode.authentication.registerAuthenticationProvider("github", label, provider)
  vscode.authentication.onDidChangeSessions(e => {
    console.log("[ e ]->", e)
  })
}

export function deactivate() {}

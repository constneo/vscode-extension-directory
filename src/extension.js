import vscode from "./vscode.js"
import open from "./provider.js"

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
  context.subscriptions.push(open(context))
}

export function deactivate() {}

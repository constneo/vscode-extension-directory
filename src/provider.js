import vscode from "./vscode.js"
import { Commands, EXNTENSION_ID } from "./const.js"
import { getConfig } from "./utils.js"

/**
 * @param {vscode.ExtensionContext} context
 */
export default context => {
  console.log(`Register ${EXNTENSION_ID} extension.`)

  const disposable = vscode.commands.registerCommand(Commands.open, async id => {
    const ex = vscode.extensions.getExtension(id)

    if (ex) {
      vscode.commands.executeCommand("revealFileInOS", vscode.Uri.file(ex.extensionPath))
    } else {
      vscode.window.showInformationMessage("Please enable the extension.")
    }
  })

  return disposable
}

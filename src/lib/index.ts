// place files you want to import through the `$lib` alias in this folder.

import snarkdown from "snarkdown"

export const markdownToHTML = (file: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsText(file)

    reader.onload = ({ target }) => {
      if(typeof target?.result === 'string') resolve(snarkdown(target?.result))
    }
  })
}
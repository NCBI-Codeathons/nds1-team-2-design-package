import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'

export const formatWithPrettier = (component) => {
    return prettier.format(component, {
        parser: 'html',
        plugins: [HTMLParser],
    })
}

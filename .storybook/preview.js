/** @type { import('@storybook/react').Preview } */
import {addDecorator} from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
//import { withAlly } from '@storybook/addon-ally'
import Center from '../src/pages/Center/Center';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import {withConsole} from '@storybook/addon-console';
//  addDecorator((storyFn, context) => withConsole()(storyFn)(context))
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // options: {
    //   storySort: (a,b) => 
    //   a[1].kind===b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {numeric})
    // }
  },
};
// addDecorator(withKnobs)
// addDecorator(withAlly)
//addParameters({
  //viewports: {
    //viewports: INITIAL_VIEWPORTS,
  //}
//})

export default preview;

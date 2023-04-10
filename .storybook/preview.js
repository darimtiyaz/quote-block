/** @type { import('@storybook/react').Preview } */
//import {addDecorater} from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
//import { withAlly } from '@storybook/addon-ally'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
//addDecorater(withknobs)
//addDecorater(withAlly)
//addParameters({
  //viewports: {
    //viewports: INITIAL_VIEWPORTS,
  //}
//})
export default preview;

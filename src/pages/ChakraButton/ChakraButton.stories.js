import React from "react";
import  {Button}  from "@chakra-ui/core";
import {addDecorator} from '@storybook/react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import {action, actions} from '@storybook/addon-actions'
import {withConsole} from '@storybook/addon-console';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    variantColor: {control: 'text'},
    children: {control: 'text'},
    onClick: {action: 'clicked'}
  },
  decorators:((storyFn, context) => withConsole()(storyFn)(context)),
  decorators:(withKnobs),
  decorators:[(story => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m='4'>{story()}</Box>
    </ThemeProvider>))]
}

const Template=args=> <Button {...args} />
export const Success = Template.bind({})
Success.args={
  variantColor: 'green',
  children: 'Success'
}
export const Danger = Template.bind({})
Danger.args={
  variantColor: 'red',
  children: 'Danger'
}

export const Succes = () => <Button onClick={action('Click handler')} variantColor="green">Succes</Button>
export const Dange = () => <Button onClick={actions('onClick', 'onMouseOver')} variantColor="red">Dange</Button>
export const Log = () => <Button onClick={()=>console.log('Button clicked')} variantColor="blue">Succes</Button>
export const Knobs = () => <Button variantColor="purple" disabled={boolean('Disabled', false)}>{text('Label', 'Button Label')}</Button>

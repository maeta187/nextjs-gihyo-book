import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProductCardList from './index'

export default {
  title: 'Organisms/ProductCardList',
  argTypes: {
    numberPerRow: {
      control: { type: 'number' },
      description: '1行に表示する商品数',
      table: {
        type: { summary: 'number' }
      }
    },
    numberPerRowForMobile: {
      control: { type: 'number' },
      description: 'モバイルで1行に表示する商品数',
      table: {
        type: { summary: 'number' }
      }
    }
  }
} as ComponentMeta<typeof ProductCardList>

const Template: ComponentStory<typeof ProductCardList> = (args) => (
  <ProductCardList {...args}>
    <p>Foo</p>
    <p>Bar</p>
    <p>Foo</p>
    <p>Bar</p>
  </ProductCardList>
)

export const Standard = Template.bind({})
Standard.args = {
  numberPerRow: 4,
  numberPerRowForMobile: 2
}

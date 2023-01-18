import { ComponentMeta } from '@storybook/react'
import ProductCardCarousel from './index'

export default { title: 'Organisms/ProductCardCarousel' } as ComponentMeta<
  typeof ProductCardCarousel
>

export const Standard = () => (
  <>
    <ProductCardCarousel>
      <p>Foo</p>
      <p>Bar</p>
    </ProductCardCarousel>
  </>
)

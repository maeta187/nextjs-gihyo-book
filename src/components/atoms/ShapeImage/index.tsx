import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

type ImageShape = 'circle' | 'square'

type ShapeImageProps = ImageProps & { shape?: ImageShape }

const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`
/**
 * シェイプイメージ
 */

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...ImageProps } = props
  return <ImageWithShape shape={shape} {...ImageProps} />
}

export default ShapeImage

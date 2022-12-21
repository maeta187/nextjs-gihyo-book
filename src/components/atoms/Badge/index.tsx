import styled from 'styled-components'

// バッジの円形
const BadgerWrapper = styled.div<{ backgroundColor: string }>`
  border-radius: 20px;
  height: 20px;
  min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`
// バッジ内のテキスト
const BadeText = styled.p`
  color: #fff;
  font-size: 11px;
  user-select: none;
`

interface BadgeProps {
  /**
   * バッジのテキスト
   */
  content: string
  /**
   * バッジの色
   */
  backgroundColor: string
}

/**
 * バッジ
 */
const Badge = ({ content, backgroundColor }: BadgeProps) => {
  return (
    <BadgerWrapper backgroundColor={backgroundColor}>
      <BadeText>{content}</BadeText>
    </BadgerWrapper>
  )
}

export default Badge

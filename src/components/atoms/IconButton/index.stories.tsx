import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  CloseIcon,
  SearchIcon,
  CloudUploadIcon,
  CancelIcon,
  CheckBoxOutlineBlankIcon,
  CheckBoxIcon,
  PersonIcon,
  GitHubIcon,
  PersonOutlineIcon,
  ShoppingCartIcon
} from './index'

export default {
  title: 'Atoms/IconButton',
  argTypes: {
    color: {
      control: { type: 'string' },
      description: 'アイコン色',
      table: {
        type: { summary: 'ThemeColors' }
      }
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' }
      }
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'アイコンのサイズ',
      table: {
        type: { summary: 'number' }
      }
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' }
      }
    }
  }
} as ComponentMeta<typeof SearchIcon>

const Template: ComponentStory<typeof SearchIcon> = (args) => (
  <>
    <CloseIcon {...args} />
    <SearchIcon {...args} />
    <CloudUploadIcon {...args} />
    <CancelIcon {...args} />
    <CheckBoxOutlineBlankIcon {...args} />
    <CheckBoxIcon {...args} />
    <PersonIcon {...args} />
    <GitHubIcon {...args} />
    <PersonOutlineIcon {...args} />
    <ShoppingCartIcon {...args} />
  </>
)

export const Normal = Template.bind({})

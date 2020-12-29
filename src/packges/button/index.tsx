import { PropType, CSSProperties } from 'vue';
// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND } from '../utils/constant';
// Components
const [createComponent, bem] = createNamespace('button');
// 定义类型
export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success' 
  | 'info'
  | 'warning'
  | 'light'
  | 'dark'
  | 'danger';
export default createComponent({
  props: {
    text: String,
    type: {
      type: String as PropType<ButtonType>,
      default:'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, slots }) {
    const {
      type,
      disabled
    } = props;
    const classes = [
      bem([
        type,
        {
          disabled
        }
      ])
    ]
    return () => {
      return (
        <button  class={classes} disabled={disabled}>{slots}</button>
      )
    }
  }
})
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
export type ButtonSize = 'large' | 'middle' | 'small';
import ITicon from '../Icon/icon';
import ILoading from '../Loading/loading';
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
    },
    size:{
      type:String as PropType<ButtonSize>,
      default: 'middle'
    },
    icon: {
      type: String,
      default: ''
    },
    num:{
      type: String,
      default: ''
    },
    loading:{
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, slots }) {
    const {
      type,
      disabled,
      size,
      icon,
      num,
      loading
    } = props;
    const classes = [
      bem([
        type,
        size,
        {
          disabled
        }
      ])
    ]
    return () => {
      return (
        <button class={classes} disabled={ loading || disabled}>
          {
            loading ?
            <span style="    display: flex;align-items: center;">
              {loading && <ILoading/>}
              {!loading && icon && <ITicon icon={icon} num={num}/>}
              <span>{slots}</span>
            </span>:
            <>
              {loading && <ILoading/>}
              {!loading && icon && <ITicon icon={icon} num={num}/>}
              <span>{slots}</span>
            </>
          }
        </button>
      )
    }
  }
})
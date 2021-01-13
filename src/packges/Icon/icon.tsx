import { PropType, CSSProperties } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND } from '../utils/constant';
import '../styles/fonts/iconfont.js';
// Components
const [createComponent, bem] = createNamespace('icon');
export default createComponent({
  props:{
    icon:{
      type: String,
      default: 'bufentuikuan'
    },
    type: {
      type: String,
      default: 'icon'
    },
    size:{
      type: String,
      default: '20'
    },
    color: {
      type: String,
      default: '#ccc'
    },
    iconFont: {
      type: String,
      default:'1'
    }
  },
  setup(props) {
    const {
      icon,
      type,
      size,
      color,
      iconFont
    } = props
    const classes = [
      bem([
        iconFont == '1' ? ` iconfontwpk wpk-ui-icon-${icon}`: ` ${icon}`,
      ])
    ]
    return ()=>{
      return <>
        {
          type == 'icon' &&  <i class={classes} style={{fontSize: size+'px',color:color}}></i>
        }   
        {
          type == 'svg' &&
          <svg class="icon" aria-hidden="true" style={{width: size+'px',height: size+'px'}}>
            <use xlinkHref={`#wpk-ui-icon-${icon}`}></use>
          </svg> 

        }  
        </>
    }
  },
})
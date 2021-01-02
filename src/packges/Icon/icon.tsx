import { PropType, CSSProperties } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND } from '../utils/constant';
// Components
const [createComponent, bem] = createNamespace('icon');
export default createComponent({
  props:{
    icon:{
      type: String,
      default: ''
    },
    num:{
      type: String,
      default: '14'
    }
  },
  setup(props) {
    const {
      icon,
      num
    } = props
    console.log(icon,'icon--d')
    const classes = [
      bem([
        ` iconfontwpk wpk-ui-icon-${icon}`,
      ])
    ]
    return ()=>{
      return <i class={classes} style={{fontSize:num+'px'}}></i>
    }
  },
})
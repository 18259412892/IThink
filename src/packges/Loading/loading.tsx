import { PropType, CSSProperties } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND } from '../utils/constant';
// Components
const [createComponent, bem] = createNamespace('loading');
export default createComponent({
  props:{
    num:{
      type:String,
      default: '5'
    }
  },
  setup(props){
    const {
      num
    } = props;
    const classes = [
      bem([
        ` load-container load${num}`
      ])
    ]
    return ()=>{
      return(<div class={classes}>
        <div class="loader">Loading...</div>
    </div>)
    }
  }
})
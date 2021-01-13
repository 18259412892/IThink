import { PropType, CSSProperties } from 'vue';
import { optionfnProps ,alertProps } from '../types/types';
// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND } from '../utils/constant';
// Components
const [createComponent, bem] = createNamespace('alert');
interface optionsProps{
  type?: string;
  message?: string|HTMLDivElement;
  timeout?: number;
}
export default function Message(options:alertProps={}){
  const {
    type = 'info',
    message = 'alert弹窗',
    timeout = 2500,
  } = options;
  let classes = [
    bem([
      `${type}`
    ])
  ];
  let optionsfn:optionfnProps = {
    _html(){
      let str = `<div>
        ${message}
      </div>`;
      return str;
    },
    dom(){
       let dom:HTMLDivElement  = document.createElement('div');
       dom!.className = classes.toString();
       dom!.style.zIndex = `1000`
       dom.innerHTML = this._html();
       document.body.appendChild(dom);
      setTimeout(()=>{
          this.remove(dom)
        },timeout)
      let len = document.querySelectorAll('.i-think-alert').length;
      if(len == 1) return false;
      dom.style.top = ((dom.clientHeight + 5) * (len - 1))+ 'px';
    },
    remove(dom:any){
      let num = 1;
      const Imte = setTimeout(() => {
        if(dom){
          dom.remove();
        }
      }, timeout);
    },
   
    init(){
      this.dom();
    }
  };
  return optionsfn['init']();
}
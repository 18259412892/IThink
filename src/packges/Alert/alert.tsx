import { PropType, CSSProperties } from 'vue';
import { optionfnProps ,alertProps } from '../types/types';
// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND } from '../utils/constant';
// Components
const [createComponent, bem] = createNamespace('alert');
import tButton from '../button/index'
export default function Message(options:alertProps={}){
  let {
    type = 'info',
    message = 'alert弹窗',
    timeout = 2500,
    tip = '1',
    title = 'title',
    ok = function(){}
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
    _alertHtml() {
      let str = `
            <div class="i-think-header">
              ${title}
            </div>
            <div class="i-think-content">${message}</div>
            <div class="i-think-footer">
              <button class="i-think-button i-think-button-primary i-think-button-middle" >确认</button>
            </div>
      `;

      return str;
    },
    confirmFn() {
      let button = document.querySelector('.i-think-alert-cont .i-think-footer button');
      console.log(button, '--button')
      let _self = this;
      button?.addEventListener('click', function () {
        ok && ok();
        _self?.alerHide();
      })
    },
    alerHide() {
      let conDom = document.querySelector('.i-think-alert-cont');
      let ovlDom = document.querySelector('.i-think-ovl');
      ovlDom!.remove();
      conDom!.remove();
    },
    dom(){
      let dom:HTMLDivElement  = document.createElement('div');
      if (tip == '1') {
        dom!.className = classes.toString();
        dom!.style.zIndex = `1000`
        dom.innerHTML = this._html();
        setTimeout(()=>{
          this.remove(dom)
        }, timeout as any)
        let len = document.querySelectorAll('.i-think-alert').length;
        if(len == 1) return false;
        dom.style.top = ((dom.clientHeight + 5) * (len - 1))+ 'px';
      } else if(tip == '2') {
        let ovl:HTMLDivElement = document.createElement('div');
        ovl.className = 'i-think-ovl';
        ovl!.style.zIndex = `999`;
        dom!.className = 'i-think-alert-cont';
        dom!.style.zIndex = `1000`;
        dom.innerHTML = this._alertHtml();
        document.body.appendChild(ovl);
          
      }
      document.body.appendChild(dom);
      if (tip == '2') {
        this.confirmFn();
      }
      
    },
    remove(dom:any){
      let num = 1;
      const Imte = setTimeout(() => {
        if(dom){
          dom.remove();
        }
      }, timeout as any);
    },
   
    init(){
      this.dom();
    }
  };
  return optionsfn['init']();
}
import { PropType, CSSProperties } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND } from '../utils/constant';
// Components
const [createComponent, bem] = createNamespace('message');
interface optionsProps {
  type?: string
  timeout?: number//2500,
  right?: boolean
  content?: string// = "" || _msg[type],
  position?: string// = right ? 'right': 'center',
  showClose?: boolean
  closeAll?: boolean
}
interface iconProps{
  [index:string]:string
}

export default function Message(options:optionsProps={}){
  const _msg: iconProps = {
    info: 'info',
    warning: 'warning',
    error: 'error',
    success: 'success',
    loading: 'loading',
    close: 'close',
  }
  const {
    type = 'info',
    timeout = 2500,
    right = false,
    content = "" || _msg[type],
    position = right ? 'right': 'center',
    showClose = false,
    closeAll = false
  } = options;
  const classes = [
    bem([
      `${type}`
    ])
  ];
  let _icon:iconProps = {
    info: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#1890ff" stroke="#1890ff" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z" fill="#FFF"/><path d="M24.5 34V20H23.5H22.5" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 34H28" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    warning: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#faad14" stroke="#faad14" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#FFF"/><path d="M24 12V28" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    error: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#f5222d" stroke="#f5222d" stroke-width="4" stroke-linejoin="round"/><path d="M29.6569 18.3431L18.3432 29.6568" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3432 18.3431L29.6569 29.6568" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    success: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z" fill="#52c41a" stroke="#52c41a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 24L22 29L32 19" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    loading: '<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    close: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  let _options =  {
    create(body:any){
      let dom = document.createElement('div');
      body.appendChild(dom);
    },
    _html(){
      let _html = `
        <div class="qmsg-content-loading">
          <i class="qmsg-icon">${_icon[type]}</i>
          <span style="margin-right:${showClose ? '20px' : ''}">${content}</span>
          ${showClose ? `<i class="qmsg-icon qmsg-icon-close" >${_icon['close']}</i>` : ''}
        </div>
      `;
      return _html;
    },
    dom(){
      let dom = document.createElement('div');
      dom.className = classes;
      let qmsgItem = document.createElement('div');
      let contentDom = document.createElement('div');
      qmsgItem.className = 'qmsg-item';
      contentDom.className = 'content';
      contentDom.innerHTML = this._html();
      qmsgItem.appendChild(contentDom);
      dom.appendChild(qmsgItem);
      document.body.appendChild(dom);
      qmsgItem.style.textAlign = position;
      let len = document.querySelectorAll('.i-think-message').length;
      this.doms = dom;
      if(!showClose){
        this.remove(dom)
      } else {
        this.removeFn()
      }
      if(len == 1) return false;
      dom.style.top = dom.clientHeight * (len - 1)+ 'px';
    },
    removeFn(){
      // this.doms.remove();
      let _colse = this.doms.querySelectorAll('.qmsg-icon-close');
      _colse.forEach(function(item:any,index:number){
        item.addEventListener('click',function(ev:any){
          let _name = ev.target;
          let _dom = _name.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
          let num = 1;
          const Imte = setInterval(()=>{
            if(num < 0){
              clearInterval(Imte);
              _dom.remove();
            }
            num = num - .3
            _dom.style.opacity = num
          },80)
        })
      })
    },
    remove(dom:any){
      let num = 1;
     const Imte = setTimeout(() => {
        if(dom){
          dom.remove();
        }
      }, timeout);
    },
    info(){
      this.dom();
      console.log('info')
    },
    warning(){
      this.dom();
      console.log('warning')
    },
    success(){
      this.dom();
      console.log('success')
    },
    error(){
      this.dom();
      console.log('error')
    },
    loading(){
      this.dom();
      console.log('loading')
    },
    closeAll(){
      let domsAll = document.querySelectorAll('.i-think-message');
      if(domsAll){
        Array.from(domsAll).forEach(item=>{
          let num = 1;
          const Imte = setInterval(()=>{
            if(num < 0){
              clearInterval(Imte);
              item.remove();
            }
            num = num - .3
            item.style.opacity= num
          },80)
        })
      }
    }
  }
  return  closeAll ? _options['closeAll']() : _options[type]();
}
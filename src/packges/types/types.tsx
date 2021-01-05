/**
* @interface
* @desc: 返回对象函数
* @author:  zhangyunjiang
* @creatDate 2021-01-05 23:34:05
* @param {*}  
*/
export interface optionfnProps  {
  [propName:string] : any; //定义返回整个对象函数 return {a(){},b(){},c(){}}
};
/**
* @interface
* @desc: 公共 类型 时间
* @author:  zhangyunjiang
* @creatDate 2021-01-06 00:07:14
* @param {*}  val
*/
export interface commonProps{
  type?: string; //类型
  timeout?: number; //时间
}

/**
* @interface
* @desc: alert 弹窗提示类型
* @author:  zhangyunjiang
* @creatDate 2021-01-06 00:07:40
* @param {*}  val
*/
export interface alertProps extends commonProps{
  message?: string|HTMLDivElement; //提示内容
}

/**
* @interface
* @desc: messages 类型
* @author:  zhangyunjiang
* @creatDate 2021-01-06 00:07:55
*/
export interface messagesProps  extends commonProps {
  right?: boolean; //固定右边打开
  content?: string;// = "" || _msg[type], 提示内容
  position?: string;// = right ? 'right': 'center', 弹窗 方向 左中右
  showClose?: boolean; //是否显示关闭按钮
  closeAll?: boolean; //关闭全部
}

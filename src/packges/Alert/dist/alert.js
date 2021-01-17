"use strict";
exports.__esModule = true;
// Utils
var utils_1 = require("../utils");
// Components
var _a = utils_1.createNamespace('alert'), createComponent = _a[0], bem = _a[1];
function Message(options) {
    if (options === void 0) { options = {}; }
    var _a = options.type, type = _a === void 0 ? 'info' : _a, _b = options.message, message = _b === void 0 ? 'alert弹窗' : _b, _c = options.timeout, timeout = _c === void 0 ? 2500 : _c, _d = options.tip, tip = _d === void 0 ? '1' : _d, _e = options.title, title = _e === void 0 ? 'title' : _e, _f = options.ok, ok = _f === void 0 ? function () { } : _f;
    var classes = [
        bem([
            "" + type
        ])
    ];
    var optionsfn = {
        _html: function () {
            var str = "<div>\n        " + message + "\n      </div>";
            return str;
        },
        _alertHtml: function () {
            var str = "\n            <div class=\"i-think-header\">\n              " + title + "\n            </div>\n            <div class=\"i-think-content\">" + message + "</div>\n            <div class=\"i-think-footer\">\n              <button class=\"i-think-button i-think-button-primary i-think-button-middle\" >\u786E\u8BA4</button>\n            </div>\n      ";
            return str;
        },
        confirmFn: function () {
            var button = document.querySelector('.i-think-alert-cont .i-think-footer button');
            console.log(button, '--button');
            var _self = this;
            button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
                ok && ok();
                _self === null || _self === void 0 ? void 0 : _self.alerHide();
            });
        },
        alerHide: function () {
            var conDom = document.querySelector('.i-think-alert-cont');
            var ovlDom = document.querySelector('.i-think-ovl');
            ovlDom.remove();
            conDom.remove();
        },
        dom: function () {
            var _this = this;
            var dom = document.createElement('div');
            if (tip == '1') {
                dom.className = classes.toString();
                dom.style.zIndex = "1000";
                dom.innerHTML = this._html();
                setTimeout(function () {
                    _this.remove(dom);
                }, timeout);
                var len = document.querySelectorAll('.i-think-alert').length;
                if (len == 1)
                    return false;
                dom.style.top = ((dom.clientHeight + 5) * (len - 1)) + 'px';
            }
            else if (tip == '2') {
                var ovl = document.createElement('div');
                ovl.className = 'i-think-ovl';
                ovl.style.zIndex = "999";
                dom.className = 'i-think-alert-cont';
                dom.style.zIndex = "1000";
                dom.innerHTML = this._alertHtml();
                document.body.appendChild(ovl);
            }
            document.body.appendChild(dom);
            if (tip == '2') {
                this.confirmFn();
            }
        },
        remove: function (dom) {
            var num = 1;
            var Imte = setTimeout(function () {
                if (dom) {
                    dom.remove();
                }
            }, timeout);
        },
        init: function () {
            this.dom();
        }
    };
    return optionsfn['init']();
}
exports["default"] = Message;

"use strict";
exports.__esModule = true;
// Utils
var utils_1 = require("../utils");
// Components
var _a = utils_1.createNamespace('button'), createComponent = _a[0], bem = _a[1];
var icon_1 = require("../Icon/icon");
exports["default"] = createComponent({
    props: {
        text: String,
        type: {
            type: String,
            "default": 'primary'
        },
        disabled: {
            type: Boolean,
            "default": false
        },
        size: {
            type: String,
            "default": 'middle'
        },
        icon: {
            type: String,
            "default": ''
        },
        num: {
            type: String,
            "default": ''
        },
        loading: {
            type: Boolean,
            "default": false
        }
    },
    setup: function (props, _a) {
        var emit = _a.emit, slots = _a.slots;
        var type = props.type, disabled = props.disabled, size = props.size, icon = props.icon, num = props.num, loading = props.loading;
        var classes = [
            bem([
                type,
                size,
                {
                    disabled: disabled
                }
            ])
        ];
        return function () {
            return (React.createElement("button", { "class": classes, disabled: loading || disabled }, React.createElement(React.Fragment, null,
                loading && React.createElement("i", { "class": "loading" }),
                !loading && icon && React.createElement(icon_1["default"], { icon: icon, size: num }),
                React.createElement("span", null, slots))));
        };
    }
});

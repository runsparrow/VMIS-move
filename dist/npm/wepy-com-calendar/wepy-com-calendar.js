'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * Copyright (c) 2015-present, ronffy, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var dateUtils = {
  /**
   * 日、月去掉前缀0
   * @param {string|number} d
   * @returns {number}
   */
  rmDatePrefix: function rmDatePrefix(d) {
    if (typeof d === 'string') {
      if (d.indexOf('0') === 0) {
        return parseInt(d);
      } else {
        return d - 0;
      }
    }
    return d;
  },
  /**
   * 当前日期面板中包含几天是上个月的; 例如结果是3，则当前日期面板中，有3天是上个月的
   * @param {string|number} year YYYY
   * @param {string|number} month M|MM
   * @returns {number}
   */
  getPreMonthBlendDay: function getPreMonthBlendDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  },
  /**
   * 获取某年某月总天数
   * @param {string|number} year YYYY
   * @param {string|number} month MM|M
   * @returns {number}
   */
  getMonthDays: function getMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  /**
   * 获取完整的年月日 YYYY-MM-DD
   * @param {string} year YYYY
   * @param {string|number} month MM|M
   * @param {string|number} day DD|D
   * @returns {string} YYYY-MM-DD
   */
  getFullDate: function getFullDate(year, month, day) {
    var addDatePrefix = dateUtils.addDatePrefix;
    month = addDatePrefix(month);
    day = addDatePrefix(day);
    return year + '-' + month + '-' + day;
  },
  /**
   * 格式化日期
   * @param {string|number|date} d
   * @returns {string} YYYY-MM-YY
   */
  formatDate: function formatDate(d) {
    var addDatePrefix = dateUtils.addDatePrefix;
    var date = new Date(d);
    var year = date.getFullYear();
    var month = addDatePrefix(date.getMonth() + 1);
    var day = addDatePrefix(date.getDate());
    return year + '-' + month + '-' + day;
  },
  /**
   * 给日、月添加前缀0
   * @param {string|number} d
   * @returns {string}
   */
  addDatePrefix: function addDatePrefix(d) {
    if (typeof d === 'number' && d < 10 || typeof d === 'string' && d.indexOf('0') === -1 && parseInt(d) < 10) {
      return '0' + d;
    }
    return '' + d;
  },
  multiWeeks: [{
    langu: 'zh_CN',
    weeks: ['日', '一', '二', '三', '四', '五', '六']
  }, {
    langu: 'en_GB',
    weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sta']
  }],
  getWeeks: function getWeeks() {
    var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'zh_CN';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = dateUtils.multiWeeks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;
        var langu = _ref.langu,
            weeks = _ref.weeks;

        if (langu === language.trim()) {
          return weeks;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

var WepyCalendar = function (_wepy$component) {
  _inherits(WepyCalendar, _wepy$component);

  function WepyCalendar() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, WepyCalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = WepyCalendar.__proto__ || Object.getPrototypeOf(WepyCalendar)).call.apply(_ref2, [this].concat(args))), _this), _this.props = {
      activeDate: {
        type: String,
        default: dateUtils.formatDate(new Date())
      },
      checks: {
        type: Array,
        default: []
      },
      theme: {
        type: String,
        default: 'orange' // 目前支持的主题有 default, green, pink, orange, black, blue，如需自定义，请通过themeStyle属性控制
      },
      // 比theme优先级高，用于自定义主题样式
      themeClassName: {
        type: String,
        default: ''
      },
      language: {
        type: String,
        default: 'zh_CN' // 可选zh_CN, en_GB
      },
      // check状态时icon
      icon: {
        type: String,
        default: ''
      },
      activeStyle: {
        type: String,
        default: ''
      }
    }, _this.data = {
      weeks: dateUtils.getWeeks(),
      width: 375, // 单位px
      currYear: '',
      currMonth: '',
      // 此数组长度为35或42
      panelDaysList: [],
      icons: {
        default: 'http://i2.bvimg.com/679506/f84500a422e33aaf.png',
        black: 'http://i2.bvimg.com/679506/f84500a422e33aaf.png',
        blue: 'http://i2.bvimg.com/679506/ea61d6ce6a3b883e.png',
        green: 'http://i2.bvimg.com/679506/f758a4b4473ba8d8.png',
        orange: 'http://i2.bvimg.com/679506/95d664045b4dcb1e.png',
        pink: 'http://i2.bvimg.com/679506/ceb7a353787929b9.png'
      }
    }, _this.watch = {
      checks: function checks(newValue, oldValue) {
        this.resetPanelDays(this.currYear, this.currMonth, true);
        this.$apply();
      }
    }, _this.methods = {
      tapDayItem: function tapDayItem(e) {
        var _e$currentTarget$data = e.currentTarget.dataset,
            index = _e$currentTarget$data.index,
            info = _e$currentTarget$data.info;

        this.setCurrPanelActiveDay(info.fullDate);
        this.$emit('calendarAfterTapDay', info.fullDate);
      },

      /**
       * 修改日历月份
       * @param {number} modify 用于对month进行微调
       */
      changeCurrMonth: function changeCurrMonth(month) {
        var modify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var monthNum = dateUtils.rmDatePrefix(month);
        var resaultMonth = monthNum;
        if (modify !== 0) {
          resaultMonth = monthNum + parseInt(modify);
        }
        var resaultYear = this.currYear;

        // 处理月份超过12或小于1时的情况
        if (resaultMonth < 1) {
          resaultYear = '' + (parseInt(resaultYear) - 1);
          resaultMonth = 12;
        } else if (resaultMonth > 12) {
          resaultYear = '' + (parseInt(resaultYear) + 1);
          resaultMonth = 1;
        }
        this.resetPanelDays(resaultYear, '' + dateUtils.addDatePrefix(resaultMonth));
        if (modify > 0) {
          this.$emit('calendarAfterTapNextMonth');
        } else {
          this.$emit('calendarAfterTapPreMonth');
        }
      },

      /**
       * 改变日期选择器value后的回调，event.detail = {value: value}
       * @param {number} modify 用于对month进行微调
       */
      changePicker: function changePicker(e) {
        var value = e.detail.value;
        if (!value) {
          return;
        }

        var _value$split = value.split('-'),
            _value$split2 = _slicedToArray(_value$split, 2),
            year = _value$split2[0],
            month = _value$split2[1];

        this.resetPanelDays(year, month);
        this.$emit('calendarAfterChangePicker');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WepyCalendar, [{
    key: 'onLoad',
    value: function onLoad() {
      this.setWidth();
      this.setLanguage();

      var _activeDate$split = this.activeDate.split('-'),
          _activeDate$split2 = _slicedToArray(_activeDate$split, 2),
          year = _activeDate$split2[0],
          month = _activeDate$split2[1];

      this.resetPanelDays(year, month);
      this.$apply();
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var _this2 = this;

      _wepy2.default.createSelectorQuery().select('.wepy-com-calendar-root').boundingClientRect(function (rect) {
        _this2.width = rect.width;
        _this2.$apply();
      }).exec();
    }
  }, {
    key: 'setLanguage',
    value: function setLanguage() {
      if (this.language !== 'zh_CN') {
        this.weeks = dateUtils.getWeeks(this.language);
      }
    }
  }, {
    key: 'setCurrPanelActiveDay',


    // 根据索引值，设置当前日期面板的active项
    value: function setCurrPanelActiveDay(fullDate) {
      if (this.activeDate === fullDate) {
        return;
      }
      var doed = 0; // 性能优化处理
      var newpanelDaysList = [].concat(_toConsumableArray(this.panelDaysList));
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.panelDaysList.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref3 = _step2.value;

          var _ref4 = _slicedToArray(_ref3, 2);

          var i = _ref4[0];
          var dayItem = _ref4[1];

          if (doed === 2) {
            break;
          }
          if (dayItem.active && dayItem.fullDate !== fullDate) {
            // 将非当前选中的其他active项的active置为false
            newpanelDaysList[i] = _extends({}, newpanelDaysList[i], {
              active: false
            });
            ++doed;
          } else if (dayItem.fullDate === fullDate) {
            // 将非当前选中项的active置为true
            newpanelDaysList[i] = _extends({}, newpanelDaysList[i], {
              active: true
            });
            ++doed;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.activeDate = fullDate;
      this.panelDaysList = newpanelDaysList;
    }
  }, {
    key: 'getPreMonthBlendDays',
    value: function getPreMonthBlendDays(year, monthNum) {
      // 上个月需要展示的数据
      var resaultList = [];
      var preMonthBlendDay = dateUtils.getPreMonthBlendDay(year, monthNum);
      var thisMonthNum = monthNum - 1;
      var thisYear = year;
      if (monthNum === 1) {
        thisYear = year - 1;
        thisMonthNum = 12;
      }
      var preMonthFullDays = dateUtils.getMonthDays(thisYear, thisMonthNum);
      for (var i = 0; i < preMonthBlendDay; i++) {
        var dayItem = this.setDayItem(thisYear, thisMonthNum, preMonthFullDays--, 'pre');
        resaultList.unshift(dayItem);
      }
      return resaultList;
    }
  }, {
    key: 'getThisMonthBlendDays',
    value: function getThisMonthBlendDays(year, monthNum) {
      // 本月需要展示的数据
      var resaultList = [];
      var thisMonthFullDays = dateUtils.getMonthDays(year, monthNum);
      for (var i = 1; i <= thisMonthFullDays; i++) {
        var dayItem = this.setDayItem(year, monthNum, i, 'curr');
        resaultList.push(dayItem);
      }
      return resaultList;
    }
  }, {
    key: 'getNextMonthBlendDays',
    value: function getNextMonthBlendDays(year, monthNum, monthBlendDays) {
      // 下个月需要展示的数据
      var resaultList = [];
      for (var i = 1; i <= monthBlendDays; i++) {
        var dayItem = this.setDayItem(year, monthNum + 1, i, 'next');
        resaultList.push(dayItem);
      }
      return resaultList;
    }

    /**
     * 根据传进来的activeDate，计算年、月、当前月面板内的所有日（包含上月和下月的连接日）
     * @param {string} year YYYY
     * @param {string} month MM
     * @param {boolean} force 是否强制刷新日历
     */

  }, {
    key: 'resetPanelDays',
    value: function resetPanelDays(year, month) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!force && this.currYear === year && this.currMonth === month) {
        return;
      }
      var monthNum = dateUtils.rmDatePrefix(month);
      var panelDaysList = [];

      // 将上个月需要展示的数据添加进panelDaysList数组
      var preMonthBlendDays = this.getPreMonthBlendDays(year, monthNum);
      panelDaysList.push.apply(panelDaysList, _toConsumableArray(preMonthBlendDays));

      // 将本月月需要展示的数据添加进panelDaysList数组
      var thisMonthDays = this.getThisMonthBlendDays(year, monthNum);
      panelDaysList.push.apply(panelDaysList, _toConsumableArray(thisMonthDays));

      // 将下个月需要展示的数据添加进panelDaysList数组
      // 如果当前月和上个月需展示天数超过35，则一共需要展示42天；
      // 未超过35天时，则一共展示35天
      var existDays = preMonthBlendDays.length + thisMonthDays.length;
      var nextMonthBlendDay = (existDays > 35 ? 42 : 35) - existDays;
      var nextMonthBlendDays = this.getNextMonthBlendDays(year, monthNum, nextMonthBlendDay);
      panelDaysList.push.apply(panelDaysList, _toConsumableArray(nextMonthBlendDays));

      this.currYear = year;
      this.currMonth = month;
      this.panelDaysList = panelDaysList;
      this.$emit('calendarAfterRender');
    }
  }, {
    key: 'setDayItem',
    value: function setDayItem(year, month, day) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'curr';

      day = dateUtils.addDatePrefix(day);
      var fullDate = dateUtils.getFullDate(year, month, day);
      var dayItem = {
        type: type,
        day: day,
        fullDate: fullDate
      };
      this.setActiveItemProp(dayItem);
      this.setCheckedItemProp(dayItem);
      return dayItem;
    }
  }, {
    key: 'setActiveItemProp',
    value: function setActiveItemProp(dayItem) {
      if (dayItem.fullDate === this.activeDate) {
        dayItem.active = true;
      }
    }
  }, {
    key: 'setCheckedItemProp',
    value: function setCheckedItemProp(dayItem) {
      if (this.checks.indexOf(dayItem.fullDate) > -1) {
        dayItem.checked = true;
      }
    }
  }]);

  return WepyCalendar;
}(_wepy2.default.component);

exports.default = WepyCalendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktY29tLWNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbImRhdGVVdGlscyIsInJtRGF0ZVByZWZpeCIsImQiLCJpbmRleE9mIiwicGFyc2VJbnQiLCJnZXRQcmVNb250aEJsZW5kRGF5IiwieWVhciIsIm1vbnRoIiwiRGF0ZSIsImdldERheSIsImdldE1vbnRoRGF5cyIsImdldERhdGUiLCJnZXRGdWxsRGF0ZSIsImRheSIsImFkZERhdGVQcmVmaXgiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJtdWx0aVdlZWtzIiwibGFuZ3UiLCJ3ZWVrcyIsImdldFdlZWtzIiwibGFuZ3VhZ2UiLCJ0cmltIiwiV2VweUNhbGVuZGFyIiwicHJvcHMiLCJhY3RpdmVEYXRlIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJjaGVja3MiLCJBcnJheSIsInRoZW1lIiwidGhlbWVDbGFzc05hbWUiLCJpY29uIiwiYWN0aXZlU3R5bGUiLCJkYXRhIiwid2lkdGgiLCJjdXJyWWVhciIsImN1cnJNb250aCIsInBhbmVsRGF5c0xpc3QiLCJpY29ucyIsImJsYWNrIiwiYmx1ZSIsImdyZWVuIiwib3JhbmdlIiwicGluayIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsInJlc2V0UGFuZWxEYXlzIiwiJGFwcGx5IiwibWV0aG9kcyIsInRhcERheUl0ZW0iLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImluZm8iLCJzZXRDdXJyUGFuZWxBY3RpdmVEYXkiLCJmdWxsRGF0ZSIsIiRlbWl0IiwiY2hhbmdlQ3Vyck1vbnRoIiwibW9kaWZ5IiwibW9udGhOdW0iLCJyZXNhdWx0TW9udGgiLCJyZXNhdWx0WWVhciIsImNoYW5nZVBpY2tlciIsInZhbHVlIiwiZGV0YWlsIiwic3BsaXQiLCJzZXRXaWR0aCIsInNldExhbmd1YWdlIiwid2VweSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiZXhlYyIsImRvZWQiLCJuZXdwYW5lbERheXNMaXN0IiwiZW50cmllcyIsImkiLCJkYXlJdGVtIiwiYWN0aXZlIiwicmVzYXVsdExpc3QiLCJwcmVNb250aEJsZW5kRGF5IiwidGhpc01vbnRoTnVtIiwidGhpc1llYXIiLCJwcmVNb250aEZ1bGxEYXlzIiwic2V0RGF5SXRlbSIsInVuc2hpZnQiLCJ0aGlzTW9udGhGdWxsRGF5cyIsInB1c2giLCJtb250aEJsZW5kRGF5cyIsImZvcmNlIiwicHJlTW9udGhCbGVuZERheXMiLCJnZXRQcmVNb250aEJsZW5kRGF5cyIsInRoaXNNb250aERheXMiLCJnZXRUaGlzTW9udGhCbGVuZERheXMiLCJleGlzdERheXMiLCJsZW5ndGgiLCJuZXh0TW9udGhCbGVuZERheSIsIm5leHRNb250aEJsZW5kRGF5cyIsImdldE5leHRNb250aEJsZW5kRGF5cyIsInNldEFjdGl2ZUl0ZW1Qcm9wIiwic2V0Q2hlY2tlZEl0ZW1Qcm9wIiwiY2hlY2tlZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7O0FBTkE7Ozs7Ozs7O0FBT0EsSUFBTUEsWUFBWTtBQUNoQjs7Ozs7QUFLQUMsZ0JBQWMseUJBQUs7QUFDakIsUUFBSSxPQUFPQyxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDekIsVUFBSUEsRUFBRUMsT0FBRixDQUFVLEdBQVYsTUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsZUFBT0MsU0FBU0YsQ0FBVCxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0EsSUFBSSxDQUFYO0FBQ0Q7QUFDRjtBQUNELFdBQU9BLENBQVA7QUFDRCxHQWZlO0FBZ0JoQjs7Ozs7O0FBTUFHLHVCQUFxQiw2QkFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3BDLFdBQU8sSUFBSUMsSUFBSixDQUFTRixJQUFULEVBQWVDLFFBQVEsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkJFLE1BQTdCLEVBQVA7QUFDRCxHQXhC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QyxlQUFLbUMsUzs7a0JBQTFCcEYsWSIsImZpbGUiOiJ3ZXB5LWNvbS1jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgcm9uZmZ5LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuY29uc3QgZGF0ZVV0aWxzID0ge1xuICAvKipcbiAgICog5pel44CB5pyI5Y675o6J5YmN57yAMFxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGRcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHJtRGF0ZVByZWZpeDogZCA9PiB7XG4gICAgaWYgKHR5cGVvZiBkID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGQuaW5kZXhPZignMCcpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkIC0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQ7XG4gIH0sXG4gIC8qKlxuICAgKiDlvZPliY3ml6XmnJ/pnaLmnb/kuK3ljIXlkKvlh6DlpKnmmK/kuIrkuKrmnIjnmoQ7IOS+i+Wmgue7k+aenOaYrzPvvIzliJnlvZPliY3ml6XmnJ/pnaLmnb/kuK3vvIzmnIkz5aSp5piv5LiK5Liq5pyI55qEXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0geWVhciBZWVlZXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gbW9udGggTXxNTVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0UHJlTW9udGhCbGVuZERheTogKHllYXIsIG1vbnRoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSkuZ2V0RGF5KCk7XG4gIH0sXG4gIC8qKlxuICAgKiDojrflj5bmn5DlubTmn5DmnIjmgLvlpKnmlbBcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB5ZWFyIFlZWVlcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBtb250aCBNTXxNXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRNb250aERheXM6ICh5ZWFyLCBtb250aCkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICB9LFxuICAvKipcbiAgICog6I635Y+W5a6M5pW055qE5bm05pyI5pelIFlZWVktTU0tRERcbiAgICogQHBhcmFtIHtzdHJpbmd9IHllYXIgWVlZWVxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IG1vbnRoIE1NfE1cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBkYXkgRER8RFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBZWVlZLU1NLUREXG4gICAqL1xuICBnZXRGdWxsRGF0ZTogKHllYXIsIG1vbnRoLCBkYXkpID0+IHtcbiAgICBjb25zdCBhZGREYXRlUHJlZml4ID0gZGF0ZVV0aWxzLmFkZERhdGVQcmVmaXg7XG4gICAgbW9udGggPSBhZGREYXRlUHJlZml4KG1vbnRoKTtcbiAgICBkYXkgPSBhZGREYXRlUHJlZml4KGRheSk7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIH0sXG4gIC8qKlxuICAgKiDmoLzlvI/ljJbml6XmnJ9cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfGRhdGV9IGRcbiAgICogQHJldHVybnMge3N0cmluZ30gWVlZWS1NTS1ZWVxuICAgKi9cbiAgZm9ybWF0RGF0ZTogZCA9PiB7XG4gICAgY29uc3QgYWRkRGF0ZVByZWZpeCA9IGRhdGVVdGlscy5hZGREYXRlUHJlZml4O1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZCk7XG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gYWRkRGF0ZVByZWZpeChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICBsZXQgZGF5ID0gYWRkRGF0ZVByZWZpeChkYXRlLmdldERhdGUoKSk7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIH0sXG4gIC8qKlxuICAgKiDnu5nml6XjgIHmnIjmt7vliqDliY3nvIAwXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYWRkRGF0ZVByZWZpeDogZCA9PiB7XG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBkID09PSAnbnVtYmVyJyAmJiBkIDwgMTApIHx8XG4gICAgICAodHlwZW9mIGQgPT09ICdzdHJpbmcnICYmIGQuaW5kZXhPZignMCcpID09PSAtMSAmJiBwYXJzZUludChkKSA8IDEwKVxuICAgICkge1xuICAgICAgcmV0dXJuIGAwJHtkfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtkfWA7XG4gIH0sXG4gIG11bHRpV2Vla3M6IFtcbiAgICB7XG4gICAgICBsYW5ndTogJ3poX0NOJyxcbiAgICAgIHdlZWtzOiBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddXG4gICAgfSxcbiAgICB7XG4gICAgICBsYW5ndTogJ2VuX0dCJyxcbiAgICAgIHdlZWtzOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1N0YSddXG4gICAgfVxuICBdLFxuICBnZXRXZWVrczogKGxhbmd1YWdlID0gJ3poX0NOJykgPT4ge1xuICAgIGZvciAoY29uc3QgeyBsYW5ndSwgd2Vla3MgfSBvZiBkYXRlVXRpbHMubXVsdGlXZWVrcykge1xuICAgICAgaWYgKGxhbmd1ID09PSBsYW5ndWFnZS50cmltKCkpIHtcbiAgICAgICAgcmV0dXJuIHdlZWtzO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VweUNhbGVuZGFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBhY3RpdmVEYXRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBkYXRlVXRpbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKVxuICAgIH0sXG4gICAgY2hlY2tzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IFtdXG4gICAgfSxcbiAgICB0aGVtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ29yYW5nZScgLy8g55uu5YmN5pSv5oyB55qE5Li76aKY5pyJIGRlZmF1bHQsIGdyZWVuLCBwaW5rLCBvcmFuZ2UsIGJsYWNrLCBibHVl77yM5aaC6ZyA6Ieq5a6a5LmJ77yM6K+36YCa6L+HdGhlbWVTdHlsZeWxnuaAp+aOp+WItlxuICAgIH0sXG4gICAgLy8g5q+UdGhlbWXkvJjlhYjnuqfpq5jvvIznlKjkuo7oh6rlrprkuYnkuLvpopjmoLflvI9cbiAgICB0aGVtZUNsYXNzTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGxhbmd1YWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnemhfQ04nIC8vIOWPr+mAiXpoX0NOLCBlbl9HQlxuICAgIH0sXG4gICAgLy8gY2hlY2vnirbmgIHml7ZpY29uXG4gICAgaWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGFjdGl2ZVN0eWxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICB3ZWVrczogZGF0ZVV0aWxzLmdldFdlZWtzKCksXG4gICAgd2lkdGg6IDM3NSwgLy8g5Y2V5L2NcHhcbiAgICBjdXJyWWVhcjogJycsXG4gICAgY3Vyck1vbnRoOiAnJyxcbiAgICAvLyDmraTmlbDnu4Tplb/luqbkuLozNeaIljQyXG4gICAgcGFuZWxEYXlzTGlzdDogW10sXG4gICAgaWNvbnM6IHtcbiAgICAgIGRlZmF1bHQ6ICdodHRwOi8vaTIuYnZpbWcuY29tLzY3OTUwNi9mODQ1MDBhNDIyZTMzYWFmLnBuZycsXG4gICAgICBibGFjazogJ2h0dHA6Ly9pMi5idmltZy5jb20vNjc5NTA2L2Y4NDUwMGE0MjJlMzNhYWYucG5nJyxcbiAgICAgIGJsdWU6ICdodHRwOi8vaTIuYnZpbWcuY29tLzY3OTUwNi9lYTYxZDZjZTZhM2I4ODNlLnBuZycsXG4gICAgICBncmVlbjogJ2h0dHA6Ly9pMi5idmltZy5jb20vNjc5NTA2L2Y3NThhNGI0NDczYmE4ZDgucG5nJyxcbiAgICAgIG9yYW5nZTogJ2h0dHA6Ly9pMi5idmltZy5jb20vNjc5NTA2Lzk1ZDY2NDA0NWI0ZGNiMWUucG5nJyxcbiAgICAgIHBpbms6ICdodHRwOi8vaTIuYnZpbWcuY29tLzY3OTUwNi9jZWI3YTM1Mzc4NzkyOWI5LnBuZydcbiAgICB9XG4gIH07XG5cbiAgd2F0Y2ggPSB7XG4gICAgY2hlY2tzKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgdGhpcy5yZXNldFBhbmVsRGF5cyh0aGlzLmN1cnJZZWFyLCB0aGlzLmN1cnJNb250aCwgdHJ1ZSk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldFdpZHRoKCk7XG4gICAgdGhpcy5zZXRMYW5ndWFnZSgpO1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aF0gPSB0aGlzLmFjdGl2ZURhdGUuc3BsaXQoJy0nKTtcbiAgICB0aGlzLnJlc2V0UGFuZWxEYXlzKHllYXIsIG1vbnRoKTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG5cbiAgc2V0V2lkdGgoKSB7XG4gICAgd2VweVxuICAgICAgLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgLnNlbGVjdCgnLndlcHktY29tLWNhbGVuZGFyLXJvb3QnKVxuICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0ID0+IHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KVxuICAgICAgLmV4ZWMoKTtcbiAgfVxuXG4gIHNldExhbmd1YWdlKCkge1xuICAgIGlmICh0aGlzLmxhbmd1YWdlICE9PSAnemhfQ04nKSB7XG4gICAgICB0aGlzLndlZWtzID0gZGF0ZVV0aWxzLmdldFdlZWtzKHRoaXMubGFuZ3VhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwRGF5SXRlbShlKSB7XG4gICAgICBjb25zdCB7IGluZGV4LCBpbmZvIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIHRoaXMuc2V0Q3VyclBhbmVsQWN0aXZlRGF5KGluZm8uZnVsbERhdGUpO1xuICAgICAgdGhpcy4kZW1pdCgnY2FsZW5kYXJBZnRlclRhcERheScsIGluZm8uZnVsbERhdGUpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5L+u5pS55pel5Y6G5pyI5Lu9XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1vZGlmeSDnlKjkuo7lr7ltb250aOi/m+ihjOW+ruiwg1xuICAgICAqL1xuICAgIGNoYW5nZUN1cnJNb250aChtb250aCwgbW9kaWZ5ID0gMCkge1xuICAgICAgbGV0IG1vbnRoTnVtID0gZGF0ZVV0aWxzLnJtRGF0ZVByZWZpeChtb250aCk7XG4gICAgICBsZXQgcmVzYXVsdE1vbnRoID0gbW9udGhOdW07XG4gICAgICBpZiAobW9kaWZ5ICE9PSAwKSB7XG4gICAgICAgIHJlc2F1bHRNb250aCA9IG1vbnRoTnVtICsgcGFyc2VJbnQobW9kaWZ5KTtcbiAgICAgIH1cbiAgICAgIGxldCByZXNhdWx0WWVhciA9IHRoaXMuY3VyclllYXI7XG5cbiAgICAgIC8vIOWkhOeQhuaciOS7vei2hei/hzEy5oiW5bCP5LqOMeaXtueahOaDheWGtVxuICAgICAgaWYgKHJlc2F1bHRNb250aCA8IDEpIHtcbiAgICAgICAgcmVzYXVsdFllYXIgPSBgJHtwYXJzZUludChyZXNhdWx0WWVhcikgLSAxfWA7XG4gICAgICAgIHJlc2F1bHRNb250aCA9IDEyO1xuICAgICAgfSBlbHNlIGlmIChyZXNhdWx0TW9udGggPiAxMikge1xuICAgICAgICByZXNhdWx0WWVhciA9IGAke3BhcnNlSW50KHJlc2F1bHRZZWFyKSArIDF9YDtcbiAgICAgICAgcmVzYXVsdE1vbnRoID0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzZXRQYW5lbERheXMoXG4gICAgICAgIHJlc2F1bHRZZWFyLFxuICAgICAgICBgJHtkYXRlVXRpbHMuYWRkRGF0ZVByZWZpeChyZXNhdWx0TW9udGgpfWBcbiAgICAgICk7XG4gICAgICBpZiAobW9kaWZ5ID4gMCkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjYWxlbmRhckFmdGVyVGFwTmV4dE1vbnRoJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRlbWl0KCdjYWxlbmRhckFmdGVyVGFwUHJlTW9udGgnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaUueWPmOaXpeacn+mAieaLqeWZqHZhbHVl5ZCO55qE5Zue6LCD77yMZXZlbnQuZGV0YWlsID0ge3ZhbHVlOiB2YWx1ZX1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbW9kaWZ5IOeUqOS6juWvuW1vbnRo6L+b6KGM5b6u6LCDXG4gICAgICovXG4gICAgY2hhbmdlUGlja2VyKGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IFt5ZWFyLCBtb250aF0gPSB2YWx1ZS5zcGxpdCgnLScpO1xuICAgICAgdGhpcy5yZXNldFBhbmVsRGF5cyh5ZWFyLCBtb250aCk7XG4gICAgICB0aGlzLiRlbWl0KCdjYWxlbmRhckFmdGVyQ2hhbmdlUGlja2VyJyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIOagueaNrue0ouW8leWAvO+8jOiuvue9ruW9k+WJjeaXpeacn+mdouadv+eahGFjdGl2ZemhuVxuICBzZXRDdXJyUGFuZWxBY3RpdmVEYXkoZnVsbERhdGUpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVEYXRlID09PSBmdWxsRGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZG9lZCA9IDA7IC8vIOaAp+iDveS8mOWMluWkhOeQhlxuICAgIGxldCBuZXdwYW5lbERheXNMaXN0ID0gWy4uLnRoaXMucGFuZWxEYXlzTGlzdF07XG4gICAgZm9yIChjb25zdCBbaSwgZGF5SXRlbV0gb2YgdGhpcy5wYW5lbERheXNMaXN0LmVudHJpZXMoKSkge1xuICAgICAgaWYgKGRvZWQgPT09IDIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoZGF5SXRlbS5hY3RpdmUgJiYgZGF5SXRlbS5mdWxsRGF0ZSAhPT0gZnVsbERhdGUpIHtcbiAgICAgICAgLy8g5bCG6Z2e5b2T5YmN6YCJ5Lit55qE5YW25LuWYWN0aXZl6aG555qEYWN0aXZl572u5Li6ZmFsc2VcbiAgICAgICAgbmV3cGFuZWxEYXlzTGlzdFtpXSA9IHtcbiAgICAgICAgICAuLi5uZXdwYW5lbERheXNMaXN0W2ldLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgKytkb2VkO1xuICAgICAgfSBlbHNlIGlmIChkYXlJdGVtLmZ1bGxEYXRlID09PSBmdWxsRGF0ZSkge1xuICAgICAgICAvLyDlsIbpnZ7lvZPliY3pgInkuK3pobnnmoRhY3RpdmXnva7kuLp0cnVlXG4gICAgICAgIG5ld3BhbmVsRGF5c0xpc3RbaV0gPSB7XG4gICAgICAgICAgLi4ubmV3cGFuZWxEYXlzTGlzdFtpXSxcbiAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgKytkb2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGZ1bGxEYXRlO1xuICAgIHRoaXMucGFuZWxEYXlzTGlzdCA9IG5ld3BhbmVsRGF5c0xpc3Q7XG4gIH1cblxuICBnZXRQcmVNb250aEJsZW5kRGF5cyh5ZWFyLCBtb250aE51bSkge1xuICAgIC8vIOS4iuS4quaciOmcgOimgeWxleekuueahOaVsOaNrlxuICAgIGNvbnN0IHJlc2F1bHRMaXN0ID0gW107XG4gICAgY29uc3QgcHJlTW9udGhCbGVuZERheSA9IGRhdGVVdGlscy5nZXRQcmVNb250aEJsZW5kRGF5KHllYXIsIG1vbnRoTnVtKTtcbiAgICBsZXQgdGhpc01vbnRoTnVtID0gbW9udGhOdW0gLSAxO1xuICAgIGxldCB0aGlzWWVhciA9IHllYXI7XG4gICAgaWYgKG1vbnRoTnVtID09PSAxKSB7XG4gICAgICB0aGlzWWVhciA9IHllYXIgLSAxO1xuICAgICAgdGhpc01vbnRoTnVtID0gMTI7XG4gICAgfVxuICAgIGxldCBwcmVNb250aEZ1bGxEYXlzID0gZGF0ZVV0aWxzLmdldE1vbnRoRGF5cyh0aGlzWWVhciwgdGhpc01vbnRoTnVtKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZU1vbnRoQmxlbmREYXk7IGkrKykge1xuICAgICAgY29uc3QgZGF5SXRlbSA9IHRoaXMuc2V0RGF5SXRlbShcbiAgICAgICAgdGhpc1llYXIsXG4gICAgICAgIHRoaXNNb250aE51bSxcbiAgICAgICAgcHJlTW9udGhGdWxsRGF5cy0tLFxuICAgICAgICAncHJlJ1xuICAgICAgKTtcbiAgICAgIHJlc2F1bHRMaXN0LnVuc2hpZnQoZGF5SXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXNhdWx0TGlzdDtcbiAgfVxuXG4gIGdldFRoaXNNb250aEJsZW5kRGF5cyh5ZWFyLCBtb250aE51bSkge1xuICAgIC8vIOacrOaciOmcgOimgeWxleekuueahOaVsOaNrlxuICAgIGNvbnN0IHJlc2F1bHRMaXN0ID0gW107XG4gICAgY29uc3QgdGhpc01vbnRoRnVsbERheXMgPSBkYXRlVXRpbHMuZ2V0TW9udGhEYXlzKHllYXIsIG1vbnRoTnVtKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzTW9udGhGdWxsRGF5czsgaSsrKSB7XG4gICAgICBjb25zdCBkYXlJdGVtID0gdGhpcy5zZXREYXlJdGVtKHllYXIsIG1vbnRoTnVtLCBpLCAnY3VycicpO1xuICAgICAgcmVzYXVsdExpc3QucHVzaChkYXlJdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc2F1bHRMaXN0O1xuICB9XG5cbiAgZ2V0TmV4dE1vbnRoQmxlbmREYXlzKHllYXIsIG1vbnRoTnVtLCBtb250aEJsZW5kRGF5cykge1xuICAgIC8vIOS4i+S4quaciOmcgOimgeWxleekuueahOaVsOaNrlxuICAgIGNvbnN0IHJlc2F1bHRMaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbW9udGhCbGVuZERheXM7IGkrKykge1xuICAgICAgY29uc3QgZGF5SXRlbSA9IHRoaXMuc2V0RGF5SXRlbSh5ZWFyLCBtb250aE51bSArIDEsIGksICduZXh0Jyk7XG4gICAgICByZXNhdWx0TGlzdC5wdXNoKGRheUl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzYXVsdExpc3Q7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u5Lyg6L+b5p2l55qEYWN0aXZlRGF0Ze+8jOiuoeeul+W5tOOAgeaciOOAgeW9k+WJjeaciOmdouadv+WGheeahOaJgOacieaXpe+8iOWMheWQq+S4iuaciOWSjOS4i+aciOeahOi/nuaOpeaXpe+8iVxuICAgKiBAcGFyYW0ge3N0cmluZ30geWVhciBZWVlZXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb250aCBNTVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlIOaYr+WQpuW8uuWItuWIt+aWsOaXpeWOhlxuICAgKi9cbiAgcmVzZXRQYW5lbERheXMoeWVhciwgbW9udGgsIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoIWZvcmNlICYmIHRoaXMuY3VyclllYXIgPT09IHllYXIgJiYgdGhpcy5jdXJyTW9udGggPT09IG1vbnRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1vbnRoTnVtID0gZGF0ZVV0aWxzLnJtRGF0ZVByZWZpeChtb250aCk7XG4gICAgbGV0IHBhbmVsRGF5c0xpc3QgPSBbXTtcblxuICAgIC8vIOWwhuS4iuS4quaciOmcgOimgeWxleekuueahOaVsOaNrua3u+WKoOi/m3BhbmVsRGF5c0xpc3TmlbDnu4RcbiAgICBjb25zdCBwcmVNb250aEJsZW5kRGF5cyA9IHRoaXMuZ2V0UHJlTW9udGhCbGVuZERheXMoeWVhciwgbW9udGhOdW0pO1xuICAgIHBhbmVsRGF5c0xpc3QucHVzaCguLi5wcmVNb250aEJsZW5kRGF5cyk7XG5cbiAgICAvLyDlsIbmnKzmnIjmnIjpnIDopoHlsZXnpLrnmoTmlbDmja7mt7vliqDov5twYW5lbERheXNMaXN05pWw57uEXG4gICAgY29uc3QgdGhpc01vbnRoRGF5cyA9IHRoaXMuZ2V0VGhpc01vbnRoQmxlbmREYXlzKHllYXIsIG1vbnRoTnVtKTtcbiAgICBwYW5lbERheXNMaXN0LnB1c2goLi4udGhpc01vbnRoRGF5cyk7XG5cbiAgICAvLyDlsIbkuIvkuKrmnIjpnIDopoHlsZXnpLrnmoTmlbDmja7mt7vliqDov5twYW5lbERheXNMaXN05pWw57uEXG4gICAgLy8g5aaC5p6c5b2T5YmN5pyI5ZKM5LiK5Liq5pyI6ZyA5bGV56S65aSp5pWw6LaF6L+HMzXvvIzliJnkuIDlhbHpnIDopoHlsZXnpLo0MuWkqe+8m1xuICAgIC8vIOacqui2hei/hzM15aSp5pe277yM5YiZ5LiA5YWx5bGV56S6MzXlpKlcbiAgICBjb25zdCBleGlzdERheXMgPSBwcmVNb250aEJsZW5kRGF5cy5sZW5ndGggKyB0aGlzTW9udGhEYXlzLmxlbmd0aDtcbiAgICBjb25zdCBuZXh0TW9udGhCbGVuZERheSA9IChleGlzdERheXMgPiAzNSA/IDQyIDogMzUpIC0gZXhpc3REYXlzO1xuICAgIGNvbnN0IG5leHRNb250aEJsZW5kRGF5cyA9IHRoaXMuZ2V0TmV4dE1vbnRoQmxlbmREYXlzKFxuICAgICAgeWVhcixcbiAgICAgIG1vbnRoTnVtLFxuICAgICAgbmV4dE1vbnRoQmxlbmREYXlcbiAgICApO1xuICAgIHBhbmVsRGF5c0xpc3QucHVzaCguLi5uZXh0TW9udGhCbGVuZERheXMpO1xuXG4gICAgdGhpcy5jdXJyWWVhciA9IHllYXI7XG4gICAgdGhpcy5jdXJyTW9udGggPSBtb250aDtcbiAgICB0aGlzLnBhbmVsRGF5c0xpc3QgPSBwYW5lbERheXNMaXN0O1xuICAgIHRoaXMuJGVtaXQoJ2NhbGVuZGFyQWZ0ZXJSZW5kZXInKTtcbiAgfVxuXG4gIHNldERheUl0ZW0oeWVhciwgbW9udGgsIGRheSwgdHlwZSA9ICdjdXJyJykge1xuICAgIGRheSA9IGRhdGVVdGlscy5hZGREYXRlUHJlZml4KGRheSk7XG4gICAgY29uc3QgZnVsbERhdGUgPSBkYXRlVXRpbHMuZ2V0RnVsbERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgbGV0IGRheUl0ZW0gPSB7XG4gICAgICB0eXBlLFxuICAgICAgZGF5LFxuICAgICAgZnVsbERhdGVcbiAgICB9O1xuICAgIHRoaXMuc2V0QWN0aXZlSXRlbVByb3AoZGF5SXRlbSk7XG4gICAgdGhpcy5zZXRDaGVja2VkSXRlbVByb3AoZGF5SXRlbSk7XG4gICAgcmV0dXJuIGRheUl0ZW07XG4gIH1cbiAgc2V0QWN0aXZlSXRlbVByb3AoZGF5SXRlbSkge1xuICAgIGlmIChkYXlJdGVtLmZ1bGxEYXRlID09PSB0aGlzLmFjdGl2ZURhdGUpIHtcbiAgICAgIGRheUl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgc2V0Q2hlY2tlZEl0ZW1Qcm9wKGRheUl0ZW0pIHtcbiAgICBpZiAodGhpcy5jaGVja3MuaW5kZXhPZihkYXlJdGVtLmZ1bGxEYXRlKSA+IC0xKSB7XG4gICAgICBkYXlJdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19
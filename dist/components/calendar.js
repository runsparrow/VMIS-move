'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_wepy$component) {
  _inherits(Calendar, _wepy$component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      color: {
        type: String,
        default: 'black'
      },
      peopleCount: {
        type: Number,
        default: 1,
        twoWay: true
      },
      dateList: {
        type: Array,
        default: [],
        twoWay: true
      }
    }, _this.data = {
      weeksCh: ['一', '二', '三', '四', '五', '六', '日'],
      // 数组最后导出的日期
      currentList: [],
      // 当前日期
      nowTime: {},
      current: {
        year: '',
        month: '',
        day: '',
        formatDay: '',
        weekCh: ''
      },
      viewTime: {
        year: '',
        month: '',
        day: '',
        formatDay: '',
        weekCh: ''
      },
      // 当前视图的day数组
      viewDays: [],
      initial: 0,
      image: {
        minusCheck: 'https://brcspace.oss-cn-shanghai.aliyuncs.com/minus1.png',
        minusUnckeck: 'https://brcspace.oss-cn-shanghai.aliyuncs.com/minus.png',
        plus: 'https://brcspace.oss-cn-shanghai.aliyuncs.com/plus.png',
        leftCan: 'https://brcspace.oss-cn-shanghai.aliyuncs.com/left-can.png',
        rightCan: 'https://brcspace.oss-cn-shanghai.aliyuncs.com/right-can.png'
      },
      // 月分初始化
      dataInitial: 0,
      // 初始化日期
      initialDate: '',
      // 可选日期节点
      choosableDate: '',
      // 剩余库存
      goodsStock: 0,
      selectDate: '',
      people: 1,
      selectList: []
    }, _this.methods = {
      // 点击上个月
      toPreMonth: function toPreMonth() {
        if (this.dataInitial === 1) {
          this.viewDays = this._getData((0, _moment2.default)(this.viewTime.formatDay).subtract(1, 'days'));
          this.nowTime.month--;
          this._checkView();
          this.dataInitial--;
          this.$apply();
        }
      },

      // 点击下个月
      toNextMonth: function toNextMonth() {
        if (this.dataInitial === 0) {
          this.viewDays = this._getData((0, _moment2.default)(this.viewTime.formatDay).endOf('month').add(1, 'days'));
          this.nowTime.month++;
          this._checkView();
          this.dataInitial++;
          this.$apply();
        }
      },

      // 选择时间
      changeResultTime: function changeResultTime(e) {
        this.selectList = [];
        var item = e.currentTarget.dataset.item;
        var index = e.currentTarget.dataset.index;
        if (item.check === false) {
          var bgTime = new Date(this.initialDate.replace(/-/g, '/'));
          var ckeckTime = new Date(item.formatDay.replace(/-/g, '/'));
          var endTime = new Date(this.choosableDate.replace(/-/g, '/'));
          if (bgTime.getTime() <= ckeckTime.getTime() && ckeckTime.getTime() <= endTime.getTime()) {
            this._setTime((0, _moment2.default)(item.formatDay));
            this.viewDays[index].check = true;
          }
        } else {
          if (this.nowTime !== item.formatDay) {
            this._removeTime((0, _moment2.default)(item.formatDay));
            this.viewDays[index].check = false;
          }
        }
      },

      // 用户点击确定
      confirm: function confirm() {
        this.peopleCount = this.people;
        this.$emit('hanleConfirm', { currentList: this.currentList, peopleCount: this.people });
      },
      countMinus: function countMinus() {
        this.people = this.people-- < 2 ? 1 : this.people--;
      },
      countPlus: function countPlus() {
        if (this.goodsStock > this.people) {
          this.people++;
        } else {
          wx.showToast({
            title: '超过剩余座位数',
            icon: 'none',
            duration: 2000
          });
        }
      }
    }, _this.watch = {
      value: function value(newValue, oldValue) {
        this._init(newValue);
      }
    }, _this.events = {
      getDate: function getDate(value) {
        this._init(value.selectDate, value.presentDate);
        var nowMonth = new Date(value.presentDate).getMonth();
        var selectMonth = new Date(value.selectDate).getMonth();
        if (nowMonth !== selectMonth) {
          this.dataInitial = 1;
        }
        this.initialDate = value.presentDate;
        this.choosableDate = this.add30Days(this.initialDate);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'onLoad',
    value: function onLoad(value) {
      this._init();
      this.goodsStock = this.$parent.$parent.globalData.freeInfo.goodsStock;
      this.nowTime = this.current;
      this.people = this.peopleCount;
      this.selectList = this.dateList;
      this.$apply();
    }
  }, {
    key: 'add30Days',
    value: function add30Days(val) {
      var date1 = new Date(val);
      var date2 = new Date(date1);
      date2.setDate(date1.getDate() + 30);
      var month = date2.getMonth() + 1;
      month = month < 10 ? '0' + month : month;
      var date = date2.getDate();
      date = date < 10 ? '0' + date : date;
      return date2.getFullYear() + '-' + month + '-' + date;
    }
    /**
     * _getData
     * 返回当前视图日期数组
     * @param time
     * @return [{day:31,month:3,year:2018},{day:1,month:4,year:2018},...]
     */

  }, {
    key: '_getData',
    value: function _getData() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();

      this._setViewTime(time);
      // 令时间变为当月1号的
      var firstDay = time.startOf('month');
      // 计算当月1号是星期几
      var firstDayOfWeek = firstDay.format('E');
      // 计算上个月多余时间
      var last = this._calDate(firstDay.subtract(firstDayOfWeek - 1, 'days'), firstDayOfWeek - 1);
      // 计算本月时间
      var current = this._calDate(firstDay, firstDay.daysInMonth());
      // 令时间变为本月末
      var endDay = time.subtract(1, 'days');
      // 当月与末是星期几
      var endDayOfWeek = endDay.format('E');
      // 计算下个月多余时间
      var next = this._calDate(endDay.add(1, 'days'), 7 - endDayOfWeek);
      return [].concat(_toConsumableArray(last), _toConsumableArray(current), _toConsumableArray(next));
    }
    /**
     * _setTime
     * 设定导出的时间
     * @param time moment对象
     */

  }, {
    key: '_setTime',
    value: function _setTime() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();

      this.current = this._dealMoment(time);
      this.currentList.push(this.current);
    }
  }, {
    key: '_removeTime',
    value: function _removeTime() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();

      this.current = this._dealMoment(time);
      var index = this._indexOf(this.current.formatDay);
      this.currentList.splice(index, 1);
    }
  }, {
    key: '_indexOf',
    value: function _indexOf(val) {
      for (var i = 0; i < this.currentList.length; i++) {
        if (this.currentList[i].formatDay === val) {
          return i;
        }
      }
    }
    /**
     * _setTime
     * 设定当前日历的时间
     * @param time moment对象
     */

  }, {
    key: '_setViewTime',
    value: function _setViewTime() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();

      this.viewTime = this._dealMoment(time.startOf('month'));
    }
    /**
     * _calDate
     * 计算日期函数
     * @param time moment对象
     * @param length 返回数组的长度
     * @return 返回日期数组
     */

  }, {
    key: '_calDate',
    value: function _calDate(time, length) {
      var arr = [];
      for (var i = 0; i < length; i++) {
        arr.push(this._dealMoment(time));
        time.add(1, 'days');
      }
      return arr;
    }
    /**
     * _dealMoment
     * 处理moment对象
     * @param time moment对象
     * @return 返回一个Object{year, month, day, formatDay}
     */

  }, {
    key: '_dealMoment',
    value: function _dealMoment(time) {
      var _time$toObject = time.toObject(),
          years = _time$toObject.years,
          months = _time$toObject.months,
          date = _time$toObject.date;

      return {
        year: years,
        month: months + 1,
        day: date,
        weekCh: '周' + this.weeksCh[time.format('E') - 1],
        formatDay: time.format('YYYY-MM-DD'),
        check: false,
        formatDate: time.format('MM-DD')
      };
    }
    // 日期多选

  }, {
    key: '_checkView',
    value: function _checkView() {
      for (var i = 0; i < this.viewDays.length; i++) {
        for (var y = 0; y < this.currentList.length; y++) {
          if (this.viewDays[i].formatDay === this.currentList[y].formatDay) {
            this.viewDays[i].check = true;
          }
        }
      }
    }
    /**
     * _init
     * 初始化
     * @param value '2018-02-02' YYYY-MM-DD
     */

  }, {
    key: '_init',
    value: function _init(selectValue, presentValue) {
      if (this.initial === 0) {
        // this.viewDays = this._getData(moment(presentValue))
        this.viewDays = this._getData((0, _moment2.default)(selectValue));
        this._setTime((0, _moment2.default)(selectValue));
        this._checkView();
      }
      this.initial += 1;
    }
  }]);

  return Calendar;
}(_wepy2.default.component);

exports.default = Calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJjb2xvciIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwicGVvcGxlQ291bnQiLCJOdW1iZXIiLCJ0d29XYXkiLCJkYXRlTGlzdCIsIkFycmF5IiwiZGF0YSIsIndlZWtzQ2giLCJjdXJyZW50TGlzdCIsIm5vd1RpbWUiLCJjdXJyZW50IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZm9ybWF0RGF5Iiwid2Vla0NoIiwidmlld1RpbWUiLCJ2aWV3RGF5cyIsImluaXRpYWwiLCJpbWFnZSIsIm1pbnVzQ2hlY2siLCJtaW51c1VuY2tlY2siLCJwbHVzIiwibGVmdENhbiIsInJpZ2h0Q2FuIiwiZGF0YUluaXRpYWwiLCJpbml0aWFsRGF0ZSIsImNob29zYWJsZURhdGUiLCJnb29kc1N0b2NrIiwic2VsZWN0RGF0ZSIsInBlb3BsZSIsInNlbGVjdExpc3QiLCJtZXRob2RzIiwidG9QcmVNb250aCIsIl9nZXREYXRhIiwic3VidHJhY3QiLCJfY2hlY2tWaWV3IiwiJGFwcGx5IiwidG9OZXh0TW9udGgiLCJlbmRPZiIsImFkZCIsImNoYW5nZVJlc3VsdFRpbWUiLCJlIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjaGVjayIsImJnVGltZSIsIkRhdGUiLCJyZXBsYWNlIiwiY2tlY2tUaW1lIiwiZW5kVGltZSIsImdldFRpbWUiLCJfc2V0VGltZSIsIl9yZW1vdmVUaW1lIiwiY29uZmlybSIsIiRlbWl0IiwiY291bnRNaW51cyIsImNvdW50UGx1cyIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJ3YXRjaCIsInZhbHVlIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIl9pbml0IiwiZXZlbnRzIiwiZ2V0RGF0ZSIsInByZXNlbnREYXRlIiwibm93TW9udGgiLCJnZXRNb250aCIsInNlbGVjdE1vbnRoIiwiYWRkMzBEYXlzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJmcmVlSW5mbyIsInZhbCIsImRhdGUxIiwiZGF0ZTIiLCJzZXREYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwidGltZSIsIl9zZXRWaWV3VGltZSIsImZpcnN0RGF5Iiwic3RhcnRPZiIsImZpcnN0RGF5T2ZXZWVrIiwiZm9ybWF0IiwibGFzdCIsIl9jYWxEYXRlIiwiZGF5c0luTW9udGgiLCJlbmREYXkiLCJlbmREYXlPZldlZWsiLCJuZXh0IiwiX2RlYWxNb21lbnQiLCJwdXNoIiwiX2luZGV4T2YiLCJzcGxpY2UiLCJpIiwibGVuZ3RoIiwiYXJyIiwidG9PYmplY3QiLCJ5ZWFycyIsIm1vbnRocyIsImZvcm1hdERhdGUiLCJ5Iiwic2VsZWN0VmFsdWUiLCJwcmVzZW50VmFsdWUiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNQyxNQUREO0FBRUxDLGlCQUFTO0FBRkosT0FERDtBQUtOQyxtQkFBYTtBQUNYSCxjQUFNSSxNQURLO0FBRVhGLGlCQUFTLENBRkU7QUFHWEcsZ0JBQVE7QUFIRyxPQUxQO0FBVU5DLGdCQUFVO0FBQ1JOLGNBQU1PLEtBREU7QUFFUkwsaUJBQVMsRUFGRDtBQUdSRyxnQkFBUTtBQUhBO0FBVkosSyxRQWdCUkcsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsQ0FESjtBQUVMO0FBQ0FDLG1CQUFhLEVBSFI7QUFJTDtBQUNBQyxlQUFTLEVBTEo7QUFNTEMsZUFBUztBQUNQQyxjQUFNLEVBREM7QUFFUEMsZUFBTyxFQUZBO0FBR1BDLGFBQUssRUFIRTtBQUlQQyxtQkFBVyxFQUpKO0FBS1BDLGdCQUFRO0FBTEQsT0FOSjtBQWFMQyxnQkFB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TE47QUFNTDVDLGVBQU8sS0FORjtBQU9MNkQsb0JBQVl0QixLQUFLSyxNQUFMLENBQVksT0FBWjtBQVBQLE9BQVA7QUFTRDtBQUNEOzs7O2lDQUNhO0FBQ1gsV0FBSyxJQUFJVyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3JGLFFBQUwsQ0FBY3NGLE1BQWxDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3QyxhQUFLLElBQUlPLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLckcsV0FBTCxDQUFpQitGLE1BQXJDLEVBQTZDTSxHQUE3QyxFQUFrRDtBQUNoRCxjQUFJLEtBQUs1RixRQUFMLENBQWNxRixDQUFkLEVBQWlCeEYsU0FBakIsS0FBK0IsS0FBS04sV0FBTCxDQUFpQnFHLENBQWpCLEVBQW9CL0YsU0FBdkQsRUFBa0U7QUFDaEUsaUJBQUtHLFFBQUwsQ0FBY3FGLENBQWQsRUFBaUJ2RCxLQUFqQixHQUF5QixJQUF6QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Q7Ozs7Ozs7OzBCQUtPK0QsVyxFQUFhQyxZLEVBQWM7QUFDaEMsVUFBSSxLQUFLN0YsT0FBTCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QjtBQUNBLGFBQUtELFFBQUwsR0FBZ0IsS0FBS2lCLFFBQUwsQ0FBYyxzQkFBTzRFLFdBQVAsQ0FBZCxDQUFoQjtBQUNBLGFBQUt4RCxRQUFMLENBQWMsc0JBQU93RCxXQUFQLENBQWQ7QUFDQSxhQUFLMUUsVUFBTDtBQUNEO0FBQ0QsV0FBS2xCLE9BQUwsSUFBZ0IsQ0FBaEI7QUFDRDs7OztFQXhRbUM4RixlQUFLQyxTOztrQkFBdEJ0SCxRIiwiZmlsZSI6ImNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdibGFjaydcbiAgICB9LFxuICAgIHBlb3BsZUNvdW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAxLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBkYXRlTGlzdDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbXSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfVxuICBkYXRhID0ge1xuICAgIHdlZWtzQ2g6IFsn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5pelJ10sXG4gICAgLy8g5pWw57uE5pyA5ZCO5a+85Ye655qE5pel5pyfXG4gICAgY3VycmVudExpc3Q6IFtdLFxuICAgIC8vIOW9k+WJjeaXpeacn1xuICAgIG5vd1RpbWU6IHt9LFxuICAgIGN1cnJlbnQ6IHtcbiAgICAgIHllYXI6ICcnLFxuICAgICAgbW9udGg6ICcnLFxuICAgICAgZGF5OiAnJyxcbiAgICAgIGZvcm1hdERheTogJycsXG4gICAgICB3ZWVrQ2g6ICcnXG4gICAgfSxcbiAgICB2aWV3VGltZToge1xuICAgICAgeWVhcjogJycsXG4gICAgICBtb250aDogJycsXG4gICAgICBkYXk6ICcnLFxuICAgICAgZm9ybWF0RGF5OiAnJyxcbiAgICAgIHdlZWtDaDogJydcbiAgICB9LFxuICAgIC8vIOW9k+WJjeinhuWbvueahGRheeaVsOe7hFxuICAgIHZpZXdEYXlzOiBbXSxcbiAgICBpbml0aWFsOiAwLFxuICAgIGltYWdlOiB7XG4gICAgICBtaW51c0NoZWNrOiAnaHR0cHM6Ly9icmNzcGFjZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL21pbnVzMS5wbmcnLFxuICAgICAgbWludXNVbmNrZWNrOiAnaHR0cHM6Ly9icmNzcGFjZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL21pbnVzLnBuZycsXG4gICAgICBwbHVzOiAnaHR0cHM6Ly9icmNzcGFjZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3BsdXMucG5nJyxcbiAgICAgIGxlZnRDYW46ICdodHRwczovL2JyY3NwYWNlLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vbGVmdC1jYW4ucG5nJyxcbiAgICAgIHJpZ2h0Q2FuOiAnaHR0cHM6Ly9icmNzcGFjZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3JpZ2h0LWNhbi5wbmcnXG4gICAgfSxcbiAgICAvLyDmnIjliIbliJ3lp4vljJZcbiAgICBkYXRhSW5pdGlhbDogMCxcbiAgICAvLyDliJ3lp4vljJbml6XmnJ9cbiAgICBpbml0aWFsRGF0ZTogJycsXG4gICAgLy8g5Y+v6YCJ5pel5pyf6IqC54K5XG4gICAgY2hvb3NhYmxlRGF0ZTogJycsXG4gICAgLy8g5Ymp5L2Z5bqT5a2YXG4gICAgZ29vZHNTdG9jazogMCxcbiAgICBzZWxlY3REYXRlOiAnJyxcbiAgICBwZW9wbGU6IDEsXG4gICAgc2VsZWN0TGlzdDogW11cbiAgfVxuICBvbkxvYWQodmFsdWUpIHtcbiAgICB0aGlzLl9pbml0KClcbiAgICB0aGlzLmdvb2RzU3RvY2sgPSB0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLmZyZWVJbmZvLmdvb2RzU3RvY2tcbiAgICB0aGlzLm5vd1RpbWUgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnBlb3BsZSA9IHRoaXMucGVvcGxlQ291bnRcbiAgICB0aGlzLnNlbGVjdExpc3QgPSB0aGlzLmRhdGVMaXN0XG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g54K55Ye75LiK5Liq5pyIXG4gICAgdG9QcmVNb250aCAoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhSW5pdGlhbCA9PT0gMSkge1xuICAgICAgICB0aGlzLnZpZXdEYXlzID0gdGhpcy5fZ2V0RGF0YShtb21lbnQodGhpcy52aWV3VGltZS5mb3JtYXREYXkpLnN1YnRyYWN0KDEsICdkYXlzJykpXG4gICAgICAgIHRoaXMubm93VGltZS5tb250aCAtLVxuICAgICAgICB0aGlzLl9jaGVja1ZpZXcoKVxuICAgICAgICB0aGlzLmRhdGFJbml0aWFsIC0tXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIOeCueWHu+S4i+S4quaciFxuICAgIHRvTmV4dE1vbnRoICgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFJbml0aWFsID09PSAwKSB7XG4gICAgICAgIHRoaXMudmlld0RheXMgPSB0aGlzLl9nZXREYXRhKG1vbWVudCh0aGlzLnZpZXdUaW1lLmZvcm1hdERheSkuZW5kT2YoJ21vbnRoJykuYWRkKDEsICdkYXlzJykpXG4gICAgICAgIHRoaXMubm93VGltZS5tb250aCArK1xuICAgICAgICB0aGlzLl9jaGVja1ZpZXcoKVxuICAgICAgICB0aGlzLmRhdGFJbml0aWFsICsrXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAieaLqeaXtumXtFxuICAgIGNoYW5nZVJlc3VsdFRpbWUgKGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0TGlzdCA9IFtdXG4gICAgICBsZXQgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW1cbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBpZiAoaXRlbS5jaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGJnVGltZSA9IG5ldyBEYXRlKHRoaXMuaW5pdGlhbERhdGUucmVwbGFjZSgvLS9nLCAnLycpKVxuICAgICAgICBsZXQgY2tlY2tUaW1lID0gbmV3IERhdGUoaXRlbS5mb3JtYXREYXkucmVwbGFjZSgvLS9nLCAnLycpKVxuICAgICAgICBsZXQgZW5kVGltZSA9IG5ldyBEYXRlKHRoaXMuY2hvb3NhYmxlRGF0ZS5yZXBsYWNlKC8tL2csICcvJykpXG4gICAgICAgIGlmIChiZ1RpbWUuZ2V0VGltZSgpIDw9IGNrZWNrVGltZS5nZXRUaW1lKCkgJiYgY2tlY2tUaW1lLmdldFRpbWUoKSA8PSBlbmRUaW1lLmdldFRpbWUoKSkge1xuICAgICAgICAgIHRoaXMuX3NldFRpbWUobW9tZW50KGl0ZW0uZm9ybWF0RGF5KSlcbiAgICAgICAgICB0aGlzLnZpZXdEYXlzW2luZGV4XS5jaGVjayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubm93VGltZSAhPT0gaXRlbS5mb3JtYXREYXkpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVUaW1lKG1vbWVudChpdGVtLmZvcm1hdERheSkpXG4gICAgICAgICAgdGhpcy52aWV3RGF5c1tpbmRleF0uY2hlY2sgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyDnlKjmiLfngrnlh7vnoa7lrppcbiAgICBjb25maXJtKCkge1xuICAgICAgdGhpcy5wZW9wbGVDb3VudCA9IHRoaXMucGVvcGxlXG4gICAgICB0aGlzLiRlbWl0KCdoYW5sZUNvbmZpcm0nLCB7Y3VycmVudExpc3Q6IHRoaXMuY3VycmVudExpc3QsIHBlb3BsZUNvdW50OiB0aGlzLnBlb3BsZX0pXG4gICAgfSxcbiAgICBjb3VudE1pbnVzKCkge1xuICAgICAgdGhpcy5wZW9wbGUgPSB0aGlzLnBlb3BsZS0tIDwgMiA/IDEgOiB0aGlzLnBlb3BsZS0tXG4gICAgfSxcbiAgICBjb3VudFBsdXMoKSB7XG4gICAgICBpZiAodGhpcy5nb29kc1N0b2NrID4gdGhpcy5wZW9wbGUpIHtcbiAgICAgICAgdGhpcy5wZW9wbGUrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+i2hei/h+WJqeS9meW6p+S9jeaVsCcsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdhdGNoID0ge1xuICAgIHZhbHVlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgdGhpcy5faW5pdChuZXdWYWx1ZSlcbiAgICB9XG4gIH1cbiAgZXZlbnRzID0ge1xuICAgIGdldERhdGUodmFsdWUpIHtcbiAgICAgIHRoaXMuX2luaXQodmFsdWUuc2VsZWN0RGF0ZSwgdmFsdWUucHJlc2VudERhdGUpXG4gICAgICBsZXQgbm93TW9udGggPSBuZXcgRGF0ZSh2YWx1ZS5wcmVzZW50RGF0ZSkuZ2V0TW9udGgoKVxuICAgICAgbGV0IHNlbGVjdE1vbnRoID0gbmV3IERhdGUodmFsdWUuc2VsZWN0RGF0ZSkuZ2V0TW9udGgoKVxuICAgICAgaWYgKG5vd01vbnRoICE9PSBzZWxlY3RNb250aCkge1xuICAgICAgICB0aGlzLmRhdGFJbml0aWFsID0gMVxuICAgICAgfVxuICAgICAgdGhpcy5pbml0aWFsRGF0ZSA9IHZhbHVlLnByZXNlbnREYXRlXG4gICAgICB0aGlzLmNob29zYWJsZURhdGUgPSB0aGlzLmFkZDMwRGF5cyh0aGlzLmluaXRpYWxEYXRlKVxuICAgIH1cbiAgfVxuICBhZGQzMERheXModmFsKSB7XG4gICAgbGV0IGRhdGUxID0gbmV3IERhdGUodmFsKVxuICAgIGxldCBkYXRlMiA9IG5ldyBEYXRlKGRhdGUxKVxuICAgIGRhdGUyLnNldERhdGUoZGF0ZTEuZ2V0RGF0ZSgpICsgMzApXG4gICAgbGV0IG1vbnRoID0gZGF0ZTIuZ2V0TW9udGgoKSArIDFcbiAgICBtb250aCA9IG1vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRoXG4gICAgbGV0IGRhdGUgPSBkYXRlMi5nZXREYXRlKClcbiAgICBkYXRlID0gZGF0ZSA8IDEwID8gJzAnICsgZGF0ZSA6IGRhdGVcbiAgICByZXR1cm4gZGF0ZTIuZ2V0RnVsbFllYXIoKSArICctJyArIG1vbnRoICsgJy0nICsgZGF0ZVxuICB9XG4gIC8qKlxuICAgKiBfZ2V0RGF0YVxuICAgKiDov5Tlm57lvZPliY3op4blm77ml6XmnJ/mlbDnu4RcbiAgICogQHBhcmFtIHRpbWVcbiAgICogQHJldHVybiBbe2RheTozMSxtb250aDozLHllYXI6MjAxOH0se2RheToxLG1vbnRoOjQseWVhcjoyMDE4fSwuLi5dXG4gICAqL1xuICBfZ2V0RGF0YSAodGltZSA9IG1vbWVudCgpKSB7XG4gICAgdGhpcy5fc2V0Vmlld1RpbWUodGltZSlcbiAgICAvLyDku6Tml7bpl7Tlj5jkuLrlvZPmnIgx5Y+355qEXG4gICAgY29uc3QgZmlyc3REYXkgPSB0aW1lLnN0YXJ0T2YoJ21vbnRoJylcbiAgICAvLyDorqHnrpflvZPmnIgx5Y+35piv5pif5pyf5YegXG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBmaXJzdERheS5mb3JtYXQoJ0UnKVxuICAgIC8vIOiuoeeul+S4iuS4quaciOWkmuS9meaXtumXtFxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLl9jYWxEYXRlKGZpcnN0RGF5LnN1YnRyYWN0KGZpcnN0RGF5T2ZXZWVrIC0gMSwgJ2RheXMnKSwgZmlyc3REYXlPZldlZWsgLSAxKVxuICAgIC8vIOiuoeeul+acrOaciOaXtumXtFxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9jYWxEYXRlKGZpcnN0RGF5LCBmaXJzdERheS5kYXlzSW5Nb250aCgpKVxuICAgIC8vIOS7pOaXtumXtOWPmOS4uuacrOaciOacq1xuICAgIGNvbnN0IGVuZERheSA9IHRpbWUuc3VidHJhY3QoMSwgJ2RheXMnKVxuICAgIC8vIOW9k+aciOS4juacq+aYr+aYn+acn+WHoFxuICAgIGNvbnN0IGVuZERheU9mV2VlayA9IGVuZERheS5mb3JtYXQoJ0UnKVxuICAgIC8vIOiuoeeul+S4i+S4quaciOWkmuS9meaXtumXtFxuICAgIGNvbnN0IG5leHQgPSB0aGlzLl9jYWxEYXRlKGVuZERheS5hZGQoMSwgJ2RheXMnKSwgNyAtIGVuZERheU9mV2VlaylcbiAgICByZXR1cm4gWy4uLmxhc3QsIC4uLmN1cnJlbnQsIC4uLm5leHRdXG4gIH1cbiAgLyoqXG4gICAqIF9zZXRUaW1lXG4gICAqIOiuvuWumuWvvOWHuueahOaXtumXtFxuICAgKiBAcGFyYW0gdGltZSBtb21lbnTlr7nosaFcbiAgICovXG4gIF9zZXRUaW1lICh0aW1lID0gbW9tZW50KCkpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLl9kZWFsTW9tZW50KHRpbWUpXG4gICAgdGhpcy5jdXJyZW50TGlzdC5wdXNoKHRoaXMuY3VycmVudClcbiAgfVxuICBfcmVtb3ZlVGltZSh0aW1lID0gbW9tZW50KCkpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLl9kZWFsTW9tZW50KHRpbWUpXG4gICAgbGV0IGluZGV4ID0gdGhpcy5faW5kZXhPZih0aGlzLmN1cnJlbnQuZm9ybWF0RGF5KVxuICAgIHRoaXMuY3VycmVudExpc3Quc3BsaWNlKGluZGV4LCAxKVxuICB9XG4gIF9pbmRleE9mKHZhbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuY3VycmVudExpc3RbaV0uZm9ybWF0RGF5ID09PSB2YWwpIHtcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIF9zZXRUaW1lXG4gICAqIOiuvuWumuW9k+WJjeaXpeWOhueahOaXtumXtFxuICAgKiBAcGFyYW0gdGltZSBtb21lbnTlr7nosaFcbiAgICovXG4gIF9zZXRWaWV3VGltZSAodGltZSA9IG1vbWVudCgpKSB7XG4gICAgdGhpcy52aWV3VGltZSA9IHRoaXMuX2RlYWxNb21lbnQodGltZS5zdGFydE9mKCdtb250aCcpKVxuICB9XG4gIC8qKlxuICAgKiBfY2FsRGF0ZVxuICAgKiDorqHnrpfml6XmnJ/lh73mlbBcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqIEBwYXJhbSBsZW5ndGgg6L+U5Zue5pWw57uE55qE6ZW/5bqmXG4gICAqIEByZXR1cm4g6L+U5Zue5pel5pyf5pWw57uEXG4gICAqL1xuICBfY2FsRGF0ZSAodGltZSwgbGVuZ3RoKSB7XG4gICAgbGV0IGFyciA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyLnB1c2godGhpcy5fZGVhbE1vbWVudCh0aW1lKSlcbiAgICAgIHRpbWUuYWRkKDEsICdkYXlzJylcbiAgICB9XG4gICAgcmV0dXJuIGFyclxuICB9XG4gIC8qKlxuICAgKiBfZGVhbE1vbWVudFxuICAgKiDlpITnkIZtb21lbnTlr7nosaFcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqIEByZXR1cm4g6L+U5Zue5LiA5LiqT2JqZWN0e3llYXIsIG1vbnRoLCBkYXksIGZvcm1hdERheX1cbiAgICovXG4gIF9kZWFsTW9tZW50ICh0aW1lKSB7XG4gICAgbGV0IHsgeWVhcnMsIG1vbnRocywgZGF0ZSB9ID0gdGltZS50b09iamVjdCgpXG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHllYXJzLFxuICAgICAgbW9udGg6IG1vbnRocyArIDEsXG4gICAgICBkYXk6IGRhdGUsXG4gICAgICB3ZWVrQ2g6ICflkagnICsgdGhpcy53ZWVrc0NoW3RpbWUuZm9ybWF0KCdFJykgLSAxXSxcbiAgICAgIGZvcm1hdERheTogdGltZS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICAgIGZvcm1hdERhdGU6IHRpbWUuZm9ybWF0KCdNTS1ERCcpXG4gICAgfVxuICB9XG4gIC8vIOaXpeacn+WkmumAiVxuICBfY2hlY2tWaWV3KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52aWV3RGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmN1cnJlbnRMaXN0Lmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdEYXlzW2ldLmZvcm1hdERheSA9PT0gdGhpcy5jdXJyZW50TGlzdFt5XS5mb3JtYXREYXkpIHtcbiAgICAgICAgICB0aGlzLnZpZXdEYXlzW2ldLmNoZWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBfaW5pdFxuICAgKiDliJ3lp4vljJZcbiAgICogQHBhcmFtIHZhbHVlICcyMDE4LTAyLTAyJyBZWVlZLU1NLUREXG4gICAqL1xuICBfaW5pdCAoc2VsZWN0VmFsdWUsIHByZXNlbnRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmluaXRpYWwgPT09IDApIHtcbiAgICAgIC8vIHRoaXMudmlld0RheXMgPSB0aGlzLl9nZXREYXRhKG1vbWVudChwcmVzZW50VmFsdWUpKVxuICAgICAgdGhpcy52aWV3RGF5cyA9IHRoaXMuX2dldERhdGEobW9tZW50KHNlbGVjdFZhbHVlKSlcbiAgICAgIHRoaXMuX3NldFRpbWUobW9tZW50KHNlbGVjdFZhbHVlKSlcbiAgICAgIHRoaXMuX2NoZWNrVmlldygpXG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbCArPSAxXG4gIH1cbn1cbiJdfQ==
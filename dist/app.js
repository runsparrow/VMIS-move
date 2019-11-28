'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/login', 'pages/calendar', 'pages/newtask', 'pages/tasklist', 'pages/mine'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        selectedColor: '#278BFF',
        list: [{
          pagePath: 'pages/calendar',
          iconPath: './static/images/fx1.png',
          selectedIconPath: './static/images/fx.png',
          text: '日程'
        }, {
          pagePath: 'pages/tasklist',
          iconPath: './static/images/bg1.png',
          selectedIconPath: './static/images/bg.png',
          text: '任务'
        }, {
          pagePath: 'pages/mine',
          iconPath: './static/images/wd1.png',
          selectedIconPath: './static/images/wd.png',
          text: '我的'
        }]
      }
    };
    _this.globalData = {};

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsInNlbGVjdGVkQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0IiwiZ2xvYmFsRGF0YSIsInVzZSIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBbUNFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFqQ2RDLE1BaUNjLEdBakNMO0FBQ1BDLGFBQU8sQ0FBQyxhQUFELEVBQWUsZ0JBQWYsRUFBZ0MsZUFBaEMsRUFBaUQsZ0JBQWpELEVBQWtFLFlBQWxFLENBREE7QUFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQUZEO0FBUVBDLGNBQVE7QUFDTkMsdUJBQWUsU0FEVDtBQUVOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsZ0JBRFo7QUFFRUMsb0JBQVUseUJBRlo7QUFHRUMsNEJBQWtCLHdCQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBREksRUFPSjtBQUNFSCxvQkFBVSxnQkFEWjtBQUVFQyxvQkFBVSx5QkFGWjtBQUdFQyw0QkFBa0Isd0JBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FQSSxFQWFKO0FBQ0VILG9CQUFVLFlBRFo7QUFFRUMsb0JBQVUseUJBRlo7QUFHRUMsNEJBQWtCLHdCQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBYkk7QUFGQTtBQVJELEtBaUNLO0FBQUEsVUFEZEMsVUFDYyxHQURELEVBQ0M7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7OztFQXRDMEJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5pbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4vc3RvcmUnO1xuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xuc2V0U3RvcmUoc3RvcmUpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogWydwYWdlcy9sb2dpbicsJ3BhZ2VzL2NhbGVuZGFyJywncGFnZXMvbmV3dGFzaycsICdwYWdlcy90YXNrbGlzdCcsJ3BhZ2VzL21pbmUnIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMjc4QkZGJyxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvY2FsZW5kYXInLFxuICAgICAgICAgIGljb25QYXRoOiAnLi9zdGF0aWMvaW1hZ2VzL2Z4MS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL3N0YXRpYy9pbWFnZXMvZngucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn5pel56iLJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy90YXNrbGlzdCcsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL3N0YXRpYy9pbWFnZXMvYmcxLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vc3RhdGljL2ltYWdlcy9iZy5wbmcnLFxuICAgICAgICAgIHRleHQ6ICfku7vliqEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxuICAgICAgICAgIGljb25QYXRoOiAnLi9zdGF0aWMvaW1hZ2VzL3dkMS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL3N0YXRpYy9pbWFnZXMvd2QucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuICBnbG9iYWxEYXRhID0ge307XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gIH1cbn1cbiJdfQ==
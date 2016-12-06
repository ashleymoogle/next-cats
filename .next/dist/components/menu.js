'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _css = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/next/dist/lib/css.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    menu: {
        width: '100%',
        display: 'flex'
    }
};

var Menu = function (_React$Component) {
    (0, _inherits3.default)(Menu, _React$Component);

    function Menu() {
        (0, _classCallCheck3.default)(this, Menu);
        return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
    }

    (0, _createClass3.default)(Menu, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: (0, _css.style)(styles.menu) },
                _react2.default.createElement(
                    _head2.default,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'CATS'
                    ),
                    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _link2.default,
                                { href: '/' },
                                _react2.default.createElement(
                                    'a',
                                    null,
                                    'Home'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _link2.default,
                                { href: '/list' },
                                _react2.default.createElement(
                                    'a',
                                    null,
                                    'List'
                                )
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
                var req = _ref2.req;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', req ? { userAgent: req.headers['user-agent'] } : { userAgent: navigator.userAgent });

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);
    return Menu;
}(_react2.default.Component);

exports.default = Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJtZW51Iiwid2lkdGgiLCJkaXNwbGF5IiwiTWVudSIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVM7QUFDWEMsVUFBTTtBQUNGQyxlQUFNLE1BREo7QUFFRkMsaUJBQVM7QUFGUDtBQURLLENBQWY7O0lBT01DLEk7Ozs7Ozs7Ozs7aUNBT1E7QUFDTixtQkFBTztBQUFBO0FBQUEsa0JBQUssV0FBVyxnQkFBTUosT0FBT0MsSUFBYixDQUFoQjtBQUNIO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSSw0REFBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSx1Q0FBOUI7QUFGSixpQkFERztBQUtIO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQ0FBTSxNQUFLLEdBQVg7QUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBSix5QkFESjtBQUVJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQ0FBTSxNQUFLLE9BQVg7QUFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFKO0FBRko7QUFESjtBQUxHLGFBQVA7QUFZSDs7Ozs7b0JBbkIrQkksRyxTQUFBQSxHOzs7OztpRUFDckJBLE1BQ0QsRUFBRUMsV0FBV0QsSUFBSUUsT0FBSixDQUFZLFlBQVosQ0FBYixFQURDLEdBRUQsRUFBRUQsV0FBV0UsVUFBVUYsU0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSkssZ0JBQU1HLFM7O2tCQXVCVkwsSSIsImZpbGUiOiJtZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yb21haW5iL0RvY3VtZW50cy9uZXh0anMvbmV4dC1jYXRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIG1lbnU6IHtcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9XG59XG5cbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICAgICAgcmV0dXJuIHJlcVxuICAgICAgICAgICAgPyB7IHVzZXJBZ2VudDogcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSB9XG4gICAgICAgICAgICA6IHsgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50IH1cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5tZW51KX0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q0FUUzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2xpc3RcIj48YT5MaXN0PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51Il19
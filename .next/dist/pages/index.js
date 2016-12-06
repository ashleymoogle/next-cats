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

var _menu = require('../components/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);
        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_menu2.default, null),
                'Bienvenue sur ce super site !'
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
    return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicmVxIiwidXNlckFnZW50IiwiaGVhZGVycyIsIm5hdmlnYXRvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7O2lDQU9RO0FBQ04sbUJBQU87QUFBQTtBQUFBO0FBQ0gsbUVBREc7QUFBQTtBQUFBLGFBQVA7QUFJSDs7Ozs7b0JBWCtCQyxHLFNBQUFBLEc7Ozs7O2lFQUNyQkEsTUFDRCxFQUFFQyxXQUFXRCxJQUFJRSxPQUFKLENBQVksWUFBWixDQUFiLEVBREMsR0FFRCxFQUFFRCxXQUFXRSxVQUFVRixTQUF2QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFKTSxnQkFBTUcsUzs7a0JBZVhMLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JvbWFpbmIvRG9jdW1lbnRzL25leHRqcy9uZXh0LWNhdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgICAgIHJldHVybiByZXFcbiAgICAgICAgICAgID8geyB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gfVxuICAgICAgICAgICAgOiB7IHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCB9XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgICAgQmllbnZlbnVlIHN1ciBjZSBzdXBlciBzaXRlICFcbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ==
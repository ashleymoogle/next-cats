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
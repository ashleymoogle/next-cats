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

var _itemSingle = require('../components/itemSingle');

var _itemSingle2 = _interopRequireDefault(_itemSingle);

require('isomorphic-fetch');

var _css = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/next/dist/lib/css.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    items: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
};

var List = function (_React$Component) {
    (0, _inherits3.default)(List, _React$Component);

    function List() {
        (0, _classCallCheck3.default)(this, List);
        return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
    }

    (0, _createClass3.default)(List, [{
        key: 'render',
        value: function render() {
            console.log(this.props.data[0]);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_menu2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: (0, _css.style)(styles.items) },
                    this.props.data.map(function (i) {
                        return _react2.default.createElement(_itemSingle2.default, { key: i.id, data: i });
                    })
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
                var req = _ref2.req;
                var response, json, d;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('https://jsonplaceholder.typicode.com/posts');

                            case 2:
                                response = _context.sent;
                                _context.next = 5;
                                return response.json();

                            case 5:
                                json = _context.sent;
                                d = [json[0], json[1], json[2], json[3], json[4]];
                                return _context.abrupt('return', { data: d });

                            case 8:
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
    return List;
}(_react2.default.Component);

exports.default = List;
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(46);

	var _reactRouterRedux = __webpack_require__(224);

	var _configureStore = __webpack_require__(529);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootElement = document.getElementById('root');
	var store = (0, _configureStore2.default)(window.__INITIAL_STATE__);
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	var render = function render() {
	  var App = __webpack_require__(487).default;
	  _reactDom2.default.render(_react2.default.createElement(App, { store: store, history: history }), rootElement);
	};

	if (false) {
	  (function () {
	    // Support hot reloading of components
	    // and display an overlay for runtime errors
	    var renderApp = render;
	    var renderError = function renderError(error) {
	      var RedBox = require('redbox-react');
	      _reactDom2.default.render(_react2.default.createElement(RedBox, { error: error }), rootElement);
	    };

	    render = function render() {
	      try {
	        renderApp();
	      } catch (error) {
	        renderError(error);
	      }
	    };

	    module.hot.accept('containers/Root', render);
	  })();
	}

	render();

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = connect;

	var _redux = __webpack_require__(92);

	var _reactRedux = __webpack_require__(223);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/*
	 * Connects a react component to the redux store.
	 *
	 * @param state      - The name of the desired substate.
	 * @param selector   - a memoized selector function describing selection logic.
	 *                     The selector efficiently computes derived data from the store.
	 * @param actions    - The actions that will be provided to the connected component.
	 *
	 * @return           - Return the enhancer function.
	 */
	function connect(_ref) {
	  var state = _ref.state;
	  var selector = _ref.selector;
	  var actions = _ref.actions;

	  /* the container will subscribe to Redux store updates */
	  var mapStateToProps = function mapStateToProps(STATE) {
	    return state ? _defineProperty({}, state, STATE[state]) : {};
	  };

	  /* the container will be provided actions */
	  if (actions) {
	    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	      return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	      };
	    };
	  }

	  return (0, _reactRedux.connect)(selector ? selector : mapStateToProps, mapDispatchToProps);
	}

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.SubmitButton = SubmitButton;
	exports.Button = Button;
	exports.LinkButton = LinkButton;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(46);

	var _classnames = __webpack_require__(165);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _app = __webpack_require__(446);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// Components
	function SubmitButton(_ref) {
	  var className = _ref.className;
	  var children = _ref.children;

	  var props = _objectWithoutProperties(_ref, ['className', 'children']);

	  var classes = (0, _classnames2.default)(className, 'btn btn-primary');

	  return _react2.default.createElement(
	    'button',
	    _extends({}, props, { type: 'submit', className: classes }),
	    children
	  );
	}

	function Button(_ref2) {
	  var className = _ref2.className;
	  var children = _ref2.children;

	  var props = _objectWithoutProperties(_ref2, ['className', 'children']);

	  var classes = (0, _classnames2.default)(className, 'btn', 'btn-default', _app2.default.btnHive);

	  return _react2.default.createElement(
	    'button',
	    _extends({}, props, { type: 'button', className: classes }),
	    children
	  );
	}

	function LinkButton(_ref3) {
	  var className = _ref3.className;
	  var children = _ref3.children;

	  var props = _objectWithoutProperties(_ref3, ['className', 'children']);

	  var classes = (0, _classnames2.default)(className, 'btn', 'btn-default', _app2.default.btnHive);

	  return _react2.default.createElement(
	    _reactRouter.Link,
	    _extends({}, props, { role: 'button', className: classes }),
	    children
	  );
	}

/***/ },

/***/ 27:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADD_ANSWER_TO_ROUND = exports.ADD_ANSWER_TO_ROUND = 'ADD_ANSWER_TO_ROUND';
	var ADD_ANSWERS = exports.ADD_ANSWERS = 'ADD_ANSWERS';
	var ADD_OUTCOMES = exports.ADD_OUTCOMES = 'ADD_OUTCOMES';
	var ADD_PHI = exports.ADD_PHI = 'ADD_PHI';
	var ADD_WINNINGS = exports.ADD_WINNINGS = 'ADD_WINNINGS';
	var CLEAR_WINNINGS = exports.CLEAR_WINNINGS = 'CLEAR_WINNINGS';
	var DEPOSIT = exports.DEPOSIT = 'DEPOSIT';
	var ERROR = exports.ERROR = 'ERROR';
	var INCREMENT_CURRENT_QUESTION = exports.INCREMENT_CURRENT_QUESTION = 'INCREMENT_CURRENT_QUESTION';
	var IS_SUBMITTING = exports.IS_SUBMITTING = 'IS_SUBMITTING';
	var POST = exports.POST = 'POST';
	var RESET_CURRENT_QUESTION = exports.RESET_CURRENT_QUESTION = 'RESET_CURRENT_QUESTION';
	var RESET_TOOLTIP = exports.RESET_TOOLTIP = 'RESET_TOOLTIP';
	var RESOLVE_ERROR = exports.RESOLVE_ERROR = 'RESOLVE_ERROR';
	var SET_ANSWER_SUBMITTED = exports.SET_ANSWER_SUBMITTED = 'SET_ANSWER_SUBMITTED';
	var SET_BANK = exports.SET_BANK = 'SET_BANK';
	var SET_BIN_VALUES = exports.SET_BIN_VALUES = 'SET_BIN_VALUES';
	var SET_CATEGORY = exports.SET_CATEGORY = 'SET_CATEGORY';
	var SET_CATEGORY_NAMES = exports.SET_CATEGORY_NAMES = 'SET_CATEGORY_NAMES';
	var SET_CORRECT_ANSWER_INDICES = exports.SET_CORRECT_ANSWER_INDICES = 'SET_CORRECT_ANSWER_INDICES';
	var SET_COVARIATE_DATA = exports.SET_COVARIATE_DATA = 'SET_COVARIATE_DATA';
	var SET_CURRENT_ROUND = exports.SET_CURRENT_ROUND = 'SET_CURRENT_ROUND';
	var SET_DATA = exports.SET_DATA = 'SET_DATA';
	var SET_HOURLY_WAGES = exports.SET_HOURLY_WAGES = 'SET_HOURLY_WAGES';
	var SET_MONTHLY_EARNINGS = exports.SET_MONTHLY_EARNINGS = 'SET_MONTHLY_EARNINGS';
	var SET_OUTCOME_INDEX = exports.SET_OUTCOME_INDEX = 'SET_OUTCOME_INDEX';
	var SET_OUTCOMES = exports.SET_OUTCOMES = 'SET_OUTCOMES';
	var SET_PHI = exports.SET_PHI = 'SET_PHI';
	var SET_PLACEHOLDERS = exports.SET_PLACEHOLDERS = 'SET_PLACEHOLDERS';
	var SET_QUESTION = exports.SET_QUESTION = 'SET_QUESTION';
	var SET_RANGE = exports.SET_RANGE = 'SET_RANGE';
	var SET_RANGES = exports.SET_RANGES = 'SET_RANGES';
	var SET_SERIES = exports.SET_SERIES = 'SET_SERIES';
	var SET_TOOLTIP_MESSAGE = exports.SET_TOOLTIP_MESSAGE = 'SET_TOOLTIP_MESSAGE';
	var SET_TOOLTIP_TARGET = exports.SET_TOOLTIP_TARGET = 'SET_TOOLTIP_TARGET';
	var SET_TYPES = exports.SET_TYPES = 'SET_TYPES';
	var SET_UNLOCKED = exports.SET_UNLOCKED = 'SET_UNLOCKED';
	var SHOW_MODAL = exports.SHOW_MODAL = 'SHOW_MODAL';
	var WITHDRAW = exports.WITHDRAW = 'WITHDRAW';

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.showModal = undefined;

	var _constants = __webpack_require__(27);

	var _reduxActions = __webpack_require__(78);

	var showModal = exports.showModal = (0, _reduxActions.createAction)(_constants.SHOW_MODAL, function (showModal) {
	  return { showModal: showModal };
	});

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetTooltip = exports.setTooltipTarget = exports.setTooltipMessage = undefined;

	var _constants = __webpack_require__(27);

	var _reduxActions = __webpack_require__(78);

	var setTooltipMessage = exports.setTooltipMessage = (0, _reduxActions.createAction)(_constants.SET_TOOLTIP_MESSAGE, function (message) {
	  return { message: message };
	});
	var setTooltipTarget = exports.setTooltipTarget = (0, _reduxActions.createAction)(_constants.SET_TOOLTIP_TARGET, function (target) {
	  return { target: target };
	});
	var resetTooltip = exports.resetTooltip = (0, _reduxActions.createAction)(_constants.RESET_TOOLTIP);

/***/ },

/***/ 79:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var toNum = exports.toNum = function toNum(val) {
	  if (val !== '' && !isNaN(val)) {
	    return +val;
	  } else {
	    return '';
	  }
	};

/***/ },

/***/ 93:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var APP_ID = exports.APP_ID = 'JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK';
	var JAVASCRIPT_KEY = exports.JAVASCRIPT_KEY = 'Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5';

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(34);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tooltip = function (_React$Component) {
	  _inherits(Tooltip, _React$Component);

	  function Tooltip() {
	    _classCallCheck(this, Tooltip);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).call(this));

	    _this.handleHide = _this.handleHide.bind(_this);
	    _this.getTarget = _this.getTarget.bind(_this);
	    return _this;
	  }

	  _createClass(Tooltip, [{
	    key: 'handleHide',
	    value: function handleHide() {
	      this.props.onHide();
	    }
	  }, {
	    key: 'getTarget',
	    value: function getTarget() {
	      _reactDom2.default.findDOMNode(this.props.target);
	    }
	  }, {
	    key: 'renderTooltip',
	    value: function renderTooltip() {
	      var rootClose = this.props.onHide ? true : false;
	      return _react2.default.createElement(
	        _reactBootstrap.Overlay,
	        {
	          onHide: this.handleHide,
	          placement: this.props.placement,
	          rootClose: rootClose,
	          show: true,
	          target: this.getTarget
	        },
	        _react2.default.createElement(
	          _reactBootstrap.Tooltip,
	          { id: this.props.message },
	          this.props.message
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.message) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          this.renderTooltip()
	        );
	      } else {
	        return null;
	      }
	    }
	  }]);

	  return Tooltip;
	}(_react2.default.Component);

	exports.default = Tooltip;


	Tooltip.defaultProps = {
	  placement: 'top',
	  onHide: null
	};

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.submitPage1 = submitPage1;
	exports.submitPage2 = submitPage2;
	exports.submitPage3 = submitPage3;
	exports.submitSurvey = submitSurvey;

	var _reactRouter = __webpack_require__(46);

	var _reactReduxForm = __webpack_require__(15);

	var _modal = __webpack_require__(50);

	var _parse = __webpack_require__(65);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(93);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function submitPage1() {
	  return function (dispatch, getState) {
	    // TODO: Check values of the survey form and set validity of surveyForm
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.stateOfResidence', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.gender', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.hispanic', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.isBornInUS', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.isEnglishPrimaryLanguage', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));

	    var _getState = getState();

	    var surveyForm = _getState.forms.surveyForm;

	    if (surveyForm.valid) {
	      _reactRouter.browserHistory.push('/signup/2');
	    }
	  };
	}

	function submitPage2() {
	  return function (dispatch, getState) {
	    // TODO: Check values of the survey form and set validity of surveyForm
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.isLunchReducedPrice', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.birthdate.day', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      },
	      validDay: function validDay(val) {
	        return typeof val !== 'string' && (val < 1 || val > 31) && 'Please enter a valid day!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.birthdate.month', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      },
	      validMonth: function validMonth(val) {
	        return typeof val !== 'string' && (val < 1 || val > 12) && 'Please enter a valid month!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.birthdate.year', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.isStudent', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.isEmployed', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.annualSalary', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.workHoursPerWeek', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.yearsOfWorkExperienceOverall', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));

	    var _getState2 = getState();

	    var surveyForm = _getState2.forms.surveyForm;

	    if (surveyForm.valid) {
	      _reactRouter.browserHistory.push('/signup/3');
	    }
	  };
	}

	function submitPage3() {
	  return function (dispatch, getState) {
	    // TODO: Check values of the survey form and set validity of surveyForm
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.yearsOfWorkExperienceInCurrentCareer', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.yearsOfCompletedSchooling', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.intendedYearsOfCompletedSchooling', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.highestEducationDegree', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.intendedHighestEducationDegree', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));

	    var _getState3 = getState();

	    var surveyForm = _getState3.forms.surveyForm;

	    if (surveyForm.valid) {
	      _reactRouter.browserHistory.push('/signup/4');
	    }
	  };
	}

	function submitSurvey() {
	  return function (dispatch, getState) {
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    // TODO: Check values of the survey form and set validity of surveyForm
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.highSchoolGPA', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.collegeGPA', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.fathersEducation', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.fathersEducationIsGuess', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.mothersEducation', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('forms.survey.mothersEducationIsGuess', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));

	    var _getState4 = getState();

	    var surveyForm = _getState4.forms.surveyForm;

	    if (surveyForm.valid) {
	      dispatch((0, _modal.showModal)(true));
	    }
	  };
	}

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var surveySelector = function surveySelector(state) {
	  return state.forms.survey;
	};
	var surveyFormSelector = function surveyFormSelector(state) {
	  return state.forms.surveyForm;
	};

	exports.default = (0, _reselect.createStructuredSelector)({
	  survey: surveySelector,
	  surveyForm: surveyFormSelector
	});

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setCurrentRound = exports.setQuestion = exports.setCorrectAnswerIndices = exports.resetCurrentQuestion = exports.incrementCurrentQuestion = exports.addWinnings = exports.addOutcomes = exports.addAnswerToRound = exports.addAnswers = undefined;
	exports.asyncAwardPoints = asyncAwardPoints;
	exports.asyncCreateRound = asyncCreateRound;
	exports.asyncHandleSubmit = asyncHandleSubmit;
	exports.initializeQuestion = initializeQuestion;
	exports.pullQuestion = pullQuestion;

	var _constants = __webpack_require__(27);

	var _answer = __webpack_require__(251);

	var _reactReduxForm = __webpack_require__(15);

	var _misc = __webpack_require__(531);

	var _reduxActions = __webpack_require__(78);

	var _parse = __webpack_require__(65);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(93);

	var _reactRouter = __webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addAnswers = exports.addAnswers = (0, _reduxActions.createAction)(_constants.ADD_ANSWERS, function (answers) {
	  return { answers: answers };
	});
	var addAnswerToRound = exports.addAnswerToRound = (0, _reduxActions.createAction)(_constants.ADD_ANSWER_TO_ROUND, function (answer) {
	  return { answer: answer };
	});
	var addOutcomes = exports.addOutcomes = (0, _reduxActions.createAction)(_constants.ADD_OUTCOMES, function (outcomes) {
	  return { outcomes: outcomes };
	});
	var addWinnings = exports.addWinnings = (0, _reduxActions.createAction)(_constants.ADD_WINNINGS, function (winnings) {
	  return { winnings: winnings };
	});
	var incrementCurrentQuestion = exports.incrementCurrentQuestion = (0, _reduxActions.createAction)(_constants.INCREMENT_CURRENT_QUESTION);
	var resetCurrentQuestion = exports.resetCurrentQuestion = (0, _reduxActions.createAction)(_constants.RESET_CURRENT_QUESTION);
	var setCorrectAnswerIndices = exports.setCorrectAnswerIndices = (0, _reduxActions.createAction)(_constants.SET_CORRECT_ANSWER_INDICES, function (correctAnswerIndices) {
	  return { correctAnswerIndices: correctAnswerIndices };
	});
	var setQuestion = exports.setQuestion = (0, _reduxActions.createAction)(_constants.SET_QUESTION, function (question) {
	  return { question: question };
	});
	var setCurrentRound = exports.setCurrentRound = (0, _reduxActions.createAction)(_constants.SET_CURRENT_ROUND, function (currentRound) {
	  return { currentRound: currentRound };
	});

	/*
	 *  Award the user points according to the correctness of their answer
	 */
	function asyncAwardPoints(worth) {
	  return function (dispatch, getState) {
	    var _getState = getState();

	    var binValues = _getState.answer.binValues;
	    var correctAnswerIndices = _getState.round.correctAnswerIndices;

	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    //TODO: Calculate how many points are earned for answering correctly
	    var winnings = 0;
	    for (var i = 0; i < worth.length; i++) {
	      winnings += correctAnswerIndices[i] === -1 ? 0 : binValues[i][correctAnswerIndices[i]] * worth[i];
	    }
	    var points = _parse2.default.User.current().get('points');
	    points += winnings;
	    dispatch(addWinnings(winnings));
	    _parse2.default.User.current().save({ points: points });
	  };
	}

	/*
	 *  Create a new round in Parse and save with:
	 *    answers: [],
	 *    createdBy: currentUser
	 */
	function asyncCreateRound() {
	  return function (dispatch) {
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);

	    //Create new Round
	    var Round = _parse2.default.Object.extend('Round');
	    var newRound = new Round();

	    //Save Round and set currentRound state
	    newRound.save({
	      answers: [],
	      createdBy: _parse2.default.User.current()
	    }).then(function (savedRound) {
	      dispatch(setCurrentRound(savedRound));
	    });
	  };
	}

	/*
	 *  Create and save a new answer
	 *  Save the current round with the new answer
	 *  Submit the round if round is complete
	 */
	function asyncHandleSubmit() {
	  return function (dispatch, getState) {
	    var _getState2 = getState();

	    var answer = _getState2.answer;
	    var category = _getState2.category;
	    var round = _getState2.round;
	    var estimates = _getState2.forms.estimates;
	    var objectId = _getState2.question.objectId;

	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);

	    // Create an array of all of the outcomes estimated by the user
	    var estimatesArray = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = category.outcomeNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var outcome = _step.value;

	        estimatesArray.push(typeof estimates[outcome] === 'string' ? Number(estimates[outcome]) : estimates[outcome]);
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

	    dispatch(_reactReduxForm.actions.reset('forms.estimates'));

	    // Save token distribution and outcomes
	    dispatch(addAnswers(answer.binValues));
	    dispatch(addOutcomes(answer.outcomes));

	    // Create query for the question that the user answered
	    var Questions = _parse2.default.Object.extend('Questions');
	    var query = new _parse2.default.Query(Questions);

	    dispatch((0, _answer.setAnswerSubmitted)(true));
	    query.get(objectId).then(function (question) {
	      // Create new answer to save to a round
	      var Answer = _parse2.default.Object.extend('Answer');
	      var newAnswer = new Answer();
	      return newAnswer.save({
	        question: question,
	        binValues: answer.binValues,
	        estimates: estimatesArray
	      });
	    }).then(function (savedAnswer) {
	      var answers = round.currentRound.get('answers');
	      answers.push(savedAnswer);
	      return round.currentRound.save({ answers: answers });
	    }).then(function () {
	      if (round.currentQuestion >= category.questionsPerRound) {
	        dispatch(resetCurrentQuestion());
	        _reactRouter.browserHistory.push('/stats');
	      } else {
	        dispatch(incrementCurrentQuestion());
	      }
	    });
	  };
	}

	/*
	 *  Initialize the values in question
	 */
	function initializeQuestion(numBins, bank) {
	  return function (dispatch) {
	    var binValues = [];
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = numBins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var num = _step2.value;

	        binValues.push(Array(num).fill(0));
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

	    dispatch((0, _answer.setBank)(bank));
	    dispatch((0, _answer.setBinValues)(binValues));
	  };
	}

	/*
	 *  Pull a random question from Parse database and setState accordingly
	 */
	function pullQuestion(categoryName) {
	  return function (dispatch, getState) {
	    var _getState3 = getState();

	    var submitted = _getState3.answer.submitted;
	    var _getState3$category = _getState3.category;
	    var outcomesToDisplay = _getState3$category.outcomesToDisplay;
	    var covariatesToDisplay = _getState3$category.covariatesToDisplay;

	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    // If the question currently stored has not been submitted, do not pull a new question
	    if (!submitted) {
	      return;
	    }

	    //Create query for random question
	    var observationId = (0, _misc.rand)(1, 3010);
	    var Question = _parse2.default.Object.extend('Questions');
	    var query = new _parse2.default.Query(Question);
	    query.equalTo('type', categoryName);
	    query.equalTo('observationId', observationId);
	    //Pull question and set state
	    query.first().then(function (question) {
	      var covariateValues = [],
	          outcomeValues = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = covariatesToDisplay[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var index = _step3.value;

	          covariateValues.push(question.get('covariateValues')[index]);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }

	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;

	      try {
	        for (var _iterator4 = outcomesToDisplay[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var _index = _step4.value;

	          outcomeValues.push(question.get('outcomeValues')[_index]);
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }

	      var selectedQuestion = {
	        covariateValues: covariateValues,
	        objectId: question.id,
	        outcomeValues: outcomeValues
	      };
	      dispatch((0, _answer.setAnswerSubmitted)(false));
	      dispatch(setQuestion(selectedQuestion));
	    });
	  };
	}

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.asyncLogin = asyncLogin;
	exports.asyncHandleSignup = asyncHandleSignup;
	exports.logOut = logOut;

	var _tooltip = __webpack_require__(51);

	var _parse = __webpack_require__(65);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(93);

	var _reactRouter = __webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 *  Login the user and go to the home page
	 */
	function asyncLogin() {
	  return function (dispatch, getState) {
	    var _getState = getState();

	    var login = _getState.forms.login;

	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    _parse2.default.User.logIn(login.email, login.password, {
	      success: function success() {
	        _reactRouter.browserHistory.push('/home');
	      },
	      error: function error(user, _error) {
	        dispatch((0, _tooltip.setTooltipMessage)('Error: ' + _error.code + ' ' + _error.message));
	      }
	    });
	  };
	}

	/*
	 *  Sign up a new user with the given email and go to the home page
	 */
	function asyncHandleSignup() {
	  return function (dispatch, getState) {
	    var _getState2 = getState();

	    var _getState2$forms = _getState2.forms;
	    var survey = _getState2$forms.survey;
	    var signup = _getState2$forms.signup;

	    var newUser = new _parse2.default.User();
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);

	    // Validation
	    if (signup.email.length === 0) {
	      dispatch((0, _tooltip.setTooltipMessage)('All fields must be filled.'));
	      dispatch((0, _tooltip.setTooltipTarget)('email'));
	      return;
	    } else if (signup.password.length === 0) {
	      dispatch((0, _tooltip.setTooltipMessage)('All fields must be filled.'));
	      dispatch((0, _tooltip.setTooltipTarget)('password'));
	      return;
	    } else if (signup.passwordConfirm.length === 0) {
	      dispatch((0, _tooltip.setTooltipMessage)('All fields must be filled.'));
	      dispatch((0, _tooltip.setTooltipTarget)('passwordConfirm'));
	      return;
	    } else if (signup.password.length < 6) {
	      dispatch((0, _tooltip.setTooltipMessage)('Password must be at least 6 characters long.'));
	      dispatch((0, _tooltip.setTooltipTarget)('password'));
	      return;
	    } else if (signup.password !== signup.passwordConfirm) {
	      dispatch((0, _tooltip.setTooltipMessage)('Passwords do not match, try again.'));
	      dispatch((0, _tooltip.setTooltipTarget)('passwordConfirm'));
	      return;
	    }

	    newUser.set('username', signup.email);
	    newUser.set('email', signup.email);
	    newUser.set('password', signup.password);
	    newUser.set('unlockedCategories', []);
	    newUser.set('categoryInformation', {});
	    newUser.set('points', 0);
	    newUser.set('characteristics', survey);
	    newUser.signUp(null, {
	      success: function success() {
	        _reactRouter.browserHistory.push('/home');
	      },
	      error: function error(user, _error2) {
	        dispatch((0, _tooltip.setTooltipMessage)('Error: ' + _error2.code + ' ' + _error2.message));
	      }
	    });
	  };
	}

	function logOut() {
	  return function () {
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    _parse2.default.User.logOut();
	    _reactRouter.browserHistory.push('/');
	  };
	}

/***/ },

/***/ 165:
4,

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.withdraw = exports.setBinValues = exports.setBank = exports.setAnswerSubmitted = exports.deposit = undefined;
	exports.handleDeposit = handleDeposit;

	var _constants = __webpack_require__(27);

	var _reduxActions = __webpack_require__(78);

	var deposit = exports.deposit = (0, _reduxActions.createAction)(_constants.DEPOSIT, function (binsIndex, index) {
	  return { binsIndex: binsIndex, index: index };
	});
	var setAnswerSubmitted = exports.setAnswerSubmitted = (0, _reduxActions.createAction)(_constants.SET_ANSWER_SUBMITTED, function (submitted) {
	  return { submitted: submitted };
	});
	var setBank = exports.setBank = (0, _reduxActions.createAction)(_constants.SET_BANK, function (bank) {
	  return { bank: bank };
	});
	var setBinValues = exports.setBinValues = (0, _reduxActions.createAction)(_constants.SET_BIN_VALUES, function (binValues) {
	  return { binValues: binValues };
	});
	var withdraw = exports.withdraw = (0, _reduxActions.createAction)(_constants.WITHDRAW, function (bankIndex) {
	  return { bankIndex: bankIndex };
	});

	/*
	 *  If any cubes left, distribute one to the specified index
	 */
	function handleDeposit(binsIndex, index) {
	  return function (dispatch, getState) {
	    var _getState = getState();

	    var bank = _getState.answer.bank;

	    if (bank[binsIndex]) {
	      dispatch(withdraw(binsIndex));
	      dispatch(deposit(binsIndex, index));
	    }
	  };
	}

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setUnlocked = exports.setRanges = exports.setRange = exports.setCategory = exports.setCategoryNames = undefined;
	exports.asyncGetCategoryNames = asyncGetCategoryNames;
	exports.asyncHandleCategoryChoice = asyncHandleCategoryChoice;
	exports.handleStart = handleStart;
	exports.handleSurveySubmission = handleSurveySubmission;
	exports.setUnlockedCategories = setUnlockedCategories;

	var _constants = __webpack_require__(27);

	var _modal = __webpack_require__(50);

	var _tooltip = __webpack_require__(51);

	var _reduxActions = __webpack_require__(78);

	var _parse = __webpack_require__(65);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(93);

	var _reactRouter = __webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var setCategoryNames = exports.setCategoryNames = (0, _reduxActions.createAction)(_constants.SET_CATEGORY_NAMES, function (categoryNames) {
	  return { categoryNames: categoryNames };
	});
	var setCategory = exports.setCategory = (0, _reduxActions.createAction)(_constants.SET_CATEGORY, function (category) {
	  return { category: category };
	});
	var setRange = exports.setRange = (0, _reduxActions.createAction)(_constants.SET_RANGE, function (range, index) {
	  return { range: range, index: index };
	});
	var setRanges = exports.setRanges = (0, _reduxActions.createAction)(_constants.SET_RANGES, function (ranges) {
	  return { ranges: ranges };
	});
	var setUnlocked = exports.setUnlocked = (0, _reduxActions.createAction)(_constants.SET_UNLOCKED, function (unlocked, index) {
	  return { unlocked: unlocked, index: index };
	});

	/*
	 *  Make a query to Parse to check how many categories are currently up
	 */
	function asyncGetCategoryNames() {
	  return function (dispatch) {
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    var query = new _parse2.default.Query('Categories');
	    query.find({
	      success: function success(categories) {
	        var categoryNames = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var category = _step.value;

	            categoryNames.push(category.get('name'));
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

	        dispatch(setCategoryNames(categoryNames));
	        dispatch(setUnlockedCategories(categories, _parse2.default.User.current()));
	      }
	    });
	  };
	}

	/*
	 *  Set the chosen category and open up the modal
	 */
	function asyncHandleCategoryChoice(categoryName) {
	  return function (dispatch) {
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    var query = new _parse2.default.Query('Categories');
	    query.equalTo('name', categoryName);
	    query.first({
	      success: function success(category) {

	        // Select only the covariates and the outcomes that the 'client' desires.
	        var covariateDataTypes = [],
	            covariateNames = [],
	            covariateRanges = [],
	            outcomeDataTypes = [],
	            numBins = [],
	            outcomeNames = [],
	            outcomeRanges = [],
	            pointsPerToken = [],
	            questionInstructions = [],
	            tokens = [],
	            covariatesToDisplay = category.get('covariatesToDisplay'),
	            outcomesToDisplay = category.get('outcomesToDisplay');

	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	          for (var _iterator2 = covariatesToDisplay[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var index = _step2.value;

	            covariateDataTypes.push(category.get('covariateDataTypes')[index]);
	            covariateNames.push(category.get('covariateNames')[index]);
	            covariateRanges.push(category.get('covariateRanges')[index]);
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

	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	          for (var _iterator3 = outcomesToDisplay[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _index = _step3.value;

	            outcomeDataTypes.push(category.get('outcomeDataTypes')[_index]);
	            numBins.push(category.get('numBins')[_index]);
	            outcomeNames.push(category.get('outcomeNames')[_index]);
	            outcomeRanges.push(category.get('outcomeRanges')[_index]);
	            pointsPerToken.push(category.get('pointsPerToken')[_index]);
	            questionInstructions.push(category.get('questionInstructions')[_index]);
	            tokens.push(category.get('tokens')[_index]);
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }

	        var selectedCategory = {
	          allCovariateDataTypes: category.get('covariateDataTypes'),
	          allCovariateNames: category.get('covariateNames'),
	          categorySurveyInstructions: category.get('categorySurveyInstructions'),
	          covariateDataTypes: covariateDataTypes,
	          covariateNames: covariateNames,
	          covariateRanges: covariateRanges,
	          covariatesToDisplay: covariatesToDisplay,
	          index: category.get('index'),
	          name: category.get('name'),
	          numBins: numBins,
	          outcomeDataTypes: outcomeDataTypes,
	          outcomeNames: outcomeNames,
	          outcomeRanges: outcomeRanges,
	          outcomesToDisplay: outcomesToDisplay,
	          pointsPerToken: pointsPerToken,
	          questionInstructions: questionInstructions,
	          questionsPerRound: category.get('questionsPerRound'),
	          roundInstructions: category.get('roundInstructions'),
	          tokens: tokens
	        };
	        dispatch(setCategory(selectedCategory));
	        dispatch((0, _modal.showModal)(true));
	      }
	    });
	  };
	}

	/*
	 *  Validate ranges, if everything looks good, start the round.
	 */
	function handleStart() {
	  return function (dispatch, getState) {
	    var _getState = getState();

	    var ranges = _getState.forms.ranges;
	    var _getState$category = _getState.category;
	    var outcomeNames = _getState$category.outcomeNames;
	    var outcomeDataTypes = _getState$category.outcomeDataTypes;

	    // Validation

	    for (var i = 0; i < outcomeNames.length; i++) {
	      if (outcomeDataTypes[i].type === 'continuous' && !ranges[outcomeNames[i]]) {
	        dispatch((0, _tooltip.setTooltipMessage)('All fields must be filled in.'));
	        dispatch((0, _tooltip.setTooltipTarget)(outcomeNames[i]));
	        return;
	      }
	    }
	    for (var outcomeName in ranges) {
	      if (isNaN(ranges[outcomeName].lower) || isNaN(ranges[outcomeName].upper)) {
	        dispatch((0, _tooltip.setTooltipMessage)('All fields must be filled in.'));
	        dispatch((0, _tooltip.setTooltipTarget)(outcomeName));
	        return;
	      }
	    }
	    for (var _outcomeName in ranges) {
	      if (ranges[_outcomeName].lower >= ranges[_outcomeName].upper) {
	        dispatch((0, _tooltip.setTooltipMessage)(_outcomeName + ' range has a smaller upper bound than lower bound, try again.'));
	        dispatch((0, _tooltip.setTooltipTarget)(_outcomeName));
	        return;
	      }
	    }
	    _reactRouter.browserHistory.push('/round');
	  };
	}

	/*
	 *  If all values in the form are filled, unlock the category, and set the information on the current user
	 */
	function handleSurveySubmission() {
	  return function (dispatch, getState) {
	    var _getState2 = getState();

	    var covariates = _getState2.forms.covariates;
	    var _getState2$category = _getState2.category;
	    var covariateNames = _getState2$category.covariateNames;
	    var index = _getState2$category.index;
	    var name = _getState2$category.name;

	    var covariateValues = [];
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    var user = _parse2.default.User.current();

	    // Validation
	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	      for (var _iterator4 = covariateNames[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var covariateName = _step4.value;

	        if (isNaN(covariates[covariateName])) {
	          dispatch((0, _tooltip.setTooltipMessage)('All fields must be filled in.'));
	          dispatch((0, _tooltip.setTooltipTarget)(covariateName));
	          return;
	        }
	        covariateValues.push(typeof covariates[covariateName] === 'string' ? Number(covariates[covariateName]) : covariates[covariateName]);
	      }
	    } catch (err) {
	      _didIteratorError4 = true;
	      _iteratorError4 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	          _iterator4.return();
	        }
	      } finally {
	        if (_didIteratorError4) {
	          throw _iteratorError4;
	        }
	      }
	    }

	    dispatch(setUnlocked(true, index));
	    var information = _defineProperty({}, name, covariateValues);
	    user.add('unlockedCategories', name);
	    user.save({ categoryInformation: Object.assign(user.get('categoryInformation'), information) });
	  };
	}

	/*
	 *  Initialize the array of booleans that represent which categories are unlocked to the current user
	 */
	function setUnlockedCategories(categories) {
	  return function (dispatch) {
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;

	    try {
	      for (var _iterator5 = categories[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var category = _step5.value;

	        var unlocked = false;
	        var _iteratorNormalCompletion6 = true;
	        var _didIteratorError6 = false;
	        var _iteratorError6 = undefined;

	        try {
	          for (var _iterator6 = _parse2.default.User.current().get('unlockedCategories')[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	            var name = _step6.value;

	            if (name === category.get('name')) {
	              unlocked = true;
	            }
	          }
	        } catch (err) {
	          _didIteratorError6 = true;
	          _iteratorError6 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion6 && _iterator6.return) {
	              _iterator6.return();
	            }
	          } finally {
	            if (_didIteratorError6) {
	              throw _iteratorError6;
	            }
	          }
	        }

	        dispatch(setUnlocked(unlocked, category.get('index')));
	      }
	    } catch (err) {
	      _didIteratorError5 = true;
	      _iteratorError5 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	          _iterator5.return();
	        }
	      } finally {
	        if (_didIteratorError5) {
	          throw _iteratorError5;
	        }
	      }
	    }
	  };
	}

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _reactBootstrap = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Field = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.radio
	});

	var RadioField = function (_React$Component) {
	  _inherits(RadioField, _React$Component);

	  function RadioField() {
	    _classCallCheck(this, RadioField);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RadioField).apply(this, arguments));
	  }

	  _createClass(RadioField, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var model = _props.model;
	      var variableName = _props.variableName;
	      var values = _props.values;
	      var labels = _props.labels;

	      return _react2.default.createElement(
	        Field,
	        {
	          model: model,
	          ref: function ref(_ref) {
	            return _this2[variableName] = _ref;
	          }
	        },
	        _react2.default.createElement(
	          'label',
	          null,
	          variableName
	        ),
	        values.map(function (value, index) {
	          return _react2.default.createElement(_reactBootstrap.Input, {
	            key: index,
	            type: 'radio',
	            value: value,
	            label: labels ? labels[index] : value,
	            active: true
	          });
	        })
	      );
	    }
	  }]);

	  return RadioField;
	}(_react2.default.Component);

	exports.default = RadioField;

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _answer = __webpack_require__(251);

	var _round = __webpack_require__(163);

	var _bins = __webpack_require__(513);

	var _bins2 = _interopRequireDefault(_bins);

	var _Bins = __webpack_require__(450);

	var _Bins2 = _interopRequireDefault(_Bins);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BinsContainer = function (_React$Component) {
	  _inherits(BinsContainer, _React$Component);

	  function BinsContainer() {
	    _classCallCheck(this, BinsContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BinsContainer).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(BinsContainer, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.props.actions.setCorrectAnswerIndices(nextProps.correctAnswerIndices);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(index) {
	      this.props.actions.handleDeposit(this.props.binsIndex, index);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var binTexts = _props.binTexts;
	      var binsIndex = _props.binsIndex;

	      var binText = binsIndex < binTexts.length ? binTexts[binsIndex] : binTexts[0];
	      return _react2.default.createElement(_Bins2.default, {
	        onClick: this.handleClick,
	        binText: binText,
	        binValues: this.props.binValues[binsIndex],
	        bank: this.props.bank[binsIndex],
	        worth: this.props.worth[binsIndex],
	        presentational: this.props.presentational
	      });
	    }
	  }]);

	  return BinsContainer;
	}(_react2.default.Component);

	BinsContainer.defaultProps = {
	  binsIndex: 0,
	  presentational: false
	};

	exports.default = (0, _connect2.default)({
	  selector: _bins2.default,
	  actions: { handleDeposit: _answer.handleDeposit, setCorrectAnswerIndices: _round.setCorrectAnswerIndices }
	})(BinsContainer);

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _RangePreview = __webpack_require__(465);

	var _RangePreview2 = _interopRequireDefault(_RangePreview);

	var _round = __webpack_require__(163);

	var _rangePreview = __webpack_require__(526);

	var _rangePreview2 = _interopRequireDefault(_rangePreview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangePreviewContainer = function (_React$Component) {
	  _inherits(RangePreviewContainer, _React$Component);

	  function RangePreviewContainer() {
	    _classCallCheck(this, RangePreviewContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RangePreviewContainer).apply(this, arguments));
	  }

	  _createClass(RangePreviewContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.initializeQuestion(this.props.numBins, this.props.bank);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_RangePreview2.default, {
	        outcomeNames: this.props.outcomeNames,
	        outcomeDataTypes: this.props.outcomeDataTypes,
	        tooltipMessage: this.props.tooltipMessage,
	        tooltipTarget: this.props.tooltipTarget
	      });
	    }
	  }]);

	  return RangePreviewContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _rangePreview2.default,
	  actions: { initializeQuestion: _round.initializeQuestion }
	})(RangePreviewContainer);

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var rangesSelector = function rangesSelector(state) {
	  return state.forms.ranges;
	};

	exports.default = (0, _reselect.createSelector)(categorySelector, rangesSelector, function (category, ranges) {
	  return {
	    worth: getWorth(category.outcomeDataTypes, category.pointsPerToken, category.outcomeRanges, category.outcomeNames, ranges)
	  };
	});


	function getWorth(outcomeDataTypes, pointsPerToken, outcomeRanges, outcomeNames, ranges) {
	  var worth = [];
	  for (var i = 0; i < pointsPerToken.length; i++) {
	    var temp = 0;
	    if (outcomeDataTypes[i].type === 'discrete' || outcomeDataTypes[i].type === 'boolean') {
	      temp = pointsPerToken[i];
	    }
	    if (outcomeDataTypes[i].type === 'continuous' && ranges[outcomeNames[i]] && ranges[outcomeNames[i]].lower >= 0 && ranges[outcomeNames[i]].upper > 0) {
	      var estimatedRange = ranges[outcomeNames[i]].upper - ranges[outcomeNames[i]].lower;
	      var actualRange = outcomeRanges[i][1] - outcomeRanges[i][0];
	      temp += pointsPerToken[i];
	      temp *= estimatedRange === 0 ? 0 : actualRange / estimatedRange;
	    }
	    worth.push(Math.floor(temp));
	  }
	  return worth;
	}

/***/ },

/***/ 258:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./app.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.post = post;

	var _constants = __webpack_require__(27);

	/*
	 *  Thunk that sends a generic POST request to the Flask Server.
	 *
	 *  @param url        - The name of the url (corresponds to specific function trying to be accessed)
	 *  @param JSONparams - Any data to be sent as parameters to the function.
	 *  @param callback   - The function to be dispatched when the request finishes (passes JSON result as a param).
	 */
	function post(url, JSONparams, callback) {
	  return function (dispatch) {
	    dispatch({
	      type: _constants.POST,
	      payload: {
	        promise: fetch(url, {
	          method: 'POST',
	          headers: { 'Content-Type': 'application/json' },
	          body: JSON.stringify(JSONparams)
	        }).then(function (response) {
	          return response.json();
	        }).then(function (res) {
	          dispatch(callback(res));
	        })
	      }
	    });
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(259)))

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addPhi = exports.setOutcomeIndex = exports.setOutcomes = exports.setSeries = exports.setPhi = exports.setCovariateData = exports.clearWinnings = exports.setData = undefined;
	exports.asyncGetPhis = asyncGetPhis;
	exports.getCovariateData = getCovariateData;
	exports.getData = getData;
	exports.updateChart = updateChart;
	exports.updateCovariateData = updateCovariateData;
	exports.updateSeries = updateSeries;

	var _constants = __webpack_require__(27);

	var _reduxActions = __webpack_require__(78);

	var _parse = __webpack_require__(65);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(93);

	var _http = __webpack_require__(447);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setData = exports.setData = (0, _reduxActions.createAction)(_constants.SET_DATA, function (data) {
	  return { data: data };
	});
	var clearWinnings = exports.clearWinnings = (0, _reduxActions.createAction)(_constants.CLEAR_WINNINGS);
	var setCovariateData = exports.setCovariateData = (0, _reduxActions.createAction)(_constants.SET_COVARIATE_DATA, function (covariateData) {
	  return { covariateData: covariateData };
	});
	var setPhi = exports.setPhi = (0, _reduxActions.createAction)(_constants.SET_PHI, function (phi) {
	  return { phi: phi };
	});
	var setSeries = exports.setSeries = (0, _reduxActions.createAction)(_constants.SET_SERIES, function (index, data) {
	  return { index: index, data: data };
	});
	var setOutcomes = exports.setOutcomes = (0, _reduxActions.createAction)(_constants.SET_OUTCOMES, function (outcomes) {
	  return { outcomes: outcomes };
	});
	var setOutcomeIndex = exports.setOutcomeIndex = (0, _reduxActions.createAction)(_constants.SET_OUTCOME_INDEX, function (outcomeIndex) {
	  return { outcomeIndex: outcomeIndex };
	});
	var addPhi = exports.addPhi = (0, _reduxActions.createAction)(_constants.ADD_PHI, function (res) {
	  return { phi: res.phi };
	});

	/*
	 *  Call Python server and get Phi given the info in the current state.
	 */
	function asyncGetPhis() {
	  return function (dispatch, getState) {
	    var _getState = getState();

	    var round = _getState.round;

	    var estimates = round.currentRound ? round.currentRound.get('answers')[0].get('estimates') : [];
	    for (var i = 0; i < estimates.length; i++) {
	      // Get covariates and predictions from the latest round to analyze and get phi
	      var predictions = [],
	          covariates = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = round.currentRound.get('answers')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var answer = _step.value;

	          predictions.push(answer.get('estimates')[i]);
	          covariates.push(answer.get('question').get('covariateValues'));
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

	      dispatch((0, _http.post)('/api/v1/get_phi', { covariates: covariates, predictions: predictions }, addPhi));
	    }
	  };
	}

	/*
	 *  Get initial covariate data
	 *  TODO: Call Parse and get initial user data about covariates
	 */
	function getCovariateData() {
	  return function (dispatch, getState) {
	    var _getState2 = getState();

	    var name = _getState2.category.name;

	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    var information = _parse2.default.User.current().get('categoryInformation');
	    var data = information[name];
	    var covariateData = [];
	    for (var i = 0; i < data.length; i++) {
	      var item = [];
	      for (var j = 0; j < data.length; j++) {
	        if (j !== i) {
	          item.push(data[j]);
	        }
	      }
	      covariateData.push(item);
	    }
	    dispatch(setCovariateData(covariateData));
	  };
	}

	/*
	 *  Depending on the covariateRange of the category under inspection,
	 *  get the X-axis points that will ultimately be plotted.
	 */
	function getData() {
	  return function (dispatch, getState) {
	    var _getState3 = getState();

	    var covariateRanges = _getState3.category.covariateRanges;

	    var labels = covariateRanges;
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = labels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var label = _step2.value;

	        var range = label[1] - label[0];
	        var numXAxisValues = 10;
	        while (numXAxisValues >= range) {
	          numXAxisValues--;
	        }
	        var step = range / numXAxisValues;
	        step = Math.floor(step + 0.5);
	        //Build the label array to have an adequate number of values, each about the same length
	        while (label[label.length - 1] - label[label.length - 2] > step) {
	          label.splice(-1, 0, label[label.length - 2] + step);
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

	    var data = [];

	    for (var k = 0; k < labels.length; k++) {
	      var dataSet = {
	        labels: labels[k],
	        series: []
	      };
	      data.push(dataSet);
	    }
	    dispatch(setData(data));
	  };
	}

	/*
	 *  Update the chart of the given index based on the current value of Phi at the 'outcomeIndex'
	 *  Plot several points of the given equation y = alpha + beta1 * x + beta2 * c2 ... + beta * x^2 + ... + betaN * cn
	 */
	function updateChart(chartIndex) {
	  return function (dispatch, getState) {
	    var _getState4 = getState();

	    var stats = _getState4.stats;
	    var covariateRanges = _getState4.category.covariateRanges;

	    //Create array of betas and array of covariate values to multiply together

	    var betas = stats.phi[stats.outcomeIndex].slice(1);
	    var covariateValues = stats.covariateData[chartIndex].slice(0);
	    for (var i = 0; i < stats.covariateData[chartIndex].length; i++) {
	      covariateValues.push(Math.pow(stats.covariateData[chartIndex][i], 2));
	    }
	    var alpha = stats.phi[stats.outcomeIndex][0];
	    var single = [];
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	      for (var _iterator3 = covariateRanges[chartIndex][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var item = _step3.value;

	        var tempCovariateValues = covariateValues.slice(0);
	        var y = alpha;
	        tempCovariateValues.splice(chartIndex, 0, item);
	        tempCovariateValues.splice(chartIndex + stats.covariateData[chartIndex].length + 1, 0, Math.pow(item, 2));
	        for (var j in betas) {
	          y += betas[j] * tempCovariateValues[j];
	        }
	        single.push(y);
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }

	    var series = [];
	    series.push(single);
	    dispatch(updateSeries(chartIndex, series));
	  };
	}

	/*
	 *  Update the covariate data at the specified index with the specified value
	 */
	function updateCovariateData(chartIndex, covariateIndex, covariateValue) {
	  return function (dispatch, getState) {
	    var _getState5 = getState();

	    var stats = _getState5.stats;

	    var covariateData = stats.covariateData.slice(0);
	    covariateData[chartIndex][covariateIndex] = covariateValue;
	    dispatch(setCovariateData(covariateData));
	    dispatch(updateChart(chartIndex));
	  };
	}

	/*
	 *  Update the x-axes at the given chart index
	 */
	function updateSeries(index, series) {
	  return function (dispatch, getState) {
	    var _getState6 = getState();

	    var stats = _getState6.stats;

	    var data = Object.assign({}, stats.data[index]);
	    data.series = series;
	    dispatch(setSeries(index, data));
	  };
	}

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Buttons = __webpack_require__(17);

	var _classnames = __webpack_require__(165);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _app = __webpack_require__(446);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bins = function (_React$Component) {
	  _inherits(Bins, _React$Component);

	  function Bins() {
	    _classCallCheck(this, Bins);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bins).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(Bins, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      window.localStorage.clear();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('row', _app2.default.flexJustify) },
	        _react2.default.createElement(
	          _Buttons.Button,
	          { className: _app2.default.flexGrow, onClick: this.props.onLogin },
	          'Log In'
	        ),
	        _react2.default.createElement(
	          _Buttons.LinkButton,
	          { className: _app2.default.flexGrow, to: '/signup' },
	          'Sign Up'
	        ),
	        _react2.default.createElement(
	          _Buttons.Button,
	          { className: _app2.default.flexGrow, onClick: this.handleClick },
	          'Clear Cache'
	        )
	      );
	    }
	  }]);

	  return Bins;
	}(_react2.default.Component);

	exports.default = Bins;

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bins = function (_React$Component) {
	  _inherits(Bins, _React$Component);

	  function Bins() {
	    _classCallCheck(this, Bins);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bins).apply(this, arguments));
	  }

	  _createClass(Bins, [{
	    key: 'handleClick',
	    value: function handleClick(index) {
	      var _this2 = this;

	      if (!this.props.presentational) {
	        return function () {
	          return _this2.props.onClick(index);
	        };
	      }
	    }
	  }, {
	    key: 'binValue',
	    value: function binValue(index) {
	      if (!this.props.presentational) {
	        return ': ' + this.props.binValues[index];
	      }
	    }
	  }, {
	    key: 'renderBins',
	    value: function renderBins() {
	      var _this3 = this;

	      return this.props.binText.map(function (text, index) {
	        return _react2.default.createElement(
	          _Buttons.Button,
	          { key: index, onClick: _this3.handleClick(index) },
	          text,
	          _this3.binValue(index)
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'Bank: ',
	          this.props.bank
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Worth: ',
	          this.props.worth
	        ),
	        this.renderBins()
	      );
	    }
	  }]);

	  return Bins;
	}(_react2.default.Component);

	exports.default = Bins;

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Categories = function (_React$Component) {
	  _inherits(Categories, _React$Component);

	  function Categories() {
	    _classCallCheck(this, Categories);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Categories).apply(this, arguments));
	  }

	  _createClass(Categories, [{
	    key: 'handleClick',
	    value: function handleClick(categoryName) {
	      var _this2 = this;

	      return function () {
	        return _this2.props.onClick(categoryName);
	      };
	    }
	  }, {
	    key: 'renderCategories',
	    value: function renderCategories() {
	      var _this3 = this;

	      return this.props.categoryNames.map(function (categoryName) {
	        return _react2.default.createElement(
	          'li',
	          { key: categoryName },
	          _react2.default.createElement(
	            _Buttons.Button,
	            { onClick: _this3.handleClick(categoryName) },
	            'New ',
	            categoryName,
	            ' round'
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.renderCategories()
	      );
	    }
	  }]);

	  return Categories;
	}(_react2.default.Component);

	exports.default = Categories;

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(34);

	var _RangePreview = __webpack_require__(255);

	var _RangePreview2 = _interopRequireDefault(_RangePreview);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangeModal = function (_React$Component) {
	  _inherits(RangeModal, _React$Component);

	  function RangeModal() {
	    _classCallCheck(this, RangeModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RangeModal).apply(this, arguments));
	  }

	  _createClass(RangeModal, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { show: this.props.show, onHide: this.props.onHide },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(_RangePreview2.default, null)
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _Buttons.Button,
	            { onClick: this.props.onHide },
	            'Set Ranges'
	          )
	        )
	      );
	    }
	  }]);

	  return RangeModal;
	}(_react2.default.Component);

	exports.default = RangeModal;

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _Tooltip = __webpack_require__(94);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _RadioField = __webpack_require__(253);

	var _RadioField2 = _interopRequireDefault(_RadioField);

	var _NumberField = __webpack_require__(462);

	var _NumberField2 = _interopRequireDefault(_NumberField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CategorySurveyForm = function (_React$Component) {
	  _inherits(CategorySurveyForm, _React$Component);

	  function CategorySurveyForm() {
	    _classCallCheck(this, CategorySurveyForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CategorySurveyForm).apply(this, arguments));
	  }

	  _createClass(CategorySurveyForm, [{
	    key: 'renderFields',
	    value: function renderFields() {
	      var _props = this.props;
	      var allCovariateNames = _props.allCovariateNames;
	      var allCovariateDataTypes = _props.allCovariateDataTypes;

	      return allCovariateNames.map(function (covariateName, index) {
	        switch (allCovariateDataTypes[index].type) {
	          case 'continuous':
	            return _react2.default.createElement(_NumberField2.default, {
	              key: index,
	              variableName: covariateName,
	              model: 'forms.covariates.' + covariateName
	            });
	          default:
	            return _react2.default.createElement(_RadioField2.default, {
	              key: index,
	              labels: allCovariateDataTypes[index].labels,
	              values: allCovariateDataTypes[index].values,
	              variableName: covariateName,
	              model: 'forms.covariates.' + covariateName
	            });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.categorySurveyInstructions,
	        _react2.default.createElement(_Tooltip2.default, { message: this.props.tooltipMessage, target: this[this.props.tooltipTarget] }),
	        _react2.default.createElement(
	          _reactReduxForm.Form,
	          { ref: function ref(_ref) {
	              return _this2.form = _ref;
	            }, model: 'forms.covariates' },
	          this.renderFields()
	        )
	      );
	    }
	  }]);

	  return CategorySurveyForm;
	}(_react2.default.Component);

	exports.default = CategorySurveyForm;

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _parser = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EstimateForm = function (_React$Component) {
	  _inherits(EstimateForm, _React$Component);

	  function EstimateForm() {
	    _classCallCheck(this, EstimateForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EstimateForm).apply(this, arguments));
	  }

	  _createClass(EstimateForm, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        _reactReduxForm.Form,
	        { model: 'forms.estimates' },
	        _react2.default.createElement(
	          _reactReduxForm.Field,
	          {
	            model: 'forms.estimates.' + this.props.outcomeName,
	            parser: _parser.toNum,
	            ref: function ref(_ref) {
	              return _this2.form = _ref;
	            }
	          },
	          _react2.default.createElement('input', {
	            type: 'number',
	            placeholder: this.props.outcomeName,
	            value: this.props.estimates[this.props.outcomeName]
	          })
	        )
	      );
	    }
	  }]);

	  return EstimateForm;
	}(_react2.default.Component);

	exports.default = EstimateForm;

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _Tooltip = __webpack_require__(94);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginForm = function (_React$Component) {
	  _inherits(LoginForm, _React$Component);

	  function LoginForm() {
	    _classCallCheck(this, LoginForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginForm).apply(this, arguments));
	  }

	  _createClass(LoginForm, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'LoginForm' },
	        _react2.default.createElement(_Tooltip2.default, { target: this[this.props.tooltipTarget], message: this.props.tooltipMessage }),
	        _react2.default.createElement(
	          _reactReduxForm.Form,
	          { ref: function ref(_ref) {
	              return _this2.form = _ref;
	            }, onSubmit: this.props.onSubmit, model: 'login' },
	          _react2.default.createElement(
	            _reactReduxForm.Field,
	            { model: 'login.email' },
	            _react2.default.createElement('input', { type: 'email', placeholder: 'Email' })
	          ),
	          _react2.default.createElement(
	            _reactReduxForm.Field,
	            { model: 'login.password' },
	            _react2.default.createElement('input', { type: 'password', placeholder: 'Password' })
	          ),
	          _react2.default.createElement(
	            _Buttons.SubmitButton,
	            null,
	            'Log In'
	          )
	        )
	      );
	    }
	  }]);

	  return LoginForm;
	}(_react2.default.Component);

	exports.default = LoginForm;

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _parser = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangeForm = function (_React$Component) {
	  _inherits(RangeForm, _React$Component);

	  function RangeForm() {
	    _classCallCheck(this, RangeForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RangeForm).apply(this, arguments));
	  }

	  _createClass(RangeForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactReduxForm.Form,
	        { model: 'ranges' },
	        _react2.default.createElement(
	          _reactReduxForm.Field,
	          {
	            model: 'ranges.' + this.props.outcomeName + '.lower',
	            parser: _parser.toNum
	          },
	          _react2.default.createElement('input', {
	            type: 'number',
	            placeholder: 'Lower Bound',
	            value: this.props.lowerValue
	          })
	        ),
	        _react2.default.createElement(
	          _reactReduxForm.Field,
	          {
	            model: 'ranges.' + this.props.outcomeName + '.upper',
	            parser: _parser.toNum
	          },
	          _react2.default.createElement('input', {
	            type: 'number',
	            placeholder: 'Upper Bound',
	            value: this.props.upperValue
	          })
	        )
	      );
	    }
	  }]);

	  return RangeForm;
	}(_react2.default.Component);

	exports.default = RangeForm;

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _Tooltip = __webpack_require__(94);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignupForm = function (_React$Component) {
	  _inherits(SignupForm, _React$Component);

	  function SignupForm() {
	    _classCallCheck(this, SignupForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SignupForm).apply(this, arguments));
	  }

	  _createClass(SignupForm, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { id: 'SignupForm' },
	        _react2.default.createElement(_Tooltip2.default, { target: this[this.props.tooltipTarget], message: this.props.tooltipMessage }),
	        _react2.default.createElement(
	          _reactReduxForm.Form,
	          { ref: function ref(_ref4) {
	              return _this2.form = _ref4;
	            }, onSubmit: this.props.onSubmit, model: 'signup' },
	          _react2.default.createElement(
	            _reactReduxForm.Field,
	            { model: 'signup.email', ref: function ref(_ref) {
	                return _this2.email = _ref;
	              } },
	            _react2.default.createElement('input', {
	              type: 'email',
	              placeholder: 'Email'
	            })
	          ),
	          _react2.default.createElement(
	            _reactReduxForm.Field,
	            { model: 'signup.password', ref: function ref(_ref2) {
	                return _this2.password = _ref2;
	              } },
	            _react2.default.createElement('input', {
	              type: 'password',
	              placeholder: 'Password'
	            })
	          ),
	          _react2.default.createElement(
	            _reactReduxForm.Field,
	            { model: 'signup.passwordConfirm', ref: function ref(_ref3) {
	                return _this2.passwordConfirm = _ref3;
	              } },
	            _react2.default.createElement('input', {
	              type: 'password',
	              placeholder: 'Confirm Password'
	            })
	          ),
	          _react2.default.createElement(
	            _Buttons.SubmitButton,
	            null,
	            'Sign Up'
	          )
	        )
	      );
	    }
	  }]);

	  return SignupForm;
	}(_react2.default.Component);

	exports.default = SignupForm;

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Instructions = function (_React$Component) {
	  _inherits(Instructions, _React$Component);

	  function Instructions() {
	    _classCallCheck(this, Instructions);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).apply(this, arguments));
	  }

	  _createClass(Instructions, [{
	    key: 'renderCovariates',
	    value: function renderCovariates() {
	      var _this2 = this;

	      return this.props.covariateValues.map(function (covariate, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            'p',
	            null,
	            _this2.props.covariateNames[index],
	            ': ',
	            covariate
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.renderCovariates()
	        )
	      );
	    }
	  }]);

	  return Instructions;
	}(_react2.default.Component);

	exports.default = Instructions;

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.Logo = Logo;
	exports.BrandSubtitle = BrandSubtitle;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(165);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// Components
	function Logo(_ref) {
	  var className = _ref.className;

	  var props = _objectWithoutProperties(_ref, ['className']);

	  return _react2.default.createElement(
	    'div',
	    _extends({}, props, { className: (0, _classnames2.default)(className, "span12") }),
	    _react2.default.createElement('img', { className: 'center-block img-responsive', src: __webpack_require__(1005) })
	  );
	}

	function BrandSubtitle(_ref2) {
	  var className = _ref2.className;

	  var props = _objectWithoutProperties(_ref2, ['className']);

	  return _react2.default.createElement(
	    'h2',
	    _extends({}, props, { className: (0, _classnames2.default)(className, "text-center") }),
	    ' ',
	    'Measure your perceptions',
	    ' '
	  );
	}

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactChartist = __webpack_require__(350);

	var _reactChartist2 = _interopRequireDefault(_reactChartist);

	__webpack_require__(1003);

	var _Sliders = __webpack_require__(467);

	var _Sliders2 = _interopRequireDefault(_Sliders);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Graph = function (_React$Component) {
	  _inherits(Graph, _React$Component);

	  function Graph() {
	    _classCallCheck(this, Graph);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Graph).apply(this, arguments));
	  }

	  _createClass(Graph, [{
	    key: 'renderCharts',
	    value: function renderCharts() {
	      var _this2 = this;

	      var options = {
	        high: this.props.outcomeRanges[this.props.outcomeIndex][1],
	        low: this.props.outcomeRanges[this.props.outcomeIndex][0],
	        showArea: false,
	        showPoint: true,
	        width: '400px',
	        height: '300px'
	      };
	      return this.props.data.map(function (item, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(_reactChartist2.default, {
	            data: item,
	            type: 'Line',
	            options: options
	          }),
	          _react2.default.createElement(_Sliders2.default, {
	            numCharts: _this2.props.data.length,
	            chartIndex: index,
	            covariateRanges: _this2.props.covariateRanges,
	            onSliderChange: _this2.props.onSliderChange,
	            values: _this2.props.covariateData[index]
	          })
	        );
	      });
	    }
	  }, {
	    key: 'renderButtons',
	    value: function renderButtons() {
	      var _this3 = this;

	      if (this.props.outcomeNames.length > 1) {
	        return this.props.outcomeNames.map(function (outcomeName, index) {
	          return _react2.default.createElement(
	            _Buttons.Button,
	            { key: index, onClick: _this3.props.onClick(index) },
	            outcomeName
	          );
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Points Earned: ',
	          this.props.winnings
	        ),
	        this.renderButtons(),
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.renderCharts()
	        )
	      );
	    }
	  }]);

	  return Graph;
	}(_react2.default.Component);

	exports.default = Graph;

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(34);

	var _LoginForm = __webpack_require__(477);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginModal = function (_React$Component) {
	  _inherits(LoginModal, _React$Component);

	  function LoginModal() {
	    _classCallCheck(this, LoginModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginModal).apply(this, arguments));
	  }

	  _createClass(LoginModal, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { show: this.props.show, onHide: this.props.onHide },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          'Log In'
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(_LoginForm2.default, null)
	        )
	      );
	    }
	  }]);

	  return LoginModal;
	}(_react2.default.Component);

	exports.default = LoginModal;

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _parser = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NumberField = function (_React$Component) {
	  _inherits(NumberField, _React$Component);

	  function NumberField() {
	    _classCallCheck(this, NumberField);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NumberField).apply(this, arguments));
	  }

	  _createClass(NumberField, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var model = _props.model;
	      var variableName = _props.variableName;

	      return _react2.default.createElement(
	        _reactReduxForm.Field,
	        {
	          model: model,
	          ref: function ref(_ref) {
	            return _this2[variableName] = _ref;
	          },
	          parser: _parser.toNum
	        },
	        _react2.default.createElement('input', {
	          type: 'number',
	          placeholder: variableName
	        })
	      );
	    }
	  }]);

	  return NumberField;
	}(_react2.default.Component);

	exports.default = NumberField;

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Bins = __webpack_require__(254);

	var _Bins2 = _interopRequireDefault(_Bins);

	var _EstimateForm = __webpack_require__(454);

	var _EstimateForm2 = _interopRequireDefault(_EstimateForm);

	var _Tooltip = __webpack_require__(94);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _reactReduxForm = __webpack_require__(15);

	var _RadioField = __webpack_require__(253);

	var _RadioField2 = _interopRequireDefault(_RadioField);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionBody = function (_React$Component) {
	  _inherits(QuestionBody, _React$Component);

	  function QuestionBody() {
	    _classCallCheck(this, QuestionBody);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionBody).apply(this, arguments));
	  }

	  _createClass(QuestionBody, [{
	    key: 'renderOutcome',
	    value: function renderOutcome(outcomeName, index) {
	      var _this2 = this;

	      var outcomeDataTypes = this.props.outcomeDataTypes;

	      switch (outcomeDataTypes[index].type) {
	        case 'continuous':
	          return _react2.default.createElement(_EstimateForm2.default, {
	            outcomeName: outcomeName,
	            estimates: this.props.estimates,
	            ref: function ref(_ref) {
	              return _this2[outcomeName] = _ref;
	            }
	          });
	        default:
	          return _react2.default.createElement(
	            _reactReduxForm.Form,
	            { model: 'forms.estimates', ref: function ref(_ref2) {
	                return _this2[outcomeName] = _ref2;
	              } },
	            _react2.default.createElement(_RadioField2.default, {
	              labels: outcomeDataTypes[index].labels,
	              values: outcomeDataTypes[index].values,
	              model: 'forms.estimates.' + outcomeName,
	              variableName: outcomeName
	            })
	          );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var tooltipTarget = this.props.tooltipTarget;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Tooltip2.default, {
	          onHide: this.props.onHide,
	          message: this.props.tooltipMessage,
	          target: this[tooltipTarget] ? this[tooltipTarget].form : this[tooltipTarget],
	          placement: 'right'
	        }),
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.props.outcomeNames.map(function (outcomeName, index) {
	            return _react2.default.createElement(
	              'li',
	              { key: index },
	              _react2.default.createElement(
	                'p',
	                null,
	                _this3.props.questionInstructions[index]
	              ),
	              _this3.renderOutcome(outcomeName, index),
	              _react2.default.createElement(_Bins2.default, {
	                binsIndex: index
	              })
	            );
	          })
	        ),
	        _react2.default.createElement(
	          _Buttons.Button,
	          { onClick: this.props.onClick },
	          'Change Ranges'
	        )
	      );
	    }
	  }]);

	  return QuestionBody;
	}(_react2.default.Component);

	exports.default = QuestionBody;

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(34);

	var _RangePreview = __webpack_require__(255);

	var _RangePreview2 = _interopRequireDefault(_RangePreview);

	var _CategorySurveyForm = __webpack_require__(476);

	var _CategorySurveyForm2 = _interopRequireDefault(_CategorySurveyForm);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangeModal = function (_React$Component) {
	  _inherits(RangeModal, _React$Component);

	  function RangeModal() {
	    _classCallCheck(this, RangeModal);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RangeModal).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(RangeModal, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.unlocked ? this.props.onStart() : this.props.onSubmit();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { show: this.props.show, onHide: this.props.onHide },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          this.props.unlocked ? this.props.roundInstructions : 'Unlock Category'
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          this.props.unlocked ? _react2.default.createElement(_RangePreview2.default, null) : _react2.default.createElement(_CategorySurveyForm2.default, null)
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _Buttons.Button,
	            { onClick: this.handleClick },
	            this.props.unlocked ? 'Start Round' : 'Submit'
	          )
	        )
	      );
	    }
	  }]);

	  return RangeModal;
	}(_react2.default.Component);

	exports.default = RangeModal;

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Bins = __webpack_require__(254);

	var _Bins2 = _interopRequireDefault(_Bins);

	var _RangeForm = __webpack_require__(478);

	var _RangeForm2 = _interopRequireDefault(_RangeForm);

	var _Tooltip = __webpack_require__(94);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangePreview = function (_React$Component) {
	  _inherits(RangePreview, _React$Component);

	  function RangePreview() {
	    _classCallCheck(this, RangePreview);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RangePreview).apply(this, arguments));
	  }

	  _createClass(RangePreview, [{
	    key: 'renderPreview',
	    value: function renderPreview() {
	      var _this2 = this;

	      return this.props.outcomeNames.map(function (outcomeName, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          outcomeName,
	          _this2.props.outcomeDataTypes[index].type === 'continuous' && _react2.default.createElement(_RangeForm2.default, {
	            outcomeName: outcomeName,
	            ref: function ref(_ref) {
	              return _this2[outcomeName] = _ref;
	            }
	          }),
	          _react2.default.createElement(_Bins2.default, {
	            binsIndex: index,
	            presentational: true
	          })
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Tooltip2.default, { target: this[this.props.tooltipTarget], message: this.props.tooltipMessage }),
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.renderPreview()
	        )
	      );
	    }
	  }]);

	  return RangePreview;
	}(_react2.default.Component);

	exports.default = RangePreview;

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(34);

	var _SignupForm = __webpack_require__(479);

	var _SignupForm2 = _interopRequireDefault(_SignupForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginModal = function (_React$Component) {
	  _inherits(LoginModal, _React$Component);

	  function LoginModal() {
	    _classCallCheck(this, LoginModal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginModal).apply(this, arguments));
	  }

	  _createClass(LoginModal, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { show: this.props.show, onHide: this.props.onHide },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          'Sign Up'
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(_SignupForm2.default, null)
	        )
	      );
	    }
	  }]);

	  return LoginModal;
	}(_react2.default.Component);

	exports.default = LoginModal;

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(1004);

	var _rcSlider = __webpack_require__(287);

	var _rcSlider2 = _interopRequireDefault(_rcSlider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sliders = function (_React$Component) {
	  _inherits(Sliders, _React$Component);

	  function Sliders() {
	    _classCallCheck(this, Sliders);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sliders).apply(this, arguments));
	  }

	  _createClass(Sliders, [{
	    key: 'renderSliders',
	    value: function renderSliders() {
	      var _this2 = this;

	      var _props = this.props;
	      var covariateRanges = _props.covariateRanges;
	      var chartIndex = _props.chartIndex;

	      var ranges = covariateRanges.slice(0);
	      ranges.splice(chartIndex, 1);
	      return ranges.map(function (range, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(_rcSlider2.default, {
	            onChange: _this2.props.onSliderChange(chartIndex, index),
	            max: range[range.length - 1],
	            min: range[0],
	            value: _this2.props.values[index]
	          })
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        null,
	        this.renderSliders()
	      );
	    }
	  }]);

	  return Sliders;
	}(_react2.default.Component);

	exports.default = Sliders;

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyInstructions = function (_React$Component) {
	  _inherits(SurveyInstructions, _React$Component);

	  function SurveyInstructions() {
	    _classCallCheck(this, SurveyInstructions);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyInstructions).apply(this, arguments));
	  }

	  _createClass(SurveyInstructions, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          '(Description of the survey, why we are taking a preliminary survey)'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'IRB approval?'
	        ),
	        _react2.default.createElement(
	          _Buttons.LinkButton,
	          { to: '/signup/1', onClick: this.props.onClick },
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyInstructions;
	}(_react2.default.Component);

	exports.default = SurveyInstructions;

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _survey = __webpack_require__(535);

	var _survey2 = _interopRequireDefault(_survey);

	var _reactReduxForm = __webpack_require__(15);

	var _reactBootstrap = __webpack_require__(34);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.text
	});
	var RadioField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.radio
	});
	var SelectField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.select
	});

	var SurveyPage1 = function (_React$Component) {
	  _inherits(SurveyPage1, _React$Component);

	  function SurveyPage1(props) {
	    _classCallCheck(this, SurveyPage1);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage1).call(this, props));

	    _this.displayErrors = _this.displayErrors.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }

	  _createClass(SurveyPage1, [{
	    key: 'displayErrors',
	    value: function displayErrors(state) {
	      var errors = (0, _reactReduxForm.getField)(this.props.surveyForm, state).errors;
	      return Object.keys(errors).map(function (error, index) {
	        return _react2.default.createElement(
	          'p',
	          { key: index },
	          errors[error]
	        );
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(val) {
	      var _this2 = this;

	      return function () {
	        return _this2.props.onCheckChange(val);
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var race = this.props.survey.race;

	      return _react2.default.createElement(
	        _reactReduxForm.Form,
	        { onSubmit: this.props.onSubmit, model: 'forms.survey' },
	        _react2.default.createElement(
	          SelectField,
	          { model: 'forms.survey.stateOfResidence' },
	          _react2.default.createElement(
	            _reactBootstrap.Input,
	            { type: 'select', label: 'What state do you live in?', defaultValue: race.stateOfResidence },
	            _survey2.default.STATE_OPTIONS.map(function (option) {
	              return _react2.default.createElement(
	                'option',
	                { key: option, value: option },
	                option
	              );
	            })
	          )
	        ),
	        this.displayErrors('stateOfResidence'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.gender' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Gender'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Male', value: 'Male', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Female', value: 'Female' })
	        ),
	        this.displayErrors('gender'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.hispanic' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Are you of Hispanic, Latino, or Spanish origin?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'No', value: 'No', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Yes, Mexican, Mexican-American, or Chicano', value: 'Yes, Mexican, Mexican-American, or Chicano' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Yes, Puerto Rican', value: 'Yes, Puerto Rican' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Yes, Cuban', value: 'Yes, Cuban' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Yes, another Hispanic, Latino, or Spanish origin', value: 'Yes, another Hispanic, Latino, or Spanish origin' })
	        ),
	        this.displayErrors('hispanic'),
	        _react2.default.createElement(
	          'label',
	          null,
	          'What is your race? Check all that apply'
	        ),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('white'), type: 'checkbox', label: 'White', checked: race.white }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('blackOrAfricanAmerican'), type: 'checkbox', label: 'Black or African American', checked: race.blackOrAfricanAmerican }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('americanIndianOrAlaskaNative'), type: 'checkbox', label: 'American Indian or Alaska Native', checked: race.americanIndianOrAlaskaNative }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('asianIndian'), type: 'checkbox', label: 'Asian Indian', checked: race.asianIndian }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('chinese'), type: 'checkbox', label: 'Chinese', checked: race.chinese }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('filipino'), type: 'checkbox', label: 'Filipino', checked: race.filipino }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('japanese'), type: 'checkbox', label: 'Japanese', checked: race.japanese }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('korean'), type: 'checkbox', label: 'Korean', checked: race.korean }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('vietnamese'), type: 'checkbox', label: 'Vietnamese', checked: race.vietnamese }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('otherAsian'), type: 'checkbox', label: 'Other Asian', checked: race.otherAsian }),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('pacificIslander'), type: 'checkbox', label: 'Pacific Islander', checked: race.pacificIslander }),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.race.other' },
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'Other Race (Fill in)', placeholder: 'Other Race', value: race.other })
	        ),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.isBornInUS' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Were you born in the United States?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Yes', value: 'Yes', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'No', value: 'No' })
	        ),
	        this.displayErrors('isBornInUS'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.isEnglishPrimaryLanguage' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Is English the primary language spoken at home?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Yes', value: 'Yes', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'No', value: 'No' })
	        ),
	        this.displayErrors('isEnglishPrimaryLanguage'),
	        _react2.default.createElement(
	          _Buttons.SubmitButton,
	          null,
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyPage1;
	}(_react2.default.Component);

	exports.default = SurveyPage1;

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _reactBootstrap = __webpack_require__(34);

	var _parser = __webpack_require__(79);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.text
	});
	var RadioField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.radio
	});

	var SurveyPage2 = function (_React$Component) {
	  _inherits(SurveyPage2, _React$Component);

	  function SurveyPage2(props) {
	    _classCallCheck(this, SurveyPage2);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage2).call(this, props));

	    _this.displayErrors = _this.displayErrors.bind(_this);
	    return _this;
	  }

	  _createClass(SurveyPage2, [{
	    key: 'displayErrors',
	    value: function displayErrors(state) {
	      var errors = (0, _reactReduxForm.getField)(this.props.surveyForm, state).errors;
	      return Object.keys(errors).map(function (error, index) {
	        return _react2.default.createElement(
	          'p',
	          { key: index },
	          errors[error]
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var survey = this.props.survey;

	      return _react2.default.createElement(
	        _reactReduxForm.Form,
	        { onSubmit: this.props.onSubmit, model: 'forms.survey' },
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.isLunchReducedPrice' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Have you ever received free or reduced price lunch where you attended school?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Yes', label: 'Yes', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'No', label: 'No' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'I don\'t know', label: 'I don\'t know' })
	        ),
	        this.displayErrors('isLunchReducedPrice'),
	        _react2.default.createElement(
	          'label',
	          null,
	          'Birthdate'
	        ),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.birthdate.month', parser: _parser.toNum },
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'MM', value: survey.birthdate.month })
	        ),
	        this.displayErrors('birthdate.month'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.birthdate.day', parser: _parser.toNum },
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'DD', value: survey.birthdate.day })
	        ),
	        this.displayErrors('birthdate.day'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.birthdate.year', parser: _parser.toNum },
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'YYYY', value: survey.birthdate.year })
	        ),
	        this.displayErrors('birthdate.year'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.isStudent' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Are you currently a student?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Yes', label: 'Yes', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'No', label: 'No' })
	        ),
	        this.displayErrors('isStudent'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.isEmployed' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Are you currently employed?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Yes', label: 'Yes', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'No', label: 'No' })
	        ),
	        this.displayErrors('isEmployed'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.annualSalary', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'What is your current annual salary, rounded to the nearest thousand (for example $25,325 would simply be $25,000)'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'Annual Salary', value: survey.annualSalary })
	        ),
	        this.displayErrors('annualSalary'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.workHoursPerWeek', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'About how many hours per week do you work?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'Hours', value: survey.workHoursPerWeek })
	        ),
	        this.displayErrors('workHoursPerWeek'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.yearsOfWorkExperienceOverall', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'How many years of work experience do you have overall (counting all time employed)?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'Years', value: survey.yearsOfWorkExperienceOverall })
	        ),
	        this.displayErrors('yearsOfWorkExperienceOverall'),
	        _react2.default.createElement(
	          _Buttons.SubmitButton,
	          null,
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyPage2;
	}(_react2.default.Component);

	exports.default = SurveyPage2;

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _reactBootstrap = __webpack_require__(34);

	var _parser = __webpack_require__(79);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.text
	});
	var RadioField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.radio
	});

	var SurveyPage3 = function (_React$Component) {
	  _inherits(SurveyPage3, _React$Component);

	  function SurveyPage3(props) {
	    _classCallCheck(this, SurveyPage3);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage3).call(this, props));

	    _this.displayErrors = _this.displayErrors.bind(_this);
	    return _this;
	  }

	  _createClass(SurveyPage3, [{
	    key: 'displayErrors',
	    value: function displayErrors(state) {
	      var errors = (0, _reactReduxForm.getField)(this.props.surveyForm, state).errors;
	      return Object.keys(errors).map(function (error, index) {
	        return _react2.default.createElement(
	          'p',
	          { key: index },
	          errors[error]
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var survey = this.props.survey;

	      return _react2.default.createElement(
	        _reactReduxForm.Form,
	        { onSubmit: this.props.onSubmit, model: 'forms.survey' },
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.yearsOfWorkExperienceInCurrentCareer', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'How many years of work experience do you have in your current career?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'Years', value: survey.yearsOfWorkExperienceInCurrentCareer })
	        ),
	        this.displayErrors('yearsOfWorkExperienceInCurrentCareer'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.yearsOfCompletedSchooling', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Current years of completed schooling'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'Years', value: survey.yearsOfCompletedSchooling }),
	          'As a reference see the following...'
	        ),
	        this.displayErrors('yearsOfCompletedSchooling'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.intendedYearsOfCompletedSchooling', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'How many years of schooling do you INTEND to complete?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'Years', value: survey.intendedYearsOfCompletedSchooling }),
	          'As a reference see the following...'
	        ),
	        this.displayErrors('intendedYearsOfCompletedSchooling'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.highestEducationDegree' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'What is your highest earned degree in education?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Less than a high school degree', label: 'Less than a high school degree', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'High school degree', label: 'High school degree' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Associate’s degree or technical degree (2-year college degree)', label: 'Associate’s degree or technical degree (2-year college degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Bachelor’s degree (4-year college degree)', label: 'Bachelor’s degree (4-year college degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Master’s degree (2-year graduate degree)', label: 'Master’s degree (2-year graduate degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)', label: 'PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Post-doctoral degree', label: 'Post-doctoral degree' })
	        ),
	        this.displayErrors('highestEducationDegree'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.intendedHighestEducationDegree' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'What is the highest degree you plan on earning?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Less than a high school degree', label: 'Less than a high school degree', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'High school degree', label: 'High school degree' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Associate’s degree or technical degree (2-year college degree)', label: 'Associate’s degree or technical degree (2-year college degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Bachelor’s degree (4-year college degree)', label: 'Bachelor’s degree (4-year college degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Master’s degree (2-year graduate degree)', label: 'Master’s degree (2-year graduate degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)', label: 'PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Post-doctoral degree', label: 'Post-doctoral degree' })
	        ),
	        this.displayErrors('intendedHighestEducationDegree'),
	        _react2.default.createElement(
	          _Buttons.SubmitButton,
	          null,
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyPage3;
	}(_react2.default.Component);

	exports.default = SurveyPage3;

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(15);

	var _reactBootstrap = __webpack_require__(34);

	var _parser = __webpack_require__(79);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.text
	});
	var RadioField = (0, _reactReduxForm.createFieldClass)({
	  'Input': _reactReduxForm.controls.radio
	});

	var SurveyPage4 = function (_React$Component) {
	  _inherits(SurveyPage4, _React$Component);

	  function SurveyPage4(props) {
	    _classCallCheck(this, SurveyPage4);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage4).call(this, props));

	    _this.displayErrors = _this.displayErrors.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }

	  _createClass(SurveyPage4, [{
	    key: 'displayErrors',
	    value: function displayErrors(state) {
	      var errors = (0, _reactReduxForm.getField)(this.props.surveyForm, state).errors;
	      return Object.keys(errors).map(function (error, index) {
	        return _react2.default.createElement(
	          'p',
	          { key: index },
	          errors[error]
	        );
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(val) {
	      var _this2 = this;

	      return function () {
	        return _this2.props.onCheckChange(val);
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var survey = this.props.survey;

	      return _react2.default.createElement(
	        _reactReduxForm.Form,
	        { onSubmit: this.props.onSubmit, model: 'forms.survey' },
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.highSchoolGPA', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'What was your high school GPA? (If you do not know, give your best guess)'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'High School GPA', value: survey.highSchoolGPA })
	        ),
	        this.displayErrors('highSchoolGPA'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'forms.survey.collegeGPA', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'What was your College GPA? (If you do not know, give your best guess)'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'College GPA', value: survey.collegeGPA })
	        ),
	        this.displayErrors('collegeGPA'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.fathersEducation' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'What is the highest level of education obtained by your father?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Less than a high school degree', label: 'Less than a high school degree', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'High school degree', label: 'High school degree' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Associate’s degree or technical degree (2-year college degree)', label: 'Associate’s degree or technical degree (2-year college degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Bachelor’s degree (4-year college degree)', label: 'Bachelor’s degree (4-year college degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Master’s degree (2-year graduate degree)', label: 'Master’s degree (2-year graduate degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)', label: 'PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Post-doctoral degree', label: 'Post-doctoral degree' })
	        ),
	        this.displayErrors('fathersEducation'),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('fathersEducationIsGuess'), type: 'checkbox', label: 'This is a guess', checked: survey.fathersEducationIsGuess }),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'forms.survey.mothersEducation' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'What is the highest level of education obtained by your mother?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Less than a high school degree', label: 'Less than a high school degree', active: true }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'High school degree', label: 'High school degree' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Associate’s degree or technical degree (2-year college degree)', label: 'Associate’s degree or technical degree (2-year college degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Bachelor’s degree (4-year college degree)', label: 'Bachelor’s degree (4-year college degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Master’s degree (2-year graduate degree)', label: 'Master’s degree (2-year graduate degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)', label: 'PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)' }),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', value: 'Post-doctoral degree', label: 'Post-doctoral degree' })
	        ),
	        this.displayErrors('mothersEducation'),
	        _react2.default.createElement(_reactBootstrap.Input, { onChange: this.handleChange('mothersEducationIsGuess'), type: 'checkbox', label: 'This is a guess', checked: survey.mothersEducationIsGuess }),
	        _react2.default.createElement(
	          _Buttons.SubmitButton,
	          null,
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyPage4;
	}(_react2.default.Component);

	exports.default = SurveyPage4;

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _modal = __webpack_require__(50);

	var _AccessButtons = __webpack_require__(449);

	var _AccessButtons2 = _interopRequireDefault(_AccessButtons);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccessButtonsContainer = function (_React$Component) {
	  _inherits(AccessButtonsContainer, _React$Component);

	  function AccessButtonsContainer() {
	    _classCallCheck(this, AccessButtonsContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AccessButtonsContainer).call(this));

	    _this.handleLogin = _this.handleLogin.bind(_this);
	    return _this;
	  }

	  _createClass(AccessButtonsContainer, [{
	    key: 'handleLogin',
	    value: function handleLogin() {
	      this.props.actions.showModal(true);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AccessButtons2.default, {
	        onLogin: this.handleLogin
	      });
	    }
	  }]);

	  return AccessButtonsContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  actions: { showModal: _modal.showModal }
	})(AccessButtonsContainer);

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _home = __webpack_require__(252);

	var _categories = __webpack_require__(514);

	var _categories2 = _interopRequireDefault(_categories);

	var _Categories = __webpack_require__(451);

	var _Categories2 = _interopRequireDefault(_Categories);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CategoriesContainer = function (_React$Component) {
	  _inherits(CategoriesContainer, _React$Component);

	  function CategoriesContainer() {
	    _classCallCheck(this, CategoriesContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CategoriesContainer).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(CategoriesContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.asyncGetCategoryNames();
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(categoryName) {
	      this.props.actions.asyncHandleCategoryChoice(categoryName);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Categories2.default, {
	        onClick: this.handleClick,
	        categoryNames: this.props.categoryNames
	      });
	    }
	  }]);

	  return CategoriesContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _categories2.default,
	  actions: { asyncHandleCategoryChoice: _home.asyncHandleCategoryChoice, asyncGetCategoryNames: _home.asyncGetCategoryNames }
	})(CategoriesContainer);

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _ChangeRangeModal = __webpack_require__(452);

	var _ChangeRangeModal2 = _interopRequireDefault(_ChangeRangeModal);

	var _modal = __webpack_require__(50);

	var _changeRangeModal = __webpack_require__(515);

	var _changeRangeModal2 = _interopRequireDefault(_changeRangeModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChangeRangeModalContainer = function (_React$Component) {
	  _inherits(ChangeRangeModalContainer, _React$Component);

	  function ChangeRangeModalContainer() {
	    _classCallCheck(this, ChangeRangeModalContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChangeRangeModalContainer).call(this));

	    _this.handleHide = _this.handleHide.bind(_this);
	    return _this;
	  }

	  _createClass(ChangeRangeModalContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'handleHide',
	    value: function handleHide() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_ChangeRangeModal2.default, {
	        show: this.props.showModal,
	        onHide: this.handleHide
	      });
	    }
	  }]);

	  return ChangeRangeModalContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _changeRangeModal2.default,
	  actions: { showModal: _modal.showModal }
	})(ChangeRangeModalContainer);

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _CategorySurveyForm = __webpack_require__(453);

	var _CategorySurveyForm2 = _interopRequireDefault(_CategorySurveyForm);

	var _reactReduxForm = __webpack_require__(15);

	var _tooltip = __webpack_require__(51);

	var _categorySurvey = __webpack_require__(517);

	var _categorySurvey2 = _interopRequireDefault(_categorySurvey);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CategorySurveyFormContainer = function (_React$Component) {
	  _inherits(CategorySurveyFormContainer, _React$Component);

	  function CategorySurveyFormContainer() {
	    _classCallCheck(this, CategorySurveyFormContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CategorySurveyFormContainer).apply(this, arguments));
	  }

	  _createClass(CategorySurveyFormContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.reset('covariates');
	      this.props.actions.resetTooltip();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_CategorySurveyForm2.default, {
	        categorySurveyInstructions: this.props.categorySurveyInstructions,
	        allCovariateNames: this.props.allCovariateNames,
	        allCovariateDataTypes: this.props.allCovariateDataTypes,
	        tooltipMessage: this.props.tooltipMessage,
	        tooltipTarget: this.props.tooltipTarget
	      });
	    }
	  }]);

	  return CategorySurveyFormContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _categorySurvey2.default,
	  actions: { resetTooltip: _tooltip.resetTooltip, reset: _reactReduxForm.actions.reset }
	})(CategorySurveyFormContainer);

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _LoginForm = __webpack_require__(455);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	var _user = __webpack_require__(164);

	var _tooltip = __webpack_require__(51);

	var _reactReduxForm = __webpack_require__(15);

	var _login = __webpack_require__(519);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginFormContainer = function (_React$Component) {
	  _inherits(LoginFormContainer, _React$Component);

	  function LoginFormContainer() {
	    _classCallCheck(this, LoginFormContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginFormContainer).call(this));

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(LoginFormContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.setTooltipMessage('');
	      this.props.actions.setTooltipTarget('');
	      this.props.actions.reset('login');
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      this.props.actions.asyncLogin();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_LoginForm2.default, {
	        tooltipTarget: this.props.tooltipTarget,
	        tooltipMessage: this.props.tooltipMessage,
	        onSubmit: this.handleSubmit
	      });
	    }
	  }]);

	  return LoginFormContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _login2.default,
	  actions: { asyncLogin: _user.asyncLogin, setTooltipMessage: _tooltip.setTooltipMessage, setTooltipTarget: _tooltip.setTooltipTarget, reset: _reactReduxForm.actions.reset }
	})(LoginFormContainer);

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _RangeForm = __webpack_require__(456);

	var _RangeForm2 = _interopRequireDefault(_RangeForm);

	var _tooltip = __webpack_require__(51);

	var _range = __webpack_require__(520);

	var _range2 = _interopRequireDefault(_range);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangeFormContainer = function (_React$Component) {
	  _inherits(RangeFormContainer, _React$Component);

	  function RangeFormContainer() {
	    _classCallCheck(this, RangeFormContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RangeFormContainer).apply(this, arguments));
	  }

	  _createClass(RangeFormContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.resetTooltip();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var ranges = _props.ranges;
	      var outcomeName = _props.outcomeName;

	      return _react2.default.createElement(_RangeForm2.default, {
	        lowerValue: ranges[outcomeName] ? ranges[outcomeName].lower : '',
	        upperValue: ranges[outcomeName] ? ranges[outcomeName].upper : '',
	        outcomeName: outcomeName
	      });
	    }
	  }]);

	  return RangeFormContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _range2.default,
	  actions: { resetTooltip: _tooltip.resetTooltip }
	})(RangeFormContainer);

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _SignupForm = __webpack_require__(457);

	var _SignupForm2 = _interopRequireDefault(_SignupForm);

	var _reactReduxForm = __webpack_require__(15);

	var _user = __webpack_require__(164);

	var _tooltip = __webpack_require__(51);

	var _signup = __webpack_require__(521);

	var _signup2 = _interopRequireDefault(_signup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignupFormContainer = function (_React$Component) {
	  _inherits(SignupFormContainer, _React$Component);

	  function SignupFormContainer() {
	    _classCallCheck(this, SignupFormContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SignupFormContainer).call(this));

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(SignupFormContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.setTooltipMessage('');
	      this.props.actions.setTooltipTarget('');
	      this.props.actions.reset('signup');
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      this.props.actions.asyncHandleSignup();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_SignupForm2.default, {
	        tooltipTarget: this.props.tooltipTarget,
	        tooltipMessage: this.props.tooltipMessage,
	        onSubmit: this.handleSubmit
	      });
	    }
	  }]);

	  return SignupFormContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _signup2.default,
	  actions: { asyncHandleSignup: _user.asyncHandleSignup, setTooltipMessage: _tooltip.setTooltipMessage, setTooltipTarget: _tooltip.setTooltipTarget, reset: _reactReduxForm.actions.reset }
	})(SignupFormContainer);

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _instructions = __webpack_require__(522);

	var _instructions2 = _interopRequireDefault(_instructions);

	var _Instructions = __webpack_require__(458);

	var _Instructions2 = _interopRequireDefault(_Instructions);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InstructionsContainer = function (_React$Component) {
	  _inherits(InstructionsContainer, _React$Component);

	  function InstructionsContainer() {
	    _classCallCheck(this, InstructionsContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InstructionsContainer).apply(this, arguments));
	  }

	  _createClass(InstructionsContainer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Instructions2.default, {
	        covariateValues: this.props.covariateValues,
	        covariateNames: this.props.covariateNames
	      });
	    }
	  }]);

	  return InstructionsContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _instructions2.default
	})(InstructionsContainer);

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lineCharts = __webpack_require__(523);

	var _lineCharts2 = _interopRequireDefault(_lineCharts);

	var _stats = __webpack_require__(448);

	var _LineCharts = __webpack_require__(460);

	var _LineCharts2 = _interopRequireDefault(_LineCharts);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LineChartsContainer = function (_React$Component) {
	  _inherits(LineChartsContainer, _React$Component);

	  function LineChartsContainer(props) {
	    _classCallCheck(this, LineChartsContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LineChartsContainer).call(this, props));

	    _this.handleSliderChange = _this.handleSliderChange.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(LineChartsContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.asyncGetPhis();
	      this.props.actions.getCovariateData();
	      this.props.actions.getData();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.clearWinnings();
	    }
	  }, {
	    key: 'handleSliderChange',
	    value: function handleSliderChange(chartIndex, sliderIndex) {
	      var _this2 = this;

	      return function (value) {
	        _this2.props.actions.updateCovariateData(chartIndex, sliderIndex, value);
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(index) {
	      var _this3 = this;

	      return function () {
	        _this3.props.actions.setOutcomeIndex(index);
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_LineCharts2.default, {
	        data: this.props.data,
	        onSliderChange: this.handleSliderChange,
	        covariateRanges: this.props.covariateRanges,
	        outcomeRanges: this.props.outcomeRanges,
	        onClick: this.handleClick,
	        outcomeNames: this.props.outcomeNames,
	        outcomeIndex: this.props.outcomeIndex,
	        covariateData: this.props.covariateData,
	        winnings: this.props.winnings
	      });
	    }
	  }]);

	  return LineChartsContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _lineCharts2.default,
	  actions: { asyncGetPhis: _stats.asyncGetPhis, getData: _stats.getData, getCovariateData: _stats.getCovariateData,
	    updateCovariateData: _stats.updateCovariateData, setOutcomeIndex: _stats.setOutcomeIndex, clearWinnings: _stats.clearWinnings }
	})(LineChartsContainer);

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _LoginModal = __webpack_require__(461);

	var _LoginModal2 = _interopRequireDefault(_LoginModal);

	var _modal = __webpack_require__(50);

	var _loginModal = __webpack_require__(524);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginModalContainer = function (_React$Component) {
	  _inherits(LoginModalContainer, _React$Component);

	  function LoginModalContainer() {
	    _classCallCheck(this, LoginModalContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginModalContainer).call(this));

	    _this.handleHide = _this.handleHide.bind(_this);
	    return _this;
	  }

	  _createClass(LoginModalContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'handleHide',
	    value: function handleHide() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_LoginModal2.default, {
	        show: this.props.showModal,
	        onHide: this.handleHide
	      });
	    }
	  }]);

	  return LoginModalContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _loginModal2.default,
	  actions: { showModal: _modal.showModal }
	})(LoginModalContainer);

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _QuestionBody = __webpack_require__(463);

	var _QuestionBody2 = _interopRequireDefault(_QuestionBody);

	var _tooltip = __webpack_require__(51);

	var _modal = __webpack_require__(50);

	var _estimates = __webpack_require__(518);

	var _estimates2 = _interopRequireDefault(_estimates);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionBodyContainer = function (_React$Component) {
	  _inherits(QuestionBodyContainer, _React$Component);

	  function QuestionBodyContainer() {
	    _classCallCheck(this, QuestionBodyContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionBodyContainer).call(this));

	    _this.handleHide = _this.handleHide.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionBodyContainer, [{
	    key: 'handleHide',
	    value: function handleHide() {
	      this.props.actions.resetTooltip();
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.actions.showModal(true);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_QuestionBody2.default, {
	        outcomeNames: this.props.outcomeNames,
	        estimates: this.props.estimates,
	        tooltipMessage: this.props.tooltipMessage,
	        tooltipTarget: this.props.tooltipTarget,
	        onHide: this.handleHide,
	        onClick: this.handleClick,
	        questionInstructions: this.props.questionInstructions,
	        outcomeDataTypes: this.props.outcomeDataTypes
	      });
	    }
	  }]);

	  return QuestionBodyContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _estimates2.default,
	  actions: { resetTooltip: _tooltip.resetTooltip, showModal: _modal.showModal }
	})(QuestionBodyContainer);

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _RangeModal = __webpack_require__(464);

	var _RangeModal2 = _interopRequireDefault(_RangeModal);

	var _home = __webpack_require__(252);

	var _modal = __webpack_require__(50);

	var _rangeModal = __webpack_require__(525);

	var _rangeModal2 = _interopRequireDefault(_rangeModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangeModalContainer = function (_React$Component) {
	  _inherits(RangeModalContainer, _React$Component);

	  function RangeModalContainer() {
	    _classCallCheck(this, RangeModalContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RangeModalContainer).call(this));

	    _this.handleHide = _this.handleHide.bind(_this);
	    _this.handleStart = _this.handleStart.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(RangeModalContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'handleHide',
	    value: function handleHide() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'handleStart',
	    value: function handleStart() {
	      this.props.actions.handleStart();
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      this.props.actions.handleSurveySubmission();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_RangeModal2.default, {
	        show: this.props.showModal,
	        onStart: this.handleStart,
	        onSubmit: this.handleSubmit,
	        onHide: this.handleHide,
	        unlocked: this.props.unlocked,
	        roundInstructions: this.props.roundInstructions
	      });
	    }
	  }]);

	  return RangeModalContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _rangeModal2.default,
	  actions: { showModal: _modal.showModal, handleSurveySubmission: _home.handleSurveySubmission, handleStart: _home.handleStart }
	})(RangeModalContainer);

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Root;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(223);

	var _reactRouter = __webpack_require__(46);

	var _Routes = __webpack_require__(486);

	var _Routes2 = _interopRequireDefault(_Routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Root(_ref) {
	  var store = _ref.store;
	  var history = _ref.history;

	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_reactRouter.Router, { history: history, routes: _Routes2.default })
	  );
	}

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(46);

	var _Landing = __webpack_require__(497);

	var _Landing2 = _interopRequireDefault(_Landing);

	var _Signup = __webpack_require__(501);

	var _Signup2 = _interopRequireDefault(_Signup);

	var _Home = __webpack_require__(496);

	var _Home2 = _interopRequireDefault(_Home);

	var _Round = __webpack_require__(500);

	var _Round2 = _interopRequireDefault(_Round);

	var _Question = __webpack_require__(499);

	var _Question2 = _interopRequireDefault(_Question);

	var _Stats = __webpack_require__(502);

	var _Stats2 = _interopRequireDefault(_Stats);

	var _NotFound = __webpack_require__(498);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Page = __webpack_require__(490);

	var _Page2 = _interopRequireDefault(_Page);

	var _Page3 = __webpack_require__(491);

	var _Page4 = _interopRequireDefault(_Page3);

	var _Page5 = __webpack_require__(492);

	var _Page6 = _interopRequireDefault(_Page5);

	var _Page7 = __webpack_require__(493);

	var _Page8 = _interopRequireDefault(_Page7);

	var _Instructions = __webpack_require__(468);

	var _Instructions2 = _interopRequireDefault(_Instructions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Pages */
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/' },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Landing2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'signup', component: _Signup2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Instructions2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '1', component: _Page2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '2', component: _Page4.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '3', component: _Page6.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '4', component: _Page8.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _Home2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'round', component: _Round2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Question2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: 'stats', component: _Stats2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
	);

	/* Components */


	/* Containers */

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* global __DEV__ */
	module.exports =  false ? require('./Root.dev') : __webpack_require__(485);

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _round = __webpack_require__(163);

	var _tooltip = __webpack_require__(51);

	var _round2 = __webpack_require__(527);

	var _round3 = _interopRequireDefault(_round2);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Round = function (_React$Component) {
	  _inherits(Round, _React$Component);

	  function Round(props) {
	    _classCallCheck(this, Round);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Round).call(this, props));

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(Round, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props;
	      var actions = _props.actions;
	      var bank = _props.bank;
	      var numBins = _props.numBins;

	      actions.asyncCreateRound();
	      actions.pullQuestion(this.props.categoryName);
	      actions.initializeQuestion(numBins, bank);
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      var _props2 = this.props;
	      var actions = _props2.actions;
	      var categoryName = _props2.categoryName;
	      var numBins = _props2.numBins;
	      var bank = _props2.bank;
	      // Validate estimates

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.props.outcomeNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var outcomeName = _step.value;

	          if (isNaN(this.props.estimates[outcomeName])) {
	            this.props.actions.setTooltipMessage('Make a guess!');
	            this.props.actions.setTooltipTarget(outcomeName);
	            return;
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

	      actions.asyncHandleSubmit();
	      actions.asyncAwardPoints(this.props.worth);
	      actions.initializeQuestion(numBins, bank);
	      actions.pullQuestion(categoryName);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.cloneElement(this.props.children),
	        _react2.default.createElement(
	          _Buttons.Button,
	          { onClick: this.handleSubmit },
	          'Submit Question'
	        )
	      );
	    }
	  }]);

	  return Round;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _round3.default,
	  actions: { asyncHandleSubmit: _round.asyncHandleSubmit, asyncAwardPoints: _round.asyncAwardPoints, asyncCreateRound: _round.asyncCreateRound,
	    pullQuestion: _round.pullQuestion, initializeQuestion: _round.initializeQuestion, setTooltipMessage: _tooltip.setTooltipMessage, setTooltipTarget: _tooltip.setTooltipTarget }
	})(Round);

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _modal = __webpack_require__(50);

	var _signupModal = __webpack_require__(528);

	var _signupModal2 = _interopRequireDefault(_signupModal);

	var _SignupModal = __webpack_require__(466);

	var _SignupModal2 = _interopRequireDefault(_SignupModal);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignupModalContainer = function (_React$Component) {
	  _inherits(SignupModalContainer, _React$Component);

	  function SignupModalContainer() {
	    _classCallCheck(this, SignupModalContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SignupModalContainer).call(this));

	    _this.handleHide = _this.handleHide.bind(_this);
	    return _this;
	  }

	  _createClass(SignupModalContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'handleHide',
	    value: function handleHide() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_SignupModal2.default, {
	        show: this.props.showModal,
	        onHide: this.handleHide
	      });
	    }
	  }]);

	  return SignupModalContainer;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _signupModal2.default,
	  actions: { showModal: _modal.showModal }
	})(SignupModalContainer);

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _Page = __webpack_require__(469);

	var _Page2 = _interopRequireDefault(_Page);

	var _survey = __webpack_require__(116);

	var _survey2 = __webpack_require__(117);

	var _survey3 = _interopRequireDefault(_survey2);

	var _reactReduxForm = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyPage1Container = function (_React$Component) {
	  _inherits(SurveyPage1Container, _React$Component);

	  function SurveyPage1Container() {
	    _classCallCheck(this, SurveyPage1Container);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage1Container).call(this));

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    _this.handleCheckChange = _this.handleCheckChange.bind(_this);
	    return _this;
	  }

	  _createClass(SurveyPage1Container, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      this.props.actions.submitPage1();
	    }
	  }, {
	    key: 'handleCheckChange',
	    value: function handleCheckChange(val) {
	      this.props.actions.change('forms.survey.race.' + val, !this.props.survey.race[val]);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Page2.default, {
	        onSubmit: this.handleSubmit,
	        onCheckChange: this.handleCheckChange,
	        survey: this.props.survey,
	        surveyForm: this.props.surveyForm
	      });
	    }
	  }]);

	  return SurveyPage1Container;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _survey3.default,
	  actions: { submitPage1: _survey.submitPage1, change: _reactReduxForm.actions.change }
	})(SurveyPage1Container);

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _Page = __webpack_require__(470);

	var _Page2 = _interopRequireDefault(_Page);

	var _survey = __webpack_require__(116);

	var _survey2 = __webpack_require__(117);

	var _survey3 = _interopRequireDefault(_survey2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyPage2Container = function (_React$Component) {
	  _inherits(SurveyPage2Container, _React$Component);

	  function SurveyPage2Container() {
	    _classCallCheck(this, SurveyPage2Container);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage2Container).call(this));

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(SurveyPage2Container, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      this.props.actions.submitPage2();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Page2.default, {
	        onSubmit: this.handleSubmit,
	        survey: this.props.survey,
	        surveyForm: this.props.surveyForm
	      });
	    }
	  }]);

	  return SurveyPage2Container;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _survey3.default,
	  actions: { submitPage2: _survey.submitPage2 }
	})(SurveyPage2Container);

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _Page = __webpack_require__(471);

	var _Page2 = _interopRequireDefault(_Page);

	var _survey = __webpack_require__(116);

	var _survey2 = __webpack_require__(117);

	var _survey3 = _interopRequireDefault(_survey2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyPage3Container = function (_React$Component) {
	  _inherits(SurveyPage3Container, _React$Component);

	  function SurveyPage3Container() {
	    _classCallCheck(this, SurveyPage3Container);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage3Container).call(this));

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(SurveyPage3Container, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      this.props.actions.submitPage3();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Page2.default, {
	        onSubmit: this.handleSubmit,
	        survey: this.props.survey,
	        surveyForm: this.props.surveyForm
	      });
	    }
	  }]);

	  return SurveyPage3Container;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _survey3.default,
	  actions: { submitPage3: _survey.submitPage3 }
	})(SurveyPage3Container);

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _Page = __webpack_require__(472);

	var _Page2 = _interopRequireDefault(_Page);

	var _survey = __webpack_require__(116);

	var _survey2 = __webpack_require__(117);

	var _survey3 = _interopRequireDefault(_survey2);

	var _reactReduxForm = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyPage4Container = function (_React$Component) {
	  _inherits(SurveyPage4Container, _React$Component);

	  function SurveyPage4Container() {
	    _classCallCheck(this, SurveyPage4Container);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage4Container).call(this));

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    _this.handleCheckChange = _this.handleCheckChange.bind(_this);
	    return _this;
	  }

	  _createClass(SurveyPage4Container, [{
	    key: 'handleSubmit',
	    value: function handleSubmit() {
	      this.props.actions.submitSurvey();
	    }
	  }, {
	    key: 'handleCheckChange',
	    value: function handleCheckChange(val) {
	      this.props.actions.change('forms.survey.' + val, !this.props.survey[val]);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Page2.default, {
	        onSubmit: this.handleSubmit,
	        survey: this.props.survey,
	        surveyForm: this.props.surveyForm,
	        onCheckChange: this.handleCheckChange
	      });
	    }
	  }]);

	  return SurveyPage4Container;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  selector: _survey3.default,
	  actions: { submitSurvey: _survey.submitSurvey, change: _reactReduxForm.actions.change }
	})(SurveyPage4Container);

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeButton = function (_React$Component) {
	  _inherits(HomeButton, _React$Component);

	  function HomeButton() {
	    _classCallCheck(this, HomeButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeButton).apply(this, arguments));
	  }

	  _createClass(HomeButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _Buttons.LinkButton,
	        null,
	        'Go Home'
	      );
	    }
	  }]);

	  return HomeButton;
	}(_react2.default.Component);

	exports.default = HomeButton;

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(14);

	var _connect2 = _interopRequireDefault(_connect);

	var _user = __webpack_require__(164);

	var _Buttons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LogoutButton = function (_React$Component) {
	  _inherits(LogoutButton, _React$Component);

	  function LogoutButton() {
	    _classCallCheck(this, LogoutButton);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LogoutButton).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(LogoutButton, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.actions.logOut();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          _Buttons.Button,
	          { onClick: this.handleClick },
	          'Log Out'
	        )
	      );
	    }
	  }]);

	  return LogoutButton;
	}(_react2.default.Component);

	exports.default = (0, _connect2.default)({
	  actions: { logOut: _user.logOut }
	})(LogoutButton);

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Categories = __webpack_require__(474);

	var _Categories2 = _interopRequireDefault(_Categories);

	var _RangeModal = __webpack_require__(484);

	var _RangeModal2 = _interopRequireDefault(_RangeModal);

	var _LogoutButton = __webpack_require__(495);

	var _LogoutButton2 = _interopRequireDefault(_LogoutButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* Containers */


	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Pick a Topic'
	        ),
	        _react2.default.createElement(_Categories2.default, null),
	        _react2.default.createElement(_RangeModal2.default, null),
	        _react2.default.createElement(_LogoutButton2.default, null)
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Branding = __webpack_require__(459);

	var _AccessButtons = __webpack_require__(473);

	var _AccessButtons2 = _interopRequireDefault(_AccessButtons);

	var _LoginModal = __webpack_require__(482);

	var _LoginModal2 = _interopRequireDefault(_LoginModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* Containers */


	/* Components */

	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);

	  function Landing() {
	    _classCallCheck(this, Landing);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Landing).apply(this, arguments));
	  }

	  _createClass(Landing, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Branding.Logo, null),
	        _react2.default.createElement(_Branding.BrandSubtitle, null),
	        _react2.default.createElement(
	          'div',
	          null,
	          ' '
	        ),
	        _react2.default.createElement(_AccessButtons2.default, null),
	        _react2.default.createElement(_LoginModal2.default, null)
	      );
	    }
	  }]);

	  return Landing;
	}(_react2.default.Component);

	exports.default = Landing;

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotFound = function (_React$Component) {
	  _inherits(NotFound, _React$Component);

	  function NotFound() {
	    _classCallCheck(this, NotFound);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotFound).apply(this, arguments));
	  }

	  _createClass(NotFound, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          '404 Page Not Found'
	        )
	      );
	    }
	  }]);

	  return NotFound;
	}(_react2.default.Component);

	exports.default = NotFound;

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Instructions = __webpack_require__(480);

	var _Instructions2 = _interopRequireDefault(_Instructions);

	var _QuestionBody = __webpack_require__(483);

	var _QuestionBody2 = _interopRequireDefault(_QuestionBody);

	var _ChangeRangeModal = __webpack_require__(475);

	var _ChangeRangeModal2 = _interopRequireDefault(_ChangeRangeModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* Containers */


	var Question = function (_React$Component) {
	  _inherits(Question, _React$Component);

	  function Question() {
	    _classCallCheck(this, Question);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Question).apply(this, arguments));
	  }

	  _createClass(Question, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Instructions2.default, null),
	        _react2.default.createElement(_QuestionBody2.default, null),
	        _react2.default.createElement(_ChangeRangeModal2.default, null)
	      );
	    }
	  }]);

	  return Question;
	}(_react2.default.Component);

	exports.default = Question;

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Round = __webpack_require__(488);

	var _Round2 = _interopRequireDefault(_Round);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Round = function (_React$Component) {
	  _inherits(Round, _React$Component);

	  function Round() {
	    _classCallCheck(this, Round);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Round).apply(this, arguments));
	  }

	  _createClass(Round, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Round2.default,
	          null,
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Round;
	}(_react2.default.Component);

	exports.default = Round;

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(34);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SignupModal = __webpack_require__(489);

	var _SignupModal2 = _interopRequireDefault(_SignupModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* Containers */


	var Signup = function (_React$Component) {
	  _inherits(Signup, _React$Component);

	  function Signup() {
	    _classCallCheck(this, Signup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).apply(this, arguments));
	  }

	  _createClass(Signup, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactBootstrap.ProgressBar, { now: this.props.children.props.route.path, min: 0, max: this.props.route.childRoutes.length }),
	        this.props.children,
	        _react2.default.createElement(_SignupModal2.default, null)
	      );
	    }
	  }]);

	  return Signup;
	}(_react2.default.Component);

	exports.default = Signup;

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LineCharts = __webpack_require__(481);

	var _LineCharts2 = _interopRequireDefault(_LineCharts);

	var _HomeButton = __webpack_require__(494);

	var _HomeButton2 = _interopRequireDefault(_HomeButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* Containers */


	var Stats = function (_React$Component) {
	  _inherits(Stats, _React$Component);

	  function Stats() {
	    _classCallCheck(this, Stats);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Stats).apply(this, arguments));
	  }

	  _createClass(Stats, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_LineCharts2.default, null),
	        _react2.default.createElement(_HomeButton2.default, null)
	      );
	    }
	  }]);

	  return Stats;
	}(_react2.default.Component);

	exports.default = Stats;

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = answer;

	var _constants = __webpack_require__(27);

	var _reactAddonsUpdate = __webpack_require__(57);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  bank: [],
	  binValues: [],
	  submitted: true
	};

	function answer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.DEPOSIT:
	      return (0, _reactAddonsUpdate2.default)(state, { binValues: _defineProperty({}, action.payload.binsIndex, _defineProperty({}, action.payload.index, { $apply: function $apply(value) {
	            return value + 1;
	          } })) });
	    case _constants.SET_ANSWER_SUBMITTED:
	      return (0, _reactAddonsUpdate2.default)(state, { submitted: { $set: action.payload.submitted } });
	    case _constants.SET_BANK:
	      return (0, _reactAddonsUpdate2.default)(state, { bank: { $set: action.payload.bank } });
	    case _constants.SET_BIN_VALUES:
	      return (0, _reactAddonsUpdate2.default)(state, { binValues: { $set: action.payload.binValues } });
	    case _constants.WITHDRAW:
	      return (0, _reactAddonsUpdate2.default)(state, { bank: _defineProperty({}, action.payload.bankIndex, { $apply: function $apply(bank) {
	            return bank - 1;
	          } }) });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = category;

	var _constants = __webpack_require__(27);

	var _reactAddonsUpdate = __webpack_require__(57);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  categorySurveyInstructions: '',
	  covariateNames: [],
	  covariateRanges: [],
	  outcomeDataTypes: [],
	  index: 0,
	  instructions: '',
	  name: '',
	  numBins: [],
	  outcomeNames: [],
	  outcomeRanges: [],
	  pointsPerToken: [],
	  questionInstructions: [],
	  questionsPerRound: 0,
	  tokens: []
	};

	function category() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.SET_CATEGORY:
	      return (0, _reactAddonsUpdate2.default)(state, { $set: action.payload.category });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _initialFormsState = __webpack_require__(507);

	var _initialFormsState2 = _interopRequireDefault(_initialFormsState);

	var _reactReduxForm = __webpack_require__(15);

	var _redux = __webpack_require__(92);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  covariates: (0, _reactReduxForm.modelReducer)('forms.covariates', _initialFormsState2.default.covariates),
	  covariatesForm: (0, _reactReduxForm.formReducer)('forms.covariates'),
	  estimates: (0, _reactReduxForm.modelReducer)('forms.estimates', _initialFormsState2.default.estimates),
	  estimatesForm: (0, _reactReduxForm.formReducer)('forms.estimates'),
	  login: (0, _reactReduxForm.modelReducer)('login', _initialFormsState2.default.login),
	  loginForm: (0, _reactReduxForm.formReducer)('login'),
	  ranges: (0, _reactReduxForm.modelReducer)('ranges', _initialFormsState2.default.ranges),
	  rangesForm: (0, _reactReduxForm.formReducer)('ranges'),
	  signup: (0, _reactReduxForm.modelReducer)('signup', _initialFormsState2.default.signup),
	  signupForm: (0, _reactReduxForm.formReducer)('signup'),
	  survey: (0, _reactReduxForm.modelReducer)('forms.survey', _initialFormsState2.default.survey),
	  surveyForm: (0, _reactReduxForm.formReducer)('forms.survey')
	});

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(92);

	var _reactRouterRedux = __webpack_require__(224);

	var _answer = __webpack_require__(503);

	var _answer2 = _interopRequireDefault(_answer);

	var _category = __webpack_require__(504);

	var _category2 = _interopRequireDefault(_category);

	var _forms = __webpack_require__(505);

	var _forms2 = _interopRequireDefault(_forms);

	var _modal = __webpack_require__(508);

	var _modal2 = _interopRequireDefault(_modal);

	var _question = __webpack_require__(509);

	var _question2 = _interopRequireDefault(_question);

	var _round = __webpack_require__(510);

	var _round2 = _interopRequireDefault(_round);

	var _stats = __webpack_require__(511);

	var _stats2 = _interopRequireDefault(_stats);

	var _tooltip = __webpack_require__(512);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// REMEMBER
	exports.default = (0, _redux.combineReducers)({
	  answer: _answer2.default,
	  category: _category2.default,
	  forms: _forms2.default,
	  modal: _modal2.default,
	  question: _question2.default,
	  round: _round2.default,
	  routing: _reactRouterRedux.routerReducer,
	  stats: _stats2.default,
	  tooltip: _tooltip2.default
	});

/***/ },

/***/ 507:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var covariates = {};

	var estimates = {};

	var login = {
	  email: '',
	  password: ''
	};

	var ranges = {};

	var signup = {
	  email: '',
	  password: '',
	  passwordConfirm: ''
	};

	var survey = {
	  annualSalary: '',
	  birthdate: {
	    day: '',
	    month: '',
	    year: ''
	  },
	  collegeGPA: '',
	  fathersEducation: '',
	  fathersEducationIsGuess: false,
	  gender: '',
	  highestEducationDegree: '',
	  highSchoolGPA: '',
	  hispanic: '',
	  intendedHighestEducationDegree: '',
	  intendedYearsOfCompletedSchooling: '',
	  isBornInUS: '',
	  isEmployed: '',
	  isEnglishPrimaryLanguage: '',
	  isLunchReducedPrice: '',
	  isStudent: '',
	  mothersEducation: '',
	  mothersEducationIsGuess: false,
	  race: {
	    americanIndianOrAlaskaNative: false,
	    asianIndian: false,
	    blackOrAfricanAmerican: false,
	    chinese: false,
	    filipino: false,
	    japanese: false,
	    korean: false,
	    other: '',
	    otherAsian: false,
	    pacificIslander: false,
	    vietnamese: false,
	    white: false
	  },
	  stateOfResidence: '',
	  workHoursPerWeek: '',
	  yearsOfCompletedSchooling: '',
	  yearsOfWorkExperienceInCurrentCareer: '',
	  yearsOfWorkExperienceOverall: ''
	};

	exports.default = {
	  covariates: covariates,
	  estimates: estimates,
	  login: login,
	  ranges: ranges,
	  signup: signup,
	  survey: survey
	};

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = modal;

	var _constants = __webpack_require__(27);

	var _reactAddonsUpdate = __webpack_require__(57);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  showModal: false
	};

	function modal() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.SHOW_MODAL:
	      return (0, _reactAddonsUpdate2.default)(state, { showModal: { $set: action.payload.showModal } });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = question;

	var _constants = __webpack_require__(27);

	var _reactAddonsUpdate = __webpack_require__(57);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  covariateValues: [],
	  objectId: '',
	  outcomeValues: []
	};

	function question() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.SET_QUESTION:
	      return (0, _reactAddonsUpdate2.default)(state, { $set: action.payload.question });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = round;

	var _constants = __webpack_require__(27);

	var _reactAddonsUpdate = __webpack_require__(57);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  answersVector: [],
	  categoryNames: [],
	  correctAnswerIndices: [],
	  currentQuestion: 1,
	  currentRound: null,
	  outcomes: [],
	  ranges: [],
	  unlocked: [],
	  winnings: 0
	};

	function round() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.ADD_ANSWER_TO_ROUND:
	      return (0, _reactAddonsUpdate2.default)(state, { currentRound: { $apply: function $apply(currentRound) {
	            return currentRound.get('answers').push(action.payload.answer);
	          } } });
	    case _constants.ADD_ANSWERS:
	      return (0, _reactAddonsUpdate2.default)(state, { answersVector: { $push: [action.payload.answers] } });
	    case _constants.ADD_OUTCOMES:
	      return (0, _reactAddonsUpdate2.default)(state, { outcomes: { $push: [action.payload.outcomes] } });
	    case _constants.ADD_WINNINGS:
	      return (0, _reactAddonsUpdate2.default)(state, { winnings: { $set: state.winnings + action.payload.winnings } });
	    case _constants.CLEAR_WINNINGS:
	      return (0, _reactAddonsUpdate2.default)(state, { winnings: { $set: 0 } });
	    case _constants.INCREMENT_CURRENT_QUESTION:
	      return (0, _reactAddonsUpdate2.default)(state, { currentQuestion: { $set: state.currentQuestion + 1 } });
	    case _constants.RESET_CURRENT_QUESTION:
	      return (0, _reactAddonsUpdate2.default)(state, { currentQuestion: { $set: 1 } });
	    case _constants.SET_CATEGORY_NAMES:
	      return (0, _reactAddonsUpdate2.default)(state, { categoryNames: { $set: action.payload.categoryNames } });
	    case _constants.SET_CORRECT_ANSWER_INDICES:
	      return (0, _reactAddonsUpdate2.default)(state, { correctAnswerIndices: { $set: action.payload.correctAnswerIndices } });
	    case _constants.SET_CURRENT_ROUND:
	      return (0, _reactAddonsUpdate2.default)(state, { currentRound: { $set: action.payload.currentRound } });
	    case _constants.SET_RANGE:
	      return (0, _reactAddonsUpdate2.default)(state, { ranges: _defineProperty({}, action.payload.index, { $set: action.payload.range }) });
	    case _constants.SET_RANGES:
	      return (0, _reactAddonsUpdate2.default)(state, { ranges: { $set: action.payload.ranges } });
	    case _constants.SET_UNLOCKED:
	      return (0, _reactAddonsUpdate2.default)(state, { unlocked: _defineProperty({}, action.payload.index, { $set: action.payload.unlocked }) });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stats;

	var _constants = __webpack_require__(27);

	var _reactAddonsUpdate = __webpack_require__(57);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  covariateData: [],
	  data: [],
	  outcomes: [],
	  outcomeIndex: 0,
	  phi: []
	};

	function stats() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.ADD_PHI:
	      return (0, _reactAddonsUpdate2.default)(state, { phi: { $push: [action.payload.phi] } });
	    case _constants.SET_COVARIATE_DATA:
	      return (0, _reactAddonsUpdate2.default)(state, { covariateData: { $set: action.payload.covariateData } });
	    case _constants.SET_DATA:
	      return (0, _reactAddonsUpdate2.default)(state, { data: { $set: action.payload.data } });
	    case _constants.SET_OUTCOMES:
	      return (0, _reactAddonsUpdate2.default)(state, { outcomes: { $set: action.payload.outcomes } });
	    case _constants.SET_OUTCOME_INDEX:
	      return (0, _reactAddonsUpdate2.default)(state, { outcomeIndex: { $set: action.payload.outcomeIndex } });
	    case _constants.SET_PHI:
	      return (0, _reactAddonsUpdate2.default)(state, { phi: { $set: action.payload.phi } });
	    case _constants.SET_SERIES:
	      return (0, _reactAddonsUpdate2.default)(state, { data: { $splice: [[action.payload.index, 1, action.payload.data]] } });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = tooltip;

	var _constants = __webpack_require__(27);

	var _reactAddonsUpdate = __webpack_require__(57);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  target: '',
	  message: ''
	};

	function tooltip() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.RESET_TOOLTIP:
	      return (0, _reactAddonsUpdate2.default)(state, { $set: initialState });
	    case _constants.SET_TOOLTIP_MESSAGE:
	      return (0, _reactAddonsUpdate2.default)(state, { message: { $set: action.payload.message } });
	    case _constants.SET_TOOLTIP_TARGET:
	      return (0, _reactAddonsUpdate2.default)(state, { target: { $set: action.payload.target } });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var _points = __webpack_require__(256);

	var _points2 = _interopRequireDefault(_points);

	var _correctAnswerIndices = __webpack_require__(516);

	var _correctAnswerIndices2 = _interopRequireDefault(_correctAnswerIndices);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var binValuesSelector = function binValuesSelector(state) {
	  return state.answer.binValues;
	};
	var bankSelector = function bankSelector(state) {
	  return state.answer.bank;
	};
	var rangesSelector = function rangesSelector(state) {
	  return state.forms.ranges;
	};

	function getContinuousBinText(numBins, range) {
	  var binValues = [],
	      binText = [];
	  var difference = range[1] - range[0];
	  var step = difference / numBins;
	  step = Math.floor(step + 0.5);
	  binValues.push(Math.floor(range[0] + 0.5));
	  for (var i = 0; i < numBins; i++) {
	    var lastValue = binValues[binValues.length - 1];
	    var nextValue = lastValue + step;
	    var text = lastValue + '-' + nextValue;
	    binValues.push(nextValue);
	    binText.push(text);
	  }
	  return binText;
	}

	function getBinTexts(category, ranges) {
	  var bins = [];
	  for (var i = 0; i < category.outcomeRanges.length; i++) {
	    var outcomeName = category.outcomeNames[i];
	    var dataType = category.outcomeDataTypes[i];
	    if (dataType.type === 'continuous') {
	      // Calculate the range
	      var range = [0, 0];
	      if (ranges[outcomeName] && ranges[outcomeName].lower >= 0 && ranges[outcomeName].upper > 0) {
	        range = [ranges[outcomeName].lower, ranges[outcomeName].upper];
	      }
	      bins.push(getContinuousBinText(category.numBins[i], range));
	    } else {
	      bins.push(dataType.labels ? dataType.labels : dataType.values);
	    }
	  }
	  return bins.length ? bins : [[]];
	}

	exports.default = (0, _reselect.createSelector)(categorySelector, binValuesSelector, bankSelector, rangesSelector, _points2.default, _correctAnswerIndices2.default, function (category, binValues, bank, ranges, worth, correctAnswerIndices) {
	  return {
	    bank: bank,
	    binTexts: getBinTexts(category, ranges),
	    binValues: binValues.length > 0 ? binValues : [[]],
	    worth: worth.worth,
	    correctAnswerIndices: correctAnswerIndices.correctAnswerIndices
	  };
	});

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var categoryNamesSelector = function categoryNamesSelector(state) {
	  return state.round.categoryNames;
	};

	exports.default = (0, _reselect.createSelector)(categoryNamesSelector, function (categoryNames) {
	  return {
	    categoryNames: categoryNames
	  };
	});

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var showModalSelector = function showModalSelector(state) {
	  return state.modal.showModal;
	};

	exports.default = (0, _reselect.createSelector)(showModalSelector, function (showModal) {
	  return {
	    showModal: showModal
	  };
	});

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var rangesSelector = function rangesSelector(state) {
	  return state.forms.ranges;
	};
	var outcomeValuesSelector = function outcomeValuesSelector(state) {
	  return state.question.outcomeValues;
	};

	function getContinuousAnswerIndex(numBins, range, outcome) {
	  var binValues = [];
	  var difference = range[1] - range[0];
	  //If correct answer index is not within the specified range, return -1
	  if (outcome < range[0] || outcome > range[1]) {
	    return -1;
	  }
	  //Find the correct answer index within the given range
	  var step = difference / numBins;
	  step = Math.floor(step + 0.5);
	  binValues.push(Math.floor(range[0] + 0.5));
	  for (var i = 0; i < numBins; i++) {
	    var lastValue = binValues[binValues.length - 1];
	    var nextValue = lastValue + step;
	    if (outcome >= lastValue && outcome <= nextValue) {
	      return i;
	    }
	    binValues.push(nextValue);
	  }
	}

	function getCorrectAnswerIndices(category, ranges, outcomeValues) {
	  var correctAnswerIndices = [];
	  for (var i = 0; i < category.outcomeRanges.length; i++) {
	    var outcomeName = category.outcomeNames[i];
	    if (category.outcomeDataTypes[i].type === 'discrete') {
	      correctAnswerIndices.push(outcomeValues[i] - category.outcomeRanges[i][0]);
	    } else if (category.outcomeDataTypes[i].type === 'continuous') {
	      var range = [0, 0];
	      if (ranges[outcomeName] && ranges[outcomeName].lower >= 0 && ranges[outcomeName].upper > 0) {
	        range = [ranges[outcomeName].lower, ranges[outcomeName].upper];
	      }
	      correctAnswerIndices.push(getContinuousAnswerIndex(category.numBins[i], range, outcomeValues[i]));
	    } else {
	      correctAnswerIndices.push(outcomeValues[i] ? 0 : 1);
	    }
	  }
	  return correctAnswerIndices;
	}

	exports.default = (0, _reselect.createSelector)(categorySelector, rangesSelector, outcomeValuesSelector, function (category, ranges, outcomeValues) {
	  return {
	    correctAnswerIndices: getCorrectAnswerIndices(category, ranges, outcomeValues)
	  };
	});

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var tooltipSelector = function tooltipSelector(state) {
	  return state.tooltip;
	};

	exports.default = (0, _reselect.createSelector)(categorySelector, tooltipSelector, function (category, tooltip) {
	  return {
	    categorySurveyInstructions: category.categorySurveyInstructions,
	    allCovariateDataTypes: category.allCovariateDataTypes,
	    allCovariateNames: category.allCovariateNames,
	    tooltipMessage: tooltip.message,
	    tooltipTarget: tooltip.target
	  };
	});

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var estimatesSelector = function estimatesSelector(state) {
	  return state.forms.estimates;
	};
	var tooltipSelector = function tooltipSelector(state) {
	  return state.tooltip;
	};

	exports.default = (0, _reselect.createSelector)(categorySelector, estimatesSelector, tooltipSelector, function (category, estimates, tooltip) {
	  return {
	    outcomeNames: category.outcomeNames,
	    outcomeDataTypes: category.outcomeDataTypes,
	    estimates: estimates,
	    questionInstructions: category.questionInstructions,
	    tooltipMessage: tooltip.message,
	    tooltipTarget: tooltip.target
	  };
	});

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var tooltipSelector = function tooltipSelector(state) {
	  return state.tooltip;
	};

	exports.default = (0, _reselect.createSelector)(tooltipSelector, function (tooltip) {
	  return {
	    tooltipMessage: tooltip.message,
	    tooltipTarget: tooltip.target === '' ? 'form' : tooltip.target
	  };
	});

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var rangesSelector = function rangesSelector(state) {
	  return state.forms.ranges;
	};

	exports.default = (0, _reselect.createSelector)(rangesSelector, function (ranges) {
	  return {
	    ranges: ranges
	  };
	});

/***/ },

/***/ 521:
519,

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var covariateValuesSelector = function covariateValuesSelector(state) {
	  return state.question.covariateValues;
	};

	function getCovariateValues(values, covariateDataTypes) {
	  var covariateValues = [];
	  for (var i = 0; i < covariateDataTypes.length; i++) {
	    covariateValues.push(covariateDataTypes[i].labels ? covariateDataTypes[i].labels[values[i]] : values[i]);
	  }
	  return covariateValues;
	}

	exports.default = (0, _reselect.createSelector)(covariateValuesSelector, categorySelector, function (covariateValues, category) {
	  return {
	    covariateValues: getCovariateValues(covariateValues, category.covariateDataTypes),
	    covariateNames: category.covariateNames
	  };
	});

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var dataSelector = function dataSelector(state) {
	  return state.stats.data;
	};
	var indexSelector = function indexSelector(state) {
	  return state.stats.outcomeIndex;
	};
	var covariateDataSelector = function covariateDataSelector(state) {
	  return state.stats.covariateData;
	};
	var winningsSelector = function winningsSelector(state) {
	  return state.round.winnings;
	};

	exports.default = (0, _reselect.createSelector)(categorySelector, dataSelector, indexSelector, covariateDataSelector, winningsSelector, function (category, data, outcomeIndex, covariateData, winnings) {
	  return {
	    data: data,
	    outcomeIndex: outcomeIndex,
	    covariateData: covariateData,
	    winnings: winnings,
	    covariateRanges: category.covariateRanges,
	    outcomeRanges: category.outcomeRanges,
	    outcomeNames: category.outcomeNames
	  };
	});

/***/ },

/***/ 524:
515,

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var showModalSelector = function showModalSelector(state) {
	  return state.modal.showModal;
	};
	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var unlockedSelector = function unlockedSelector(state) {
	  return state.round.unlocked;
	};
	var roundInstructionsSelector = function roundInstructionsSelector(state) {
	  return state.category.roundInstructions;
	};

	exports.default = (0, _reselect.createSelector)(showModalSelector, categorySelector, unlockedSelector, roundInstructionsSelector, function (showModal, category, unlocked, roundInstructions) {
	  return {
	    showModal: showModal,
	    unlocked: unlocked[category.index],
	    roundInstructions: roundInstructions
	  };
	});

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var tooltipSelector = function tooltipSelector(state) {
	  return state.tooltip;
	};

	exports.default = (0, _reselect.createSelector)(categorySelector, tooltipSelector, function (category, tooltip) {
	  return {
	    outcomeNames: category.outcomeNames,
	    numBins: category.numBins,
	    bank: category.tokens,
	    outcomeDataTypes: category.outcomeDataTypes,
	    tooltipMessage: tooltip.message,
	    tooltipTarget: tooltip.target
	  };
	});

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(16);

	var _points = __webpack_require__(256);

	var _points2 = _interopRequireDefault(_points);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var estimatesSelector = function estimatesSelector(state) {
	  return state.forms.estimates;
	};

	exports.default = (0, _reselect.createSelector)(categorySelector, estimatesSelector, _points2.default, function (category, estimates, worth) {
	  return {
	    categoryName: category.name,
	    bank: category.tokens,
	    numBins: category.numBins,
	    outcomeNames: category.outcomeNames,
	    estimates: estimates,
	    worth: worth.worth
	  };
	});

/***/ },

/***/ 528:
515,

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports =  false ? require('./configureStore.dev') : __webpack_require__(530);

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(92);

	var _reduxThunk = __webpack_require__(441);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(506);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxLocalstorage = __webpack_require__(440);

	var _reduxLocalstorage2 = _interopRequireDefault(_reduxLocalstorage);

	var _localStorage = __webpack_require__(439);

	var _localStorage2 = _interopRequireDefault(_localStorage);

	var _reduxLocalstorageFilter = __webpack_require__(438);

	var _reduxLocalstorageFilter2 = _interopRequireDefault(_reduxLocalstorageFilter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore(initialState) {
	  var reducers = (0, _redux.compose)((0, _reduxLocalstorage.mergePersistedState)())(_reducers2.default);

	  var storage = (0, _redux.compose)((0, _reduxLocalstorageFilter2.default)(['answer', 'category', 'question', 'forms.survey']))((0, _localStorage2.default)(window.localStorage));

	  return (0, _redux.createStore)(reducers, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (0, _reduxLocalstorage2.default)(storage)));
	}

/***/ },

/***/ 531:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rand = rand;
	function rand(min, max) {
	  return min + Math.floor(Math.random() * (max - min));
	}

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(258)();
	// imports


	// module
	exports.push([module.id, ".ct-double-octave:after,.ct-major-eleventh:after,.ct-major-second:after,.ct-major-seventh:after,.ct-major-sixth:after,.ct-major-tenth:after,.ct-major-third:after,.ct-major-twelfth:after,.ct-minor-second:after,.ct-minor-seventh:after,.ct-minor-sixth:after,.ct-minor-third:after,.ct-octave:after,.ct-perfect-fifth:after,.ct-perfect-fourth:after,.ct-square:after{content:\"\";clear:both}.ct-label{fill:rgba(0,0,0,.4);color:rgba(0,0,0,.4);font-size:.75rem;line-height:1}.ct-chart-bar .ct-label,.ct-chart-line .ct-label{display:block;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.ct-label.ct-horizontal.ct-start{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-label.ct-horizontal.ct-end{-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-label.ct-vertical.ct-start{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:flex-end;-webkit-justify-content:flex-end;-ms-flex-pack:flex-end;justify-content:flex-end;text-align:right;text-anchor:end}.ct-label.ct-vertical.ct-end{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar .ct-label.ct-horizontal.ct-start{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;text-anchor:start}.ct-chart-bar .ct-label.ct-horizontal.ct-end{-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end{-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:flex-end;-webkit-justify-content:flex-end;-ms-flex-pack:flex-end;justify-content:flex-end;text-align:right;text-anchor:end}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:end}.ct-grid{stroke:rgba(0,0,0,.2);stroke-width:1px;stroke-dasharray:2px}.ct-point{stroke-width:10px;stroke-linecap:round}.ct-line{fill:none;stroke-width:4px}.ct-area{stroke:none;fill-opacity:.1}.ct-bar{fill:none;stroke-width:10px}.ct-slice-donut{fill:none;stroke-width:60px}.ct-series-a .ct-bar,.ct-series-a .ct-line,.ct-series-a .ct-point,.ct-series-a .ct-slice-donut{stroke:#d70206}.ct-series-a .ct-area,.ct-series-a .ct-slice-pie{fill:#d70206}.ct-series-b .ct-bar,.ct-series-b .ct-line,.ct-series-b .ct-point,.ct-series-b .ct-slice-donut{stroke:#f05b4f}.ct-series-b .ct-area,.ct-series-b .ct-slice-pie{fill:#f05b4f}.ct-series-c .ct-bar,.ct-series-c .ct-line,.ct-series-c .ct-point,.ct-series-c .ct-slice-donut{stroke:#f4c63d}.ct-series-c .ct-area,.ct-series-c .ct-slice-pie{fill:#f4c63d}.ct-series-d .ct-bar,.ct-series-d .ct-line,.ct-series-d .ct-point,.ct-series-d .ct-slice-donut{stroke:#d17905}.ct-series-d .ct-area,.ct-series-d .ct-slice-pie{fill:#d17905}.ct-series-e .ct-bar,.ct-series-e .ct-line,.ct-series-e .ct-point,.ct-series-e .ct-slice-donut{stroke:#453d3f}.ct-series-e .ct-area,.ct-series-e .ct-slice-pie{fill:#453d3f}.ct-series-f .ct-bar,.ct-series-f .ct-line,.ct-series-f .ct-point,.ct-series-f .ct-slice-donut{stroke:#59922b}.ct-series-f .ct-area,.ct-series-f .ct-slice-pie{fill:#59922b}.ct-series-g .ct-bar,.ct-series-g .ct-line,.ct-series-g .ct-point,.ct-series-g .ct-slice-donut{stroke:#0544d3}.ct-series-g .ct-area,.ct-series-g .ct-slice-pie{fill:#0544d3}.ct-series-h .ct-bar,.ct-series-h .ct-line,.ct-series-h .ct-point,.ct-series-h .ct-slice-donut{stroke:#6b0392}.ct-series-h .ct-area,.ct-series-h .ct-slice-pie{fill:#6b0392}.ct-series-i .ct-bar,.ct-series-i .ct-line,.ct-series-i .ct-point,.ct-series-i .ct-slice-donut{stroke:#f05b4f}.ct-series-i .ct-area,.ct-series-i .ct-slice-pie{fill:#f05b4f}.ct-series-j .ct-bar,.ct-series-j .ct-line,.ct-series-j .ct-point,.ct-series-j .ct-slice-donut{stroke:#dda458}.ct-series-j .ct-area,.ct-series-j .ct-slice-pie{fill:#dda458}.ct-series-k .ct-bar,.ct-series-k .ct-line,.ct-series-k .ct-point,.ct-series-k .ct-slice-donut{stroke:#eacf7d}.ct-series-k .ct-area,.ct-series-k .ct-slice-pie{fill:#eacf7d}.ct-series-l .ct-bar,.ct-series-l .ct-line,.ct-series-l .ct-point,.ct-series-l .ct-slice-donut{stroke:#86797d}.ct-series-l .ct-area,.ct-series-l .ct-slice-pie{fill:#86797d}.ct-series-m .ct-bar,.ct-series-m .ct-line,.ct-series-m .ct-point,.ct-series-m .ct-slice-donut{stroke:#b2c326}.ct-series-m .ct-area,.ct-series-m .ct-slice-pie{fill:#b2c326}.ct-series-n .ct-bar,.ct-series-n .ct-line,.ct-series-n .ct-point,.ct-series-n .ct-slice-donut{stroke:#6188e2}.ct-series-n .ct-area,.ct-series-n .ct-slice-pie{fill:#6188e2}.ct-series-o .ct-bar,.ct-series-o .ct-line,.ct-series-o .ct-point,.ct-series-o .ct-slice-donut{stroke:#a748ca}.ct-series-o .ct-area,.ct-series-o .ct-slice-pie{fill:#a748ca}.ct-square{display:block;position:relative;width:100%}.ct-square:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:100%}.ct-square:after{display:table}.ct-square>svg{display:block;position:absolute;top:0;left:0}.ct-minor-second{display:block;position:relative;width:100%}.ct-minor-second:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:93.75%}.ct-minor-second:after{display:table}.ct-minor-second>svg{display:block;position:absolute;top:0;left:0}.ct-major-second{display:block;position:relative;width:100%}.ct-major-second:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:88.8888888889%}.ct-major-second:after{display:table}.ct-major-second>svg{display:block;position:absolute;top:0;left:0}.ct-minor-third{display:block;position:relative;width:100%}.ct-minor-third:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:83.3333333333%}.ct-minor-third:after{display:table}.ct-minor-third>svg{display:block;position:absolute;top:0;left:0}.ct-major-third{display:block;position:relative;width:100%}.ct-major-third:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:80%}.ct-major-third:after{display:table}.ct-major-third>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fourth{display:block;position:relative;width:100%}.ct-perfect-fourth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:75%}.ct-perfect-fourth:after{display:table}.ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fifth{display:block;position:relative;width:100%}.ct-perfect-fifth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:66.6666666667%}.ct-perfect-fifth:after{display:table}.ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-sixth{display:block;position:relative;width:100%}.ct-minor-sixth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:62.5%}.ct-minor-sixth:after{display:table}.ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-golden-section{display:block;position:relative;width:100%}.ct-golden-section:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:61.804697157%}.ct-golden-section:after{content:\"\";display:table;clear:both}.ct-golden-section>svg{display:block;position:absolute;top:0;left:0}.ct-major-sixth{display:block;position:relative;width:100%}.ct-major-sixth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:60%}.ct-major-sixth:after{display:table}.ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-seventh{display:block;position:relative;width:100%}.ct-minor-seventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:56.25%}.ct-minor-seventh:after{display:table}.ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-seventh{display:block;position:relative;width:100%}.ct-major-seventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:53.3333333333%}.ct-major-seventh:after{display:table}.ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-octave{display:block;position:relative;width:100%}.ct-octave:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:50%}.ct-octave:after{display:table}.ct-octave>svg{display:block;position:absolute;top:0;left:0}.ct-major-tenth{display:block;position:relative;width:100%}.ct-major-tenth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:40%}.ct-major-tenth:after{display:table}.ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}.ct-major-eleventh{display:block;position:relative;width:100%}.ct-major-eleventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:37.5%}.ct-major-eleventh:after{display:table}.ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-twelfth{display:block;position:relative;width:100%}.ct-major-twelfth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:33.3333333333%}.ct-major-twelfth:after{display:table}.ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}.ct-double-octave{display:block;position:relative;width:100%}.ct-double-octave:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:25%}.ct-double-octave:after{display:table}.ct-double-octave>svg{display:block;position:absolute;top:0;left:0}", ""]);

	// exports


/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(258)();
	// imports


	// module
	exports.push([module.id, ".rc-slider {\n  position: relative;\n  height: 4px;\n  width: 100%;\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n  z-index: 1;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  z-index: 2;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle-active:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n  z-index: 3;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n  z-index: 1;\n}\n.rc-slider-dot {\n  position: absolute;\n  top: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot:first-child {\n  margin-left: -4px;\n}\n.rc-slider-dot:last-child {\n  margin-left: -4px;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 4;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip-hidden {\n  display: none;\n}\n.rc-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n", ""]);

	// exports


/***/ },

/***/ 535:
/***/ function(module, exports) {

	module.exports = {
		"AGE_OPTIONS": [
			"Age",
			"18",
			"19",
			"20",
			"30",
			"40",
			"40+"
		],
		"EDUCATION_OPTIONS": [
			"Education",
			"K-12",
			"Bachelors",
			"Masters",
			"PhD"
		],
		"EXPERIENCE_OPTIONS": [
			"Experience",
			"5 years",
			"10 years",
			"15 years"
		],
		"OCCUPATION_OPTIONS": [
			"Occupation",
			"Occupation 1",
			"Occupation 2",
			"Occupation 3"
		],
		"RACE_OPTIONS": [
			"Race",
			"White",
			"Hispanic",
			"Etc"
		],
		"SEX_OPTIONS": [
			"Sex",
			"M",
			"F",
			"Other"
		],
		"STATE_OPTIONS": [
			"",
			"Alabama",
			"Alaska",
			"Arizona",
			"Arkansas",
			"California",
			"Colorado",
			"Connecticut",
			"Delaware",
			"Florida",
			"Georgia",
			"Hawaii",
			"Idaho",
			"Illinois",
			"Indiana",
			"Iowa",
			"Kansas",
			"Kentucky",
			"Louisiana",
			"Maine",
			"Maryland",
			"Massachussetts",
			"Michigan",
			"Minnesota",
			"Mississippi",
			"Missouri",
			"Montana",
			"Nebraska",
			"Nevada",
			"New Hampshire",
			"New Jersey",
			"New Mexico",
			"New York",
			"North Carolina",
			"North Dakota",
			"Ohio",
			"Oklahoma",
			"Oregon",
			"Pennsylvania",
			"Rhode Island",
			"South Carolina",
			"South Dakota",
			"Tennessee",
			"Texas",
			"Utah",
			"Vermont",
			"Virginia",
			"Washington",
			"West Virginia",
			"Wisconsin",
			"Wyoming"
		]
	};

/***/ },

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(532);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./chartist.min.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./chartist.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(533);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1005:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }

});
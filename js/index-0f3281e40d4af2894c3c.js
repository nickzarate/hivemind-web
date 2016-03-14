webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(12);

	var _Root = __webpack_require__(449);

	var _Root2 = _interopRequireDefault(_Root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_Root2.default, document.getElementById('root'));

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reduxify;

	var _redux = __webpack_require__(85);

	var _reactRedux = __webpack_require__(205);

	/**
	 * Reduxifies a container.
	 *
	 * @param state     - The name of the desired state. The container will
	 *                    be given read-access to this state.
	 * @param actions   - An array of actions, or a single actionset. The container will
	 *                    be allowed to execute these actions.
	 * @param container - The container to be connected.
	 * @return the connected container
	 */
	function reduxify(_ref) {
	  var selector = _ref.selector;
	  var actions = _ref.actions;
	  var container = _ref.container;

	  var mapDispatchToProps = null;

	  if (actions) {
	    // the container will be provided actions
	    mapDispatchToProps = function mapDispatchToProps(dispatch) {
	      return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	      };
	    };
	  }

	  return (0, _reactRedux.connect)(selector, mapDispatchToProps)(container);
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

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.showModal = undefined;

	var _constants = __webpack_require__(27);

	var _reduxActions = __webpack_require__(73);

	var showModal = exports.showModal = (0, _reduxActions.createAction)(_constants.SHOW_MODAL, function (showModal) {
	  return showModal;
	});

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetTooltip = exports.setTarget = exports.setMessage = undefined;

	var _constants = __webpack_require__(27);

	var _reduxActions = __webpack_require__(73);

	var setMessage = exports.setMessage = (0, _reduxActions.createAction)(_constants.SET_TOOLTIP_MESSAGE, function (message) {
	  return message;
	});
	var setTarget = exports.setTarget = (0, _reduxActions.createAction)(_constants.SET_TOOLTIP_TARGET, function (target) {
	  return target;
	});
	var resetTooltip = exports.resetTooltip = (0, _reduxActions.createAction)(_constants.RESET_TOOLTIP);

/***/ },

/***/ 74:
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

/***/ 86:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var APP_ID = exports.APP_ID = 'JnIfTyw9Dl4Uq6MDo4uqnhOYwbWPmdrkBuP2NvnK';
	var JAVASCRIPT_KEY = exports.JAVASCRIPT_KEY = 'Q2ctnn44ja1FJ9UdSb6sZf4ucLydl8gRRnpIg3M5';

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(40);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tooltip = function (_React$Component) {
	  _inherits(Tooltip, _React$Component);

	  function Tooltip() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Tooltip);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Tooltip)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleHide = function () {
	      return _this.props.onHide();
	    }, _this.getTarget = function () {
	      return _reactDom2.default.findDOMNode(_this.props.target);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Tooltip, [{
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

	Tooltip.defaultProps = {
	  placement: 'top',
	  onHide: null
	};
	exports.default = Tooltip;

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.submitPage1 = submitPage1;
	exports.submitPage2 = submitPage2;
	exports.submitPage3 = submitPage3;
	exports.submitSurvey = submitSurvey;

	var _reactRouter = __webpack_require__(41);

	var _reactReduxForm = __webpack_require__(14);

	var _modal = __webpack_require__(47);

	var _parse = __webpack_require__(67);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(86);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function submitPage1() {
	  return function (dispatch, getState) {
	    // TODO: Check values of the survey form and set validity of surveyForm
	    dispatch(_reactReduxForm.actions.validateErrors('survey.stateOfResidence', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.gender', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.hispanic', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.isBornInUS', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.isEnglishPrimaryLanguage', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));

	    var _getState = getState();

	    var surveyForm = _getState.surveyForm;

	    if (surveyForm.valid) {
	      _reactRouter.browserHistory.push('/signup/2');
	    }
	  };
	}

	function submitPage2() {
	  return function (dispatch, getState) {
	    // TODO: Check values of the survey form and set validity of surveyForm
	    dispatch(_reactReduxForm.actions.validateErrors('survey.isLunchReducedPrice', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.birthdate.day', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      },
	      validDay: function validDay(val) {
	        return typeof val !== 'string' && (val < 1 || val > 31) && 'Please enter a valid day!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.birthdate.month', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      },
	      validMonth: function validMonth(val) {
	        return typeof val !== 'string' && (val < 1 || val > 12) && 'Please enter a valid month!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.birthdate.year', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.isStudent', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.isEmployed', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.annualSalary', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.workHoursPerWeek', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.yearsOfWorkExperienceOverall', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));

	    var _getState2 = getState();

	    var surveyForm = _getState2.surveyForm;

	    if (surveyForm.valid) {
	      _reactRouter.browserHistory.push('/signup/3');
	    }
	  };
	}

	function submitPage3() {
	  return function (dispatch, getState) {
	    // TODO: Check values of the survey form and set validity of surveyForm
	    dispatch(_reactReduxForm.actions.validateErrors('survey.yearsOfWorkExperienceInCurrentCareer', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.yearsOfCompletedSchooling', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.intendedYearsOfCompletedSchooling', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.highestEducationDegree', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.intendedHighestEducationDegree', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));

	    var _getState3 = getState();

	    var surveyForm = _getState3.surveyForm;

	    if (surveyForm.valid) {
	      _reactRouter.browserHistory.push('/signup/4');
	    }
	  };
	}

	function submitSurvey() {
	  return function (dispatch, getState) {
	    _parse2.default.initialize(_KEYCHAIN.APP_ID, _KEYCHAIN.JAVASCRIPT_KEY);
	    // TODO: Check values of the survey form and set validity of surveyForm
	    dispatch(_reactReduxForm.actions.validateErrors('survey.highSchoolGPA', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.collegeGPA', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.fathersEducation', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.fathersEducationIsGuess', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.mothersEducation', {
	      required: function required(val) {
	        return !val.length && 'Must answer!';
	      }
	    }));
	    dispatch(_reactReduxForm.actions.validateErrors('survey.mothersEducationIsGuess', {
	      required: function required(val) {
	        return typeof val === 'string' && 'Must answer!';
	      }
	    }));

	    var _getState4 = getState();

	    var surveyForm = _getState4.surveyForm;

	    if (surveyForm.valid) {
	      dispatch((0, _modal.showModal)(true));
	    }
	  };
	}

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var surveySelector = function surveySelector(state) {
	  return state.survey;
	};
	var surveyFormSelector = function surveyFormSelector(state) {
	  return state.surveyForm;
	};

	exports.default = (0, _reselect.createStructuredSelector)({
	  survey: surveySelector,
	  surveyForm: surveyFormSelector
	});

/***/ },

/***/ 152:
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

	var _answer = __webpack_require__(231);

	var _reactReduxForm = __webpack_require__(14);

	var _misc = __webpack_require__(492);

	var _reduxActions = __webpack_require__(73);

	var _parse = __webpack_require__(67);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(86);

	var _reactRouter = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addAnswers = exports.addAnswers = (0, _reduxActions.createAction)(_constants.ADD_ANSWERS, function (answers) {
	  return answers;
	});
	var addAnswerToRound = exports.addAnswerToRound = (0, _reduxActions.createAction)(_constants.ADD_ANSWER_TO_ROUND, function (savedAnswer) {
	  return savedAnswer;
	});
	var addOutcomes = exports.addOutcomes = (0, _reduxActions.createAction)(_constants.ADD_OUTCOMES, function (outcomes) {
	  return outcomes;
	});
	var addWinnings = exports.addWinnings = (0, _reduxActions.createAction)(_constants.ADD_WINNINGS, function (winnings) {
	  return winnings;
	});
	var incrementCurrentQuestion = exports.incrementCurrentQuestion = (0, _reduxActions.createAction)(_constants.INCREMENT_CURRENT_QUESTION);
	var resetCurrentQuestion = exports.resetCurrentQuestion = (0, _reduxActions.createAction)(_constants.RESET_CURRENT_QUESTION);
	var setCorrectAnswerIndices = exports.setCorrectAnswerIndices = (0, _reduxActions.createAction)(_constants.SET_CORRECT_ANSWER_INDICES, function (correctAnswerIndices) {
	  return correctAnswerIndices;
	});
	var setQuestion = exports.setQuestion = (0, _reduxActions.createAction)(_constants.SET_QUESTION, function (currentQuestion) {
	  return currentQuestion;
	});
	var setCurrentRound = exports.setCurrentRound = (0, _reduxActions.createAction)(_constants.SET_CURRENT_ROUND, function (currentRound) {
	  return currentRound;
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

	        estimatesArray.push(estimates[outcome]);
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

	    dispatch(_reactReduxForm.actions.reset('estimates'));

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
	      var selectedQuestion = {
	        covariateValues: question.get('covariateValues'),
	        objectId: question.id,
	        outcomes: question.get('outcomes')
	      };
	      dispatch((0, _answer.setAnswerSubmitted)(false));
	      dispatch(setQuestion(selectedQuestion));
	    });
	  };
	}

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.asyncLogin = asyncLogin;
	exports.asyncHandleSignup = asyncHandleSignup;
	exports.logOut = logOut;

	var _tooltip = __webpack_require__(48);

	var _parse = __webpack_require__(67);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(86);

	var _reactRouter = __webpack_require__(41);

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
	        dispatch((0, _tooltip.setMessage)('Error: ' + _error.code + ' ' + _error.message));
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
	      dispatch((0, _tooltip.setMessage)('All fields must be filled.'));
	      dispatch((0, _tooltip.setTarget)('email'));
	      return;
	    } else if (signup.password.length === 0) {
	      dispatch((0, _tooltip.setMessage)('All fields must be filled.'));
	      dispatch((0, _tooltip.setTarget)('password'));
	      return;
	    } else if (signup.passwordConfirm.length === 0) {
	      dispatch((0, _tooltip.setMessage)('All fields must be filled.'));
	      dispatch((0, _tooltip.setTarget)('passwordConfirm'));
	      return;
	    } else if (signup.password.length < 6) {
	      dispatch((0, _tooltip.setMessage)('Password must be at least 6 characters long.'));
	      dispatch((0, _tooltip.setTarget)('password'));
	      return;
	    } else if (signup.password !== signup.passwordConfirm) {
	      dispatch((0, _tooltip.setMessage)('Passwords do not match, try again.'));
	      dispatch((0, _tooltip.setTarget)('passwordConfirm'));
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
	        dispatch((0, _tooltip.setMessage)('Error: ' + _error2.code + ' ' + _error2.message));
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

/***/ 162:
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

/***/ 230:
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.withdraw = exports.setBinValues = exports.setBank = exports.setAnswerSubmitted = exports.deposit = undefined;
	exports.handleDeposit = handleDeposit;

	var _constants = __webpack_require__(27);

	var _reduxActions = __webpack_require__(73);

	var deposit = exports.deposit = (0, _reduxActions.createAction)(_constants.DEPOSIT, function (binsIndex, index) {
	  return { binsIndex: binsIndex, index: index };
	});
	var setAnswerSubmitted = exports.setAnswerSubmitted = (0, _reduxActions.createAction)(_constants.SET_ANSWER_SUBMITTED, function (submitted) {
	  return submitted;
	});
	var setBank = exports.setBank = (0, _reduxActions.createAction)(_constants.SET_BANK, function (bank) {
	  return bank;
	});
	var setBinValues = exports.setBinValues = (0, _reduxActions.createAction)(_constants.SET_BIN_VALUES, function (binValues) {
	  return binValues;
	});
	var withdraw = exports.withdraw = (0, _reduxActions.createAction)(_constants.WITHDRAW, function (bankIndex) {
	  return bankIndex;
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

/***/ 232:
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

	var _modal = __webpack_require__(47);

	var _tooltip = __webpack_require__(48);

	var _reduxActions = __webpack_require__(73);

	var _parse = __webpack_require__(67);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(86);

	var _reactRouter = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var setCategoryNames = exports.setCategoryNames = (0, _reduxActions.createAction)(_constants.SET_CATEGORY_NAMES, function (categoryNames) {
	  return categoryNames;
	});
	var setCategory = exports.setCategory = (0, _reduxActions.createAction)(_constants.SET_CATEGORY, function (category) {
	  return category;
	});
	var setRange = exports.setRange = (0, _reduxActions.createAction)(_constants.SET_RANGE, function (range, index) {
	  return { range: range, index: index };
	});
	var setRanges = exports.setRanges = (0, _reduxActions.createAction)(_constants.SET_RANGES, function (ranges) {
	  return ranges;
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
	        var selectedCategory = {
	          categorySurveyInstructions: category.get('categorySurveyInstructions'),
	          covariateNames: category.get('covariateNames'),
	          covariateRanges: category.get('covariateRanges'),
	          discrete: category.get('discrete'),
	          index: category.get('index'),
	          instructions: category.get('instructions'),
	          name: category.get('name'),
	          numBins: category.get('numBins'),
	          outcomeNames: category.get('outcomeNames'),
	          outcomeRanges: category.get('outcomeRanges'),
	          pointsPerToken: category.get('pointsPerToken'),
	          questionInstructions: category.get('questionInstructions'),
	          questionsPerRound: category.get('questionsPerRound'),
	          tokens: category.get('tokens')
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
	    var discrete = _getState$category.discrete;

	    // Validation

	    for (var i = 0; i < outcomeNames.length; i++) {
	      if (!discrete[i] && !ranges[outcomeNames[i]]) {
	        dispatch((0, _tooltip.setMessage)('All fields must be filled in.'));
	        dispatch((0, _tooltip.setTarget)(outcomeNames[i]));
	        return;
	      }
	    }
	    for (var outcomeName in ranges) {
	      if (isNaN(ranges[outcomeName].lower) || isNaN(ranges[outcomeName].upper)) {
	        dispatch((0, _tooltip.setMessage)('All fields must be filled in.'));
	        dispatch((0, _tooltip.setTarget)(outcomeName));
	        return;
	      }
	    }
	    for (var _outcomeName in ranges) {
	      if (ranges[_outcomeName].lower >= ranges[_outcomeName].upper) {
	        dispatch((0, _tooltip.setMessage)(_outcomeName + ' range has a smaller upper bound than lower bound, try again.'));
	        dispatch((0, _tooltip.setTarget)(_outcomeName));
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
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = covariateNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var covariateName = _step2.value;

	        if (isNaN(covariates[covariateName])) {
	          dispatch((0, _tooltip.setMessage)('All fields must be filled in.'));
	          dispatch((0, _tooltip.setTarget)(covariateName));
	          return;
	        }
	        covariateValues.push(covariates[covariateName]);
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
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	      for (var _iterator3 = categories[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var category = _step3.value;

	        var unlocked = false;
	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;

	        try {
	          for (var _iterator4 = _parse2.default.User.current().get('unlockedCategories')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var name = _step4.value;

	            if (name === category.get('name')) {
	              unlocked = true;
	            }
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

	        dispatch(setUnlocked(unlocked, category.get('index')));
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
	  };
	}

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _answer = __webpack_require__(231);

	var _round = __webpack_require__(152);

	var _bins = __webpack_require__(474);

	var _bins2 = _interopRequireDefault(_bins);

	var _Bins = __webpack_require__(414);

	var _Bins2 = _interopRequireDefault(_Bins);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BinsContainer = function (_React$Component) {
	  _inherits(BinsContainer, _React$Component);

	  function BinsContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, BinsContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BinsContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (index) {
	      return _this.props.actions.handleDeposit(_this.props.binsIndex, index);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(BinsContainer, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.props.actions.setCorrectAnswerIndices(nextProps.correctAnswerIndices);
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
	exports.default = (0, _reduxify2.default)({
	  selector: _bins2.default,
	  actions: { handleDeposit: _answer.handleDeposit, setCorrectAnswerIndices: _round.setCorrectAnswerIndices },
	  container: BinsContainer
	});

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _RangePreview = __webpack_require__(427);

	var _RangePreview2 = _interopRequireDefault(_RangePreview);

	var _round = __webpack_require__(152);

	var _rangePreview = __webpack_require__(487);

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
	        discrete: this.props.discrete,
	        tooltipMessage: this.props.tooltipMessage,
	        tooltipTarget: this.props.tooltipTarget
	      });
	    }
	  }]);

	  return RangePreviewContainer;
	}(_react2.default.Component);

	exports.default = (0, _reduxify2.default)({
	  selector: _rangePreview2.default,
	  actions: { initializeQuestion: _round.initializeQuestion },
	  container: RangePreviewContainer
	});

/***/ },

/***/ 235:
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

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var rangesSelector = function rangesSelector(state) {
	  return state.forms.ranges;
	};

	exports.default = (0, _reselect.createSelector)(categorySelector, rangesSelector, function (category, ranges) {
	  return {
	    worth: getWorth(category.discrete, category.pointsPerToken, category.outcomeRanges, category.outcomeNames, ranges)
	  };
	});


	function getWorth(discrete, pointsPerToken, outcomeRanges, outcomeNames, ranges) {
	  var worth = [];
	  for (var i = 0; i < pointsPerToken.length; i++) {
	    var temp = discrete[i] ? pointsPerToken[i] : 0;

	    if (!discrete[i] && ranges[outcomeNames[i]] && ranges[outcomeNames[i]].lower >= 0 && ranges[outcomeNames[i]].upper > 0) {
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

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

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

	var _reduxActions = __webpack_require__(73);

	var _parse = __webpack_require__(67);

	var _parse2 = _interopRequireDefault(_parse);

	var _KEYCHAIN = __webpack_require__(86);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setData = exports.setData = (0, _reduxActions.createAction)(_constants.SET_DATA, function (data) {
	  return data;
	});
	var clearWinnings = exports.clearWinnings = (0, _reduxActions.createAction)(_constants.CLEAR_WINNINGS);
	var setCovariateData = exports.setCovariateData = (0, _reduxActions.createAction)(_constants.SET_COVARIATE_DATA, function (covariateData) {
	  return covariateData;
	});
	var setPhi = exports.setPhi = (0, _reduxActions.createAction)(_constants.SET_PHI, function (phi) {
	  return phi;
	});
	var setSeries = exports.setSeries = (0, _reduxActions.createAction)(_constants.SET_SERIES, function (index, data) {
	  return { index: index, data: data };
	});
	var setOutcomes = exports.setOutcomes = (0, _reduxActions.createAction)(_constants.SET_OUTCOMES, function (outcomes) {
	  return outcomes;
	});
	var setOutcomeIndex = exports.setOutcomeIndex = (0, _reduxActions.createAction)(_constants.SET_OUTCOME_INDEX, function (outcomeIndex) {
	  return outcomeIndex;
	});
	var addPhi = exports.addPhi = (0, _reduxActions.createAction)(_constants.ADD_PHI, function (phi) {
	  return phi;
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
	      var predictions = [];
	      var covariates = [];
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

	      $.ajax({
	        url: '/api/v1/get_phi',
	        method: 'POST',
	        data: JSON.stringify({
	          covariates: covariates,
	          p: predictions
	        }),
	        dataType: 'json',
	        contentType: 'application/json; charset=utf-8',
	        success: function success(response) {
	          return dispatch(addPhi(response.phi));
	        }
	      });
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(268)))

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(41);

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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.props.onLogin },
	          'Log In'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/signup' },
	          _react2.default.createElement(
	            'button',
	            null,
	            'Sign Up'
	          )
	        )
	      );
	    }
	  }]);

	  return Bins;
	}(_react2.default.Component);

	exports.default = Bins;

/***/ },

/***/ 414:
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
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            'button',
	            { onClick: _this3.handleClick(index) },
	            text,
	            _this3.binValue(index)
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
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.renderBins()
	        )
	      );
	    }
	  }]);

	  return Bins;
	}(_react2.default.Component);

	exports.default = Bins;

/***/ },

/***/ 415:
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
	            'button',
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

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(40);

	var _RangePreview = __webpack_require__(234);

	var _RangePreview2 = _interopRequireDefault(_RangePreview);

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
	            'button',
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

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _parser = __webpack_require__(74);

	var _reactReduxForm = __webpack_require__(14);

	var _Tooltip = __webpack_require__(87);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

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
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.instructions,
	        _react2.default.createElement(_Tooltip2.default, { message: this.props.tooltipMessage, target: this[this.props.tooltipTarget] }),
	        _react2.default.createElement(
	          _reactReduxForm.Form,
	          { ref: function ref(_ref2) {
	              return _this2.form = _ref2;
	            }, model: 'covariates' },
	          this.props.covariateNames.map(function (covariateName, index) {
	            return _react2.default.createElement(
	              _reactReduxForm.Field,
	              {
	                key: index,
	                model: 'covariates.' + covariateName,
	                parser: _parser.toNum,
	                ref: function ref(_ref) {
	                  return _this2[covariateName] = _ref;
	                }
	              },
	              _react2.default.createElement('input', {
	                type: 'number',
	                placeholder: covariateName
	              })
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return CategorySurveyForm;
	}(_react2.default.Component);

	exports.default = CategorySurveyForm;

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(14);

	var _parser = __webpack_require__(74);

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
	        { model: 'estimates' },
	        _react2.default.createElement(
	          _reactReduxForm.Field,
	          {
	            model: 'estimates.' + this.props.outcomeName,
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

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(14);

	var _Tooltip = __webpack_require__(87);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginForm = function (_React$Component) {
	  _inherits(LoginForm, _React$Component);

	  function LoginForm() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LoginForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LoginForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.form = function (ref) {
	      return _this.form = ref;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LoginForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Tooltip2.default, { target: this[this.props.tooltipTarget], message: this.props.tooltipMessage }),
	        _react2.default.createElement(
	          _reactReduxForm.Form,
	          { ref: this.form, onSubmit: this.props.onSubmit, model: 'login' },
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
	            'button',
	            { type: 'submit' },
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

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(14);

	var _parser = __webpack_require__(74);

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

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(14);

	var _Tooltip = __webpack_require__(87);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

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
	        null,
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
	            'button',
	            { type: 'submit' },
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

/***/ 422:
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
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.props.instructions
	        )
	      );
	    }
	  }]);

	  return Instructions;
	}(_react2.default.Component);

	exports.default = Instructions;

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactChartist = __webpack_require__(352);

	var _reactChartist2 = _interopRequireDefault(_reactChartist);

	__webpack_require__(920);

	var _Sliders = __webpack_require__(429);

	var _Sliders2 = _interopRequireDefault(_Sliders);

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
	            'button',
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

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(40);

	var _LoginForm = __webpack_require__(439);

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

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Bins = __webpack_require__(233);

	var _Bins2 = _interopRequireDefault(_Bins);

	var _EstimateForm = __webpack_require__(418);

	var _EstimateForm2 = _interopRequireDefault(_EstimateForm);

	var _Tooltip = __webpack_require__(87);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

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
	    key: 'renderBody',
	    value: function renderBody() {
	      var _this2 = this;

	      return this.props.outcomeNames.map(function (outcomeName, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(_EstimateForm2.default, {
	            outcomeName: outcomeName,
	            estimates: _this2.props.estimates,
	            ref: function ref(_ref) {
	              return _this2[outcomeName] = _ref;
	            }
	          }),
	          _react2.default.createElement(_Bins2.default, {
	            binsIndex: index
	          })
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
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
	          this.renderBody()
	        ),
	        _react2.default.createElement(
	          'button',
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

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(40);

	var _RangePreview = __webpack_require__(234);

	var _RangePreview2 = _interopRequireDefault(_RangePreview);

	var _CategorySurveyForm = __webpack_require__(438);

	var _CategorySurveyForm2 = _interopRequireDefault(_CategorySurveyForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangeModal = function (_React$Component) {
	  _inherits(RangeModal, _React$Component);

	  function RangeModal() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, RangeModal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RangeModal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function () {
	      return _this.props.unlocked ? _this.props.onStart() : _this.props.onSubmit();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
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
	          this.props.unlocked ? 'Instructions' : 'Unlock Category'
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
	            'button',
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

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Bins = __webpack_require__(233);

	var _Bins2 = _interopRequireDefault(_Bins);

	var _RangeForm = __webpack_require__(440);

	var _RangeForm2 = _interopRequireDefault(_RangeForm);

	var _Tooltip = __webpack_require__(87);

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
	          !_this2.props.discrete[index] && _react2.default.createElement(_RangeForm2.default, {
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

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(40);

	var _SignupForm = __webpack_require__(441);

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

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(921);

	var _rcSlider = __webpack_require__(334);

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

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(41);

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
	          _reactRouter.Link,
	          { to: '/signup/1' },
	          _react2.default.createElement(
	            'button',
	            { onClick: this.props.onClick },
	            'Continue'
	          )
	        )
	      );
	    }
	  }]);

	  return SurveyInstructions;
	}(_react2.default.Component);

	exports.default = SurveyInstructions;

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _survey = __webpack_require__(586);

	var _survey2 = _interopRequireDefault(_survey);

	var _reactReduxForm = __webpack_require__(14);

	var _reactBootstrap = __webpack_require__(40);

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

	    _this.handleChange = function (val) {
	      return function () {
	        return _this.props.onCheckChange(val);
	      };
	    };

	    _this.displayErrors = _this.displayErrors.bind(_this);
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
	    key: 'render',
	    value: function render() {
	      var race = this.props.survey.race;

	      return _react2.default.createElement(
	        _reactReduxForm.Form,
	        { onSubmit: this.props.onSubmit, model: 'survey' },
	        _react2.default.createElement(
	          SelectField,
	          { model: 'survey.stateOfResidence' },
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
	          { model: 'survey.gender' },
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
	          { model: 'survey.hispanic' },
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
	          { model: 'survey.race.other' },
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'Other Race (Fill in)', placeholder: 'Other Race', value: race.other })
	        ),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'survey.isBornInUS' },
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
	          { model: 'survey.isEnglishPrimaryLanguage' },
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
	          'button',
	          { type: 'submit' },
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyPage1;
	}(_react2.default.Component);

	exports.default = SurveyPage1;

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(14);

	var _reactBootstrap = __webpack_require__(40);

	var _parser = __webpack_require__(74);

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
	        { onSubmit: this.props.onSubmit, model: 'survey' },
	        _react2.default.createElement(
	          RadioField,
	          { model: 'survey.isLunchReducedPrice' },
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
	          { model: 'survey.birthdate.month', parser: _parser.toNum },
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'MM', value: survey.birthdate.month })
	        ),
	        this.displayErrors('birthdate.month'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'survey.birthdate.day', parser: _parser.toNum },
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'DD', value: survey.birthdate.day })
	        ),
	        this.displayErrors('birthdate.day'),
	        _react2.default.createElement(
	          TextField,
	          { model: 'survey.birthdate.year', parser: _parser.toNum },
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'YYYY', value: survey.birthdate.year })
	        ),
	        this.displayErrors('birthdate.year'),
	        _react2.default.createElement(
	          RadioField,
	          { model: 'survey.isStudent' },
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
	          { model: 'survey.isEmployed' },
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
	          { model: 'survey.annualSalary', parser: _parser.toNum },
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
	          { model: 'survey.workHoursPerWeek', parser: _parser.toNum },
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
	          { model: 'survey.yearsOfWorkExperienceOverall', parser: _parser.toNum },
	          _react2.default.createElement(
	            'label',
	            null,
	            'How many years of work experience do you have overall (counting all time employed)?'
	          ),
	          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', placeholder: 'Years', value: survey.yearsOfWorkExperienceOverall })
	        ),
	        this.displayErrors('yearsOfWorkExperienceOverall'),
	        _react2.default.createElement(
	          'button',
	          { type: 'submit' },
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyPage2;
	}(_react2.default.Component);

	exports.default = SurveyPage2;

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(14);

	var _reactBootstrap = __webpack_require__(40);

	var _parser = __webpack_require__(74);

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
	        { onSubmit: this.props.onSubmit, model: 'survey' },
	        _react2.default.createElement(
	          TextField,
	          { model: 'survey.yearsOfWorkExperienceInCurrentCareer', parser: _parser.toNum },
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
	          { model: 'survey.yearsOfCompletedSchooling', parser: _parser.toNum },
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
	          { model: 'survey.intendedYearsOfCompletedSchooling', parser: _parser.toNum },
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
	          { model: 'survey.highestEducationDegree' },
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
	          { model: 'survey.intendedHighestEducationDegree' },
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
	          'button',
	          { type: 'submit' },
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyPage3;
	}(_react2.default.Component);

	exports.default = SurveyPage3;

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactReduxForm = __webpack_require__(14);

	var _reactBootstrap = __webpack_require__(40);

	var _parser = __webpack_require__(74);

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

	    _this.handleChange = function (val) {
	      return function () {
	        return _this.props.onCheckChange(val);
	      };
	    };

	    _this.displayErrors = _this.displayErrors.bind(_this);
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
	    key: 'render',
	    value: function render() {
	      var survey = this.props.survey;

	      return _react2.default.createElement(
	        _reactReduxForm.Form,
	        { onSubmit: this.props.onSubmit, model: 'survey' },
	        _react2.default.createElement(
	          TextField,
	          { model: 'survey.highSchoolGPA', parser: _parser.toNum },
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
	          { model: 'survey.collegeGPA', parser: _parser.toNum },
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
	          { model: 'survey.fathersEducation' },
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
	          { model: 'survey.mothersEducation' },
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
	          'button',
	          { type: 'submit' },
	          'Continue'
	        )
	      );
	    }
	  }]);

	  return SurveyPage4;
	}(_react2.default.Component);

	exports.default = SurveyPage4;

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _modal = __webpack_require__(47);

	var _AccessButtons = __webpack_require__(413);

	var _AccessButtons2 = _interopRequireDefault(_AccessButtons);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccessButtonsContainer = function (_React$Component) {
	  _inherits(AccessButtonsContainer, _React$Component);

	  function AccessButtonsContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, AccessButtonsContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AccessButtonsContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleLogin = function () {
	      return _this.props.actions.showModal(true);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(AccessButtonsContainer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AccessButtons2.default, {
	        onLogin: this.handleLogin
	      });
	    }
	  }]);

	  return AccessButtonsContainer;
	}(_react2.default.Component);

	exports.default = (0, _reduxify2.default)({
	  actions: { showModal: _modal.showModal },
	  container: AccessButtonsContainer
	});

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _home = __webpack_require__(232);

	var _categories = __webpack_require__(475);

	var _categories2 = _interopRequireDefault(_categories);

	var _Categories = __webpack_require__(415);

	var _Categories2 = _interopRequireDefault(_Categories);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CategoriesContainer = function (_React$Component) {
	  _inherits(CategoriesContainer, _React$Component);

	  function CategoriesContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, CategoriesContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CategoriesContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (categoryName) {
	      return _this.props.actions.asyncHandleCategoryChoice(categoryName);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(CategoriesContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.asyncGetCategoryNames();
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

	exports.default = (0, _reduxify2.default)({
	  selector: _categories2.default,
	  actions: { asyncHandleCategoryChoice: _home.asyncHandleCategoryChoice, asyncGetCategoryNames: _home.asyncGetCategoryNames },
	  container: CategoriesContainer
	});

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _ChangeRangeModal = __webpack_require__(416);

	var _ChangeRangeModal2 = _interopRequireDefault(_ChangeRangeModal);

	var _modal = __webpack_require__(47);

	var _changeRangeModal = __webpack_require__(476);

	var _changeRangeModal2 = _interopRequireDefault(_changeRangeModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChangeRangeModalContainer = function (_React$Component) {
	  _inherits(ChangeRangeModalContainer, _React$Component);

	  function ChangeRangeModalContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ChangeRangeModalContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ChangeRangeModalContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleHide = function () {
	      return _this.props.actions.showModal(false);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ChangeRangeModalContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
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

	exports.default = (0, _reduxify2.default)({
	  selector: _changeRangeModal2.default,
	  actions: { showModal: _modal.showModal },
	  container: ChangeRangeModalContainer
	});

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _CategorySurveyForm = __webpack_require__(417);

	var _CategorySurveyForm2 = _interopRequireDefault(_CategorySurveyForm);

	var _reactReduxForm = __webpack_require__(14);

	var _tooltip = __webpack_require__(48);

	var _categorySurvey = __webpack_require__(478);

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
	        instructions: this.props.instructions,
	        covariateNames: this.props.covariateNames,
	        tooltipMessage: this.props.tooltipMessage,
	        tooltipTarget: this.props.tooltipTarget
	      });
	    }
	  }]);

	  return CategorySurveyFormContainer;
	}(_react2.default.Component);

	exports.default = (0, _reduxify2.default)({
	  selector: _categorySurvey2.default,
	  actions: { resetTooltip: _tooltip.resetTooltip, reset: _reactReduxForm.actions.reset },
	  container: CategorySurveyFormContainer
	});

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _LoginForm = __webpack_require__(419);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	var _user = __webpack_require__(153);

	var _tooltip = __webpack_require__(48);

	var _reactReduxForm = __webpack_require__(14);

	var _login = __webpack_require__(480);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginFormContainer = function (_React$Component) {
	  _inherits(LoginFormContainer, _React$Component);

	  function LoginFormContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LoginFormContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LoginFormContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleSubmit = function () {
	      return _this.props.actions.asyncLogin();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LoginFormContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.setMessage('');
	      this.props.actions.setTarget('');
	      this.props.actions.reset('login');
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

	exports.default = (0, _reduxify2.default)({
	  selector: _login2.default,
	  actions: { asyncLogin: _user.asyncLogin, setMessage: _tooltip.setMessage, setTarget: _tooltip.setTarget, reset: _reactReduxForm.actions.reset },
	  container: LoginFormContainer
	});

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _RangeForm = __webpack_require__(420);

	var _RangeForm2 = _interopRequireDefault(_RangeForm);

	var _tooltip = __webpack_require__(48);

	var _range = __webpack_require__(481);

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

	exports.default = (0, _reduxify2.default)({
	  selector: _range2.default,
	  actions: { resetTooltip: _tooltip.resetTooltip },
	  container: RangeFormContainer
	});

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _SignupForm = __webpack_require__(421);

	var _SignupForm2 = _interopRequireDefault(_SignupForm);

	var _reactReduxForm = __webpack_require__(14);

	var _user = __webpack_require__(153);

	var _tooltip = __webpack_require__(48);

	var _signup = __webpack_require__(482);

	var _signup2 = _interopRequireDefault(_signup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignupFormContainer = function (_React$Component) {
	  _inherits(SignupFormContainer, _React$Component);

	  function SignupFormContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SignupFormContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SignupFormContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleSubmit = function () {
	      return _this.props.actions.asyncHandleSignup();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SignupFormContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.setMessage('');
	      this.props.actions.setTarget('');
	      this.props.actions.reset('signup');
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

	exports.default = (0, _reduxify2.default)({
	  selector: _signup2.default,
	  actions: { asyncHandleSignup: _user.asyncHandleSignup, setMessage: _tooltip.setMessage, setTarget: _tooltip.setTarget, reset: _reactReduxForm.actions.reset },
	  container: SignupFormContainer
	});

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _instructions = __webpack_require__(483);

	var _instructions2 = _interopRequireDefault(_instructions);

	var _Instructions = __webpack_require__(422);

	var _Instructions2 = _interopRequireDefault(_Instructions);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

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
	        covariateNames: this.props.covariateNames,
	        instructions: this.props.instructions
	      });
	    }
	  }]);

	  return InstructionsContainer;
	}(_react2.default.Component);

	exports.default = (0, _reduxify2.default)({
	  selector: _instructions2.default,
	  container: InstructionsContainer
	});

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lineCharts = __webpack_require__(484);

	var _lineCharts2 = _interopRequireDefault(_lineCharts);

	var _stats = __webpack_require__(412);

	var _LineCharts = __webpack_require__(423);

	var _LineCharts2 = _interopRequireDefault(_LineCharts);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

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

	exports.default = (0, _reduxify2.default)({
	  selector: _lineCharts2.default,
	  actions: { asyncGetPhis: _stats.asyncGetPhis, getData: _stats.getData, getCovariateData: _stats.getCovariateData,
	    updateCovariateData: _stats.updateCovariateData, setOutcomeIndex: _stats.setOutcomeIndex, clearWinnings: _stats.clearWinnings },
	  container: LineChartsContainer
	});

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _LoginModal = __webpack_require__(424);

	var _LoginModal2 = _interopRequireDefault(_LoginModal);

	var _modal = __webpack_require__(47);

	var _loginModal = __webpack_require__(485);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginModalContainer = function (_React$Component) {
	  _inherits(LoginModalContainer, _React$Component);

	  function LoginModalContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LoginModalContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LoginModalContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleHide = function () {
	      _this.props.actions.showModal(false);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LoginModalContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
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

	exports.default = (0, _reduxify2.default)({
	  selector: _loginModal2.default,
	  actions: { showModal: _modal.showModal },
	  container: LoginModalContainer
	});

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _QuestionBody = __webpack_require__(425);

	var _QuestionBody2 = _interopRequireDefault(_QuestionBody);

	var _tooltip = __webpack_require__(48);

	var _modal = __webpack_require__(47);

	var _estimates = __webpack_require__(479);

	var _estimates2 = _interopRequireDefault(_estimates);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionBodyContainer = function (_React$Component) {
	  _inherits(QuestionBodyContainer, _React$Component);

	  function QuestionBodyContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, QuestionBodyContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(QuestionBodyContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleHide = function () {
	      return _this.props.actions.resetTooltip();
	    }, _this.handleClick = function () {
	      return _this.props.actions.showModal(true);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(QuestionBodyContainer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_QuestionBody2.default, {
	        outcomeNames: this.props.outcomeNames,
	        estimates: this.props.estimates,
	        tooltipMessage: this.props.tooltipMessage,
	        tooltipTarget: this.props.tooltipTarget,
	        onHide: this.handleHide,
	        onClick: this.handleClick
	      });
	    }
	  }]);

	  return QuestionBodyContainer;
	}(_react2.default.Component);

	exports.default = (0, _reduxify2.default)({
	  selector: _estimates2.default,
	  actions: { resetTooltip: _tooltip.resetTooltip, showModal: _modal.showModal },
	  container: QuestionBodyContainer
	});

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _RangeModal = __webpack_require__(426);

	var _RangeModal2 = _interopRequireDefault(_RangeModal);

	var _home = __webpack_require__(232);

	var _modal = __webpack_require__(47);

	var _rangeModal = __webpack_require__(486);

	var _rangeModal2 = _interopRequireDefault(_rangeModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RangeModalContainer = function (_React$Component) {
	  _inherits(RangeModalContainer, _React$Component);

	  function RangeModalContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, RangeModalContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RangeModalContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleHide = function () {
	      return _this.props.actions.showModal(false);
	    }, _this.handleStart = function () {
	      return _this.props.actions.handleStart();
	    }, _this.handleSubmit = function () {
	      return _this.props.actions.handleSurveySubmission();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(RangeModalContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.actions.showModal(false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_RangeModal2.default, {
	        show: this.props.showModal,
	        onStart: this.handleStart,
	        onSubmit: this.handleSubmit,
	        onHide: this.handleHide,
	        unlocked: this.props.unlocked
	      });
	    }
	  }]);

	  return RangeModalContainer;
	}(_react2.default.Component);

	exports.default = (0, _reduxify2.default)({
	  selector: _rangeModal2.default,
	  actions: { showModal: _modal.showModal, handleSurveySubmission: _home.handleSurveySubmission, handleStart: _home.handleStart },
	  container: RangeModalContainer
	});

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(205);

	var _reactRouter = __webpack_require__(41);

	var _reactRouterRedux = __webpack_require__(206);

	var _Routes = __webpack_require__(448);

	var _Routes2 = _interopRequireDefault(_Routes);

	var _configureStore = __webpack_require__(490);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _configureStore2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	exports.default = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_Routes2.default, { history: history })
	);

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Routes;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(41);

	var _Landing = __webpack_require__(459);

	var _Landing2 = _interopRequireDefault(_Landing);

	var _Signup = __webpack_require__(463);

	var _Signup2 = _interopRequireDefault(_Signup);

	var _Home = __webpack_require__(458);

	var _Home2 = _interopRequireDefault(_Home);

	var _Round = __webpack_require__(462);

	var _Round2 = _interopRequireDefault(_Round);

	var _Question = __webpack_require__(461);

	var _Question2 = _interopRequireDefault(_Question);

	var _Stats = __webpack_require__(464);

	var _Stats2 = _interopRequireDefault(_Stats);

	var _NotFound = __webpack_require__(460);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Page = __webpack_require__(452);

	var _Page2 = _interopRequireDefault(_Page);

	var _Page3 = __webpack_require__(453);

	var _Page4 = _interopRequireDefault(_Page3);

	var _Page5 = __webpack_require__(454);

	var _Page6 = _interopRequireDefault(_Page5);

	var _Page7 = __webpack_require__(455);

	var _Page8 = _interopRequireDefault(_Page7);

	var _Instructions = __webpack_require__(430);

	var _Instructions2 = _interopRequireDefault(_Instructions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Pages */
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
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
	    )
	  );
	}

	/* Components */


	/* Containers */

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(922);

	module.exports =  false ? require('./Root.dev') : __webpack_require__(447); /* global __DEV__ */

	/* Global Styles */

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

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _round = __webpack_require__(152);

	var _tooltip = __webpack_require__(48);

	var _round2 = __webpack_require__(488);

	var _round3 = _interopRequireDefault(_round2);

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
	            this.props.actions.setMessage('Make a guess!');
	            this.props.actions.setTarget(outcomeName);
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
	          'button',
	          { onClick: this.handleSubmit },
	          'Submit Question'
	        )
	      );
	    }
	  }]);

	  return Round;
	}(_react2.default.Component);

	exports.default = (0, _reduxify2.default)({
	  selector: _round3.default,
	  actions: { asyncHandleSubmit: _round.asyncHandleSubmit, asyncAwardPoints: _round.asyncAwardPoints, asyncCreateRound: _round.asyncCreateRound,
	    pullQuestion: _round.pullQuestion, initializeQuestion: _round.initializeQuestion, setMessage: _tooltip.setMessage, setTarget: _tooltip.setTarget },
	  container: Round
	});

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

	var _modal = __webpack_require__(47);

	var _signupModal = __webpack_require__(489);

	var _signupModal2 = _interopRequireDefault(_signupModal);

	var _SignupModal = __webpack_require__(428);

	var _SignupModal2 = _interopRequireDefault(_SignupModal);

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignupModalContainer = function (_React$Component) {
	  _inherits(SignupModalContainer, _React$Component);

	  function SignupModalContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SignupModalContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SignupModalContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleHide = function () {
	      return _this.props.actions.showModal(false);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SignupModalContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
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

	exports.default = (0, _reduxify2.default)({
	  selector: _signupModal2.default,
	  actions: { showModal: _modal.showModal },
	  container: SignupModalContainer
	});

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

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _Page = __webpack_require__(431);

	var _Page2 = _interopRequireDefault(_Page);

	var _survey = __webpack_require__(107);

	var _survey2 = __webpack_require__(108);

	var _survey3 = _interopRequireDefault(_survey2);

	var _reactReduxForm = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyPage1Container = function (_React$Component) {
	  _inherits(SurveyPage1Container, _React$Component);

	  function SurveyPage1Container() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SurveyPage1Container);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SurveyPage1Container)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleSubmit = function () {
	      return _this.props.actions.submitPage1();
	    }, _this.handleCheckChange = function (val) {
	      return _this.props.actions.change('survey.race.' + val, !_this.props.survey.race[val]);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SurveyPage1Container, [{
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

	exports.default = (0, _reduxify2.default)({
	  selector: _survey3.default,
	  actions: { submitPage1: _survey.submitPage1, change: _reactReduxForm.actions.change },
	  container: SurveyPage1Container
	});

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

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _Page = __webpack_require__(432);

	var _Page2 = _interopRequireDefault(_Page);

	var _survey = __webpack_require__(107);

	var _survey2 = __webpack_require__(108);

	var _survey3 = _interopRequireDefault(_survey2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyPage2Container = function (_React$Component) {
	  _inherits(SurveyPage2Container, _React$Component);

	  function SurveyPage2Container() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SurveyPage2Container);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SurveyPage2Container)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleSubmit = function () {
	      return _this.props.actions.submitPage2();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SurveyPage2Container, [{
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

	exports.default = (0, _reduxify2.default)({
	  selector: _survey3.default,
	  actions: { submitPage2: _survey.submitPage2 },
	  container: SurveyPage2Container
	});

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

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _Page = __webpack_require__(433);

	var _Page2 = _interopRequireDefault(_Page);

	var _survey = __webpack_require__(107);

	var _survey2 = __webpack_require__(108);

	var _survey3 = _interopRequireDefault(_survey2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyPage3Container = function (_React$Component) {
	  _inherits(SurveyPage3Container, _React$Component);

	  function SurveyPage3Container() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SurveyPage3Container);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SurveyPage3Container)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleSubmit = function () {
	      return _this.props.actions.submitPage3();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SurveyPage3Container, [{
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

	exports.default = (0, _reduxify2.default)({
	  selector: _survey3.default,
	  actions: { submitPage3: _survey.submitPage3 },
	  container: SurveyPage3Container
	});

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

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _Page = __webpack_require__(434);

	var _Page2 = _interopRequireDefault(_Page);

	var _survey = __webpack_require__(107);

	var _survey2 = __webpack_require__(108);

	var _survey3 = _interopRequireDefault(_survey2);

	var _reactReduxForm = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SurveyPage4Container = function (_React$Component) {
	  _inherits(SurveyPage4Container, _React$Component);

	  function SurveyPage4Container() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SurveyPage4Container);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SurveyPage4Container)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleSubmit = function () {
	      return _this.props.actions.submitSurvey();
	    }, _this.handleCheckChange = function (val) {
	      return _this.props.actions.change('survey.' + val, !_this.props.survey[val]);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SurveyPage4Container, [{
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

	exports.default = (0, _reduxify2.default)({
	  selector: _survey3.default,
	  actions: { submitSurvey: _survey.submitSurvey, change: _reactReduxForm.actions.change },
	  container: SurveyPage4Container
	});

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

	var _reactRouter = __webpack_require__(41);

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
	        _reactRouter.Link,
	        { to: '/home' },
	        _react2.default.createElement(
	          'button',
	          null,
	          'Go Home'
	        )
	      );
	    }
	  }]);

	  return HomeButton;
	}(_react2.default.Component);

	exports.default = HomeButton;

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

	var _reduxify = __webpack_require__(13);

	var _reduxify2 = _interopRequireDefault(_reduxify);

	var _user = __webpack_require__(153);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LogoutButton = function (_React$Component) {
	  _inherits(LogoutButton, _React$Component);

	  function LogoutButton() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LogoutButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LogoutButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function () {
	      return _this.props.actions.logOut();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LogoutButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'button',
	        { onClick: this.handleClick },
	        'Log Out'
	      );
	    }
	  }]);

	  return LogoutButton;
	}(_react2.default.Component);

	exports.default = (0, _reduxify2.default)({
	  actions: { logOut: _user.logOut },
	  container: LogoutButton
	});

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

	var _Categories = __webpack_require__(436);

	var _Categories2 = _interopRequireDefault(_Categories);

	var _RangeModal = __webpack_require__(446);

	var _RangeModal2 = _interopRequireDefault(_RangeModal);

	var _LogoutButton = __webpack_require__(457);

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

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AccessButtons = __webpack_require__(435);

	var _AccessButtons2 = _interopRequireDefault(_AccessButtons);

	var _LoginModal = __webpack_require__(444);

	var _LoginModal2 = _interopRequireDefault(_LoginModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* Containers */


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
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Welcome to HiveMind!'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          '(Some description and picture here)'
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

/***/ 460:
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

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Instructions = __webpack_require__(442);

	var _Instructions2 = _interopRequireDefault(_Instructions);

	var _QuestionBody = __webpack_require__(445);

	var _QuestionBody2 = _interopRequireDefault(_QuestionBody);

	var _ChangeRangeModal = __webpack_require__(437);

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

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Round = __webpack_require__(450);

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

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SignupModal = __webpack_require__(451);

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
	        _react2.default.createElement(
	          'p',
	          null,
	          'Progress Bar'
	        ),
	        this.props.children,
	        _react2.default.createElement(_SignupModal2.default, null)
	      );
	    }
	  }]);

	  return Signup;
	}(_react2.default.Component);

	exports.default = Signup;

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

	var _LineCharts = __webpack_require__(443);

	var _LineCharts2 = _interopRequireDefault(_LineCharts);

	var _HomeButton = __webpack_require__(456);

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

/***/ 465:
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
	      return (0, _reactAddonsUpdate2.default)(state, { submitted: { $set: action.payload } });
	    case _constants.SET_BANK:
	      return (0, _reactAddonsUpdate2.default)(state, { bank: { $set: action.payload } });
	    case _constants.SET_BIN_VALUES:
	      return (0, _reactAddonsUpdate2.default)(state, { binValues: { $set: action.payload } });
	    case _constants.WITHDRAW:
	      return (0, _reactAddonsUpdate2.default)(state, { bank: _defineProperty({}, action.payload, { $apply: function $apply(bank) {
	            return bank - 1;
	          } }) });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 466:
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
	  discrete: [],
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
	      return (0, _reactAddonsUpdate2.default)(state, { $set: action.payload });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _initialFormsState = __webpack_require__(235);

	var _initialFormsState2 = _interopRequireDefault(_initialFormsState);

	var _reactReduxForm = __webpack_require__(14);

	var _redux = __webpack_require__(85);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  covariates: (0, _reactReduxForm.modelReducer)('covariates', _initialFormsState2.default.covariates),
	  covariatesForm: (0, _reactReduxForm.formReducer)('covariates'),
	  estimates: (0, _reactReduxForm.modelReducer)('estimates', _initialFormsState2.default.estimates),
	  estimatesForm: (0, _reactReduxForm.formReducer)('estimates'),
	  login: (0, _reactReduxForm.modelReducer)('login', _initialFormsState2.default.login),
	  loginForm: (0, _reactReduxForm.formReducer)('login'),
	  ranges: (0, _reactReduxForm.modelReducer)('ranges', _initialFormsState2.default.ranges),
	  rangesForm: (0, _reactReduxForm.formReducer)('ranges'),
	  signup: (0, _reactReduxForm.modelReducer)('signup', _initialFormsState2.default.signup),
	  signupForm: (0, _reactReduxForm.formReducer)('signup')
	});

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(85);

	var _reactRouterRedux = __webpack_require__(206);

	var _answer = __webpack_require__(465);

	var _answer2 = _interopRequireDefault(_answer);

	var _category = __webpack_require__(466);

	var _category2 = _interopRequireDefault(_category);

	var _forms = __webpack_require__(467);

	var _forms2 = _interopRequireDefault(_forms);

	var _modal = __webpack_require__(469);

	var _modal2 = _interopRequireDefault(_modal);

	var _question = __webpack_require__(470);

	var _question2 = _interopRequireDefault(_question);

	var _round = __webpack_require__(471);

	var _round2 = _interopRequireDefault(_round);

	var _stats = __webpack_require__(472);

	var _stats2 = _interopRequireDefault(_stats);

	var _tooltip = __webpack_require__(473);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _initialFormsState = __webpack_require__(235);

	var _initialFormsState2 = _interopRequireDefault(_initialFormsState);

	var _reactReduxForm = __webpack_require__(14);

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
	  survey: (0, _reactReduxForm.modelReducer)('survey', _initialFormsState2.default.survey),
	  surveyForm: (0, _reactReduxForm.formReducer)('survey'),
	  tooltip: _tooltip2.default
	});

/***/ },

/***/ 469:
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
	      return (0, _reactAddonsUpdate2.default)(state, { showModal: { $set: action.payload } });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 470:
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
	  outcomes: []
	};

	function question() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.SET_QUESTION:
	      return (0, _reactAddonsUpdate2.default)(state, { $set: action.payload });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 471:
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
	            return currentRound.get('answers').push(action.payload);
	          } } });
	    case _constants.ADD_ANSWERS:
	      return (0, _reactAddonsUpdate2.default)(state, { answersVector: { $push: [action.payload] } });
	    case _constants.ADD_OUTCOMES:
	      return (0, _reactAddonsUpdate2.default)(state, { outcomes: { $push: [action.payload] } });
	    case _constants.ADD_WINNINGS:
	      return (0, _reactAddonsUpdate2.default)(state, { winnings: { $set: state.winnings + action.payload } });
	    case _constants.CLEAR_WINNINGS:
	      return (0, _reactAddonsUpdate2.default)(state, { winnings: { $set: 0 } });
	    case _constants.INCREMENT_CURRENT_QUESTION:
	      return (0, _reactAddonsUpdate2.default)(state, { currentQuestion: { $set: state.currentQuestion + 1 } });
	    case _constants.RESET_CURRENT_QUESTION:
	      return (0, _reactAddonsUpdate2.default)(state, { currentQuestion: { $set: 1 } });
	    case _constants.SET_CATEGORY_NAMES:
	      return (0, _reactAddonsUpdate2.default)(state, { categoryNames: { $set: action.payload } });
	    case _constants.SET_CORRECT_ANSWER_INDICES:
	      return (0, _reactAddonsUpdate2.default)(state, { correctAnswerIndices: { $set: action.payload } });
	    case _constants.SET_CURRENT_ROUND:
	      return (0, _reactAddonsUpdate2.default)(state, { currentRound: { $set: action.payload } });
	    case _constants.SET_RANGE:
	      return (0, _reactAddonsUpdate2.default)(state, { ranges: _defineProperty({}, action.payload.index, { $set: action.payload.range }) });
	    case _constants.SET_RANGES:
	      return (0, _reactAddonsUpdate2.default)(state, { ranges: { $set: action.payload } });
	    case _constants.SET_UNLOCKED:
	      return (0, _reactAddonsUpdate2.default)(state, { unlocked: _defineProperty({}, action.payload.index, { $set: action.payload.unlocked }) });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 472:
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
	      return (0, _reactAddonsUpdate2.default)(state, { phi: { $push: [action.payload] } });
	    case _constants.SET_COVARIATE_DATA:
	      return (0, _reactAddonsUpdate2.default)(state, { covariateData: { $set: action.payload } });
	    case _constants.SET_DATA:
	      return (0, _reactAddonsUpdate2.default)(state, { data: { $set: action.payload } });
	    case _constants.SET_OUTCOMES:
	      return (0, _reactAddonsUpdate2.default)(state, { outcomes: { $set: action.payload } });
	    case _constants.SET_OUTCOME_INDEX:
	      return (0, _reactAddonsUpdate2.default)(state, { outcomeIndex: { $set: action.payload } });
	    case _constants.SET_PHI:
	      return (0, _reactAddonsUpdate2.default)(state, { phi: { $set: action.payload } });
	    case _constants.SET_SERIES:
	      return (0, _reactAddonsUpdate2.default)(state, { data: { $splice: [[action.payload.index, 1, action.payload.data]] } });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 473:
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
	      return (0, _reactAddonsUpdate2.default)(state, { message: { $set: action.payload } });
	    case _constants.SET_TOOLTIP_TARGET:
	      return (0, _reactAddonsUpdate2.default)(state, { target: { $set: action.payload } });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var _points = __webpack_require__(236);

	var _points2 = _interopRequireDefault(_points);

	var _correctAnswerIndices = __webpack_require__(477);

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
	  var binValues = [];
	  var binText = [];
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

	function getDiscreteBinText(range) {
	  var binText = [];
	  for (var i = range[0]; i <= range[1]; i++) {
	    binText.push(i);
	  }
	  return binText;
	}

	function getBinTexts(category, ranges) {
	  var bins = [];
	  for (var i = 0; i < category.outcomeRanges.length; i++) {
	    var outcomeName = category.outcomeNames[i];
	    if (category.discrete[i]) {
	      bins.push(getDiscreteBinText(category.outcomeRanges[i]));
	    } else {
	      var range = [0, 0];

	      if (ranges[outcomeName] && ranges[outcomeName].lower >= 0 && ranges[outcomeName].upper > 0) {
	        range = [ranges[outcomeName].lower, ranges[outcomeName].upper];
	      }

	      bins.push(getContinuousBinText(category.numBins[i], range));
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

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var categoryNamesSelector = function categoryNamesSelector(state) {
	  return state.round.categoryNames;
	};

	exports.default = (0, _reselect.createSelector)(categoryNamesSelector, function (categoryNames) {
	  return {
	    categoryNames: categoryNames
	  };
	});

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var showModalSelector = function showModalSelector(state) {
	  return state.modal.showModal;
	};

	exports.default = (0, _reselect.createSelector)(showModalSelector, function (showModal) {
	  return {
	    showModal: showModal
	  };
	});

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var rangesSelector = function rangesSelector(state) {
	  return state.forms.ranges;
	};
	var outcomesSelector = function outcomesSelector(state) {
	  return state.question.outcomes;
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

	function getCorrectAnswerIndices(category, ranges, outcomes) {
	  var correctAnswerIndices = [];
	  for (var i = 0; i < category.outcomeRanges.length; i++) {
	    var outcomeName = category.outcomeNames[i];
	    if (category.discrete[i]) {
	      correctAnswerIndices.push(outcomes[i] - category.outcomeRanges[i][0]);
	    } else {
	      var range = [0, 0];
	      if (ranges[outcomeName] && ranges[outcomeName].lower >= 0 && ranges[outcomeName].upper > 0) {
	        range = [ranges[outcomeName].lower, ranges[outcomeName].upper];
	      }
	      correctAnswerIndices.push(getContinuousAnswerIndex(category.numBins[i], range, outcomes[i]));
	    }
	  }
	  return correctAnswerIndices;
	}

	exports.default = (0, _reselect.createSelector)(categorySelector, rangesSelector, outcomesSelector, function (category, ranges, outcomes) {
	  return {
	    correctAnswerIndices: getCorrectAnswerIndices(category, ranges, outcomes)
	  };
	});

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var tooltipSelector = function tooltipSelector(state) {
	  return state.tooltip;
	};

	exports.default = (0, _reselect.createSelector)(categorySelector, tooltipSelector, function (category, tooltip) {
	  return {
	    instructions: category.categorySurveyInstructions,
	    covariateNames: category.covariateNames,
	    tooltipMessage: tooltip.message,
	    tooltipTarget: tooltip.target
	  };
	});

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

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
	    estimates: estimates,
	    tooltipMessage: tooltip.message,
	    tooltipTarget: tooltip.target
	  };
	});

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var tooltipSelector = function tooltipSelector(state) {
	  return state.tooltip;
	};

	exports.default = (0, _reselect.createSelector)(tooltipSelector, function (tooltip) {
	  return {
	    tooltipMessage: tooltip.message,
	    tooltipTarget: tooltip.target === '' ? 'form' : target
	  };
	});

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var rangesSelector = function rangesSelector(state) {
	  return state.forms.ranges;
	};

	exports.default = (0, _reselect.createSelector)(rangesSelector, function (ranges) {
	  return {
	    ranges: ranges
	  };
	});

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

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

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var covariateValuesSelector = function covariateValuesSelector(state) {
	  return state.question.covariateValues;
	};

	exports.default = (0, _reselect.createSelector)(covariateValuesSelector, categorySelector, function (covariateValues, category) {
	  return {
	    covariateValues: covariateValues,
	    covariateNames: category.covariateNames,
	    instructions: category.questionInstructions
	  };
	});

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

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

/***/ 485:
476,

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var showModalSelector = function showModalSelector(state) {
	  return state.modal.showModal;
	};
	var categorySelector = function categorySelector(state) {
	  return state.category;
	};
	var unlockedSelector = function unlockedSelector(state) {
	  return state.round.unlocked;
	};

	exports.default = (0, _reselect.createSelector)(showModalSelector, categorySelector, unlockedSelector, function (showModal, category, unlocked) {
	  return {
	    showModal: showModal,
	    unlocked: unlocked[category.index]
	  };
	});

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

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
	    discrete: category.discrete,
	    tooltipMessage: tooltip.message,
	    tooltipTarget: tooltip.target
	  };
	});

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reselect = __webpack_require__(15);

	var _points = __webpack_require__(236);

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

/***/ 489:
476,

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports =  false ? require('./configureStore.dev') : __webpack_require__(491);

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(85);

	var _reduxLocalstorage = __webpack_require__(402);

	var _reduxLocalstorage2 = _interopRequireDefault(_reduxLocalstorage);

	var _reduxThunk = __webpack_require__(403);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(468);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore(initialState) {
	  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (0, _reduxLocalstorage2.default)(['answer', 'category', 'question', 'survey'])));
	}

/***/ },

/***/ 492:
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

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(162)();
	// imports


	// module
	exports.push([module.id, ".ct-double-octave:after,.ct-major-eleventh:after,.ct-major-second:after,.ct-major-seventh:after,.ct-major-sixth:after,.ct-major-tenth:after,.ct-major-third:after,.ct-major-twelfth:after,.ct-minor-second:after,.ct-minor-seventh:after,.ct-minor-sixth:after,.ct-minor-third:after,.ct-octave:after,.ct-perfect-fifth:after,.ct-perfect-fourth:after,.ct-square:after{content:\"\";clear:both}.ct-label{fill:rgba(0,0,0,.4);color:rgba(0,0,0,.4);font-size:.75rem;line-height:1}.ct-chart-bar .ct-label,.ct-chart-line .ct-label{display:block;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.ct-label.ct-horizontal.ct-start{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-label.ct-horizontal.ct-end{-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-label.ct-vertical.ct-start{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:flex-end;-webkit-justify-content:flex-end;-ms-flex-pack:flex-end;justify-content:flex-end;text-align:right;text-anchor:end}.ct-label.ct-vertical.ct-end{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar .ct-label.ct-horizontal.ct-start{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;text-anchor:start}.ct-chart-bar .ct-label.ct-horizontal.ct-end{-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start{-webkit-box-align:flex-end;-webkit-align-items:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end{-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:flex-end;-webkit-justify-content:flex-end;-ms-flex-pack:flex-end;justify-content:flex-end;text-align:right;text-anchor:end}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;-ms-flex-pack:flex-start;justify-content:flex-start;text-align:left;text-anchor:end}.ct-grid{stroke:rgba(0,0,0,.2);stroke-width:1px;stroke-dasharray:2px}.ct-point{stroke-width:10px;stroke-linecap:round}.ct-line{fill:none;stroke-width:4px}.ct-area{stroke:none;fill-opacity:.1}.ct-bar{fill:none;stroke-width:10px}.ct-slice-donut{fill:none;stroke-width:60px}.ct-series-a .ct-bar,.ct-series-a .ct-line,.ct-series-a .ct-point,.ct-series-a .ct-slice-donut{stroke:#d70206}.ct-series-a .ct-area,.ct-series-a .ct-slice-pie{fill:#d70206}.ct-series-b .ct-bar,.ct-series-b .ct-line,.ct-series-b .ct-point,.ct-series-b .ct-slice-donut{stroke:#f05b4f}.ct-series-b .ct-area,.ct-series-b .ct-slice-pie{fill:#f05b4f}.ct-series-c .ct-bar,.ct-series-c .ct-line,.ct-series-c .ct-point,.ct-series-c .ct-slice-donut{stroke:#f4c63d}.ct-series-c .ct-area,.ct-series-c .ct-slice-pie{fill:#f4c63d}.ct-series-d .ct-bar,.ct-series-d .ct-line,.ct-series-d .ct-point,.ct-series-d .ct-slice-donut{stroke:#d17905}.ct-series-d .ct-area,.ct-series-d .ct-slice-pie{fill:#d17905}.ct-series-e .ct-bar,.ct-series-e .ct-line,.ct-series-e .ct-point,.ct-series-e .ct-slice-donut{stroke:#453d3f}.ct-series-e .ct-area,.ct-series-e .ct-slice-pie{fill:#453d3f}.ct-series-f .ct-bar,.ct-series-f .ct-line,.ct-series-f .ct-point,.ct-series-f .ct-slice-donut{stroke:#59922b}.ct-series-f .ct-area,.ct-series-f .ct-slice-pie{fill:#59922b}.ct-series-g .ct-bar,.ct-series-g .ct-line,.ct-series-g .ct-point,.ct-series-g .ct-slice-donut{stroke:#0544d3}.ct-series-g .ct-area,.ct-series-g .ct-slice-pie{fill:#0544d3}.ct-series-h .ct-bar,.ct-series-h .ct-line,.ct-series-h .ct-point,.ct-series-h .ct-slice-donut{stroke:#6b0392}.ct-series-h .ct-area,.ct-series-h .ct-slice-pie{fill:#6b0392}.ct-series-i .ct-bar,.ct-series-i .ct-line,.ct-series-i .ct-point,.ct-series-i .ct-slice-donut{stroke:#f05b4f}.ct-series-i .ct-area,.ct-series-i .ct-slice-pie{fill:#f05b4f}.ct-series-j .ct-bar,.ct-series-j .ct-line,.ct-series-j .ct-point,.ct-series-j .ct-slice-donut{stroke:#dda458}.ct-series-j .ct-area,.ct-series-j .ct-slice-pie{fill:#dda458}.ct-series-k .ct-bar,.ct-series-k .ct-line,.ct-series-k .ct-point,.ct-series-k .ct-slice-donut{stroke:#eacf7d}.ct-series-k .ct-area,.ct-series-k .ct-slice-pie{fill:#eacf7d}.ct-series-l .ct-bar,.ct-series-l .ct-line,.ct-series-l .ct-point,.ct-series-l .ct-slice-donut{stroke:#86797d}.ct-series-l .ct-area,.ct-series-l .ct-slice-pie{fill:#86797d}.ct-series-m .ct-bar,.ct-series-m .ct-line,.ct-series-m .ct-point,.ct-series-m .ct-slice-donut{stroke:#b2c326}.ct-series-m .ct-area,.ct-series-m .ct-slice-pie{fill:#b2c326}.ct-series-n .ct-bar,.ct-series-n .ct-line,.ct-series-n .ct-point,.ct-series-n .ct-slice-donut{stroke:#6188e2}.ct-series-n .ct-area,.ct-series-n .ct-slice-pie{fill:#6188e2}.ct-series-o .ct-bar,.ct-series-o .ct-line,.ct-series-o .ct-point,.ct-series-o .ct-slice-donut{stroke:#a748ca}.ct-series-o .ct-area,.ct-series-o .ct-slice-pie{fill:#a748ca}.ct-square{display:block;position:relative;width:100%}.ct-square:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:100%}.ct-square:after{display:table}.ct-square>svg{display:block;position:absolute;top:0;left:0}.ct-minor-second{display:block;position:relative;width:100%}.ct-minor-second:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:93.75%}.ct-minor-second:after{display:table}.ct-minor-second>svg{display:block;position:absolute;top:0;left:0}.ct-major-second{display:block;position:relative;width:100%}.ct-major-second:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:88.8888888889%}.ct-major-second:after{display:table}.ct-major-second>svg{display:block;position:absolute;top:0;left:0}.ct-minor-third{display:block;position:relative;width:100%}.ct-minor-third:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:83.3333333333%}.ct-minor-third:after{display:table}.ct-minor-third>svg{display:block;position:absolute;top:0;left:0}.ct-major-third{display:block;position:relative;width:100%}.ct-major-third:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:80%}.ct-major-third:after{display:table}.ct-major-third>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fourth{display:block;position:relative;width:100%}.ct-perfect-fourth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:75%}.ct-perfect-fourth:after{display:table}.ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fifth{display:block;position:relative;width:100%}.ct-perfect-fifth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:66.6666666667%}.ct-perfect-fifth:after{display:table}.ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-sixth{display:block;position:relative;width:100%}.ct-minor-sixth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:62.5%}.ct-minor-sixth:after{display:table}.ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-golden-section{display:block;position:relative;width:100%}.ct-golden-section:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:61.804697157%}.ct-golden-section:after{content:\"\";display:table;clear:both}.ct-golden-section>svg{display:block;position:absolute;top:0;left:0}.ct-major-sixth{display:block;position:relative;width:100%}.ct-major-sixth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:60%}.ct-major-sixth:after{display:table}.ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-seventh{display:block;position:relative;width:100%}.ct-minor-seventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:56.25%}.ct-minor-seventh:after{display:table}.ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-seventh{display:block;position:relative;width:100%}.ct-major-seventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:53.3333333333%}.ct-major-seventh:after{display:table}.ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-octave{display:block;position:relative;width:100%}.ct-octave:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:50%}.ct-octave:after{display:table}.ct-octave>svg{display:block;position:absolute;top:0;left:0}.ct-major-tenth{display:block;position:relative;width:100%}.ct-major-tenth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:40%}.ct-major-tenth:after{display:table}.ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}.ct-major-eleventh{display:block;position:relative;width:100%}.ct-major-eleventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:37.5%}.ct-major-eleventh:after{display:table}.ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-twelfth{display:block;position:relative;width:100%}.ct-major-twelfth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:33.3333333333%}.ct-major-twelfth:after{display:table}.ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}.ct-double-octave{display:block;position:relative;width:100%}.ct-double-octave:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:25%}.ct-double-octave:after{display:table}.ct-double-octave>svg{display:block;position:absolute;top:0;left:0}", ""]);

	// exports


/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(162)();
	// imports


	// module
	exports.push([module.id, ".rc-slider {\n  position: relative;\n  height: 4px;\n  width: 100%;\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n  z-index: 1;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  z-index: 2;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle-active:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n  z-index: 3;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n  z-index: 1;\n}\n.rc-slider-dot {\n  position: absolute;\n  top: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot:first-child {\n  margin-left: -4px;\n}\n.rc-slider-dot:last-child {\n  margin-left: -4px;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 4;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip-hidden {\n  display: none;\n}\n.rc-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n", ""]);

	// exports


/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(162)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret, button > .caret,\n  .dropup > .btn > .caret,\n  .dropup > button > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(262) + ");\n  src: url(" + __webpack_require__(262) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(926) + ") format(\"woff2\"), url(" + __webpack_require__(925) + ") format(\"woff\"), url(" + __webpack_require__(576) + ") format(\"truetype\"), url(" + __webpack_require__(575) + "#glyphicons_halflingsregular) format(\"svg\"); }\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon-asterisk:before {\n  content: \"*\"; }\n\n.glyphicon-plus:before {\n  content: \"+\"; }\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\"; }\n\n.glyphicon-minus:before {\n  content: \"\\2212\"; }\n\n.glyphicon-cloud:before {\n  content: \"\\2601\"; }\n\n.glyphicon-envelope:before {\n  content: \"\\2709\"; }\n\n.glyphicon-pencil:before {\n  content: \"\\270F\"; }\n\n.glyphicon-glass:before {\n  content: \"\\E001\"; }\n\n.glyphicon-music:before {\n  content: \"\\E002\"; }\n\n.glyphicon-search:before {\n  content: \"\\E003\"; }\n\n.glyphicon-heart:before {\n  content: \"\\E005\"; }\n\n.glyphicon-star:before {\n  content: \"\\E006\"; }\n\n.glyphicon-star-empty:before {\n  content: \"\\E007\"; }\n\n.glyphicon-user:before {\n  content: \"\\E008\"; }\n\n.glyphicon-film:before {\n  content: \"\\E009\"; }\n\n.glyphicon-th-large:before {\n  content: \"\\E010\"; }\n\n.glyphicon-th:before {\n  content: \"\\E011\"; }\n\n.glyphicon-th-list:before {\n  content: \"\\E012\"; }\n\n.glyphicon-ok:before {\n  content: \"\\E013\"; }\n\n.glyphicon-remove:before {\n  content: \"\\E014\"; }\n\n.glyphicon-zoom-in:before {\n  content: \"\\E015\"; }\n\n.glyphicon-zoom-out:before {\n  content: \"\\E016\"; }\n\n.glyphicon-off:before {\n  content: \"\\E017\"; }\n\n.glyphicon-signal:before {\n  content: \"\\E018\"; }\n\n.glyphicon-cog:before {\n  content: \"\\E019\"; }\n\n.glyphicon-trash:before {\n  content: \"\\E020\"; }\n\n.glyphicon-home:before {\n  content: \"\\E021\"; }\n\n.glyphicon-file:before {\n  content: \"\\E022\"; }\n\n.glyphicon-time:before {\n  content: \"\\E023\"; }\n\n.glyphicon-road:before {\n  content: \"\\E024\"; }\n\n.glyphicon-download-alt:before {\n  content: \"\\E025\"; }\n\n.glyphicon-download:before {\n  content: \"\\E026\"; }\n\n.glyphicon-upload:before {\n  content: \"\\E027\"; }\n\n.glyphicon-inbox:before {\n  content: \"\\E028\"; }\n\n.glyphicon-play-circle:before {\n  content: \"\\E029\"; }\n\n.glyphicon-repeat:before {\n  content: \"\\E030\"; }\n\n.glyphicon-refresh:before {\n  content: \"\\E031\"; }\n\n.glyphicon-list-alt:before {\n  content: \"\\E032\"; }\n\n.glyphicon-lock:before {\n  content: \"\\E033\"; }\n\n.glyphicon-flag:before {\n  content: \"\\E034\"; }\n\n.glyphicon-headphones:before {\n  content: \"\\E035\"; }\n\n.glyphicon-volume-off:before {\n  content: \"\\E036\"; }\n\n.glyphicon-volume-down:before {\n  content: \"\\E037\"; }\n\n.glyphicon-volume-up:before {\n  content: \"\\E038\"; }\n\n.glyphicon-qrcode:before {\n  content: \"\\E039\"; }\n\n.glyphicon-barcode:before {\n  content: \"\\E040\"; }\n\n.glyphicon-tag:before {\n  content: \"\\E041\"; }\n\n.glyphicon-tags:before {\n  content: \"\\E042\"; }\n\n.glyphicon-book:before {\n  content: \"\\E043\"; }\n\n.glyphicon-bookmark:before {\n  content: \"\\E044\"; }\n\n.glyphicon-print:before {\n  content: \"\\E045\"; }\n\n.glyphicon-camera:before {\n  content: \"\\E046\"; }\n\n.glyphicon-font:before {\n  content: \"\\E047\"; }\n\n.glyphicon-bold:before {\n  content: \"\\E048\"; }\n\n.glyphicon-italic:before {\n  content: \"\\E049\"; }\n\n.glyphicon-text-height:before {\n  content: \"\\E050\"; }\n\n.glyphicon-text-width:before {\n  content: \"\\E051\"; }\n\n.glyphicon-align-left:before {\n  content: \"\\E052\"; }\n\n.glyphicon-align-center:before {\n  content: \"\\E053\"; }\n\n.glyphicon-align-right:before {\n  content: \"\\E054\"; }\n\n.glyphicon-align-justify:before {\n  content: \"\\E055\"; }\n\n.glyphicon-list:before {\n  content: \"\\E056\"; }\n\n.glyphicon-indent-left:before {\n  content: \"\\E057\"; }\n\n.glyphicon-indent-right:before {\n  content: \"\\E058\"; }\n\n.glyphicon-facetime-video:before {\n  content: \"\\E059\"; }\n\n.glyphicon-picture:before {\n  content: \"\\E060\"; }\n\n.glyphicon-map-marker:before {\n  content: \"\\E062\"; }\n\n.glyphicon-adjust:before {\n  content: \"\\E063\"; }\n\n.glyphicon-tint:before {\n  content: \"\\E064\"; }\n\n.glyphicon-edit:before {\n  content: \"\\E065\"; }\n\n.glyphicon-share:before {\n  content: \"\\E066\"; }\n\n.glyphicon-check:before {\n  content: \"\\E067\"; }\n\n.glyphicon-move:before {\n  content: \"\\E068\"; }\n\n.glyphicon-step-backward:before {\n  content: \"\\E069\"; }\n\n.glyphicon-fast-backward:before {\n  content: \"\\E070\"; }\n\n.glyphicon-backward:before {\n  content: \"\\E071\"; }\n\n.glyphicon-play:before {\n  content: \"\\E072\"; }\n\n.glyphicon-pause:before {\n  content: \"\\E073\"; }\n\n.glyphicon-stop:before {\n  content: \"\\E074\"; }\n\n.glyphicon-forward:before {\n  content: \"\\E075\"; }\n\n.glyphicon-fast-forward:before {\n  content: \"\\E076\"; }\n\n.glyphicon-step-forward:before {\n  content: \"\\E077\"; }\n\n.glyphicon-eject:before {\n  content: \"\\E078\"; }\n\n.glyphicon-chevron-left:before {\n  content: \"\\E079\"; }\n\n.glyphicon-chevron-right:before {\n  content: \"\\E080\"; }\n\n.glyphicon-plus-sign:before {\n  content: \"\\E081\"; }\n\n.glyphicon-minus-sign:before {\n  content: \"\\E082\"; }\n\n.glyphicon-remove-sign:before {\n  content: \"\\E083\"; }\n\n.glyphicon-ok-sign:before {\n  content: \"\\E084\"; }\n\n.glyphicon-question-sign:before {\n  content: \"\\E085\"; }\n\n.glyphicon-info-sign:before {\n  content: \"\\E086\"; }\n\n.glyphicon-screenshot:before {\n  content: \"\\E087\"; }\n\n.glyphicon-remove-circle:before {\n  content: \"\\E088\"; }\n\n.glyphicon-ok-circle:before {\n  content: \"\\E089\"; }\n\n.glyphicon-ban-circle:before {\n  content: \"\\E090\"; }\n\n.glyphicon-arrow-left:before {\n  content: \"\\E091\"; }\n\n.glyphicon-arrow-right:before {\n  content: \"\\E092\"; }\n\n.glyphicon-arrow-up:before {\n  content: \"\\E093\"; }\n\n.glyphicon-arrow-down:before {\n  content: \"\\E094\"; }\n\n.glyphicon-share-alt:before {\n  content: \"\\E095\"; }\n\n.glyphicon-resize-full:before {\n  content: \"\\E096\"; }\n\n.glyphicon-resize-small:before {\n  content: \"\\E097\"; }\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\"; }\n\n.glyphicon-gift:before {\n  content: \"\\E102\"; }\n\n.glyphicon-leaf:before {\n  content: \"\\E103\"; }\n\n.glyphicon-fire:before {\n  content: \"\\E104\"; }\n\n.glyphicon-eye-open:before {\n  content: \"\\E105\"; }\n\n.glyphicon-eye-close:before {\n  content: \"\\E106\"; }\n\n.glyphicon-warning-sign:before {\n  content: \"\\E107\"; }\n\n.glyphicon-plane:before {\n  content: \"\\E108\"; }\n\n.glyphicon-calendar:before {\n  content: \"\\E109\"; }\n\n.glyphicon-random:before {\n  content: \"\\E110\"; }\n\n.glyphicon-comment:before {\n  content: \"\\E111\"; }\n\n.glyphicon-magnet:before {\n  content: \"\\E112\"; }\n\n.glyphicon-chevron-up:before {\n  content: \"\\E113\"; }\n\n.glyphicon-chevron-down:before {\n  content: \"\\E114\"; }\n\n.glyphicon-retweet:before {\n  content: \"\\E115\"; }\n\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\"; }\n\n.glyphicon-folder-close:before {\n  content: \"\\E117\"; }\n\n.glyphicon-folder-open:before {\n  content: \"\\E118\"; }\n\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\"; }\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\"; }\n\n.glyphicon-hdd:before {\n  content: \"\\E121\"; }\n\n.glyphicon-bullhorn:before {\n  content: \"\\E122\"; }\n\n.glyphicon-bell:before {\n  content: \"\\E123\"; }\n\n.glyphicon-certificate:before {\n  content: \"\\E124\"; }\n\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\"; }\n\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\"; }\n\n.glyphicon-hand-right:before {\n  content: \"\\E127\"; }\n\n.glyphicon-hand-left:before {\n  content: \"\\E128\"; }\n\n.glyphicon-hand-up:before {\n  content: \"\\E129\"; }\n\n.glyphicon-hand-down:before {\n  content: \"\\E130\"; }\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\"; }\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\"; }\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\"; }\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\"; }\n\n.glyphicon-globe:before {\n  content: \"\\E135\"; }\n\n.glyphicon-wrench:before {\n  content: \"\\E136\"; }\n\n.glyphicon-tasks:before {\n  content: \"\\E137\"; }\n\n.glyphicon-filter:before {\n  content: \"\\E138\"; }\n\n.glyphicon-briefcase:before {\n  content: \"\\E139\"; }\n\n.glyphicon-fullscreen:before {\n  content: \"\\E140\"; }\n\n.glyphicon-dashboard:before {\n  content: \"\\E141\"; }\n\n.glyphicon-paperclip:before {\n  content: \"\\E142\"; }\n\n.glyphicon-heart-empty:before {\n  content: \"\\E143\"; }\n\n.glyphicon-link:before {\n  content: \"\\E144\"; }\n\n.glyphicon-phone:before {\n  content: \"\\E145\"; }\n\n.glyphicon-pushpin:before {\n  content: \"\\E146\"; }\n\n.glyphicon-usd:before {\n  content: \"\\E148\"; }\n\n.glyphicon-gbp:before {\n  content: \"\\E149\"; }\n\n.glyphicon-sort:before {\n  content: \"\\E150\"; }\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\"; }\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\"; }\n\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\"; }\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\"; }\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\"; }\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\"; }\n\n.glyphicon-unchecked:before {\n  content: \"\\E157\"; }\n\n.glyphicon-expand:before {\n  content: \"\\E158\"; }\n\n.glyphicon-collapse-down:before {\n  content: \"\\E159\"; }\n\n.glyphicon-collapse-up:before {\n  content: \"\\E160\"; }\n\n.glyphicon-log-in:before {\n  content: \"\\E161\"; }\n\n.glyphicon-flash:before {\n  content: \"\\E162\"; }\n\n.glyphicon-log-out:before {\n  content: \"\\E163\"; }\n\n.glyphicon-new-window:before {\n  content: \"\\E164\"; }\n\n.glyphicon-record:before {\n  content: \"\\E165\"; }\n\n.glyphicon-save:before {\n  content: \"\\E166\"; }\n\n.glyphicon-open:before {\n  content: \"\\E167\"; }\n\n.glyphicon-saved:before {\n  content: \"\\E168\"; }\n\n.glyphicon-import:before {\n  content: \"\\E169\"; }\n\n.glyphicon-export:before {\n  content: \"\\E170\"; }\n\n.glyphicon-send:before {\n  content: \"\\E171\"; }\n\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\"; }\n\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\"; }\n\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\"; }\n\n.glyphicon-floppy-save:before {\n  content: \"\\E175\"; }\n\n.glyphicon-floppy-open:before {\n  content: \"\\E176\"; }\n\n.glyphicon-credit-card:before {\n  content: \"\\E177\"; }\n\n.glyphicon-transfer:before {\n  content: \"\\E178\"; }\n\n.glyphicon-cutlery:before {\n  content: \"\\E179\"; }\n\n.glyphicon-header:before {\n  content: \"\\E180\"; }\n\n.glyphicon-compressed:before {\n  content: \"\\E181\"; }\n\n.glyphicon-earphone:before {\n  content: \"\\E182\"; }\n\n.glyphicon-phone-alt:before {\n  content: \"\\E183\"; }\n\n.glyphicon-tower:before {\n  content: \"\\E184\"; }\n\n.glyphicon-stats:before {\n  content: \"\\E185\"; }\n\n.glyphicon-sd-video:before {\n  content: \"\\E186\"; }\n\n.glyphicon-hd-video:before {\n  content: \"\\E187\"; }\n\n.glyphicon-subtitles:before {\n  content: \"\\E188\"; }\n\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\"; }\n\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\"; }\n\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\"; }\n\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\"; }\n\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\"; }\n\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\"; }\n\n.glyphicon-registration-mark:before {\n  content: \"\\E195\"; }\n\n.glyphicon-cloud-download:before {\n  content: \"\\E197\"; }\n\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\"; }\n\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\"; }\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\"; }\n\n.glyphicon-cd:before {\n  content: \"\\E201\"; }\n\n.glyphicon-save-file:before {\n  content: \"\\E202\"; }\n\n.glyphicon-open-file:before {\n  content: \"\\E203\"; }\n\n.glyphicon-level-up:before {\n  content: \"\\E204\"; }\n\n.glyphicon-copy:before {\n  content: \"\\E205\"; }\n\n.glyphicon-paste:before {\n  content: \"\\E206\"; }\n\n.glyphicon-alert:before {\n  content: \"\\E209\"; }\n\n.glyphicon-equalizer:before {\n  content: \"\\E210\"; }\n\n.glyphicon-king:before {\n  content: \"\\E211\"; }\n\n.glyphicon-queen:before {\n  content: \"\\E212\"; }\n\n.glyphicon-pawn:before {\n  content: \"\\E213\"; }\n\n.glyphicon-bishop:before {\n  content: \"\\E214\"; }\n\n.glyphicon-knight:before {\n  content: \"\\E215\"; }\n\n.glyphicon-baby-formula:before {\n  content: \"\\E216\"; }\n\n.glyphicon-tent:before {\n  content: \"\\26FA\"; }\n\n.glyphicon-blackboard:before {\n  content: \"\\E218\"; }\n\n.glyphicon-bed:before {\n  content: \"\\E219\"; }\n\n.glyphicon-apple:before {\n  content: \"\\F8FF\"; }\n\n.glyphicon-erase:before {\n  content: \"\\E221\"; }\n\n.glyphicon-hourglass:before {\n  content: \"\\231B\"; }\n\n.glyphicon-lamp:before {\n  content: \"\\E223\"; }\n\n.glyphicon-duplicate:before {\n  content: \"\\E224\"; }\n\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\"; }\n\n.glyphicon-scissors:before {\n  content: \"\\E226\"; }\n\n.glyphicon-bitcoin:before {\n  content: \"\\E227\"; }\n\n.glyphicon-btc:before {\n  content: \"\\E227\"; }\n\n.glyphicon-xbt:before {\n  content: \"\\E227\"; }\n\n.glyphicon-yen:before {\n  content: \"\\A5\"; }\n\n.glyphicon-jpy:before {\n  content: \"\\A5\"; }\n\n.glyphicon-ruble:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-rub:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-scale:before {\n  content: \"\\E230\"; }\n\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\"; }\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\"; }\n\n.glyphicon-education:before {\n  content: \"\\E233\"; }\n\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\"; }\n\n.glyphicon-option-vertical:before {\n  content: \"\\E235\"; }\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\"; }\n\n.glyphicon-modal-window:before {\n  content: \"\\E237\"; }\n\n.glyphicon-oil:before {\n  content: \"\\E238\"; }\n\n.glyphicon-grain:before {\n  content: \"\\E239\"; }\n\n.glyphicon-sunglasses:before {\n  content: \"\\E240\"; }\n\n.glyphicon-text-size:before {\n  content: \"\\E241\"; }\n\n.glyphicon-text-color:before {\n  content: \"\\E242\"; }\n\n.glyphicon-text-background:before {\n  content: \"\\E243\"; }\n\n.glyphicon-object-align-top:before {\n  content: \"\\E244\"; }\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\"; }\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\"; }\n\n.glyphicon-object-align-left:before {\n  content: \"\\E247\"; }\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\"; }\n\n.glyphicon-object-align-right:before {\n  content: \"\\E249\"; }\n\n.glyphicon-triangle-right:before {\n  content: \"\\E250\"; }\n\n.glyphicon-triangle-left:before {\n  content: \"\\E251\"; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\"; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\E253\"; }\n\n.glyphicon-console:before {\n  content: \"\\E254\"; }\n\n.glyphicon-superscript:before {\n  content: \"\\E255\"; }\n\n.glyphicon-subscript:before {\n  content: \"\\E256\"; }\n\n.glyphicon-menu-left:before {\n  content: \"\\E257\"; }\n\n.glyphicon-menu-right:before {\n  content: \"\\E258\"; }\n\n.glyphicon-menu-down:before {\n  content: \"\\E259\"; }\n\n.glyphicon-menu-up:before {\n  content: \"\\E260\"; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777777; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 36px; }\n\nh2, .h2 {\n  font-size: 30px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 18px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 12px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 21px; } }\n\nsmall,\n.small {\n  font-size: 85%; }\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #777777; }\n\n.text-primary {\n  color: #337ab7; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090; }\n\n.text-success {\n  color: #3c763d; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c; }\n\n.text-info {\n  color: #31708f; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269; }\n\n.text-warning {\n  color: #8a6d3b; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c; }\n\n.text-danger {\n  color: #a94442; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #337ab7; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090; }\n\n.bg-success {\n  background-color: #dff0d8; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3; }\n\n.bg-info {\n  background-color: #d9edf7; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee; }\n\n.bg-warning {\n  background-color: #fcf8e3; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5; }\n\n.bg-danger {\n  background-color: #f2dede; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9; }\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #777777; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014   \\A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\A0   \\2014'; }\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control, input {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus, input:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder, input::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder, input:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder, input::-webkit-input-placeholder {\n    color: #999; }\n  .form-control::-ms-expand, input::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], input[disabled], .form-control[readonly], input[readonly],\n  fieldset[disabled] .form-control,\n  fieldset[disabled] input {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled], input[disabled],\n  fieldset[disabled] .form-control,\n  fieldset[disabled] input {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control, input[type=\"date\"],\n  input[type=\"time\"].form-control,\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].form-control,\n  input[type=\"month\"] {\n    line-height: 34px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"],\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"],\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"],\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"],\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"],\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"],\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"],\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"],\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control, .input-group-lg > input.form-control-static,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn,\n  .input-group-lg > .input-group-btn > button.form-control-static, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control, .input-group-sm > input.form-control-static,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn,\n  .input-group-sm > .input-group-btn > button.form-control-static {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control, .input-group-sm > input,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn,\n.input-group-sm > .input-group-btn > button {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control, .form-group-sm input {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control, .input-group-lg > input,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn,\n.input-group-lg > .input-group-btn > button {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control, .form-group-lg input {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control, .has-feedback input {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback, .input-group-lg > input + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg > .input-group-btn > button + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback,\n.form-group-lg input + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback, .input-group-sm > input + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm > .input-group-btn > button + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback,\n.form-group-sm input + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d; }\n\n.has-success .form-control, .has-success input {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus, .has-success input:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n\n.has-warning .form-control, .has-warning input {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus, .has-warning input:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442; }\n\n.has-error .form-control, .has-error input {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus, .has-error input:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group, form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control, form .form-control, .form-inline input, form input {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static, form .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group, form .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon, form .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn, form .input-group .input-group-btn,\n    .form-inline .input-group .form-control, form .input-group .form-control,\n    .form-inline .input-group input, form .input-group input {\n      width: auto; }\n  .form-inline .input-group > .form-control, form .input-group > .form-control, .form-inline .input-group > input, form .input-group > input {\n    width: 100%; }\n  .form-inline .control-label, form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio, form .radio,\n  .form-inline .checkbox, form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label, form .radio label,\n    .form-inline .checkbox label, form .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"], form .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"], form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback, form .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn, button {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, button:focus, .btn.focus, button.focus, .btn:active:focus, button:active:focus, .btn:active.focus, button:active.focus, .btn.active:focus, button.active:focus, .btn.active.focus, button.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, button:hover, .btn:focus, button:focus, .btn.focus, button.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, button:active, .btn.active, button.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, button.disabled, .btn[disabled], button[disabled],\n  fieldset[disabled] .btn,\n  fieldset[disabled] button {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default, button {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, button:focus, .btn-default.focus, button.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover, button:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, button:active, .btn-default.active, button.active,\n  .open > .btn-default.dropdown-toggle,\n  .open > button.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, button:active:hover, .btn-default:active:focus, button:active:focus, .btn-default:active.focus, button:active.focus, .btn-default.active:hover, button.active:hover, .btn-default.active:focus, button.active:focus, .btn-default.active.focus, button.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > button.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > button.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus,\n    .open > button.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, button:active, .btn-default.active, button.active,\n  .open > .btn-default.dropdown-toggle,\n  .open > button.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, button.disabled:hover, .btn-default.disabled:focus, button.disabled:focus, .btn-default.disabled.focus, button.disabled.focus, .btn-default[disabled]:hover, button[disabled]:hover, .btn-default[disabled]:focus, button[disabled]:focus, .btn-default[disabled].focus, button[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] button:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] button:focus,\n  fieldset[disabled] .btn-default.focus,\n  fieldset[disabled] button.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge, button .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn, .btn-group-lg > button {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn, .btn-group-sm > button {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn, .btn-group-xs > button {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn, .btn-group > button,\n  .btn-group-vertical > .btn,\n  .btn-group-vertical > button {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > button:hover, .btn-group > .btn:focus, .btn-group > button:focus, .btn-group > .btn:active, .btn-group > button:active, .btn-group > .btn.active, .btn-group > button.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > button:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > button:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > button:active,\n    .btn-group-vertical > .btn.active,\n    .btn-group-vertical > button.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn, .btn-group button + .btn, .btn-group .btn + button, .btn-group button + button,\n.btn-group .btn + .btn-group,\n.btn-group button + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + button,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn, .btn-toolbar button,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn, .btn-toolbar > button,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle), .btn-group > button:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child, .btn-group > button:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle), .btn-group > button:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child), .btn-group > button:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn, .btn-group > .btn-group:not(:first-child):not(:last-child) > button {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group > .btn-group:first-child:not(:last-child) > button:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child, .btn-group > .btn-group:last-child:not(:first-child) > button:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle, .btn-group > button + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle, .btn-group-lg.btn-group > button + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret, button .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret, .btn-group-lg > button .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret, .dropup .btn-group-lg > button .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn, .btn-group-vertical > button,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn,\n.btn-group-vertical > .btn-group > button {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn, .btn-group-vertical > .btn-group > button {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn, .btn-group-vertical > button + .btn, .btn-group-vertical > .btn + button, .btn-group-vertical > button + button,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > button + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + button,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child), .btn-group-vertical > button:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child), .btn-group-vertical > button:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child), .btn-group-vertical > button:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn, .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > button {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group-vertical > .btn-group:first-child:not(:last-child) > button:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child, .btn-group-vertical > .btn-group:last-child:not(:first-child) > button:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn, .btn-group-justified > button,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn, .btn-group-justified > .btn-group button {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"], [data-toggle=\"buttons\"] > button input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > button input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > button input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > button input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control, .input-group input {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus, .input-group input:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control,\n.input-group input {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child),\n  .input-group input:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn,\n  .input-group-sm > .input-group-btn > button.input-group-addon {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn,\n  .input-group-lg > .input-group-btn > button.input-group-addon {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child, .input-group input:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > button,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .btn-group > button,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > button:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn,\n.input-group-btn:last-child > .btn-group:not(:last-child) > button {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child, .input-group input:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > button,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .btn-group > button,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > button:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn,\n.input-group-btn:first-child > .btn-group:not(:first-child) > button {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn, .input-group-btn > button {\n    position: relative; }\n    .input-group-btn > .btn + .btn, .input-group-btn > button + .btn, .input-group-btn > .btn + button, .input-group-btn > button + button {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > button:hover, .input-group-btn > .btn:focus, .input-group-btn > button:focus, .input-group-btn > .btn:active, .input-group-btn > button:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn, .input-group-btn:first-child > button,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn, .input-group-btn:last-child > button,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .nav > li.disabled > a {\n      color: #777777; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #eeeeee;\n    border-color: #337ab7; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 7.5px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control, .navbar-form input {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control,\n      .navbar-form .input-group input {\n        width: auto; }\n    .navbar-form .input-group > .form-control, .navbar-form .input-group > input {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn, .btn-group-sm > button.navbar-btn {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn, .btn-group-xs > button.navbar-btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n  .navbar-default .navbar-brand {\n    color: #777; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #777; }\n  .navbar-default .navbar-nav > li > a {\n    color: #777; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #ddd; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #888; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #777; }\n    .navbar-default .navbar-link:hover {\n      color: #333; }\n  .navbar-default .btn-link {\n    color: #777; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909; }\n  .navbar-inverse .navbar-brand {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #9d9d9d; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #333; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #9d9d9d; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-link:hover {\n      color: #fff; }\n  .navbar-inverse .btn-link {\n    color: #9d9d9d; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/\\A0\";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #777777; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eeeeee;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #777777;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #eeeeee; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #777777;\n    background-color: #fff;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label, button .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #777777; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #5e5e5e; }\n\n.label-primary {\n  background-color: #337ab7; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #286090; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #c9302c; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge, button .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge, .btn-group-xs > button .badge,\n  .btn-group-xs > .btn .badge,\n  .btn-group-xs > button .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #d5d5d5; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c9e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6e1ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7e1b5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9c0; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #5cb85c; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #5bc0de; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #f0ad4e; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #d9534f; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #777777; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 20px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n\n.panel-default {\n  border-color: #ddd; }\n  .panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n    .panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n\n.panel-primary {\n  border-color: #337ab7; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #337ab7; }\n    .panel-primary > .panel-heading .badge {\n      color: #337ab7;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7; }\n\n.panel-success {\n  border-color: #d6e9c6; }\n  .panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #d6e9c6; }\n    .panel-success > .panel-heading .badge {\n      color: #dff0d8;\n      background-color: #3c763d; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6; }\n\n.panel-info {\n  border-color: #bce8f1; }\n  .panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #bce8f1; }\n    .panel-info > .panel-heading .badge {\n      color: #d9edf7;\n      background-color: #31708f; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1; }\n\n.panel-warning {\n  border-color: #faebcc; }\n  .panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #faebcc; }\n    .panel-warning > .panel-heading .badge {\n      color: #fcf8e3;\n      background-color: #8a6d3b; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc; }\n\n.panel-danger {\n  border-color: #ebccd1; }\n  .panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ebccd1; }\n    .panel-danger > .panel-heading .badge {\n      color: #f2dede;\n      background-color: #a94442; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn, .modal-footer button + .btn, .modal-footer .btn + button, .modal-footer button + button {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn, .modal-footer .btn-group button + .btn, .modal-footer .btn-group .btn + button, .modal-footer .btn-group button + button {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203A'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn, .carousel-caption button {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n#root {\n  padding: 20px;\n  background-color: #76B5F0;\n  min-height: 100vh; }\n\nh1 {\n  color: #13304C; }\n", ""]);

	// exports


/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ },

/***/ 586:
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

/***/ 920:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(536);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(230)(content, {});
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

/***/ 921:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(537);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(230)(content, {});
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

/***/ 922:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(538);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(230)(content, {});
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

/***/ 925:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ },

/***/ 926:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ }

});
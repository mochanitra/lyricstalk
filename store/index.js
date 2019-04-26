import Cookie from 'cookie';
import * as firebase from 'firebase/app';
import * as FBSE from '~/services/auth';
export const strict = false;

export const state = () => ({
  windowWidth: null,
  primaryMenu: [],
  footerMenu: [],
  auth: null,
  newauth: null,
  isMobileMenuActive: false,
  menuSticky: false,
  isMobile: false,
  isTablet: false,
  //soundtrack-of-you
  questions: [],
  myQuiz: {
    quiz: [],
    name: null,
    cover: null,
    slug: null,
    owner: null
  },
  loadedQuiz: null,
  quizTaker: {
    taker: null,
    answers: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {}
    }
  },
  //group-feat
  groupFeatQuestions: {},
  groupFeatResults: {
    type: null,
    topic: null,
    players: [],
    location: null,
    results: [],
    date: new Date()
  },
  groupFeatController: {
    currentPlayer: 0,
    questions: [],
    remainingQuestions: [],
    random_index: null,
    currentQuestion: {}
  },
  musicDiscussion: {}
});

export const actions = {
  async nuxtServerInit({ dispatch, commit, state }, { req, app }) {
    // Hotfix axios lang
    let lc = app.i18n.locale === 'th' ? '' : app.i18n.locale;
    app.$axios.defaults.baseURL = `${app.$axios.defaults.baseURL}${lc}`;
    // List categories
    const all = [
      // dispatch('api/listCategories'),
      // dispatch('api/listPages'),
      // dispatch('api/listVenues')
      dispatch('api/listQuestions'),
      dispatch('api/listGroupFeatQuestions'),
      dispatch('api/listMusicDiscussion')
    ];

    await Promise.all(all);

    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     commit('SET_AUTH',user.providerData[0])
    //   } else {
    //     // No user is signed in.
    //   }
    // });

    // console.log(Object.keys(state.pages))

    const primaryMenu = [];

    const footerMenu = primaryMenu.filter(pm => pm.submenu);

    commit('SET_PRIMARY_MENU', primaryMenu);
    commit('SET_FOOTER_MENU', footerMenu);
  }
};

export const mutations = {
  SET_WIDTH(state, width) {
    state.windowWidth = width;
  },
  SET_MOBILE_MENU_ACTIVE(state, bool) {
    state.isMobileMenuActive = bool;
  },
  SET_SEARCH_MODAL_ACTIVE(state, bool) {
    state.isSearchModalActive = bool;
  },
  SET_MENU_STICKY(state, bool) {
    state.menuSticky = bool;
  },
  SET_MOBILE(state, bool) {
    state.isMobile = bool;
  },
  SET_TABLET(state, bool) {
    state.isTablet = bool;
  },
  SET_PRIMARY_MENU(state, menu) {
    state.primaryMenu = menu;
  },
  SET_FOOTER_MENU(state, menu) {
    state.footerMenu = menu;
  },
  SET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
  SET_MYQUIZ(state, x) {
    state.myQuiz.quiz = x;
  },
  SET_MYQUIZ_PROFILE(state, x) {
    state.myQuiz.name = x.name;
    state.myQuiz.cover = x.cover;
    state.myQuiz.slug = x.slug;
    state.myQuiz.owner = x.owner;
  },
  SET_QUIZ_ANSWER(state, { item, answerIndex }) {
    state.quizTaker.answers[item].answer = answerIndex;
  },
  SET_QUIZ_ANSWER_WHY(state, { item, why }) {
    state.quizTaker.answers[item].why = why;
  },
  SET_QUIZ_ANSWER_TAKER(state, taker) {
    state.quizTaker.taker = taker;
  },
  SET_LOADED_QUIZ(state, loadedQuiz) {
    state.loadedQuiz = loadedQuiz;
  },
  SET_AUTH(state, user) {
    // state.auth.displayName = user.displayName;
    // state.auth.email = user.email;
    // state.auth.photoURL = user.photoURL;
    // state.auth.uid = user.uid;
    state.auth = user;
  },
  //group-feat
  SET_GROUPFEAT_QUESTIONS(state, questions) {
    state.groupFeatQuestions = questions;
  },
  SET_GROUPFEAT_TYPE(state, type) {
    state.groupFeatResults.type = type;
  },
  SET_GROUPFEAT_DATA(state, data) {
    state.groupFeatResults.type = data.type;
    state.groupFeatResults.players = data.players;
    state.groupFeatResults.topic = data.topic;
    state.groupFeatResults.location = data.location;
    state.groupFeatResults.photo = data.photo;
  },
  INIT_GROUPFEAT_CONTROLLER(state, data) {
    state.groupFeatController.questions = data.questions;
    state.groupFeatController.remainingQuestions = data.remainingQuestions;
    state.groupFeatController.random_index = data.random_index;
    state.groupFeatController.currentQuestion = data.currentQuestion;
    state.groupFeatController.currentPlayer = data.currentPlayer;
  },
  ADD_GROUPFEAT_RESULT(state, result) {
    state.groupFeatResults.results = result;
  },
  PUSH_RESULT(state, result) {
    state.groupFeatResults.results.push(result);
  },
  UPDATE_RESULT(state, result) {
    state.groupFeatResults.results.pop();
    state.groupFeatResults.results.push(result);
  },

  SET_NEWAUTH(state, data) {
    state.newauth = data;
  },
  ADD_NEWAUTH_SOY(state, data, key) {
    if (state.newauth.quizesList) {
      state.newauth.quizesList[key] = data;
    } else {
      state.newauth.quizesList = {};
      state.newauth.quizesList[key] = data;
    }
  },
  SET_MUSIC_DISCUSSION(state, data) {
    state.musicDiscussion = null;
    state.musicDiscussion = data;
  },
  SET_FOLLOWING_ARTIST(state, id) {
    if (state.newauth.followingArtist) {
      state.newauth.followingArtist[id] = 1;
    } else {
      state.newauth.followingArtist = {};
      state.newauth.followingArtist[id] = 1;
    }
  },
  UNFOLLOW_ARTIST(state, id) {
    if (state.newauth.followingArtist) {
      state.newauth.followingArtist[id] = 0;
    }
  },
  UPDATE_MUSIC_DISCUSSION(state, choice, id, artist, song) {
    if (!state.newauth.musicDiscussion) {
      state.newauth.musicDiscussion = {};
    }
    if (!state.newauth.musicDiscussion[artist]) {
      state.newauth.musicDiscussion[artist] = {};
    }
    state.newauth.musicDiscussion[artist][song] = { vote: choice };
    // dispatch('api/listMusicDiscussion');
    // if (!state.musicDiscussion[artist].discussion[song]['voters']) {
    //   state.musicDiscussion[artist].discussion[song]['voters'] = {};
    // }
    // if (choice == 1) {
    //   if (!state.musicDiscussion[artist].discussion[song]['vote_1']) {
    //     state.musicDiscussion[artist].discussion[song]['vote_1'] = {};
    //   }
    //   state.musicDiscussion[artist].discussion[song]['vote_1'][id] = {
    //     vote: choice
    //   };
    // }
    // if (choice == 2) {
    //   if (!state.musicDiscussion[artist].discussion[song]['vote_2']) {
    //     state.musicDiscussion[artist].discussion[song]['vote_2'] = {};
    //   }
    //   state.musicDiscussion[artist].discussion[song]['vote_2'][id] = {
    //     vote: choice
    //   };
    // }
    // state.musicDiscussion[artist].discussion[song]['voters'][id] = {
    //   vote: choice
    // };
  }
};

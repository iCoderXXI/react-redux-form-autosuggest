import _ from 'lodash';

import initialState from '../data/initialState';

const coverSubstrByTag = (item, val, tag, className) => {
  const re = new RegExp(`(${val})`, "gi");
  if (item.match(re)) {
    return item.replace(re, `<${tag} class="${className}">$1</${tag}>`);
  }
  return item;
}

const filterProfessions = (list, val) => {
  const myVal = val.toLowerCase().trim();
  if (myVal.length<3) return {};
  const filtered = _.pickBy(list, item => {
    return item.toLowerCase().indexOf(myVal) > -1
  });
  return _.forOwn(filtered, (value, key) => {
    filtered[key] = coverSubstrByTag(value, myVal, 'strong', 'professionInput');
  });
}

const getListKey = (list, currKey, direction = 0) => {
  if (!direction) return currKey;
  const keys = Object.getOwnPropertyNames(list);
  let newKey = currKey;
  let index = currKey ? keys.indexOf(currKey) : -1;
  console.log('getListKey: ', currKey, index, keys);
  if (index>=0) {
    // key found
    index = direction>0 ? index+1 : index-1;
    index = index<0 ? keys.length-1 : (index>keys.length-1 ? 0 : index);
  } else {
    // key not found
    index = direction>0 ? 0 : keys.length-1;
  }
  newKey = keys[index];
  console.log('getListKey: ', currKey, index, newKey);
  return newKey;
}

export default (state=initialState.profession, action) => {
    switch (action.type) {
      case 'SET_PROFESSION':
        return {
          ...state,
          val: action.payload,
          listShow: true,
          list: filterProfessions(state.data, action.payload)
        };

      case 'SELECT_PROFESSION':
        console.log('Click detected');
        return {
          ...state,
          id: action.payload,
          val: state.data[action.payload],
          listShow: false,
          list: false
        };

      case 'CANCEL_PROFESSION':
        if (state.listShow) {
          return {
            ...state,
            id: null,
            listShow: false,
            list: false,
            currentListItemId: null
          };
        } else {
          console.log('Blur via click detected');
          return state;
        }


      case 'SELECT_CURRENT_PROFESSION':
        if (state.currentListItemId !== null) {
          return {
            ...state,
            id: state.currentListItemId,
            val: state.data[state.currentListItemId],
            listShow: false,
            list: false,
            currentListItemId: null
          };
        } else {
          return {
            ...state,
            id: null,
            listShow: false,
            list: false,
            currentListItemId: null
          };
        }

      case 'PREV_PROFESSION':
        return {
          ...state,
          currentListItemId: getListKey(
            state.list,
            state.currentListItemId,
            -1
          )
        };

      case 'NEXT_PROFESSION':
        return {
          ...state,
          currentListItemId: getListKey(
            state.list,
            state.currentListItemId,
            1
          )
        };

      case 'PROFESSION_ERROR_ON':
        return {
          ...state,
          errorProfession: true,
        }


      case 'PROFESSION_ERROR_OFF':
        return {
          ...state,
          errorProfession: false,
        }

      default:
        return state;
    }

}

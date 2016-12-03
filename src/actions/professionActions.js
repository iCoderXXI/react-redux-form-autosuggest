export function setProfession(profession) {
  return {
    type: 'SET_PROFESSION',
    payload: profession,
  }
}

export function selectProfession(professionId) {
  return {
    type: 'SELECT_PROFESSION',
    payload: professionId,
  }
}

export function selectCurrentProfession() {
  return {
    type: 'SELECT_CURRENT_PROFESSION',
  }
}

export function cancelProfession() {
  return {
    type: 'CANCEL_PROFESSION',
  }
}

export function prevProfession() {
  return {
    type: 'PREV_PROFESSION',
  }
}

export function nextProfession() {
  return {
    type: 'NEXT_PROFESSION',
  }
}

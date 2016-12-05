import professions from "./professions";
import countries from "./countries";

export default {
  user: {
    name: '',
    surname: '',
    errorName: false,
    errorSurname: false,
  },
  profession: {
    val: '',
    id: null,
    data: professions,
    listShow: false,
    currentListItemId: null,
    list: {},
    title: 'ПРОФЕССИЯ',
    errorProfession: false,
    // [ ..., "IT-специалист", ... ]
  },
  phone: {
    title: 'ТЕЛЕФОН',
    countryId: 'RU',
    phoneCode: countries['RU'].phoneCode,
    phone: '',
    data: countries,
    placeHolder: '999 999 99 99',
    placeHolders: {
      1: '999 999 99 99',
      2: '99 999 99 99',
      3: '9 999 99 99',
      4: ' 999 99 99',
      5: '99 99 99',
    },
    errorPhone: false,
    // {
    //    ...,
    //    "RU": {
    //      "countryName": "Россия",
    //      "phoneCode": "7"
    //    },
    //    ...
    // }
  },
  submit: {
    success: false,
  }
  
}

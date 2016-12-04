import professions from "./professions";
import countries from "./countries";

export default {
  user: {
    name: '',
    surname: '',
  },
  profession: {
    val: '',
    id: null,
    data: professions,
    listShow: false,
    currentListItemId: null,
    list: {}
    // [ ..., "IT-специалист", ... ]
  },
  phone: {
    countryId: 'RU',
    phoneCode: countries['RU'].phoneCode,
    phone: '',
    data: countries
    // {
    //    ...,
    //    "RU": {
    //      "countryName": "Россия",
    //      "phoneCode": "7"
    //    },
    //    ...
    // }
  }
}

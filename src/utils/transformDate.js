'use strict';

import moment from 'moment';

moment.locale('zh-cn');

export default function (date) {
  return moment(date).fromNow();
}

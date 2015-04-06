import moment from 'moment';

export class DateValueConverter {
  toView(value, format) {
    if (!value)
      return null;
    return moment(value).format(format);
  }
}

export class DurationValueConverter {
  toView(value, format) {
    if(!value)
      return null;
    return moment().startOf('day').add(value, 'seconds').format(format);
  }
}
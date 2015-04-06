import {DurationValueConverter} from '../../../src/value_converters/Date';

describe('the duration value converter', () => {
  var converter,
      result;
  beforeEach(() => {
    converter = new DurationValueConverter();
  });

  describe('when value is in seconds', () => {
    beforeEach(() => {
      result = converter.toView(30, 'HH:mm:ss');
    });

    it('returns string with seconds', () => {
      expect(result).toBe('00:00:30');
    });
  });
});
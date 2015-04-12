System.register(['aurelia-http-client'], function (_export) {
  var HttpClient, _classCallCheck, _createClass, url, Flickr;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

      Flickr = (function () {
        function Flickr(http) {
          _classCallCheck(this, Flickr);

          this.heading = 'Flickr';
          this.images = [];
          this.http = http;
        }

        _createClass(Flickr, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.jsonp(url).then(function (response) {
              _this.images = response.content.items;
            });
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [HttpClient];
          }
        }]);

        return Flickr;
      })();

      _export('Flickr', Flickr);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2lEQUVJLEdBQUcsRUFFTSxNQUFNOzs7O3NDQUpYLFVBQVU7Ozs7Ozs7OztBQUVkLFNBQUcsR0FBRyw2RkFBNkY7O0FBRTFGLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsSUFBSSxFQUFDO2dDQUZOLE1BQU07O0FBR2YsY0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDeEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQU5VLE1BQU07O2lCQVFULG9CQUFFOzs7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDM0Msb0JBQUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3RDLENBQUMsQ0FBQztXQUNKOzs7aUJBWFksa0JBQUc7QUFBRSxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1dBQUU7OztlQUQ3QixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJmbGlja3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==
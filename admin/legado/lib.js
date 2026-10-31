var __lib = (function () {
  function _buildQueryString(params) {
    var pairs = [];
    for (var key in params) {
      if (!Object.prototype.hasOwnProperty.call(params, key)) continue;
      var value = params[key];
      if (value === undefined || value === null) continue;
      if (Object.prototype.toString.call(value) === '[object Array]') {
        for (var i = 0; i < value.length; i++) {
          pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value[i])));
        }
      } else {
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value)));
      }
    }
    return pairs.length ? '?' + pairs.join('&') : '';
  }

  return {
    buildQueryString: _buildQueryString,
    appendQueryString: function (url, params) {
      var qs = _buildQueryString(params);
      if (!qs) return url;
      return url.indexOf('?') !== -1 ? url + '&' + qs.substring(1) : url + qs;
    }
  };
})();

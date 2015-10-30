angular.module('your_app_name.filters', [])

.filter('rawHtml', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
})

/**
 * Truncate Filter
 * @Param text
 * @Param length, default is 10
 * @Param end, default is "..."
 * @return string
 */
.filter('truncate', function () {
  return function (text, length, end) {
    if (isNaN(length))
        length = 10;

    if (end === undefined)
        end = "...";

    if (text.length <= length || text.length - end.length <= length) {
        return text;
    }
    else {
        return String(text).substring(0, length-end.length) + end;
    }
  };
})

;
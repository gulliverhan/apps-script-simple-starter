var ObjectName = (function() {
  var ret = {};
  ret.name = 'ObjectName';
  ret.showName = function() {
    return ret.name;
  };
  return ret;
})();
/**
 * Debugging function
 * Use function name in all caps to indicate that it's only called by ui
 */
function DEBUG_OBJECTNAME() {
  var RES = ObjectName.showName();
  Logger.log(RES);
}
/**
 * Function used as a Spreadsheet custom function
 * All caps as the name to indicate it's used externally
 *
 * @return {String} object name
 */
function CUSTOM_WORKSHEET_FUNCTION() {
  var RES = ObjectName.showName();
  return RES;
}

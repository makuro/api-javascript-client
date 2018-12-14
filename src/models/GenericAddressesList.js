/**
 * Onfido API
 * The Onfido API is used to submit check requests.
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'models/GenericAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GenericAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.GenericAddressesList = factory(root.Onfido.ApiClient, root.Onfido.GenericAddress);
  }
}(this, function(ApiClient, GenericAddress) {
  'use strict';




  /**
   * The GenericAddressesList model module.
   * @module models/GenericAddressesList
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>GenericAddressesList</code>.
   * @alias module:models/GenericAddressesList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GenericAddressesList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/GenericAddressesList} obj Optional instance to populate.
   * @return {module:models/GenericAddressesList} The populated <code>GenericAddressesList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [GenericAddress]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:models/GenericAddress>} addresses
   */
  exports.prototype['addresses'] = undefined;



  return exports;
}));



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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.Address = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Address model module.
   * @module models/Address
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:models/Address
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/Address} obj Optional instance to populate.
   * @return {module:models/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('flat_number')) {
        obj['flat_number'] = ApiClient.convertToType(data['flat_number'], 'String');
      }
      if (data.hasOwnProperty('building_number')) {
        obj['building_number'] = ApiClient.convertToType(data['building_number'], 'String');
      }
      if (data.hasOwnProperty('building_name')) {
        obj['building_name'] = ApiClient.convertToType(data['building_name'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('sub_street')) {
        obj['sub_street'] = ApiClient.convertToType(data['sub_street'], 'String');
      }
      if (data.hasOwnProperty('town')) {
        obj['town'] = ApiClient.convertToType(data['town'], 'String');
      }
      if (data.hasOwnProperty('postcode')) {
        obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * The flat number of this address
   * @member {String} flat_number
   */
  exports.prototype['flat_number'] = undefined;
  /**
   * The building number of this address
   * @member {String} building_number
   */
  exports.prototype['building_number'] = undefined;
  /**
   * The building name of this address
   * @member {String} building_name
   */
  exports.prototype['building_name'] = undefined;
  /**
   * The street of the applicant’s address
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * The sub-street of the applicant’s address
   * @member {String} sub_street
   */
  exports.prototype['sub_street'] = undefined;
  /**
   * The town of the applicant’s address
   * @member {String} town
   */
  exports.prototype['town'] = undefined;
  /**
   * The postcode or ZIP of the applicant’s address
   * @member {String} postcode
   */
  exports.prototype['postcode'] = undefined;
  /**
   * The 3 character ISO country code of this address. For example, GBR is the country code for the United Kingdom
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date the applicant started living at this address
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The date the applicant left this address. If current residence, leave null
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The address state. US states must use the USPS abbreviation (see also ISO 3166-2:US), for example AK, CA, or TX.
   * @member {String} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));



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
    define(['ApiClient', 'models/Address', 'models/IdNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./IdNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.Applicant = factory(root.Onfido.ApiClient, root.Onfido.Address, root.Onfido.IdNumber);
  }
}(this, function(ApiClient, Address, IdNumber) {
  'use strict';




  /**
   * The Applicant model module.
   * @module models/Applicant
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>Applicant</code>.
   * @alias module:models/Applicant
   * @class
   * @param firstName {String} The applicant’s first name
   * @param lastName {String} The applicant’s surname
   */
  var exports = function(firstName, lastName) {
    var _this = this;





    _this['first_name'] = firstName;

    _this['last_name'] = lastName;














  };

  /**
   * Constructs a <code>Applicant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/Applicant} obj Optional instance to populate.
   * @return {module:models/Applicant} The populated <code>Applicant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('middle_name')) {
        obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('dob')) {
        obj['dob'] = ApiClient.convertToType(data['dob'], 'Date');
      }
      if (data.hasOwnProperty('telephone')) {
        obj['telephone'] = ApiClient.convertToType(data['telephone'], 'String');
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('sandbox')) {
        obj['sandbox'] = ApiClient.convertToType(data['sandbox'], 'Boolean');
      }
      if (data.hasOwnProperty('nationality')) {
        obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
      }
      if (data.hasOwnProperty('mothers_maiden_name')) {
        obj['mothers_maiden_name'] = ApiClient.convertToType(data['mothers_maiden_name'], 'String');
      }
      if (data.hasOwnProperty('country_of_birth')) {
        obj['country_of_birth'] = ApiClient.convertToType(data['country_of_birth'], 'String');
      }
      if (data.hasOwnProperty('town_of_birth')) {
        obj['town_of_birth'] = ApiClient.convertToType(data['town_of_birth'], 'String');
      }
      if (data.hasOwnProperty('previous_last_name')) {
        obj['previous_last_name'] = ApiClient.convertToType(data['previous_last_name'], 'String');
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [Address]);
      }
      if (data.hasOwnProperty('id_numbers')) {
        obj['id_numbers'] = ApiClient.convertToType(data['id_numbers'], [IdNumber]);
      }
    }
    return obj;
  }

  /**
   * The unique identifier for the applicant
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date and time when this applicant was created
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The uri of this resource
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * The applicant’s title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The applicant’s first name
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The applicant’s middle name(s) or initial
   * @member {String} middle_name
   */
  exports.prototype['middle_name'] = undefined;
  /**
   * The applicant’s surname
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The applicant’s email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The applicant’s gender. Valid values are male and female
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * The applicant’s date of birth
   * @member {Date} dob
   */
  exports.prototype['dob'] = undefined;
  /**
   * The applicant’s landline phone number
   * @member {String} telephone
   */
  exports.prototype['telephone'] = undefined;
  /**
   * The applicant’s mobile phone number
   * @member {String} mobile
   */
  exports.prototype['mobile'] = undefined;
  /**
   * The country where this applicant will be checked. This must be a three-letter ISO code e.g. GBR or USA
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {Boolean} sandbox
   */
  exports.prototype['sandbox'] = undefined;
  /**
   * The applicant's nationality. This must be a three-letter ISO code e.g. GBR or USA
   * @member {String} nationality
   */
  exports.prototype['nationality'] = undefined;
  /**
   * The applicant’s mothers maiden name
   * @member {String} mothers_maiden_name
   */
  exports.prototype['mothers_maiden_name'] = undefined;
  /**
   * The applicant’s country of birth
   * @member {String} country_of_birth
   */
  exports.prototype['country_of_birth'] = undefined;
  /**
   * The applicant’s town of birth
   * @member {String} town_of_birth
   */
  exports.prototype['town_of_birth'] = undefined;
  /**
   * The applicant’s previous last name
   * @member {String} previous_last_name
   */
  exports.prototype['previous_last_name'] = undefined;
  /**
   * @member {Array.<module:models/Address>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * @member {Array.<module:models/IdNumber>} id_numbers
   */
  exports.prototype['id_numbers'] = undefined;



  return exports;
}));



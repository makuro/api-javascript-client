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
    define(['ApiClient', 'models/Report'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Report'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.CheckCreationRequest = factory(root.Onfido.ApiClient, root.Onfido.Report);
  }
}(this, function(ApiClient, Report) {
  'use strict';




  /**
   * The CheckCreationRequest model module.
   * @module models/CheckCreationRequest
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>CheckCreationRequest</code>.
   * @alias module:models/CheckCreationRequest
   * @class
   * @param type {String} standard or express
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;









  };

  /**
   * Constructs a <code>CheckCreationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/CheckCreationRequest} obj Optional instance to populate.
   * @return {module:models/CheckCreationRequest} The populated <code>CheckCreationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('redirect_uri')) {
        obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
      }
      if (data.hasOwnProperty('reports')) {
        obj['reports'] = ApiClient.convertToType(data['reports'], [Report]);
      }
      if (data.hasOwnProperty('report_type_groups')) {
        obj['report_type_groups'] = ApiClient.convertToType(data['report_type_groups'], ['String']);
      }
      if (data.hasOwnProperty('criminal_history_report_details')) {
        obj['criminal_history_report_details'] = ApiClient.convertToType(data['criminal_history_report_details'], Object);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('suppress_form_emails')) {
        obj['suppress_form_emails'] = ApiClient.convertToType(data['suppress_form_emails'], 'Boolean');
      }
      if (data.hasOwnProperty('charge_applicant_for_check')) {
        obj['charge_applicant_for_check'] = ApiClient.convertToType(data['charge_applicant_for_check'], 'Boolean');
      }
      if (data.hasOwnProperty('brand_id')) {
        obj['brand_id'] = ApiClient.convertToType(data['brand_id'], 'String');
      }
      if (data.hasOwnProperty('async')) {
        obj['async'] = ApiClient.convertToType(data['async'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * standard or express
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * For standard checks, redirect to this URI when the applicant has submitted their data.
   * @member {String} redirect_uri
   */
  exports.prototype['redirect_uri'] = undefined;
  /**
   * Array of Reports being requested for this check.
   * @member {Array.<module:models/Report>} reports
   */
  exports.prototype['reports'] = undefined;
  /**
   * Array containing ids of the Report type groups being requested for.
   * @member {Array.<String>} report_type_groups
   */
  exports.prototype['report_type_groups'] = undefined;
  /**
   * Hash containing properties required for standard or enhanced UK criminal history reports. Only required for checks containing these specific reports. See Criminal history report details arguments.
   * @member {Object} criminal_history_report_details
   */
  exports.prototype['criminal_history_report_details'] = undefined;
  /**
   * Array of tags being assigned to this check.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * For standard checks, applicant form will not be automatically sent if this is set to true. You can manually send the form at any time after the check has been created, using the link found in the form_uri attribute of the check object. Defaults to false (i.e., form will be sent automatically by default).
   * @member {Boolean} suppress_form_emails
   */
  exports.prototype['suppress_form_emails'] = undefined;
  /**
   * For standard checks, applicants will be presented with a mandatory payment screen before they can submit the applicant form, if this is set to true. In this case, your account will not be charged. Defaults to false.
   * @member {Boolean} charge_applicant_for_check
   */
  exports.prototype['charge_applicant_for_check'] = undefined;
  /**
   * ID of the brand under which the check should be conducted. Optional.
   * @member {String} brand_id
   */
  exports.prototype['brand_id'] = undefined;
  /**
   * If this is set to true, checks will be queued for processing and no reports will be returned immediately. Defaults to false
   * @member {Boolean} async
   */
  exports.prototype['async'] = undefined;



  return exports;
}));



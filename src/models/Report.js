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
    root.Onfido.Report = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Report model module.
   * @module models/Report
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>Report</code>.
   * @alias module:models/Report
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/Report} obj Optional instance to populate.
   * @return {module:models/Report} The populated <code>Report</code> instance.
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
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('sub_result')) {
        obj['sub_result'] = ApiClient.convertToType(data['sub_result'], 'String');
      }
      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], Object);
      }
      if (data.hasOwnProperty('breakdown')) {
        obj['breakdown'] = ApiClient.convertToType(data['breakdown'], Object);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], Object);
      }
      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [Object]);
      }
    }
    return obj;
  }

  /**
   * The unique identifier for the report.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date and time at which the report was first initiated.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The API endpoint to retrieve the report.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * Report type string identifier.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The current state of the report in the checking process.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The result of the report.
   * @member {String} result
   */
  exports.prototype['result'] = undefined;
  /**
   * The sub_result of the report. It gives a more detailed result for document reports only, and will be null otherwise.
   * @member {String} sub_result
   */
  exports.prototype['sub_result'] = undefined;
  /**
   * Report variant string identifier. Some reports e.g. criminal_history have sub-types, which are identified by this field.
   * @member {String} variant
   */
  exports.prototype['variant'] = undefined;
  /**
   * Report options. Some reports e.g. criminal_history expose additional options.
   * @member {Object} options
   */
  exports.prototype['options'] = undefined;
  /**
   * The details of the report. This is specific to each type of report.
   * @member {Object} breakdown
   */
  exports.prototype['breakdown'] = undefined;
  /**
   * The properties associated with the report, if any.
   * @member {Object} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * Array of objects with document ids that were used in the Onfido engine. [ONLY USED IN A DOCUMENT CHECK]
   * @member {Array.<Object>} documents
   */
  exports.prototype['documents'] = undefined;



  return exports;
}));



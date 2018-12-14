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
    root.Onfido.LivePhoto = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LivePhoto model module.
   * @module models/LivePhoto
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>LivePhoto</code>.
   * @alias module:models/LivePhoto
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>LivePhoto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/LivePhoto} obj Optional instance to populate.
   * @return {module:models/LivePhoto} The populated <code>LivePhoto</code> instance.
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
      if (data.hasOwnProperty('applicant_id')) {
        obj['applicant_id'] = ApiClient.convertToType(data['applicant_id'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('download_href')) {
        obj['download_href'] = ApiClient.convertToType(data['download_href'], 'String');
      }
      if (data.hasOwnProperty('file_name')) {
        obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
      }
      if (data.hasOwnProperty('file_size')) {
        obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Integer');
      }
      if (data.hasOwnProperty('file_type')) {
        obj['file_type'] = ApiClient.convertToType(data['file_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique identifier for the document.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date and time at which the document was uploaded.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The id of the applicant the live photo belongs to.
   * @member {String} applicant_id
   */
  exports.prototype['applicant_id'] = undefined;
  /**
   * The uri of this resource.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * The uri that can be used to download the document.
   * @member {String} download_href
   */
  exports.prototype['download_href'] = undefined;
  /**
   * The name of the uploaded file.
   * @member {String} file_name
   */
  exports.prototype['file_name'] = undefined;
  /**
   * The size of the file in bytes.
   * @member {Integer} file_size
   */
  exports.prototype['file_size'] = undefined;
  /**
   * The file type of the uploaded file.
   * @member {String} file_type
   */
  exports.prototype['file_type'] = undefined;



  return exports;
}));



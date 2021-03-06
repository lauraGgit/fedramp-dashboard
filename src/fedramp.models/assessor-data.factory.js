(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('AssessorData', AssessorDataFactory);

    AssessorDataFactory.$inject = [];

    function AssessorDataFactory () {
        return AssessorData;

        /**
         * The raw assessors data model with opinionated transformations
         * @constructor
         * @memberof Models
         */
        function AssessorData (options) {
            // Scope `this` to self
            var self = this;

            var mapping = {
                'Name': 'name',
                'Accreditation_Date' : 'accreditationDate',
                'Logo': 'logo',
                'Description': 'description',
                'POC_Name': 'pocName',
                'POC_Email': 'pocEmail',
                'website': 'website'
            };

            /**
             * Assessor name
             * @member {string}
             * @memberof Models.AssessorData
             */
            self.name = '';

            /**
             * Assessor accreditation date
             * @member {Date}
             * @memberof Models.AssessorData
             */
            self.accreditationDate = '';

            /**
             * Assessor logo
             * @member {string}
             * @memberof Models.AssessorData
             */
            self.logo = '';

            /**
             * Assessor description
             * @member {string}
             * @memberof Models.AssessorData
             */
            self.description = '';

            /**
             * Assessor point of contact name
             * @member {string}
             * @memberof Models.AssessorData
             */
            self.pocName = '';

            /**
             * Assessor point of contact email
             * @member {string}
             * @memberof Models.AssessorData
             */
            self.pocEmail = '';

            /**
             * Assessor website
             * @member {string}
             * @memberof Models.AssessorData
             */
            self.website = '';

            /**
             * Initialize the assessor data object.
             *
             * @param {object} options
             *  A dictionary of options to configure the assessor
             *
             * @returns
             *  The provider
             */
            self.init = function (options) {
                if (!options) {
                    return;
                }

                for (var x in options) {
                    if (!options.hasOwnProperty(x)) {
                        continue;
                    }
                    var key = mapping[x];
                    if (key) {
                        self[key] = options[x];
                    } else {
                        if (self.hasOwnProperty(x)) {
                            self[x] = options[x];
                        }
                    }
                }

                return self;
            };

            /**
             * Get a unique hash or identifier for the provider.
             * @public
             * @memberof Models.Data
             *
             * @returns
             *  The hash
             */
            self.hash = function () {
                var id = '' + self.name + self.accreditationDate;
                if (id.length === 0) {
                    return null;
                }
                return id;
            };

            return self.init(options);
        }
    }
})();

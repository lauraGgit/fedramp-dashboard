(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('Assessor', AssessorFactory);

    AssessorFactory.$inject = [];

    function AssessorFactory () {
        /**
         * The independent assessor
         * @constructor
         * @memberof Models
         */
        function Assessor (options) {
            // Scope `this` to self
            var self = this;

            /**
             * The model type
             * @member {string}
             * @memberof Models.Assessor
             */
            self.type = 'assessor';

            /**
             * The agency name
             * @member {string}
             * @memberof Models.Assessor
             */
            self.name = '';

            /**
             * The number of times the assessor was used
             * @member {integer}
             * @memberof Models.Assessor
             */
            self.reuses = 0;

            /**
             * Providers associated to the assessor
             * @member {array}
             * @memberof Models.Assessor
             */
            self.providers = [];

            /**
             * Products associated to the assessor
             * @member {array}
             * @memberof Models.Assessor
             */
            self.products = [];

            /**
             * Agencies associated to the assessor
             * @member {array}
             * @memberof Models.Assessor
             */
            self.agencies = [];

            /**
             * The date assessor was accredited
             * @member {string}
             * @memberof Models.Assessor
             */
             self.accreditationDate = '';

            /**
             * Text used to describe primary metric label
             * @member {string}
             * @memberof Models.Assessor
             */
            self.useLabel = 'Assessed';

            /**
             * The description provided by the assessor
             * @member {string}
             * @memberof Models.Assessor
             */
            self.description = '';

            /**
             * Assessor logo
             * @member {string}
             * @memberof Models.Assessor
             */
            self.logo = '';

            /**
             * Assessor description
             * @member {string}
             * @memberof Models.Assessor
             */
            self.description = '';

            /**
             * Assessor point of contact name
             * @member {string}
             * @memberof Models.Assessor
             */
            self.pocName = '';

            /**
             * Assessor point of contact email
             * @member {string}
             * @memberof Models.Assessor
             */
            self.pocEmail = '';

            /**
             * Assessor website
             * @member {string}
             * @memberof Models.Assessor
             */
            self.website = '';
        }

        return Assessor;
    }
})();

describe('the grid component', function () {
    'use strict';

    var component;
    var $componentController;
    var gridFilter;
    var grid;
    var $log;
    var $location;
    var filteredItems;
    var $scope;
    var $element;
    var dataFactory;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        dataFactory = new TestDataFactory(inject);

        grid = dataFactory.gridComponent();
        grid.$onInit();
    });


    it('should filter a basic string property in a list', function () {
        gridFilter = dataFactory.gridFilterComponent({
            gridController: grid
        });

        gridFilter.$onInit();
        gridFilter.selectedOptionValues = [{value: 'Amazon', selected: false}];
        gridFilter.applyFilter();
        expect(gridFilter.filtered.length).toBe(1);
    });

    it('should select a value to filter on', function () {
        var option = {value: 'Amazon', selected: false};
        gridFilter = dataFactory.gridFilterComponent({
            property: 'name',
            header: 'Name',
            id: 'name',
            option: null,
            expanded: true,
            opened: true,
            // simulate require
            gridController: grid
        });

        gridFilter.$onInit();
        expect(gridFilter.selectedOptionValues.length).toBe(0);
        gridFilter.selectOption(option);
        gridFilter.applyFilter();
        expect(gridFilter.filtered.length).toBe(1);
        expect(gridFilter.selectedOptionValues.length).toBe(1);
        gridFilter.selectOption(option);
    });

    it('should load existing selected values', function () {
        gridFilter = dataFactory.gridFilterComponent({
            property: 'name',
            id: 'name',
            header: 'Name',
            option: null,
            selectedOptionValues: [{value: 'Amazon'}],
            expanded: true,
            opened: true,
            // simulate require
            gridController: grid
        });

        gridFilter.$onInit();
        expect(gridFilter.selectedOptionValues.length).toBe(1);
    });

    it('should complain if onUpdate is not specified', function () {
        gridFilter = dataFactory.gridComponent({
            onUpdate: null
        });

        expect(gridFilter.$onInit).toThrow();
    });
});

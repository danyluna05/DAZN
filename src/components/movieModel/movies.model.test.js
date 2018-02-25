require(`./movies.model`);

const N_NAMESPACE = 'nn',
    MODULE_NAME = 'moviesModel';

describe(`Instance of ${MODULE_NAME.toUpperCase()} initialized WITHOUT state`, () => {
    beforeEach(() => {
        this.instance = window[N_NAMESPACE][MODULE_NAME]();        
    });

    test(`should get the movies`, () => {
        var consoleSpy = spyOn($, 'getJSON');
        jasmine.Ajax.stubRequest('/some/url').andReturn({
            'status': 200, 
            'contentType': 'text/plain',
            'responseText': 'Hello from the world'
        });
        this.instance.searchMovie('coco',1 ).
        expect(consoleSpy).toHaveBeenCalled();
    });
});


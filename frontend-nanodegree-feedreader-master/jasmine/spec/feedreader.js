/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

// All feeds have URL
        it('all feeds has url and not empty', function () {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                var url = allFeeds[i].url;
                expect(url).toBeDefined();
                expect(url).not.toBe('');
            }
        });

// All feeds have Names
        it('all feeds has name and not empty', function () {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                var name = allFeeds[i].name;
                expect(name).toBeDefined();
                expect(name).not.toBe('');
            }
        });

    });

// Testing suite of Menu
    describe('the menu', function () {

// menu is hidden by default
    it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);

    });

// menu is unvisible by default
    it('menu visible on click', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(false);
        });

// menu is visible by default
    it('menu hidden on click', function () {
        $('a.menu-icon-link').trigger('click');
        expect($('.menu-hidden').is(':visible')).toBe(true);
    });
  });

// Testing suite of Initial Entries
  describe("Initial Entries", function () {
    // Avoid duplicated setup
    // Before loading feed
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
    });

    it('has at least 1 entry after loadFeed', function (done) {

            expect($('.feed .entry').length).toBeGreaterThan(0);
// Invoke done callback function
            done();
        });

    });

// Testing suite of New Feed Selection
describe('New Feed Selection', function() {
        var initialFeed,
            newFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

// the content changes
        it('changes its loaded content', function(done) {
            expect(initialFeed != newFeed).toBe(true);
            done();
        });
    });

}());

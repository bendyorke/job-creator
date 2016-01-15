# Job Creator

Create job's with minimal typing.

## Getting started

A demo is available on bendyorke.com/job-creator

To start your own server, clone this repo then run:

```
$ npm install
$ npm start
```

Your server will now be available at `0.0.0.0:3300`.  You can specify the host & port like so:

```
$ HOST=localhost PORT=9001 npm start
```

## Things included in this project

- Fully flushed project
- Written in ES6
- CSS is locally scoped
- Uses React & Redux
- Responsive

## Things that need to be done

- Improve content (easiest).  It currently uses really bad content to generate the ads.
- Improve the current data structure.  The biggest flaw at the moment is that with any change to skills or benefits it re-spins the generated content, causing your ad to change a lot more than desired.  I'd like to lock in the 'spin' once it's added.
- Improve responsiveness.  On mobile, you cannot view a preview.  I'd like to add a button to switch between preview mode and edit mode.
- Improve typeahead.  Currently using an open-source typeahead that is missing some critical features (event's firing at wrong times).  Would like to improve that, or roll my own typeahead.
- Add better handling of nil content.  Currently, there is a lot of blank space in places.  I'd like to handle those better - making them look collapsed, or not show at all, instead of just empty.
- Improve location handling.  Currently it just reads from a list, I'd like to add geoip to at least add the current city to the list.
- Upgrade dependancies.  I tried using react-router 2.0 with redux-simple-router 2.0.  Given that I used beta's of both, there is already more stable versions available for both of them, albeit with API changes.  I need to go through and get up to a more stable version.

## New features

- Swap the textarea at the bottom to a typeahead with support for content tokens. Instead of writing scentences about your company, or the job, you can just enter keywords: 'Fun', 'Professional', 'Client interaction'.  These could really buff out a job posting without doing any actual creative thinking.
- Instead of the next step being Publish, have a 'Review' step.  With all the auto generated content, this would be the place to go through, make edits, possibly preview how it might look on different sites.  

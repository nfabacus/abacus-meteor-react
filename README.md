new app using the Meteor and React for everyone tutorial code as a starting point
1) I am going to apply new css.
    - Deleted package: stolinski:stylus-multi (to use standard css/sass instead of stylus)
    - Deleted styles.styl file so that I can create a noew style file.
    Issue: background image is not displaying... with normal background image css.
    Why?  Is this meteor issue?  How can I get around with this issue?
    
2) At the same time, I am building more pages to the site.

Update 22 April, 2016
1) Issue was that style sheet had to be in the root. and image files needed to be in public folder.  Now background image loads.

Update 27 April, 2016
I am trying to make Parent component (MainLayoutWrapper) to listen to a child component (navButton), but I am not succeeding at the moment.  Error cannot read property 'navButtonOn' of undefined...

Problem solved: I just needed to add .bind(this) in some places.
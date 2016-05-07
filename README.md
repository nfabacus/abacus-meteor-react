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

1 May, 2016
localhost:3000/testpage
I am testing communication between parent and child components
Issue: Child component (TestChild3) does not pick up the state change made in the parent component (change is sent to the child component via props to its state).
Now this issue is solved.

3 May, 2016
I am stuck with below issues with loginPanel.
1) When a user login, I want the login panel to hide. Difficulty due to the use of blaze in react.
2) I cannot make username only (with password) without email, but I don't know how to do it with the AccountsTemplate and its configuration.
3) While I need to solve issue 2, registration panel has to have email input.

6 May, 2016
The above issue is mostly solved using just react without using blaze.
But, now too many states(component) to communicate with each other.  I wonder if I am doing right.
also, I cannot pass and call back props in the Welcome component (content) to from its parent component.  I am trying to make the login button in the Welcome page to work....

7 May, 2016
I am trying to use Meteor session.  But, I get an error in my console. Error when doing SSR. path:/testpage: Session is not defined
ReferenceError: Session is not defined
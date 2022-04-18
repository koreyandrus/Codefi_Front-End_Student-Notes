# Forms Exercises

**Use Git or GitHub Desktop to push each exercise to GitHub**

_NOTE_: Make projects all non-strict mode

---

---

## Exercise 1: Log to the console form values using the template-driven approach

- Generate a new angular application called `BasicTemplateDrivenExercise`
- In app.component.html, create a form element. Inside the form element, create an input element alongside a button element. Give the button element a type set to submit and content "submit".
- Give the input element an attribute name that is set to `"username"`
- Use the template-driven approach to access the values from this form and log them to the console.

**There are a couple ways to access the reference of the form, by passing the reference to a method or by the view child decorator**

reference: https://angular.io/guide/forms

Example of `@ViewChild`

```typescript
@ViewChild('f') form:NgForm;
```

---

## Exercise 2: Log to the console form values using the template-driven approach

- Generate a new angular application called `AnotherBasicTemplateDrivenExercise`
- In app.component.html, create a form element. Inside the form element, create an input element alongside a button element. Give the button element a type set to submit and content "submit". Give the input element an attribute name that is set to `"firstname"`.
- Create another input and set its name to `"lastname"`
- Create another input and set its name to `"username"`
- Create a label element for each input with their corresponding "names". For example,

```html
<label>Firstname: </label> <input ......
```

- Use the template-driven approach to access the values from this form and log them to the console.

---

## Exercise 3: Add validators to the form inputs

- Generate a new angular application called BasicFormValidatorsExercise
- In app.component.html, create a form element. Inside the form element, create an input element alongside a button element. Give the button element a type set to submit and content "submit". Give the input element a name that is set to `"username"`.
- Add the built-in 'required' validator to the input element
- Use the template-driven approach to log the form's values to the console.
- When you inspect the input element on the page, once the input field is empty, you should see invalid added onto the input element. However, you should see valid added onto the input element once you type into the field.

---

## Exercise 4: Implement a disabled button for when the form is invalid and style the input fields for when the form is invalid

- Generate a new angular application called `DisabledFormButtonValidatorsExercise`
- In app.component.html, create a form with input elements and a submit button.
- All input elements should be required.
- If the form is invalid, disable the submit button.
- When the form is invalid, style the form's input element to show it is an invalid example of the style. Make sure the user touches the input element first.

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

---

## Exercise 5: when the form is invalid, use ngIf to let the user know it is invalid

- Generate a new angular application called `NgIfInvalidFormExercise`
- In app.component.html, create a form with an input element, label element, and a button element. Configure the setup like the previous exercises. (name attribute, type attribute, ect)
- The input element should have a validation of required
- Disable the button and style the form when it is invalid
- Use ngIf to display a message "invalid input" for when the form is invalid
- Ensure the user "touches" the field before displaying/styling the application.

---

## Exercises 6-10: Reactive forms

- Repeat exercises 1-5 but instead of the template-driven approach, use the reactive approach. Again, refer to your code coach's notes and references.

reference: https://angular.io/guide/reactive-forms

---

## Exercise 11: Create your own custom Validator

- Generate a new angular application called `CustomValidatorExercise`
- In app.component.html, create a form and an input element, label element, and a submit button. Then, configure the setup as a reactive approach. Fill in the label with anything, add the appropriate attributes, ect.
- Create a custom validation so that the input field needs at least five characters to be valid.
- When it is invalid, disable the button, otherwise enable the button.

---

## Exercise 12: Login Project

- Generate a new angular application called `LoginFormsProject`
- Generate a component home and login-page
- Create its corresponding routes to each component using the angular routing features
- Whenever you are at path '', redirect to login.
- Generate a navbar component. Then, use bootstrap to set up a nice-looking navbar.
  - Add router links to be able to navigate from home to the login page(vice versa)
- Configure the login-page with the following form:
  - Create a form (template or reactive) that allows the user to enter a username and password. Create a button and set its attribute type to submit with content "login".
  - Make both username and password required
  - When the form is invalid, disable the login button
- When the user logins, navigate the user to the home component. Please make it so that you can see the user's username and password when logging in when they are on the home page.
  - You may have to use a service to allow both components to communicate with each other.
  - Whenever the user "logins", there should be text in the navbar that changes from "login" to "logout".
- Allow the user also to log out and erase the user data.

---

## Exercise 13: More form practice

- Download staring code for [class 10 Angular Example](https://github.com/WilderDev/Class-10-Angular-Forms-Example)
- In the app.component.html file, create a container div with a row inside that renders both of our components side-by-side.
- Inside the "BookFormTemplateComponent": Create a template-driven form that, when submitted, displays all the relevant data below the form.
  - Title, Author, and Genre should all be required inputs that display an error message with a red border when touched and invalid.
  - Set 'mystery' as the default value on the genre select box.
  - Use two-way-binding to display the book's name after the word "Submit" on the submit button.
  - Display the title, author, and genre below the form when a user clicks "Submit". (Also, reset the form.)
- Inside the "BookFormReactiveComponent": Create a reactive-driven form that, when submitted, displays all the relevant data below the form.
  - Title, Author, and Genre should all be required inputs that display an error message with a red border when touched and invalid.
  - Set 'mystery' as the default value on the genre select box.
  - Display the title, author, and genre below the form when a user clicks "Submit". (Also, reset the form.)
- Publish to Github. Inside the README.md file, write your experience of the different approaches.
  - Define the "Template-Driven-Approach" and the "Reactive-Driven-Approach".
  - Explain their differences and what each excels at doing.
  - Write about what you find easy and what is challenging about each.

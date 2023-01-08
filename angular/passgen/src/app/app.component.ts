import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onInputLength(event: Event) {
    const { value } = event.target as HTMLInputElement;

    const valueToNumber = Number(value);

    if (Number.isInteger(valueToNumber)) this.passwordLength = valueToNumber;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '~`! @#$%^&*()_-+={[}]|:;"\'<,>.?/';
    let characters = '';

    if (this.includeLetters) characters += letters;
    if (this.includeNumbers) characters += numbers;
    if (this.includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[index];
    }

    this.password = generatedPassword;
  }
}

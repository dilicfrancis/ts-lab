import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, filter, scan } from 'rxjs';
import { Checkr } from './checkr';

@Component({
  selector: 'app-solvefm',
  templateUrl: './solvefm.component.html',
  styleUrls: ['./solvefm.component.css'],
})
export class SolvefmComponent {
  solveRate = 0;
  equation = new FormGroup(
    {
      x: new FormControl(this.randomNumber()),
      y: new FormControl(this.randomNumber()),
      response: new FormControl(''),
    },
    [Checkr.validate('x', 'y', 'response')]
  );

  get x() {
    return this.equation.value.x;
  }

  get y() {
    return this.equation.value.y;
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  ngOnInit(): void {
    // const clock = new Date();
    // let solveCount = 0;

    this.equation.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        scan(
          (acc) => {
            return { solveCount: acc.solveCount + 1, clock: acc.clock };
          },
          { solveCount: 0, clock: new Date() }
        ),
        delay(150)
      )
      .subscribe(({ clock, solveCount }) => {
        this.solveRate =
          (new Date().getTime() - clock.getTime()) / solveCount / 1000;

        // solveCount++;
        // this.solveRate =
        //   (new Date().getTime() - clock.getTime()) / solveCount / 1000;
        //if (value === 'INVALID') return;
        this.equation.patchValue({
          x: this.randomNumber(),
          y: this.randomNumber(),
          response: '',
        });
        // this.equation.setValue({
        //   x: this.randomNumber(),
        //   y: this.randomNumber(),
        //   response: '',
        // });
        // this.equation.controls.x.setValue(this.randomNumber());
        // this.equation.controls.y.setValue(this.randomNumber());
        // this.equation.controls.response.setValue('');
      });
  }
}

import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AppSnackBarService {
  public constructor(private snackBar: MatSnackBar) {}

  public show(message: string, theme?: string, duration?: number): void {
    // Let 80ms for every character to be read.
    // Dynamically adjust snack bar's show duration based on message's length.
    const showDuration = message ? message.length * 80 : 3e2;
    const minShowDuration = 3e3;

    this.snackBar.open(
      message,
      undefined, {
      duration: showDuration < minShowDuration ? minShowDuration : showDuration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-theme', theme || '']
    });
  }

  public close(): void {
    this.snackBar.dismiss();
  }
}
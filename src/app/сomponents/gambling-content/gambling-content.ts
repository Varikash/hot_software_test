import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GAMBLING_TEXT } from '../../constants/pages-data';

@Component({
    selector: 'app-gambling-content',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './gambling-content.html'
})

export class GamblingContent {
    gamblingText = GAMBLING_TEXT;
}
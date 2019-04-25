import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {




  deleteGoal(isComplete,index){
  if (isComplete){
    let toDelete=confirm('Are you sure you want to delete ${this.cards[index].name}')
  if(toDelete){
    this.cards.splice(index,1)
  }
  }
}

  constructor() { }

  ngOnInit() {
  }

}


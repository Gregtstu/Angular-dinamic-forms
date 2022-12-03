import {Component, OnInit} from '@angular/core';
import {IUser} from "../shared/interfaces/iuser";
import {ApiService} from "../shared/services/api.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit{

  public users:IUser[];

  constructor(private dialog:MatDialog, private apiserv:ApiService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  openDialog(user:IUser){
    this.dialog.open(DialogComponent, {
      width:'80%',
      data: user
    }).afterClosed().subscribe(val => {
      if (val === 'update') this.getUsers();
    });
  }

  getUsers():void{
    this.apiserv.getAll()
      .subscribe({
        next:(res) => {
          this.users = res;
        },
        error: (err) => {
          alert('В БД нет данных. Добавьте свою анкету')
        }
      })
  }

  delete(user: any) {
    this.apiserv.delete(user.id)
      .subscribe({
        next: (res) => {
          alert('Пользователь успешно удален!');
          this.getUsers();
        },
        error: (er) => {
          alert('При удалении пользователя возникла ошибка!');
        }
      })
  }
}

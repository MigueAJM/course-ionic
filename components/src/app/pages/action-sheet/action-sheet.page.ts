import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  result: string = '';
  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() { }

  showActionSheet() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      backdropDismiss: false,
      subHeader: 'Example subheader',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          cssClass: 'button-remove',
          data: {
            action: 'delete',
          },
          handler: () => console.log('Delete clicked')
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
          handler: () => console.log('Share clicked')
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => console.log('Cancel clicked')
        },
      ],
    });
    actionSheet.present();
    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
}

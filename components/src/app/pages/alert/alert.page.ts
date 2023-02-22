import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  showAlert() {
    this.presentAlert()
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async presentAlertForm() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'nickname',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
        {
          name: 'date',
          type: 'date',
          min: '1997-01-01',
          max: '2100-01-01'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            console.log(data);
          },
        },
      ]
    });

    await alert.present();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Scripts, ScriptService } from '../script.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  checkoutID: string = '';
  testurl = 'https://eu-test.oppwa.com/';

  constructor(
    private httpClient: HttpClient,
    private scriptService: ScriptService,
  ) { }

  ngOnInit(): void {
    this.makeRequest();
  }

  get scriptSource(): string {
    return `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.checkoutID}`;
  }

  private makeRequest(): void {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer OGFjN2E0Yzg4NDllYTUyNDAxODRhMDhhZDQ2NzAxYzR8R2o3aGRLdFBDRg==', 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('entityId', '8ac7a4c8849ea5240184a08bb16701c8');
    body.set('amount', '0.50');
    body.set('currency', 'USD');
    body.set('paymentType', 'DB');

    this.httpClient.post(`${this.testurl}v1/checkouts`, body.toString(), { headers }).subscribe((out: any) => {
      this.checkoutID = out.id;
      this.scriptService.setScripts([
        { name: 'gapple', src: this.scriptSource } as Scripts
      ]);
      this.scriptService.loadScript('gapple');
    })
  }

}

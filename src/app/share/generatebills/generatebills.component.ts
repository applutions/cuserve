import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ShareService } from '../../providers/share.service';
import { constants } from '../../constants';
import { MessageService } from 'primeng/api';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-generatebills',
  templateUrl: './generatebills.component.html',
  styleUrls: ['./generatebills.component.scss']
})
export class GeneratebillsComponent implements OnInit {
  billdata: any = {
    items: [],
    subtotal: 0
  }
  billform: any;
  cartitems: any = {};
  customerlist: any;
  viewonly: Boolean;
  @Input() data: any;
  @Output() generatebillmodaldispay = new EventEmitter;
  constructor(private shareService: ShareService,
    private messageService: MessageService) { }


  ngOnInit() {
    console.log(this.data)
    this.data ? (this.billdata = this.data, this.viewonly = true) : null;

    this.shareService.getData(constants.getcustomer).subscribe(res => {
      let customer = res['customer'];
      this.customerlist = [{ label: 'Select Customer', value: null }];
      customer.forEach((element, index) => {
        this.customerlist = [...this.customerlist, { label: element.name, value: element._id }]

      });
      console.log(this.customerlist)
    })
  }

  generatebill({ value }) {
    this.additems();
    this.billdata.total = this.billdata.subtotal + (this.billdata.tax / 100) * this.billdata.subtotal;

    this.billdata.billId = Math.floor(Math.random() * 90000) + 10000;
    this.shareService.postData(constants.bills, this.billdata).subscribe(res => {
      this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: res['message'] });
      this.close();   
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
      this.close()
    
    });
  }


 
  additems() {
    this.billdata.items = [...this.billdata.items, this.cartitems];
    this.cartitems = {};
  }

  close() {
    this.generatebillmodaldispay.emit(false);
  }



  getsubtotal(items) {
    if (items.valid) {
      this.billdata.subtotal = this.billdata.subtotal + (items.value.calls * items.value.cost);

    }
  }

  captureScreen() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 1000;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('cuserve.pdf'); // Generated PDF   
    });
  }

}

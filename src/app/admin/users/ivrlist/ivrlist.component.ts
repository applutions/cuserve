import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../providers/share.service';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'admin-ivrlist',
  templateUrl: './ivrlist.component.html',
  styleUrls: ['./ivrlist.component.scss']
})
export class IvrlistComponent implements OnInit {
  cuserveJson: any = {};
  edittype: boolean;
  register: any = {};
  userId: any;
  datasource: any;
  cols: any
  totalRecords: any = 10;
  activepagination: number = 0;
  jsondatastring: any; 


  callogdata: any;
  jsondata: any;
  constructor(
    private route: ActivatedRoute,
    private shareService: ShareService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userid'];
      this.userId ? (this.edittype = true, this.getuserDetail()) : null;
    });


    this.cols = [
      { field: 'ivrname', header: 'IVR Name' },
      { field: 'createdAt', header: 'Created At' },
      { field: 'createdby.name', header: 'Created By' },
      { field: 'approved', header: 'Status' }
    ];
    localStorage.getItem('activeivrlistpagination') ? this.activepagination =  JSON.parse(localStorage.getItem('activeivrlistpagination')): null;

  }

  pagechange(ev){ 
    localStorage.setItem('activeivrlistpagination' , ev.first)
  }
  getuserDetail() {
    this.shareService.getData(constants.getcustomer + this.userId).subscribe((res) => {
      this.register = res['data'][0];
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });

    this.shareService.getData(constants.getivr + 'getbyuser/' + this.userId).subscribe((res) => {
      console.log(res['ivr'])
      this.datasource = res['ivr'];
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });

  }

  deleteivr(data, i) {
    this.confirmationService.confirm({
      message: 'Are you sure want to delete?',
      accept: () => {
        this.shareService.delete(constants.getivr + data._id).subscribe(res => {
          this.getuserDetail();
          
          this.messageService.add({ severity: 'sucess', summary: 'Deleted Sucessfully', detail: res['message'] });
        })
      }
    });

  }

  viewcalllogs(data) {
    console.log(data.twilionumber)
    let input = {
      twilionumber: data.twilionumber
    }
    this.shareService.postData(constants.getcalllog, input).subscribe(res => {

      this.callogdata = res['calls'];
    })
  }

  


  //modify child nodes
  filterNode(node: object, Index?: number, parent?: object) {
    let numSeconds: number;
    let count: number;
     
	console.log(node); 
	console.log(Index); 
	console.log(parent); 
    //#keyCode
    let keyCode = parent && parent['keyCode'] ? parent['keyCode'] : this.register['defaultKeyCode'];
    if (Index > -1) {
      if(keyCode.split(",").length == 1){
		Index = Index + 1;
        keyCode = keyCode + ',' + Index;  
	  }
	  else{
	  Index = Index + 1;
      keyCode = keyCode + ',,,' + Index;
	  }
    }

    //#numSeconds
    /* if (parent && parent['count'] && parent['count'] % 2 === 0) {
      numSeconds = 8 + parent['count'];
      count = 2 + parent['count'];
    } else {
      numSeconds = 8;
      count = 2;
    } */
	
	//new num sconds
	numSeconds=(keyCode.split(",").length - 1)*2;
	
	
	
    //console.log(node);
    node['data'] = {
      "action": node['label'] || 'No Data',
      "company": this.register['companyname'],
      "keyCode": keyCode,
      "hasInputs": "false",
      "numSeconds": numSeconds
    }
        
	
    //#delete
    delete node['id'];
    delete node['label'];
    delete node['type'];
    delete node['twilioId'];
    delete node['styleClass'];
    delete node['expanded'];
    delete node['nodeType'];

    //#recall children node
    if (node['children'] && node['children'].length) {

      //remove split node
      let splitIndex = -1;
      let splitChildren = [];
      for (let j = 0; j < node['children'].length; j++) {
        let child = node['children'][j];
        
        if (child.type === 'split') {
          splitChildren = child.children;
          splitIndex = j;
        }
      }
	  
      if (splitIndex > -1) {
        node['children'].splice(splitIndex, 1);
        //node['children'] = node['children'].concat(splitChildren);
        node['children'] = splitChildren;
      }
      let filter = node['children'].filter((obj) => {
        if (obj && obj !== null) {
          return obj;
        }
      });
      node['children'] = filter;

      for (let i = 0; i < node['children'].length; i++) {
        let child = node['children'][i];
        
        if(child.nodeType === 'timeout') {
          //remove (No Input) node
          delete node['children'][i];
        } else {
          if (keyCode === undefined) {
            this.filterNode(child, i);
          } else {
            let parent = {
              keyCode: keyCode,
              count: count
            }
            this.filterNode(child, i, parent);
          }
        }
      }
    }
  }

  //outer function
  generateCuserveJson(node: object,twilioassignednumber:string) { 
    if (this.register && this.register['companyname']) {
      this.register['defaultKeyCode'] = twilioassignednumber + '';
      //#delete trigger node - not required
      delete node['id'];
      delete node['label'];
      delete node['type'];
      delete node['twilioId'];
      delete node['styleClass'];
      delete node['expanded'];

      node['data'] = {
        "action": node['data'].message || node['data'].options,
        "company": this.register['companyname'],
        /* "keyCode": this.register['companyivrnumber'], */
        "keyCode": twilioassignednumber,
        "hasInputs": "false",
        "numSeconds": 0
      }
	  
	 

      if (node['children'].length > 0) {
        // call initial start node
        this.filterNode(node['children'][0], undefined, this.register['defaultKeyCode']);
      }
    } else {
      return this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please configure company IVR number and company name' });
    }
    
    console.log(node);
	 /* remove first gather*/
	     var gatherinput_children=node['children'][0]["children"];
		
	    node['children'].splice(0, 1);
        node['children'] = gatherinput_children;
        		
	  /* remove first gather*/	
    return node;
  }

  copyjson(data: object, type: string,twilioassignednumber:string) {

    if (type === 'twilio') {
      //this.jsondata = JSON.parse(data['ivrjson']);
	  	  console.log(JSON.parse(data['ivrjson']));
	  this.jsondatastring = JSON.parse(data['ivrjson']);
	 
	  let main_child=[];
	  for(let i=1;i<this.jsondatastring.states.length;i++){
		  		 		  
		  if(i==1){
			  this.jsondatastring.states[i].properties.offset.x=50;
			  this.jsondatastring.states[i].properties.offset.y=150;
		  }
		  /* else{
			  this.jsondatastring.states[i].properties.offset.x=50*i;
			  this.jsondatastring.states[i].properties.offset.y=150*i*3;
		  } */
		  for(let j=0;j<this.jsondatastring.states[i].transitions.length;j++){
			  let node_count=1;
			  let child_widget=[]; 
			  if(this.jsondatastring.states[i].transitions[j].next!=null){				 
				  child_widget.push(i,j);
			  }
			  main_child[this.jsondatastring.states[i].transitions[j].next]=(child_widget);  
		  }   
		 }
	  
	   for(let i=1;i<this.jsondatastring.states.length;i++){
		 
		  if(i!=1){ console.log(main_child[this.jsondatastring.states[i].sid]);
			  if(main_child[this.jsondatastring.states[i].sid]){ 
				  let xax=main_child[this.jsondatastring.states[i].sid][1];
				 
				  let yax=main_child[this.jsondatastring.states[i].sid][0];
				  if(xax==0){
					  xax=-2*2;
				  }
				 /*  else if(xax==1){
					  xax=-2*3;
				  } */ 
				  else{
					  xax=main_child[this.jsondatastring.states[i].sid][1]*2;
				  }
				  if(yax==0){
					  yax=2*1.5;
				  }
				 /*  else if(yax==1){
					  yax=2*1.5;
				  } */
				  else{
					  yax=main_child[this.jsondatastring.states[i].sid][0]*1.5;
				  }
				  
					   this.jsondatastring.states[i].properties.offset.x=150*xax;
			           this.jsondatastring.states[i].properties.offset.y=150*yax;
				  
			  }
		  }
		  
		  
		  
		   
	  }  
    this.jsondata = this.jsondatastring; 
    this.jsondatastring = JSON.stringify(this.jsondata);
    
    }

    //generate cu-serve-tree
    if (type === 'cuserve') {
      this.cuserveJson = JSON.parse(data['orginaljson']);
      this.jsondata = this.generateCuserveJson(this.cuserveJson[0],twilioassignednumber);
      this.jsondatastring = JSON.stringify(this.jsondata);
    }
    document.body.classList.add("modal-open");
  
  }

  closemodal(){
    this.jsondata = null;
    document.body.classList.remove("modal-open");
  }

  copied(ev){  
  this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'JSON is Copied to Clipboard' });
  }

  uploadtocompanycuserve(data) {
    //generate cu-serve-tree
    this.cuserveJson = JSON.parse(data.orginaljson);
    let jsondata = this.generateCuserveJson(this.cuserveJson[0],data.assignednumber); 
    let payload = {
      company: data.createdby.companyname,
      name: data.ivrname,
      tree: jsondata,
      populateCheckpoints: true
    } 

    this.shareService.postData(constants.addIvr, payload).subscribe(res => {
      console.log(res)
    })
  }


  uploadivrtocuserve(data){
    console.log(data)
    let payload = {
      name: data.createdby.companyname,  
      ivrName: data.ivrname,
      baseKeyCode: data.assignednumber,
      displayName: data.createdby.companyname.replace(/\s+/g, '-').toLowerCase(),
      logoUrl: data.createdby.companylogo, 
      category: data.createdby.category,
      customerCare: data.assignednumber    
    }
    data.createdby.tagline ? payload['tagline'] = data.createdby.tagline: null; 

    this.shareService.postData( constants.addcompany , payload).subscribe(res => { 
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Company detail uploaded sucessfully' });
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });
  }

  
}